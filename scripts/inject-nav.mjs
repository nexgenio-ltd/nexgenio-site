#!/usr/bin/env node
/**
 * Build-time nav injection — replaces <header>...</header> in all static
 * HTML pages with the shared nav partial from partials/nav.mjs.
 *
 * Training-section pages get the training variant (with PECB marker).
 * All other pages get the base variant.
 *
 * Run: node scripts/inject-nav.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { baseNav, trainingNav } from "../partials/nav.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const TRAINING_PATHS = new Set([
  "training/index.html",
  "self/index.html",
  "live/index.html",
  "self/nis2-lead-implementer.html",
  "self/nis2-foundation.html",
  "self/dora-lead-manager.html",
  "self/dora-foundation.html",
  "self/iso-27001-lead-implementer.html",
  "self/iso-42001-lead-implementer.html",
  "self/iso-22301-lead-implementer.html",
  "self/iso-27701-lead-implementer.html",
  "self/iso-31000-risk-manager.html",
  "self/caim.html",
]);

const DIRS = ["apex", "self", "training", "live", "legal"];
const HEADER_RE = /<header>[\s\S]*?<\/header>/;

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
    const relPath = `${dir}/${file}`;
    const filePath = join(dirPath, file);
    const isTraining = TRAINING_PATHS.has(relPath);
    const nav = isTraining ? trainingNav : baseNav;

    let html = readFileSync(filePath, "utf8");
    if (!HEADER_RE.test(html)) {
      console.log(`  — skip: ${relPath} (no <header> found)`);
      continue;
    }

    html = html.replace(HEADER_RE, nav);
    writeFileSync(filePath, html);
    count++;
    console.log(`  ${isTraining ? "T" : "✓"} ${relPath}`);
  }
}

console.log(`\nNav injected into ${count} pages.`);
