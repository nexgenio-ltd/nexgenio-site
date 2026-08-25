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

// Determine font size based on title length
function getTitleStyle(title) {
  const len = title.length;
  if (len <= 30) return { fontSize: '52px', lineHeight: '1.15' };
  if (len <= 60) return { fontSize: '44px', lineHeight: '1.2' };
  if (len <= 90) return { fontSize: '36px', lineHeight: '1.25' };
  return { fontSize: '30px', lineHeight: '1.3' };
}

const ts = getTitleStyle(title);

// Build the HTML template — white background, brand-colour text/accents only
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

  .motif {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    pointer-events: none;
    overflow: hidden;
  }
  .motif svg {
    position: absolute;
    top: 0; right: 0;
    width: 500px;
    height: 630px;
    opacity: 0.06;
  }

  .accent-top {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 6px;
    background: #f6911b;
  }

  .content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 72px 48px;
    height: 100%;
  }

  .kicker {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: #f6911b;
    margin-bottom: 16px;
  }

  .title {
    font-size: ${ts.fontSize};
    font-weight: bold;
    line-height: ${ts.lineHeight};
    color: #215675;
    max-width: 900px;
    margin-bottom: 0;
  }

  .rule {
    width: 80px;
    height: 3px;
    background: #215675;
    margin-top: 28px;
    border-radius: 2px;
  }

  .logo-area {
    position: absolute;
    bottom: 36px;
    left: 72px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .logo-area img {
    height: 40px;
    width: auto;
  }
  .logo-area .url {
    font-size: 15px;
    color: #999;
    font-weight: 400;
    letter-spacing: 0.3px;
  }

  .accent-bottom {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: #215675;
  }
</style>
</head>
<body>
  <div class="motif">
    <svg viewBox="0 0 500 630" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="420" cy="120" r="4" fill="#215675"/>
      <circle cx="350" cy="200" r="6" fill="#215675"/>
      <circle cx="460" cy="280" r="3" fill="#215675"/>
      <circle cx="380" cy="380" r="5" fill="#215675"/>
      <circle cx="440" cy="480" r="4" fill="#215675"/>
      <circle cx="300" cy="320" r="3" fill="#215675"/>
      <circle cx="480" cy="180" r="3" fill="#215675"/>
      <circle cx="320" cy="500" r="5" fill="#215675"/>
      <line x1="420" y1="120" x2="350" y2="200" stroke="#215675" stroke-width="1.5"/>
      <line x1="350" y1="200" x2="460" y2="280" stroke="#215675" stroke-width="1.5"/>
      <line x1="460" y1="280" x2="380" y2="380" stroke="#215675" stroke-width="1.5"/>
      <line x1="380" y1="380" x2="440" y2="480" stroke="#215675" stroke-width="1.5"/>
      <line x1="350" y1="200" x2="300" y2="320" stroke="#215675" stroke-width="1.5"/>
      <line x1="300" y1="320" x2="380" y2="380" stroke="#215675" stroke-width="1.5"/>
      <line x1="420" y1="120" x2="480" y2="180" stroke="#215675" stroke-width="1.5"/>
      <line x1="480" y1="180" x2="460" y2="280" stroke="#215675" stroke-width="1.5"/>
      <line x1="440" y1="480" x2="320" y2="500" stroke="#215675" stroke-width="1.5"/>
      <circle cx="420" cy="120" r="2" fill="#f6911b"/>
      <circle cx="460" cy="280" r="2" fill="#3c9a00"/>
      <circle cx="440" cy="480" r="2" fill="#f6911b"/>
      <circle cx="300" cy="320" r="2" fill="#3c9a00"/>
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
