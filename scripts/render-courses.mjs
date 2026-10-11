#!/usr/bin/env node
/**
 * Renders live training data from data/courses.json into marker regions:
 *
 *   <!-- COURSES:SCHEDULE -->          cross-course session list (live/, training/, apex/)
 *   <!-- COURSES:BOOKING:<slug> -->    cohort cards on a single course page
 *   <!-- COURSES:INSTANCES:<slug> -->  schema.org CourseInstance array for that course
 *
 * data/courses.json is the single source for course name, badge, format,
 * duration, language, trainer credential, price and cohort dates.
 *
 * Usage: node scripts/render-courses.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const courses = JSON.parse(readFileSync(join(ROOT, 'data', 'courses.json'), 'utf8'));

const TARGETS = [
  'live/index.html',
  'training/index.html',
  'apex/index.html',
  ...courses.map(c => `training/${c.slug}.html`),
];

const DAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

function dateRange(start, end) {
  const a = new Date(start + 'T00:00:00Z');
  const b = new Date(end + 'T00:00:00Z');
  const am = MONTH[a.getUTCMonth()];
  const bm = MONTH[b.getUTCMonth()];
  const left = am === bm
    ? `${DAY[a.getUTCDay()]} ${a.getUTCDate()}`
    : `${DAY[a.getUTCDay()]} ${a.getUTCDate()} ${am}`;
  return `${left} &mdash; ${DAY[b.getUTCDay()]} ${b.getUTCDate()} ${bm} ${b.getUTCFullYear()}`;
}

function modeLabel(format) {
  return format === 'live-online' ? 'Live-Online' : format;
}

const pad = n => String(n).padStart(2, '0');

/**
 * Schedule-row date. The year sits on its own line with the day range below it
 * as 02.11. &ndash; 06.11., so every row holds the same shape whether or not the
 * cohort crosses a month boundary, and two rows compare at a glance.
 */
function schedWhen(start, end) {
  const a = new Date(start + 'T00:00:00Z');
  const b = new Date(end + 'T00:00:00Z');
  const days = `${pad(a.getUTCDate())}.${pad(a.getUTCMonth() + 1)}. &ndash; ` +
    `${pad(b.getUTCDate())}.${pad(b.getUTCMonth() + 1)}.`;
  return `<span class="when-mon">${b.getUTCFullYear()}</span><span class="when-day">${days}</span>`;
}

/** Launch-price stamp. The year comes off the cohort, so nothing needs maintaining. */
function stamp(course, cohort) {
  if (!course.promoLabel) return '';
  return `<span class="stamp xs" aria-hidden="true"><span class="s1">${course.promoLabel}</span><span class="s2">${cohort.start.slice(0, 4)} only</span></span>`;
}

/** One session row. The CTA goes to Stripe where a link exists, to the course page otherwise. */
function row(course, cohort) {
  const href = cohort.stripeLink || `/training/${course.slug}.html`;
  const cta = cohort.stripeLink ? 'Reserve your seat' : 'View dates and reserve';
  const mark = stamp(course, cohort);
  return `      <div class="sched-row" role="listitem">
        <div class="sched-when">${schedWhen(cohort.start, cohort.end)}</div>
        <img class="sched-badge" src="${course.badge}" alt="PECB ${course.name}">
        <div class="sched-main">
          <h3><a href="/training/${course.slug}.html">${course.name}</a></h3>
          <div class="sched-meta">${modeLabel(course.format)} &middot; ${course.duration} &middot; ${course.language}</div>
          <div class="sched-trainer">${course.trainerCredential}</div>
        </div>
        <div class="sched-price">&euro;${course.price}<span>${course.vatNote}</span>${mark}</div>
        <a class="sched-cta" href="${href}"
           data-course="${course.name}" data-format="${course.format}"
           data-price="${course.priceRaw}" data-date="${cohort.start}">${cta}</a>
      </div>`;
}

/** Group-pricing note. Rendered once under the schedule list on every hub. */
const GROUP_NOTE = `    <p class="sched-group">Companies booking several seats for their team are quoted a bespoke price. Ask at <a href="mailto:contact@nexgenio.com">contact@nexgenio.com</a>.</p>`;

function scheduleHtml() {
  const rows = courses
    .flatMap(c => c.cohorts.map(h => ({ c, h })))
    .sort((x, y) => x.h.start.localeCompare(y.h.start))
    .map(({ c, h }) => row(c, h));

  if (!rows.length) {
    return `      <p class="sched-empty">The next cohort dates are being scheduled. <a href="/training/index.html">Self-paced courses are available now.</a></p>`;
  }
  return `    <div class="sched-list" role="list">\n${rows.join('\n')}\n    </div>\n${GROUP_NOTE}`;
}

const WEEKDAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function longDate(iso) {
  const d = new Date(iso + 'T00:00:00Z');
  return `${WEEKDAY[d.getUTCDay()]} ${d.getUTCDate()} ${MONTH[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/**
 * House date format for a cohort shown on one line: 02.11. – 06.11.2026.
 * Numeric throughout with the year once at the end, so two cohorts compare
 * at a glance without parsing a weekday or a month name.
 */
function numRange(start, end) {
  const a = new Date(start + 'T00:00:00Z');
  const b = new Date(end + 'T00:00:00Z');
  return `${pad(a.getUTCDate())}.${pad(a.getUTCMonth() + 1)}. &ndash; ` +
    `${pad(b.getUTCDate())}.${pad(b.getUTCMonth() + 1)}.${b.getUTCFullYear()}`;
}

/** Cohort card on a course page. */
function bookingCard(course, cohort) {
  const includes = [
    `${modeLabel(course.format)}, ${course.duration}, ${course.language}`,
    `Instructor-led with a ${course.trainerCredential}`,
    course.examNote,
    'Certificate included at no extra cost',
    `${course.cpdCredits} CPD credits`,
    'Free exam retake within 12 months',
  ].filter(Boolean).map(t => `          <li>${t}</li>`).join('\n');

  return `      <div class="tier-card">
        <div class="tier-label">${numRange(cohort.start, cohort.end)}</div>
        <div class="tier-desc">Instructor-led, delivered live-online in real time by a ${course.trainerCredential} across ${course.duration}.</div>
        <img src="${course.badge}" alt="PECB ${course.name}" style="width:72px;height:72px;object-fit:contain;border-radius:4px;margin-bottom:16px">
        <ul class="tier-includes">
${includes}
        </ul>
        <div class="tier-price">
          Price
          <span class="amount">&euro;${course.price}</span>
          <span class="vat-note">${course.vatNote}</span>
          <span class="vat-note">Several seats for one organization are quoted at a bespoke price.</span>
          ${stamp(course, cohort)}
        </div>
        <div class="tier-cta">
          <a href="${cohort.stripeLink}" class="btn" data-course="${course.name}" data-format="${course.format}" data-price="${course.priceRaw}" data-date="${cohort.start}">Reserve your seat</a>
        </div>
      </div>`;
}

function bookingHtml(course) {
  if (!course.cohorts.length) {
    return `      <p class="sched-empty">The next cohort dates are being scheduled. <a href="/training/index.html">Self-paced courses are available now.</a></p>`;
  }
  return `    <div class="tiers">\n${course.cohorts.map(h => bookingCard(course, h)).join('\n\n')}\n    </div>`;
}

/**
 * Rewrites hasCourseInstance inside the page's schema.org Course block.
 * Parses the JSON-LD rather than using HTML markers, which would be invalid
 * inside a <script type="application/ld+json"> element.
 */
function rewriteCourseInstances(src, course) {
  const re = /<script type="application\/ld\+json">(\{[^\n]*?"@type":"Course"[^\n]*?\})<\/script>/;
  const m = src.match(re);
  if (!m) return null;
  const ld = JSON.parse(m[1]);
  ld.hasCourseInstance = courseInstances(course);
  return src.replace(re, `<script type="application/ld+json">${JSON.stringify(ld)}</script>`);
}

/** schema.org CourseInstance array — endDate comes from the source, never typed by hand. */
function courseInstances(course) {
  const days = parseInt(course.duration, 10);
  return course.cohorts.map(h => ({
    '@type': 'CourseInstance',
    courseMode: 'online',
    courseWorkload: `P${days}D`,
    startDate: h.start,
    endDate: h.end,
    name: dateRange(h.start, h.end).replace(/&mdash;/g, '—'),
    location: { '@type': 'VirtualLocation', url: `https://nexgenio.com/training/${course.slug}.html` },
    offers: {
      '@type': 'Offer', price: course.priceRaw, priceCurrency: course.currency,
      availability: 'https://schema.org/InStock',
    },
  }));
}

/** Replaces the body of every <!-- TAG --> ... <!-- /TAG --> region found in src. */
function replaceRegion(src, tag, body) {
  const open = `<!-- ${tag} -->`;
  const close = `<!-- /${tag} -->`;
  const i = src.indexOf(open);
  const j = src.indexOf(close);
  if (i === -1 || j === -1) return null;
  return src.slice(0, i + open.length) + body + src.slice(j);
}

let written = 0;
for (const rel of TARGETS) {
  const path = join(ROOT, rel);
  let src;
  try {
    src = readFileSync(path, 'utf8');
  } catch {
    console.log(`  skip ${rel} — file does not exist`);
    continue;
  }
  const before = src;
  const course = courses.find(c => rel === `training/${c.slug}.html`);
  const tag = course ? `COURSES:BOOKING:${course.slug}` : 'COURSES:SCHEDULE';
  const body = '\n' + (course ? bookingHtml(course) : scheduleHtml()) + '\n';

  let hit = false;
  const next = replaceRegion(src, tag, body);
  if (next !== null) { src = next; hit = true; }
  if (course && course.cohorts.length) {
    const when = replaceRegion(src, `COURSES:WHEN:${course.slug}`,
      numRange(course.cohorts[0].start, course.cohorts[0].end));
    if (when !== null) { src = when; hit = true; }
  }
  if (course) {
    const ld = rewriteCourseInstances(src, course);
    if (ld !== null) { src = ld; hit = true; }
    else console.log(`  note ${rel} — no schema.org Course block found`);
  }
  if (!hit) {
    console.log(`  skip ${rel} — no COURSES region`);
    continue;
  }
  if (src !== before) {
    writeFileSync(path, src);
    written++;
    console.log(`  wrote ${rel}`);
  } else {
    console.log(`  unchanged ${rel}`);
  }
}

const cohortCount = courses.reduce((n, c) => n + c.cohorts.length, 0);
console.log(`Schedule: ${courses.length} course(s), ${cohortCount} cohort(s), ${written} file(s) written.`);
