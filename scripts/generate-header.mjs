#!/usr/bin/env node
/**
 * NexGenio Blog Header Image Generator
 *
 * Usage:
 *   node scripts/generate-header.mjs "Post Title Here" [--kicker "Category"] [--out filename.png]
 *
 * Outputs a 1200x630 branded PNG with white background.
 * Requires: playwright (npm install playwright)
 */

import { chromium } from 'playwright';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Parse args
const args = process.argv.slice(2);
let title = '';
let kicker = '';
let outFile = '';

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--kicker' && args[i + 1]) { kicker = args[++i]; }
  else if (args[i] === '--out' && args[i + 1]) { outFile = args[++i]; }
  else if (!title) { title = args[i]; }
}

if (!title) {
  console.error('Usage: node scripts/generate-header.mjs "Post Title" [--kicker "Category"] [--out file.png]');
  process.exit(1);
}

if (!outFile) {
  outFile = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.png';
}

// Embed logo as base64
const logoPath = resolve(__dirname, 'blog-header-logo.png');
const logoB64 = readFileSync(logoPath).toString('base64');
const logoDataUri = `data:image/png;base64,${logoB64}`;

// Determine font size based on title length — sized up for confident fill
function getTitleStyle(title) {
  const len = title.length;
  if (len <= 30) return { fontSize: '64px', lineHeight: '1.1' };
  if (len <= 60) return { fontSize: '52px', lineHeight: '1.15' };
  if (len <= 90) return { fontSize: '42px', lineHeight: '1.2' };
  return { fontSize: '36px', lineHeight: '1.25' };
}

const ts = getTitleStyle(title);

// Build the HTML template — white background, bold network motif, brand-colour text/accents
const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 630px;
    background: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    overflow: hidden;
    position: relative;
  }

  /* Network motif — right third, full opacity, real graphic */
  .motif {
    position: absolute;
    top: 0; right: 0; bottom: 0;
    width: 480px;
    pointer-events: none;
    overflow: hidden;
  }
  .motif svg {
    position: absolute;
    top: 0; right: 0;
    width: 480px;
    height: 630px;
  }

  /* Orange accent bar at top */
  .accent-top {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 6px;
    background: #f6911b;
    z-index: 2;
  }

  /* Content — left two-thirds */
  .content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 48px 60px 48px 64px;
    height: 100%;
    max-width: 740px;
  }

  .kicker {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #f6911b;
    margin-bottom: 18px;
  }

  .title {
    font-size: ${ts.fontSize};
    font-weight: bold;
    line-height: ${ts.lineHeight};
    color: #215675;
    margin-bottom: 0;
  }

  .rule {
    width: 80px;
    height: 4px;
    background: #f6911b;
    margin-top: 28px;
    border-radius: 2px;
  }

  /* Logo bottom-left */
  .logo-area {
    position: absolute;
    bottom: 32px;
    left: 64px;
    display: flex;
    align-items: center;
    gap: 16px;
    z-index: 2;
  }
  .logo-area img {
    height: 36px;
    width: auto;
  }
  .logo-area .url {
    font-size: 14px;
    color: #999;
    font-weight: 400;
    letter-spacing: 0.3px;
  }

  /* Teal bottom border */
  .accent-bottom {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: #215675;
    z-index: 2;
  }
