import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = ['index.html', 'audi.html', 'admin.html', 'app.js', 'audi-experience.js', 'admin.js', 'site-ui.js', 'server.js', 'taste.css'];
const references = new Set();
for (const file of files) {
  const text = fs.readFileSync(path.join(root, file), 'utf8');
  if (file.endsWith('.js')) execFileSync(process.execPath, ['--check', path.join(root, file)]);
  for (const match of text.matchAll(/assets\/[\w./-]+\.(?:jpg|png|webp|mp4|woff)/g)) references.add(match[0]);
  for (const match of text.matchAll(/ROOT\s*\+\s*["']([\w-]+\.jpg)/g)) references.add('assets/audi-s5/' + match[1]);
  if (file.endsWith('.html')) {
    for (const match of text.matchAll(/(?:src|href)=["']([^"'#?]+)(?:\?[^"']*)?["']/g)) {
      const url = match[1];
      if (!/^(?:https?:|data:|\.\/$)/.test(url)) references.add(url);
    }
  }
}
const missing = [...references].filter(file => !fs.existsSync(path.join(root, file)));
if (missing.length) throw new Error('Missing local resources: ' + missing.join(', '));
for (const resource of references) {
  if (!/\.(?:jpg|mp4)$/.test(resource)) continue;
  const bytes = fs.readFileSync(path.join(root, resource));
  if (!bytes.length) throw new Error('Empty media file: ' + resource);
  if (resource.endsWith('.jpg') && (bytes[0] !== 255 || bytes[1] !== 216 || bytes.at(-2) !== 255 || bytes.at(-1) !== 217)) {
    throw new Error('Invalid JPEG file: ' + resource);
  }
}
console.log(`PASS: JavaScript syntax and ${references.size} local resource references.`);
