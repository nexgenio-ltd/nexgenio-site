/**
 * Shared nav — single source of truth for the site-wide navigation bar.
 * Edit this file to change the nav across all pages (static + blog).
 *
 * Two variants:
 *   baseNav     — all pages (apex, blog, legal, 404)
 *   trainingNav — training-section pages (training/, self/, live/)
 *
 * Alignment fix: the nav-align <style> block moves horizontal padding
 * from .hi to header so the logo's left edge aligns with .inn content.
 */

const navAlignCss = `<style id="nav-align">header{padding:0 32px}.hi{padding-left:0;padding-right:0}@media(max-width:520px){header{padding:0 20px}}</style>`;

export const baseNav = `<!-- NAV -->${navAlignCss}
<header>
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
</header>
<!-- /NAV -->`;

export const trainingNav = `<!-- NAV -->${navAlignCss}
<header>
  <div class="hi">
    <a href="/" class="brand">
      <img src="/tokens/logo.jpg" alt="NexGenio" width="230">
      <div class="brand-divider"></div>
      <div class="brand-sub"><strong>Training</strong><span class="pecb-label">PECB Certification <img src="https://assets.nexgenio.com/PECB/pecb-authorized-partner.png" alt="PECB Authorized Partner" class="pecb-mark" width="20" height="24"></span></div>
    </a>
    <nav>
      <a href="/">Home</a>
      <a href="/training/index.html">Training</a>
      <a href="/blog/">Blog</a>
    </nav>
  </div>
</header>
<!-- /NAV -->`;
