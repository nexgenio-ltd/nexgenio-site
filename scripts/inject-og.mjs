#!/usr/bin/env node
/**
 * Inject page-specific Open Graph and Twitter Card meta tags into all
 * static HTML pages, derived from each page's existing <title>,
 * <meta name="description">, and <link rel="canonical">.
 *
 * Run: node scripts/inject-og.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIRS = ["apex", "self", "training", "live", "legal"];

const OG_IMAGE = "https://assets.nexgenio.com/brand/logo.png";
const SITE_NAME = "NexGenio";

// Marker used to detect re-runs
const OG_START = "<!-- OG -->";
const OG_END = "<!-- /OG -->";

let count = 0;

for (const dir of DIRS) {
  const dirPath = join(ROOT, dir);
  let files;
  try {
    files = readdirSync(dirPath).filter((f) => f.endsWith(".html"));
  } catch {
    continue;
  }

  for (const file of files) {
    const filePath = join(dirPath, file);
    let html = readFileSync(filePath, "utf8");

    // Extract existing metadata
    const titleMatch = html.match(/<title>([^<]+)<\/title>/);
    const descMatch = html.match(
      /<meta\s+name="description"\s+content="([^"]*)"/
    );
    const canonMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/);

    if (!titleMatch) {
      console.log(`  — skip: ${dir}/${file} (no <title>)`);
      continue;
    }

    // Decode HTML entities for OG content attribute
    const rawTitle = titleMatch[1]
      .replace(/&mdash;/g, "—")
      .replace(/&amp;/g, "&")
      .replace(/&rsquo;/g, "'")
      .replace(/&ldquo;/g, '"')
      .replace(/&rdquo;/g, '"');
    const desc = descMatch ? descMatch[1] : "";
    const url = canonMatch ? canonMatch[1] : "";

    // Build the OG + Twitter block
    const ogBlock = [
      OG_START,
      `<meta property="og:type" content="website">`,
      `<meta property="og:site_name" content="${SITE_NAME}">`,
      `<meta property="og:title" content="${rawTitle}">`,
      desc && `<meta property="og:description" content="${desc}">`,
      `<meta property="og:image" content="${OG_IMAGE}">`,
      url && `<meta property="og:url" content="${url}">`,
      `<meta name="twitter:card" content="summary_large_image">`,
      `<meta name="twitter:title" content="${rawTitle}">`,
      desc && `<meta name="twitter:description" content="${desc}">`,
      `<meta name="twitter:image" content="${OG_IMAGE}">`,
      OG_END,
    ]
      .filter(Boolean)
      .join("\n  ");

    // Remove previous OG block if re-running
    const ogRe = new RegExp(
      `\\s*${OG_START.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?${OG_END.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`,
      ""
    );
    html = html.replace(ogRe, "");

    // Insert after the last <meta> or <link> in <head>, before </head> or <style>
    // Find the canonical link and insert after it, or after last meta in head
    const insertPoint = canonMatch
      ? html.indexOf(canonMatch[0]) + canonMatch[0].length
      : html.indexOf("</head>");

    if (insertPoint === -1) {
      console.log(`  — skip: ${dir}/${file} (no insertion point)`);
      continue;
    }

    html =
      html.slice(0, insertPoint) +
      "\n  " +
      ogBlock +
      html.slice(insertPoint);

    writeFileSync(filePath, html);
    count++;
    console.log(`  ✓ ${dir}/${file}`);
  }
}

console.log(`\nOG/Twitter tags injected into ${count} pages.`);
