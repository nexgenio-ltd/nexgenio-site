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
import { baseNav, trainingNav, trainingNavFr } from "../partials/nav.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const TRAINING_PATHS = new Set([
  "training/index.html",
  "self/index.html",
  "live/index.html",
  "training/iso-27001-lead-implementer.html",
  "training/nis2-lead-implementer.html",
  "training/dora-lead-manager.html",
  "training/iso-42001-lead-implementer.html",
  "training/nis2-foundation.html",
  "training/dora-foundation.html",
  "training/iso-22301-lead-implementer.html",
  "training/iso-27701-lead-implementer.html",
  "training/iso-31000-risk-manager.html",
  "training/caim.html",
  "training/isa-iec-62443-lead-implementer.html",
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
  "self/isa-iec-62443-lead-implementer.html",
  "training/fr/index.html",
  "training/fr/iso-27701-lead-implementer.html",
  "training/fr/iso-27001-lead-implementer.html",
  "training/fr/iso-27001-lead-auditor.html",
  "training/fr/iso-27001-foundation.html",
  "training/fr/gdpr-foundation.html",
  "training/fr/gdpr-cdpo.html",
  "training/fr/ebios-risk-manager.html",
]);

// A language subdirectory is listed explicitly, because the walk below is not
// recursive. Without its entry a translated page ships with no nav, no consent
// banner and therefore no analytics.
const DIRS = ["apex", "self", "training", "training/fr", "live", "legal"];

// Language of a page, from its path. Drives which nav variant it receives.
const langOf = (relPath) => (relPath.startsWith("training/fr/") ? "fr" : "en");
// Match either <!-- NAV -->...<!-- /NAV --> (re-run) or bare <header>...</header> (first run)
const NAV_RE = /<!-- NAV -->[\s\S]*?<!-- \/NAV -->|<header>[\s\S]*?<\/header>/;

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
    const lang = langOf(relPath);
    const nav = isTraining ? (lang === "fr" ? trainingNavFr : trainingNav) : baseNav;

    let html = readFileSync(filePath, "utf8");
    if (!NAV_RE.test(html)) {
      console.log(`  — skip: ${relPath} (no <header> found)`);
      continue;
    }

    html = html.replace(NAV_RE, nav);
    writeFileSync(filePath, html);
    count++;
    console.log(`  ${isTraining ? "T" : "✓"} ${relPath}`);
  }
}

console.log(`\nNav injected into ${count} pages.`);
