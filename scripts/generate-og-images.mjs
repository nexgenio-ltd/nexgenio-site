#!/usr/bin/env node
/**
 * OG Image Generator — renders 1200x630 PNGs for each course in data/courses.json.
 * Uses Playwright to screenshot an HTML template.
 *
 * Usage:
 *   node scripts/generate-og-images.mjs            # generates into og-images/
 *   node scripts/generate-og-images.mjs --force     # regenerate even if unchanged
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_FILE = join(ROOT, 'data', 'courses.json');
const OUT_DIR = join(ROOT, 'og-images');
const HASH_FILE = join(OUT_DIR, '.og-hash');

const force = process.argv.includes('--force');

// --- Change detection ---
const templateSrc = readFileSync(fileURLToPath(import.meta.url), 'utf8');
const dataSrc = readFileSync(DATA_FILE, 'utf8');
const currentHash = createHash('sha256').update(templateSrc + dataSrc).digest('hex');

mkdirSync(OUT_DIR, { recursive: true });

if (!force && existsSync(HASH_FILE)) {
  const prevHash = readFileSync(HASH_FILE, 'utf8').trim();
  if (prevHash === currentHash) {
    console.log('OG images: no changes detected in template or data — skipping generation.');
    process.exit(0);
  }
}

const courses = JSON.parse(dataSrc);

function buildHtml(course) {
  const dates = course.dates.map(d => `<div class="date">${d}</div>`).join('');
  const promoHtml = course.promoLabel
    ? `<div class="promo-badge">${course.promoLabel}</div>`
    : '';

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 630px;
    background: #fff;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    padding: 48px 56px 48px;
    position: relative;
    overflow: hidden;
  }

  /* Top row: logo + promo badge */
  .top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
  }
  .logo img { height: 72px; width: auto; }

  .promo-badge {
    background: #f6911b;
    color: #fff;
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 10px 28px;
    border-radius: 6px;
  }

  /* Course name */
  .course-name {
    font-size: 54px;
    font-weight: bold;
    color: #215675;
    line-height: 1.15;
    margin-bottom: 16px;
  }

  /* Format line */
  .format-line {
    font-size: 26px;
    color: #666;
    font-weight: 600;
    margin-bottom: 16px;
  }

  /* Dates */
  .dates {
    display: flex;
    gap: 20px;
  }
  .date {
    font-size: 24px;
    color: #215675;
    font-weight: 700;
    background: #e6eef3;
    padding: 10px 24px;
    border-radius: 6px;
  }

  /* Bottom row: price left, badge right */
  .bottom-row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: auto;
  }
  .price-line {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
  .price {
    font-size: 48px;
    font-weight: bold;
    color: #f6911b;
  }
  .price-suffix {
    font-size: 24px;
    color: #666;
    font-weight: 600;
  }
  .badge img {
    width: 130px;
    height: 130px;
    object-fit: contain;
  }
</style>
</head>
<body>
  <div class="top-row">
    <div class="logo">
      <img src="file://${join(ROOT, 'tokens', 'logo.jpg')}" alt="NexGenio">
    </div>
    ${promoHtml}
  </div>
  <div class="course-name">${course.name}</div>
  <div class="format-line">${course.format === 'live-online' ? 'Live-Online' : course.format}, ${course.duration}</div>
  <div class="dates">${dates}</div>
  <div class="bottom-row">
    <div class="price-line">
      <span class="price">&euro;${course.price}</span>
      <span class="price-suffix">per seat</span>
    </div>
    <div class="badge">
      <img src="${course.badge}" alt="Credential badge">
    </div>
  </div>
</body>
</html>`;
}

console.log(`OG images: generating ${courses.length} image(s)...`);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 });

for (const course of courses) {
  const html = buildHtml(course);
  const tmpHtml = join(OUT_DIR, `${course.slug}.html`);
  writeFileSync(tmpHtml, html);

  await page.goto(`file://${tmpHtml}`, { waitUntil: 'networkidle' });
  const outPath = join(OUT_DIR, `${course.slug}.png`);
  await page.screenshot({ path: outPath, type: 'png', clip: { x: 0, y: 0, width: 1200, height: 630 } });
  console.log(`  -> ${outPath}`);

  // Clean up temp HTML
  const { unlinkSync } = await import('node:fs');
  unlinkSync(tmpHtml);
}

await browser.close();

// Write hash for change detection
writeFileSync(HASH_FILE, currentHash);
console.log('OG images: done.');
