#!/usr/bin/env node
/**
 * Static blog generator — fetches articles from Strapi and produces
 * blog/index.html, blog/{slug}.html, blog/sitemap.xml, blog/feed.xml
 */
import { writeFileSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { Marked } from "marked";
import { baseNav } from "../partials/nav.mjs";

const STRAPI_URL = process.env.STRAPI_URL || "https://nexgenio.com/cms";
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;
const SITE_URL = "https://nexgenio.com";
const BLOG_URL = `${SITE_URL}/blog`;
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "";
const OUT = join(process.cwd(), "blog");

const marked = new Marked();

// ── Fetch articles from Strapi ──────────────────────────────────────
async function fetchArticles() {
  const url = `${STRAPI_URL}/api/articles?populate=*&sort=publishedDate:desc&pagination[pageSize]=100&status=published`;
  const headers = { "Content-Type": "application/json" };
  if (STRAPI_TOKEN) headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`Strapi API ${res.status}: ${await res.text()}`);
  const json = await res.json();
  return json.data.map((item) => {
    const a = item;
    return {
      id: a.id,
      title: a.title,
      slug: a.slug,
      body: a.body,
      excerpt: a.excerpt || "",
      publishedDate: a.publishedDate || a.publishedAt,
      metaTitle: a.metaTitle || a.title,
      metaDescription: a.metaDescription || a.excerpt || "",
      updatedAt: a.updatedAt,
      featuredImage: a.featuredImageUrl
        || (a.featuredImage?.url
          ? a.featuredImage.url.startsWith("http")
            ? a.featuredImage.url
            : `${STRAPI_URL}${a.featuredImage.url}`
          : null),
      ogImage: a.ogImageUrl || null,
    };
  });
}

// ── Shared HTML fragments ───────────────────────────────────────────
const orgJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexGenio LTD",
  url: SITE_URL,
  logo: "https://assets.nexgenio.com/brand/logo.png",
  address: { "@type": "PostalAddress", streetAddress: "36 St Dminika Street", addressLocality: "Victoria, Gozo", postalCode: "VCT 9030", addressCountry: "MT" },
  vatID: "MT25941925",
  taxID: "C 88842",
  sameAs: ["https://www.linkedin.com/company/nexgenio"],
});