</style>
</head>
<body>
  <!-- Network/node motif — full opacity, true brand colours, occupies right third -->
  <div class="motif">
    <svg viewBox="0 0 480 630" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Connection lines — teal, confident stroke widths -->
      <line x1="80" y1="60" x2="200" y2="160" stroke="#215675" stroke-width="2"/>
      <line x1="200" y1="160" x2="140" y2="310" stroke="#215675" stroke-width="2"/>
      <line x1="200" y1="160" x2="360" y2="120" stroke="#215675" stroke-width="2"/>
      <line x1="360" y1="120" x2="420" y2="240" stroke="#215675" stroke-width="1.5"/>
      <line x1="420" y1="240" x2="300" y2="300" stroke="#215675" stroke-width="2"/>
      <line x1="300" y1="300" x2="140" y2="310" stroke="#215675" stroke-width="1.5"/>
      <line x1="300" y1="300" x2="380" y2="420" stroke="#215675" stroke-width="2"/>
      <line x1="140" y1="310" x2="60" y2="440" stroke="#215675" stroke-width="1.5"/>
      <line x1="60" y1="440" x2="180" y2="500" stroke="#215675" stroke-width="2"/>
      <line x1="180" y1="500" x2="380" y2="420" stroke="#215675" stroke-width="1.5"/>
      <line x1="380" y1="420" x2="440" y2="540" stroke="#215675" stroke-width="2"/>
      <line x1="180" y1="500" x2="280" y2="580" stroke="#215675" stroke-width="1.5"/>
      <line x1="440" y1="540" x2="280" y2="580" stroke="#215675" stroke-width="2"/>
      <line x1="200" y1="160" x2="300" y2="300" stroke="#215675" stroke-width="1.5"/>
      <line x1="360" y1="120" x2="300" y2="300" stroke="#215675" stroke-width="1.5"/>
      <line x1="60" y1="440" x2="380" y2="420" stroke="#215675" stroke-width="1"/>
      <!-- Secondary finer connections -->
      <line x1="80" y1="60" x2="360" y2="120" stroke="#215675" stroke-width="1" opacity="0.3"/>
      <line x1="420" y1="240" x2="380" y2="420" stroke="#215675" stroke-width="1" opacity="0.3"/>
      <line x1="140" y1="310" x2="180" y2="500" stroke="#215675" stroke-width="1" opacity="0.3"/>

      <!-- Primary nodes — teal, varying sizes for depth -->
      <circle cx="200" cy="160" r="14" fill="#215675"/>
      <circle cx="300" cy="300" r="18" fill="#215675"/>
      <circle cx="380" cy="420" r="12" fill="#215675"/>
      <circle cx="180" cy="500" r="14" fill="#215675"/>

      <!-- Secondary nodes — teal, smaller -->
      <circle cx="80" cy="60" r="8" fill="#215675"/>
      <circle cx="360" cy="120" r="10" fill="#215675"/>
      <circle cx="420" cy="240" r="9" fill="#215675"/>
      <circle cx="140" cy="310" r="10" fill="#215675"/>
      <circle cx="60" cy="440" r="8" fill="#215675"/>
      <circle cx="440" cy="540" r="10" fill="#215675"/>
      <circle cx="280" cy="580" r="8" fill="#215675"/>

      <!-- Accent nodes — orange and green highlights on key intersections -->
      <circle cx="200" cy="160" r="7" fill="#f6911b"/>
      <circle cx="300" cy="300" r="9" fill="#f6911b"/>
      <circle cx="380" cy="420" r="6" fill="#3c9a00"/>
      <circle cx="180" cy="500" r="7" fill="#3c9a00"/>
      <circle cx="360" cy="120" r="5" fill="#f6911b"/>
      <circle cx="440" cy="540" r="5" fill="#3c9a00"/>
      <circle cx="420" cy="240" r="4.5" fill="#f6911b"/>
      <circle cx="60" cy="440" r="4" fill="#3c9a00"/>
    </svg>
  </div>

  <div class="accent-top"></div>

  <div class="content">
    ${kicker ? `<div class="kicker">${escapeHtml(kicker)}</div>` : ''}
    <h1 class="title">${escapeHtml(title)}</h1>
    <div class="rule"></div>
  </div>

  <div class="logo-area">
    <img src="${logoDataUri}" alt="NexGenio">
    <span class="url">nexgenio.com</span>
  </div>

  <div class="accent-bottom"></div>
</body>
</html>`;

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Render
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.screenshot({ path: resolve(process.cwd(), outFile), type: 'png' });
await browser.close();

console.log(`Generated: ${outFile}`);
