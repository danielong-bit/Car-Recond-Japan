const assert = require('node:assert/strict');
const {spawn} = require('node:child_process');
let chromium;
try { ({chromium} = require('playwright')); }
catch { ({chromium} = require(process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES + '/playwright')); }
(async () => {
 const server=spawn(process.execPath,['server.js'],{cwd:require('node:path').resolve(__dirname,'..'),env:{...process.env,PORT:'3102'}});
 await new Promise((resolve,reject)=>{server.stdout.on('data',d=>{if(String(d).includes('Server running'))resolve()});server.on('error',reject)});
 const browser=await chromium.launch({headless:true,executablePath:process.env.BROWSER_EXECUTABLE_PATH,args:['--no-sandbox']});
 try {
  const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,reducedMotion:'reduce'});
  const page=await context.newPage();
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const width of [320,360,390,430,768]) {
   await page.setViewportSize({width,height:844});await page.goto('http://127.0.0.1:3102/audi.html');await page.waitForSelector('[data-feature-id="engine"]');
   assert.equal(await page.locator('[data-copy-link]').count(),0,'Copy link must be removed');
   assert.equal(await page.locator('#hotspots').isVisible(),false,'Phone photo must not have overlapping hotspot controls');
   assert.equal(await page.locator('.experience-topline').isVisible(),false,'Photo labels must not obscure the car');
   assert.equal(await page.locator('#detailStatus').isVisible(),false,'Photo status must not obscure the car');
   assert.equal(await page.locator('#tourPanel').isVisible(),false,'Overview does not need an instruction/specification panel');
   const photo=await page.locator('#mediaPlane').boundingBox();const first=await page.locator('[data-feature-id="engine"]').boundingBox();
   assert.ok(first.y>=photo.y+photo.height,'Main controls immediately follow photo');
   assert.ok(first.y+first.height<844,'Feature buttons visible on phone arrival');
   const buttons=page.locator('[data-feature-shortcuts] button');
   for(let i=0;i<await buttons.count();i++) {const r=await buttons.nth(i).boundingBox();assert.ok(r.height>=56&&r.width>=100,'Feature targets must be large enough for a finger');}
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'No horizontal overflow');
  }
  await page.setViewportSize({width:390,height:844});
  for(const id of ['engine','interior','boot','wheel','dashboard','seats','audio','climate']) {
   await page.locator('[data-feature-id="'+id+'"]').tap();
   assert.equal(await page.locator('[data-feature-id="'+id+'"]').getAttribute('aria-pressed'),'true');
   assert.ok(await page.locator('#mediaPlane').evaluate(el=>el.getBoundingClientRect().top>=-1 && el.getBoundingClientRect().bottom<=innerHeight+1),'Selecting a part keeps the photo in view');
   assert.equal(await page.locator('#tourPanel').isVisible(),true);
   await page.locator('[data-viewer-back]').tap();
   await page.waitForFunction(()=>!document.getElementById('mediaPlane').classList.contains('is-video-active')&&!document.getElementById('mediaPlane').classList.contains('is-image-active'));
   assert.equal(await page.locator('#tourPanel').isVisible(),false);
  }
  await page.setViewportSize({width:844,height:390});
  assert.equal(await page.locator('#hotspots').isVisible(),false,'Landscape phone also has a clean photo');
  await page.locator('[data-feature-id="wheel"]').tap();
  assert.ok(await page.locator('#mediaPlane').evaluate(el=>el.getBoundingClientRect().top>=-1 && el.getBoundingClientRect().bottom<=innerHeight+1),'Landscape detail remains fully visible');
  assert.deepEqual(errors,[]);
  console.log('PASS: phone touch targets, clear photos, nearby controls, all eight parts, return and five phone/tablet widths');
 } finally {await browser.close();server.kill()}
})().catch(e=>{console.error(e);process.exit(1)});
