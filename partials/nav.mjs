/**
 * Shared nav — single source of truth for the site-wide navigation bar.
 * Edit this file to change the nav across all pages (static + blog).
 *
 * Two variants:
 *   baseNav     — all pages (apex, blog, legal, 404)
 *   trainingNav — training-section pages (training/, self/, live/)
 */

export const baseNav = `<header>
  <div class="hi">
    <a href="/" class="brand">
      <img src="/tokens/logo.jpg" alt="NexGenio" width="230">
    </a>
    <nav>
      <a href="/">Home</a>
      <a href="/training/index.html">Training</a>
      <a href="/blog/">Blog</a>
    </nav>
  </div>
</header>`;

export const trainingNav = `<header>
  <div class="hi">
    <a href="/" class="brand">
      <img src="/tokens/logo.jpg" alt="NexGenio" width="230">
      <div class="brand-divider"></div>
      <div class="brand-sub"><strong>Training</strong><span class="pecb-label">PECB Certification <img src="https://assets.nexgenio.com/PECB/logo/SVG/PECB_Logo_RedWhite.svg" alt="PECB" class="pecb-mark"></span></div>
    </a>
    <nav>
      <a href="/">Home</a>
      <a href="/training/index.html">Training</a>
      <a href="/blog/">Blog</a>
    </nav>
  </div>
</header>`;
