#!/usr/bin/env node
/**
 * NexGenio Blog Header Image Generator — Recraft + HTML/CSS frame
 *
 * Usage:
 *   node scripts/generate-header.mjs \
 *     --title "Post Title Here" \
 *     --content "First paragraph or summary of the post..." \
 *     [--kicker "Category"] \
 *     [--out-prefix my-post] \
 *     [--formats og,insta-portrait,insta-square]
 *
 * Environment:
 *   RECRAFT_API_KEY  — required, Recraft API token
 *
 * Outputs per format:
 *   {prefix}-social-{format}.png  — title/kicker baked in (for og:image / social sharing)
 *   {prefix}-article-{format}.png — full-bleed illustration, no text (for inline display)
 *
 * Formats:
 *   - og:             1200x630  (blog / LinkedIn)
 *   - insta-portrait:  1080x1350 (Instagram portrait)
 *   - insta-square:    1080x1080 (Instagram square)
 */

import { chromium } from 'playwright';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ── Config ──────────────────────────────────────────────────────────
const RECRAFT_API_KEY = process.env.RECRAFT_API_KEY;
if (!RECRAFT_API_KEY) {
  console.error('ERROR: RECRAFT_API_KEY environment variable is required');
  process.exit(1);
}

const RECRAFT_BASE = 'https://external.api.recraft.ai/v1';
const BRAND_COLORS = [
  { rgb: [33, 86, 117] },   // navy #215675
  { rgb: [245, 144, 26] },  // orange #F5901A
  { rgb: [60, 154, 0] },    // green #3C9A00
  { rgb: [255, 255, 255] }, // white background
];

const STYLE_CLAUSE = 'Minimal geometric line illustration, abstract and structural. Bold clean strokes, minimum 2px weight. Navy, orange and green line work on pure white background. No text, no words, no letters, no numbers, no photorealism, no people, no stock-photo aesthetic.';

const FORMATS = {
  og:               { w: 1200, h: 630,  recraftSize: '1344x768',  label: 'OG / LinkedIn' },
  'insta-portrait': { w: 1080, h: 1350, recraftSize: '832x1280',  label: 'Instagram portrait' },
  'insta-square':   { w: 1080, h: 1080, recraftSize: '1024x1024', label: 'Instagram square' },
};

// ── Parse args ──────────────────────────────────────────────────────
const args = process.argv.slice(2);
let title = '', content = '', kicker = '', outPrefix = '';
let formatList = Object.keys(FORMATS);

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--title' && args[i + 1]) title = args[++i];
  else if (args[i] === '--content' && args[i + 1]) content = args[++i];
  else if (args[i] === '--kicker' && args[i + 1]) kicker = args[++i];
  else if (args[i] === '--out-prefix' && args[i + 1]) outPrefix = args[++i];
  else if (args[i] === '--formats' && args[i + 1]) formatList = args[++i].split(',');
}

if (!title) {
  console.error('Usage: node scripts/generate-header.mjs --title "Title" --content "Summary..." [--kicker "Cat"] [--out-prefix slug] [--formats og,insta-portrait,insta-square]');
  process.exit(1);
}

