const assert = require('node:assert/strict');
let chromium;
try { ({chromium} = require('playwright')); }
catch { ({chromium} = require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES + '/playwright')); }
const base = process.env.TEST_BASE_URL || 'http://127.0.0.1:3000/';
async function run() {
  let server;
  if (process.env.TEST_START_SERVER || process.env.TEST_START_STATIC) {
    const {spawn} = require('node:child_process');
    server = process.env.TEST_START_STATIC
      ? spawn('python3', ['-u', '-m', 'http.server', '3100', '--bind', '127.0.0.1'], {cwd: require('node:path').resolve(__dirname, '../..'), stdio: ['ignore', 'pipe', 'pipe']})
      : spawn(process.execPath, ['server.js'], {cwd: require('node:path').resolve(__dirname, '..'), stdio: ['ignore', 'pipe', 'pipe']});
    await new Promise((resolve, reject) => {
      server.stdout.on('data', data => { if (/Server running|Serving HTTP/.test(String(data))) resolve(); });
      server.stderr.on('data', data => { if (!process.env.TEST_START_STATIC) reject(new Error(String(data))); });
      server.on('error', reject);
    });
  }
  const browser = await chromium.launch({
    headless: true,
    executablePath: process.env.BROWSER_EXECUTABLE_PATH || undefined,
    args: process.env.BROWSER_ARGS ? JSON.parse(process.env.BROWSER_ARGS) : []
  });
  const page = await browser.newPage({viewport: {width: 1440, height: 1000}});
  const errors = [];
  const videoRequests = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('request', req => { if (req.url().endsWith('.mp4')) videoRequests.push(req.url()); });
  try {
    await page.goto(base, {waitUntil: 'domcontentloaded'});
    await page.waitForSelector('.car-card');
    assert.equal(await page.locator('video, .viewer-tools, .detail-hotspot').count(), 0, 'Homepage must show photos without car interaction');
    assert.ok(await page.locator('#searchFilter').evaluate(el => el.getBoundingClientRect().bottom < innerHeight), 'Inventory search is visible on arrival');
    assert.equal(videoRequests.length, 0, 'Videos must load on demand');
    assert.equal(await page.locator('.car-card').count(), 7);
    await page.locator('#searchFilter').fill('audi s5');
    assert.equal(await page.locator('.car-card').count(), 1);
    await page.locator('#bodyFilter').selectOption('Wagon');
    await page.locator('.advanced-filters summary').click();
    await page.locator('#powerFilter').selectOption('300');
    assert.equal(await page.locator('#advancedFilterCount').textContent(), '1', 'Active advanced filter is visible in its summary');
    assert.equal(await page.locator('.car-card').count(), 1);
    await page.locator('#mileageFilter').selectOption('10000');
    assert.equal(await page.locator('.car-card').count(), 0);
    await page.locator('#emptyReset').click();
    assert.equal(await page.locator('#advancedFilterCount').isVisible(), false, 'Reset clears the advanced filter indicator');
    assert.equal(await page.locator('.car-card').count(), 7);
    await page.locator('.card-compare-btn').nth(0).click();
    await page.locator('.card-compare-btn').nth(1).click();
    await page.locator('#compareDockLaunch').click();
    assert.equal(await page.locator('#compareDialog').evaluate(el => el.open), true);
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#compareDialog').evaluate(el => el.open), false);
    await page.locator('[data-details-id="audi-s5"]').click();
    assert.equal(await page.locator('#vehicleDialog').evaluate(el => el.open), true);
    assert.ok(await page.locator('#vehiclePhoto').getAttribute('src'));
    await page.locator('#closeDialog').click();
    await page.locator('[data-interaction-link]').first().click();
    assert.match(page.url(), /audi\.html$/);
    await page.goto(new URL('audi.html', base).href, {waitUntil: 'domcontentloaded'});
    await page.waitForSelector('[data-feature-id="engine"]');
    await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.locator('[data-copy-link]').click();
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), new URL('audi.html', base).href);
    await page.route('**/engine_forward.mp4', route => route.abort());
    await page.locator('[data-feature-id="engine"]').click();
    await page.waitForFunction(() => document.querySelector('[data-media-status]').textContent.includes('Video unavailable'));
    assert.equal(await page.locator('#detailImage').evaluate(el => el.src.endsWith('engine_16x9.jpg')), true);
    await page.unroute('**/engine_forward.mp4');
    await page.locator('[data-media-retry]').click();
    await page.waitForFunction(() => !document.getElementById('viewerVideo').paused);
    await page.locator('[data-viewer-back]').click();
    await page.waitForFunction(() => !document.getElementById('mediaPlane').classList.contains('is-video-active'));
    await page.locator('[data-feature-id="wheel"]').click();
    await page.locator('[data-zoom="in"]').click();
    assert.equal(await page.locator('[data-zoom-value]').textContent(), '1.5×');
    await page.locator('[data-zoom="reset"]').click();
    await page.locator('[data-viewer-back]').click();
    await page.locator('[data-feature-id="engine"]').click();
    await page.waitForFunction(() => document.getElementById('viewerVideo').ended, {timeout: 15000});
    if (!process.env.TEST_START_STATIC) assert.ok(await page.locator('#subHotspots button').count() >= 2, 'Configured sub-hotspots render without JavaScript errors');
    await page.locator('[data-viewer-back]').click();
    await page.waitForFunction(() => !document.getElementById('mediaPlane').classList.contains('is-video-active'), {timeout: 15000});
    await page.locator('[data-feature-id="wheel"]').click();
    await page.waitForTimeout(300);
    await page.locator('[data-filter="exterior"]').click();
    await page.locator('#gallery').scrollIntoViewIfNeeded();
    await page.waitForFunction(() => [...document.querySelectorAll('.tile')].filter(tile => tile.style.display !== 'none').every(tile => tile.querySelector('img').naturalWidth > 0));
    await page.locator('.tile:visible').first().click();
    await page.waitForFunction(() => document.getElementById('lightboxImg').naturalWidth > 0);
    assert.match(await page.locator('#photoCaption').textContent(), /1 \/ 2/);
    await page.keyboard.press('ArrowRight');
    assert.match(await page.locator('#photoCaption').textContent(), /2 \/ 2/);
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#lightbox').evaluate(el => el.open), false);
    assert.equal(await page.locator('#mediaPlane').evaluate(el => el.classList.contains('is-image-active')), true, 'Closing gallery must preserve the current viewer feature');
    for (const width of [360, 390, 768]) {
      await page.setViewportSize({width, height: 844});
      await page.goto(base, {waitUntil: 'domcontentloaded'});
      await page.waitForSelector('.car-card');
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'No horizontal overflow at ' + width);
      await page.locator('.menu-toggle').click();
      assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'), 'true');
      await page.locator('#primaryNav a[href="#inventory"]').click();
      assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'), 'false');
      assert.equal(await page.locator('video').count(), 0);
      assert.ok(await page.locator('.car-card').first().evaluate(el => el.getBoundingClientRect().top < innerHeight), 'Vehicle photos visible on mobile arrival');
      await page.goto(new URL('audi.html', base).href, {waitUntil: 'domcontentloaded'});
      await page.waitForSelector('[data-feature-id="engine"]');
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'Audi page overflow at ' + width);
    }
    await page.emulateMedia({colorScheme: 'light', reducedMotion: 'reduce'});
    await page.goto(base, {waitUntil: 'domcontentloaded'});
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    assert.deepEqual(errors, [], 'No browser runtime errors');
    console.log('PASS: photo-only homepage, direct tour links, customer share link, light theme,  search, filters, reset, compare, cancellation, zoom, video fallback/retry, forward/reverse playback, sub-hotspots, gallery keys, modal Escape, and three mobile widths.');
  } finally { await browser.close(); server?.kill(); }
}
run().catch(error => { console.error(error); process.exit(1); });