function htmlHead(title, description, extra = "") {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)} &mdash; NexGenio</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="index, follow">
  <link rel="stylesheet" href="/tokens/tokens.css">
  <link rel="alternate" type="application/rss+xml" title="NexGenio Blog" href="/blog/feed.xml">
  ${extra}
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{font-family:Arial,Helvetica,sans-serif;color:#333;background:#fff;line-height:1.65}

    header{background:#fff;border-bottom:2px solid var(--tl);position:sticky;top:0;z-index:100;box-shadow:0 1px 12px rgba(33,86,117,.06)}
    .hi{max-width:1140px;margin:0 auto;padding:0 32px;display:flex;align-items:center;justify-content:space-between;height:var(--nav-h,92px)}
    .brand{display:flex;align-items:center;gap:20px;text-decoration:none}
    .brand img{width:var(--logo-w,230px);height:auto;display:block}
    .brand-divider{width:1px;height:36px;background:#e0e8ed}
    .brand-sub{font-size:var(--sub-fs,16px);color:var(--lg);line-height:1.35}
    .brand-sub strong{display:block;font-size:var(--tag-fs,17px);color:var(--t)}
    nav{display:flex;gap:32px}
    nav a{color:var(--t);text-decoration:none;font-size:var(--nav-fs,18px);font-weight:600;letter-spacing:.2px}
    nav a:hover{color:var(--o)}

    .hero{background:linear-gradient(150deg,#162f40 0%,var(--t) 55%,var(--tm) 100%);padding:64px 32px 56px;text-align:center}
    .hero h1{font-size:clamp(26px,3.5vw,44px);font-weight:bold;color:#fff;line-height:1.2;margin-bottom:16px}
    .hero p{font-size:17px;color:rgba(255,255,255,.85);max-width:640px;margin:0 auto;line-height:1.7}
    .hero .article-date{font-size:14px;color:rgba(255,255,255,.6);margin-top:12px}

    .inn{max-width:1140px;margin:0 auto}
    section{padding:64px 32px}
    section.alt{background:var(--bg)}
    .sl{font-size:11px;font-weight:700;letter-spacing:2.5px;color:var(--o);text-transform:uppercase;margin-bottom:8px}
    .st{font-size:clamp(20px,2.5vw,30px);font-weight:bold;color:var(--t);margin-bottom:14px;line-height:1.2}

    .article-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px}
    .article-card{background:#fff;border-radius:8px;border:2px solid var(--t);box-shadow:0 2px 12px rgba(33,86,117,.06);padding:24px;text-decoration:none;color:inherit;transition:box-shadow .2s,transform .2s;display:flex;flex-direction:column}
    .article-card:hover{box-shadow:0 6px 24px rgba(33,86,117,.14);transform:translateY(-2px)}
    .article-card h3{font-size:17px;font-weight:700;color:var(--t);margin-bottom:8px;line-height:1.3}
    .article-card p{font-size:14px;color:#555;line-height:1.6;margin:0;flex:1}
    .article-card .card-date{font-size:12px;color:var(--lg);margin-bottom:8px}
    .article-card .view-link{font-size:13px;font-weight:600;color:var(--o);margin-top:12px;display:block}
    .article-card:hover .view-link{text-decoration:underline}
    .card-img{background:#fff;text-align:center;padding:16px;margin:-24px -24px 16px;border-radius:6px 6px 0 0;border-bottom:1px solid var(--tl)}
    .card-img img{max-height:80px;max-width:200px;height:auto;object-fit:contain}

    .featured-img{max-width:780px;margin:0 auto;padding:32px 0 0}
    .featured-img img{width:100%;height:auto;aspect-ratio:1200/630;object-fit:cover;border-radius:6px}

    .article-content{max-width:780px;margin:0 auto;font-size:16px;line-height:1.85;color:#333}
    .article-content h2{font-size:22px;font-weight:bold;color:var(--t);margin:40px 0 16px;padding-bottom:8px;border-bottom:2px solid var(--o)}
    .article-content h3{font-size:18px;font-weight:bold;color:var(--t);margin:32px 0 12px}
    .article-content p{margin-bottom:20px}
    .article-content ul,.article-content ol{background:#f8f9fb;border-left:4px solid var(--t);border-radius:6px;padding:20px 20px 20px 36px;margin-bottom:20px}
    .article-content li{margin-bottom:8px}
    .article-content strong{color:var(--t)}
    .article-content blockquote{border-left:4px solid var(--o);padding:16px 24px;margin:24px 0;background:#fff8f0;border-radius:4px;font-style:italic;color:#555}
    .article-content a{color:var(--t);font-weight:600;text-decoration:none}
    .article-content a:hover{color:var(--o)}
    .article-content img{max-width:100%;height:auto;border-radius:6px;margin:24px 0}
    .article-content hr{border:none;border-top:2px solid var(--o);margin:40px 0}

    footer{background:var(--t);border-top:3px solid var(--o)}
    .footer-inner{max-width:1140px;margin:0 auto;padding:36px 32px 20px}
    .footer-top{display:flex;justify-content:space-between;flex-wrap:wrap;gap:32px;margin-bottom:28px;align-items:flex-start}
    .footer-brand{display:flex;align-items:center;gap:16px}
    .footer-brand-text .fn{font-size:14px;font-weight:bold;color:#fff}
    .footer-brand-text .ft{font-size:11px;color:rgba(255,255,255,.45)}
    .footer-cols{display:flex;gap:48px;flex-wrap:wrap}
    .footer-col h5{font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--o);margin-bottom:10px}
    .footer-col a{display:block;font-size:13px;color:rgba(255,255,255,.65);text-decoration:none;margin-bottom:7px}
    .footer-col a:hover{color:#fff}
    .footer-bottom{border-top:1px solid rgba(255,255,255,.1);padding-top:18px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px}
    .footer-bottom p{font-size:12px;color:rgba(255,255,255,.35)}
    .footer-bottom a{font-size:12px;color:rgba(255,255,255,.35);text-decoration:none;margin-left:14px}
    .footer-bottom a:hover{color:rgba(255,255,255,.8)}

    @media(max-width:900px){nav{display:none}}
    @media(max-width:520px){section{padding:40px 20px}.hero{padding:40px 20px 36px}.hi{padding:0 20px}.article-grid{grid-template-columns:1fr}}
  </style>
</head>`;
}

const header = `\n${baseNav}`;

const footer = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand"><div class="footer-brand-text"><div class="fn">NexGenio LTD</div><div class="ft">Compliance by design.</div></div></div>
      <div class="footer-cols">
        <div class="footer-col"><h5>Training</h5><a href="/self/index.html">Self-paced courses</a><a href="/live/index.html">Live schedule</a></div>
        <div class="footer-col"><h5>Company</h5><a href="/#about">About</a><a href="/#contact">Contact</a></div>
        <div class="footer-col"><h5>Legal</h5><a href="/legal/terms.html">Terms of Sale</a><a href="/legal/privacy.html">Privacy Policy</a></div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} NexGenio LTD. All rights reserved.</p>
    </div>
  </div>
</footer>`;

// ── Helpers ─────────────────────────────────────────────────────────
function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fmtDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function isoDate(iso) {
  if (!iso) return "";
  return new Date(iso).toISOString();
}

function rssDate(iso) {
  if (!iso) return "";
  return new Date(iso).toUTCString();
}

// ── Listing page ────────────────────────────────────────────────────
function buildIndex(articles) {
  const cards = articles
    .map(
      (a) => `
      <a href="/blog/${esc(a.slug)}.html" class="article-card">${a.featuredImage ? `\n        <div class="card-img"><img src="${esc(a.featuredImage)}" alt="${esc(a.title)}"></div>` : ""}
        <div class="card-date">${fmtDate(a.publishedDate)}</div>
        <h3>${esc(a.title)}</h3>
        <p>${esc(a.excerpt)}</p>
        <span class="view-link">Read article &rarr;</span>
      </a>`
    )
    .join("\n");

  return `${htmlHead("Blog", "Insights and updates from NexGenio — compliance, cybersecurity, and AI governance.")}
<body>
${header}

<div class="hero">
  <h1>Blog</h1>
  <p>Insights and updates on compliance, cybersecurity, and AI governance.</p>
</div>

<section>
  <div class="inn">
    <div class="sl">Latest</div>
    <div class="st">Articles</div>
    <div class="article-grid">
${cards}
    </div>
  </div>
</section>

${footer}

<script type="application/ld+json">${orgJsonLd}</script>
</body>
</html>`;
}

// ── Article page ────────────────────────────────────────────────────
function buildArticle(a) {
  const bodyHtml = marked.parse(a.body || "");
  const articleJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.metaDescription,
    datePublished: isoDate(a.publishedDate),
    dateModified: isoDate(a.updatedAt),
    author: { "@type": "Organization", name: "NexGenio LTD" },
    publisher: {
      "@type": "Organization",
      name: "NexGenio LTD",
      logo: {
        "@type": "ImageObject",
        url: "https://assets.nexgenio.com/brand/logo.png",
      },
    },
    mainEntityOfPage: `${BLOG_URL}/${a.slug}.html`,
    ...(a.featuredImage ? { image: a.featuredImage } : {}),
  });

  const featuredImgHtml = a.featuredImage
    ? `\n<div class="featured-img"><img src="${esc(a.featuredImage)}" alt="${esc(a.title)}"></div>`
    : "";

  // og:image: use ogImage (social version with text) if set, fall back to featuredImage,
  // or derive from featuredImage by swapping -article- → -social- in filename
  let ogImg = a.ogImage || a.featuredImage || null;
  if (!a.ogImage && a.featuredImage) {
    ogImg = a.featuredImage.replace(/-article-(og|insta-portrait|insta-square)\./, '-social-$1.');
  }
  const ogMeta = ogImg
    ? `<meta property="og:image" content="${esc(ogImg)}">\n  <meta property="og:title" content="${esc(a.metaTitle)}">\n  <meta property="og:description" content="${esc(a.metaDescription)}">\n  <meta property="og:type" content="article">`
    : "";

  return `${htmlHead(a.metaTitle, a.metaDescription, ogMeta)}
<body>
${header}

<div class="hero">
  <h1>${esc(a.title)}</h1>
  <div class="article-date">${fmtDate(a.publishedDate)}</div>
</div>
${featuredImgHtml}
<section>
  <div class="inn">
    <div class="article-content">
${bodyHtml}
    </div>
  </div>
</section>

${footer}

<script type="application/ld+json">${articleJsonLd}</script>
<script type="application/ld+json">${orgJsonLd}</script>
</body>
</html>`;
}

// ── Sitemap ─────────────────────────────────────────────────────────
function buildSitemap(articles) {
  const urls = [
    `  <url><loc>${BLOG_URL}/</loc><priority>0.8</priority></url>`,
    ...articles.map(
      (a) =>
        `  <url><loc>${BLOG_URL}/${a.slug}.html</loc><lastmod>${isoDate(a.updatedAt || a.publishedDate)}</lastmod></url>`
    ),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
}

// ── RSS Feed ────────────────────────────────────────────────────────
function buildRss(articles) {
  const items = articles
    .map(
      (a) => `    <item>
      <title>${esc(a.title)}</title>
      <link>${BLOG_URL}/${a.slug}.html</link>
      <description>${esc(a.excerpt)}</description>
      <pubDate>${rssDate(a.publishedDate)}</pubDate>
      <guid isPermaLink="true">${BLOG_URL}/${a.slug}.html</guid>
    </item>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NexGenio Blog</title>
    <link>${BLOG_URL}/</link>
    <description>Insights and updates on compliance, cybersecurity, and AI governance from NexGenio.</description>
    <language>en</language>
    <atom:link href="${BLOG_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;
}

// ── Main ────────────────────────────────────────────────────────────
async function main() {
  console.log(`Fetching articles from ${STRAPI_URL}...`);
  const articles = await fetchArticles();
  console.log(`Found ${articles.length} published article(s).`);

  // Clean and recreate output dir
  rmSync(OUT, { recursive: true, force: true });
  mkdirSync(OUT, { recursive: true });

  // Index page
  writeFileSync(join(OUT, "index.html"), buildIndex(articles));
  console.log("  blog/index.html");

  // Article pages
  for (const a of articles) {
    writeFileSync(join(OUT, `${a.slug}.html`), buildArticle(a));
    console.log(`  blog/${a.slug}.html`);
  }

  // Sitemap
  writeFileSync(join(OUT, "sitemap.xml"), buildSitemap(articles));
  console.log("  blog/sitemap.xml");

  // RSS feed
  writeFileSync(join(OUT, "feed.xml"), buildRss(articles));
  console.log("  blog/feed.xml");

  // IndexNow key file
  if (INDEXNOW_KEY) {
    writeFileSync(join(OUT, `${INDEXNOW_KEY}.txt`), INDEXNOW_KEY);
    console.log(`  blog/${INDEXNOW_KEY}.txt`);
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
