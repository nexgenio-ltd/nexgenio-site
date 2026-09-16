#!/usr/bin/env node
/**
 * Sets featuredImageUrl on a published Strapi article, pointing at the
 * header images produced by generate-header.mjs and uploaded to the assets CDN.
 * Run via .github/workflows/generate-post-header.yml
 */

const STRAPI_URL = process.env.STRAPI_URL || "https://nexgenio.com/cms";
const TOKEN = process.env.STRAPI_WRITE_TOKEN;
const SLUG = process.env.SLUG;

if (!TOKEN) { console.error("STRAPI_WRITE_TOKEN not set"); process.exit(1); }
if (!SLUG) { console.error("SLUG not set"); process.exit(1); }

const ASSETS = "https://assets.nexgenio.com/blog/headers";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${TOKEN}`
};

const findUrl = `${STRAPI_URL}/api/articles?filters[slug][$eq]=${encodeURIComponent(SLUG)}&status=draft`;
const findRes = await fetch(findUrl, { headers });
if (!findRes.ok) {
  console.error(`Lookup failed: HTTP ${findRes.status} ${await findRes.text()}`);
  process.exit(1);
}

const found = await findRes.json();
const article = found.data?.[0];
if (!article) {
  console.error(`No article found for slug "${SLUG}"`);
  process.exit(1);
}

const id = article.documentId || article.id;
// build-blog.mjs derives the og:image by swapping "-article-" for "-social-"
// in this filename, so only the article variant needs to be set here.
const payload = {
  data: {
    featuredImageUrl: `${ASSETS}/${SLUG}-article-og.png`
  }
};

const putRes = await fetch(`${STRAPI_URL}/api/articles/${id}`, {
  method: "PUT",
  headers,
  body: JSON.stringify(payload)
});

if (!putRes.ok) {
  console.error(`Update failed: HTTP ${putRes.status} ${await putRes.text()}`);
  process.exit(1);
}

console.log(`Attached header image to "${SLUG}" (id=${id})`);
console.log(`  featuredImageUrl: ${payload.data.featuredImageUrl}`);