if (!outPrefix) {
  outPrefix = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// ── Prompt construction ─────────────────────────────────────────────
function buildIllustrationPrompt(title, content) {
  const source = content || title;
  return `Abstract conceptual illustration representing: ${source}\n\n${STYLE_CLAUSE}`;
}

// ── Recraft API ─────────────────────────────────────────────────────
async function generateIllustration(prompt, size) {
  const body = {
    prompt,
    model: 'recraftv4_1',
    n: 1,
    size,
    response_format: 'url',
    controls: { colors: BRAND_COLORS },
  };

  const res = await fetch(`${RECRAFT_BASE}/images/generations`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RECRAFT_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Recraft API ${res.status}: ${err}`);
  }

  const data = await res.json();
  console.error(`  Recraft: ${data.credits} credits used`);
  return data.data[0].url;
}

async function downloadImage(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

// ── HTML frame templates ────────────────────────────────────────────
const logoPath = resolve(__dirname, 'blog-header-logo.png');
const logoB64 = readFileSync(logoPath).toString('base64');
const logoDataUri = `data:image/png;base64,${logoB64}`;

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function getTitleStyle(title, format) {
  const len = title.length;
  if (format === 'og') {
    if (len <= 30) return { fontSize: '54px', lineHeight: '1.1' };
    if (len <= 60) return { fontSize: '44px', lineHeight: '1.15' };
    if (len <= 90) return { fontSize: '36px', lineHeight: '1.2' };
    return { fontSize: '30px', lineHeight: '1.25' };
  }
  if (format === 'insta-portrait') {
    if (len <= 30) return { fontSize: '56px', lineHeight: '1.1' };
    if (len <= 60) return { fontSize: '46px', lineHeight: '1.15' };
    if (len <= 90) return { fontSize: '38px', lineHeight: '1.2' };
    return { fontSize: '32px', lineHeight: '1.25' };
  }
  // insta-square
  if (len <= 30) return { fontSize: '48px', lineHeight: '1.1' };
  if (len <= 60) return { fontSize: '40px', lineHeight: '1.15' };
  if (len <= 90) return { fontSize: '34px', lineHeight: '1.2' };
  return { fontSize: '28px', lineHeight: '1.25' };
}

// ── Social templates (title/kicker baked in) ────────────────────────

function buildOgSocialHtml(title, kicker, illustrationDataUri) {
  const ts = getTitleStyle(title, 'og');
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
* { margin:0; padding:0; box-sizing:border-box; }
body { width:1200px; height:630px; background:#ffffff; font-family:Arial,Helvetica,sans-serif; overflow:hidden; position:relative; }
.accent-top { position:absolute; top:0; left:0; right:0; height:6px; background:#f6911b; z-index:2; }
.accent-bottom { position:absolute; bottom:0; left:0; right:0; height:3px; background:#215675; z-index:2; }
.content { position:relative; z-index:1; display:flex; flex-direction:column; justify-content:center; padding:48px 56px; height:100%; max-width:620px; }
.kicker { font-size:14px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; color:#f6911b; margin-bottom:16px; }
.title { font-size:${ts.fontSize}; font-weight:bold; line-height:${ts.lineHeight}; color:#215675; }
.rule { width:72px; height:4px; background:#f6911b; margin-top:24px; border-radius:2px; }
.logo-area { position:absolute; bottom:28px; left:56px; display:flex; align-items:center; gap:14px; z-index:2; }
.logo-area img { height:32px; width:auto; }
.logo-area .url { font-size:13px; color:#999; }
.illustration { position:absolute; top:0; right:0; width:580px; height:630px; overflow:hidden; }
.illustration img { width:100%; height:100%; object-fit:cover; }
</style></head><body>
<div class="accent-top"></div>
<div class="content">
  ${kicker ? `<div class="kicker">${escapeHtml(kicker)}</div>` : ''}
  <h1 class="title">${escapeHtml(title)}</h1>
  <div class="rule"></div>
</div>
<div class="illustration"><img src="${illustrationDataUri}"></div>
<div class="logo-area"><img src="${logoDataUri}" alt="NexGenio"><span class="url">nexgenio.com</span></div>
<div class="accent-bottom"></div>
</body></html>`;
}

function buildInstaPortraitSocialHtml(title, kicker, illustrationDataUri) {
  const ts = getTitleStyle(title, 'insta-portrait');
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
* { margin:0; padding:0; box-sizing:border-box; }
body { width:1080px; height:1350px; background:#ffffff; font-family:Arial,Helvetica,sans-serif; overflow:hidden; position:relative; }
.accent-top { position:absolute; top:0; left:0; right:0; height:6px; background:#f6911b; z-index:2; }
.accent-bottom { position:absolute; bottom:0; left:0; right:0; height:3px; background:#215675; z-index:2; }
.safe-zone { position:absolute; top:135px; left:0; width:1080px; height:1080px; display:flex; flex-direction:column; }
.illustration { width:1080px; height:500px; overflow:hidden; flex-shrink:0; }
.illustration img { width:100%; height:100%; object-fit:cover; }
.content { padding:40px 56px 0; flex:1; display:flex; flex-direction:column; justify-content:flex-start; }
.kicker { font-size:14px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; color:#f6911b; margin-bottom:16px; }
.title { font-size:${ts.fontSize}; font-weight:bold; line-height:${ts.lineHeight}; color:#215675; }
.rule { width:72px; height:4px; background:#f6911b; margin-top:24px; border-radius:2px; }
.logo-area { position:absolute; bottom:0; left:56px; padding-bottom:16px; display:flex; align-items:center; gap:14px; }
.logo-area img { height:32px; width:auto; }
.logo-area .url { font-size:13px; color:#999; }
</style></head><body>
<div class="accent-top"></div>
<div class="safe-zone">
  <div class="illustration"><img src="${illustrationDataUri}"></div>
  <div class="content">
    ${kicker ? `<div class="kicker">${escapeHtml(kicker)}</div>` : ''}
    <h1 class="title">${escapeHtml(title)}</h1>
    <div class="rule"></div>
  </div>
  <div class="logo-area"><img src="${logoDataUri}" alt="NexGenio"><span class="url">nexgenio.com</span></div>
</div>
<div class="accent-bottom"></div>
</body></html>`;
}

function buildInstaSquareSocialHtml(title, kicker, illustrationDataUri) {
  const ts = getTitleStyle(title, 'insta-square');
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
* { margin:0; padding:0; box-sizing:border-box; }
body { width:1080px; height:1080px; background:#ffffff; font-family:Arial,Helvetica,sans-serif; overflow:hidden; position:relative; }
.accent-top { position:absolute; top:0; left:0; right:0; height:6px; background:#f6911b; z-index:2; }
.accent-bottom { position:absolute; bottom:0; left:0; right:0; height:3px; background:#215675; z-index:2; }
.illustration { width:1080px; height:540px; overflow:hidden; }
.illustration img { width:100%; height:100%; object-fit:cover; }
.content { padding:40px 52px 36px; }
.kicker { font-size:13px; font-weight:700; letter-spacing:2.5px; text-transform:uppercase; color:#f6911b; margin-bottom:14px; }
.title { font-size:${ts.fontSize}; font-weight:bold; line-height:${ts.lineHeight}; color:#215675; }
.rule { width:64px; height:4px; background:#f6911b; margin-top:20px; border-radius:2px; }
.logo-area { position:absolute; bottom:32px; left:52px; display:flex; align-items:center; gap:14px; z-index:2; }
.logo-area img { height:32px; width:auto; }
.logo-area .url { font-size:13px; color:#999; }
</style></head><body>
<div class="accent-top"></div>
<div class="illustration"><img src="${illustrationDataUri}"></div>
<div class="content">
  ${kicker ? `<div class="kicker">${escapeHtml(kicker)}</div>` : ''}
  <h1 class="title">${escapeHtml(title)}</h1>
  <div class="rule"></div>
</div>
<div class="logo-area"><img src="${logoDataUri}" alt="NexGenio"><span class="url">nexgenio.com</span></div>
<div class="accent-bottom"></div>
</body></html>`;
}

// ── Article templates (full-bleed illustration, no text) ────────────

function buildFullBleedHtml(w, h, illustrationDataUri) {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
* { margin:0; padding:0; box-sizing:border-box; }
body { width:${w}px; height:${h}px; background:#ffffff; font-family:Arial,Helvetica,sans-serif; overflow:hidden; position:relative; }
.illustration { position:absolute; top:0; left:0; width:${w}px; height:${h}px; }
.illustration img { width:100%; height:100%; object-fit:cover; }
.logo-area { position:absolute; bottom:20px; right:24px; display:flex; align-items:center; gap:10px; z-index:2; background:rgba(255,255,255,.85); padding:6px 14px; border-radius:4px; }
.logo-area img { height:26px; width:auto; }
.logo-area .url { font-size:12px; color:#666; font-family:Arial,Helvetica,sans-serif; }
</style></head><body>
<div class="illustration"><img src="${illustrationDataUri}"></div>
<div class="logo-area"><img src="${logoDataUri}" alt="NexGenio"><span class="url">nexgenio.com</span></div>
</body></html>`;
}

const SOCIAL_BUILDERS = {
  og: buildOgSocialHtml,
  'insta-portrait': buildInstaPortraitSocialHtml,
  'insta-square': buildInstaSquareSocialHtml,
};

// ── Main ────────────────────────────────────────────────────────────
async function main() {
  const prompt = buildIllustrationPrompt(title, content);
  console.error(`Prompt: ${prompt.slice(0, 120)}...`);

  // Generate one illustration per format (different aspect ratios)
  const illustrations = {};
  for (const fmt of formatList) {
    const spec = FORMATS[fmt];
    if (!spec) { console.error(`Unknown format: ${fmt}`); continue; }
    console.error(`Generating ${spec.label} illustration (${spec.recraftSize})...`);
    const url = await generateIllustration(prompt, spec.recraftSize);
    const buf = await downloadImage(url);
    illustrations[fmt] = `data:image/png;base64,${buf.toString('base64')}`;
  }

  // Render both social and article variants from each illustration
  const browser = await chromium.launch();

  for (const fmt of formatList) {
    const spec = FORMATS[fmt];
    if (!spec || !illustrations[fmt]) continue;

    // Social variant (title/kicker baked in)
    const socialBuilder = SOCIAL_BUILDERS[fmt];
    const socialHtml = socialBuilder(title, kicker, illustrations[fmt]);
    const socialPage = await browser.newPage({ viewport: { width: spec.w, height: spec.h } });
    await socialPage.setContent(socialHtml, { waitUntil: 'load' });
    const socialFile = `${outPrefix}-social-${fmt}.png`;
    await socialPage.screenshot({ path: resolve(process.cwd(), socialFile), type: 'png' });
    await socialPage.close();
    console.log(socialFile);

    // Article variant (full-bleed, no text)
    const articleHtml = buildFullBleedHtml(spec.w, spec.h, illustrations[fmt]);
    const articlePage = await browser.newPage({ viewport: { width: spec.w, height: spec.h } });
    await articlePage.setContent(articleHtml, { waitUntil: 'load' });
    const articleFile = `${outPrefix}-article-${fmt}.png`;
    await articlePage.screenshot({ path: resolve(process.cwd(), articleFile), type: 'png' });
    await articlePage.close();
    console.log(articleFile);
  }

  await browser.close();

  // Report remaining credits
  const meRes = await fetch(`${RECRAFT_BASE}/users/me`, {
    headers: { 'Authorization': `Bearer ${RECRAFT_API_KEY}` },
  });
  if (meRes.ok) {
    const me = await meRes.json();
    console.error(`Credits remaining: ${me.credits}`);
  }
}

main().catch((err) => { console.error(err); process.exit(1); });
