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

const navAlignCss = `<style id="nav-align">header{padding:0 32px}.hi{padding-left:0;padding-right:0}.brand .pecb-mark{height:35px;width:auto;display:inline;object-fit:contain}@media(max-width:520px){header{padding:0 20px}}</style>`;

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
      <a href="/#contact">Contact</a>
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
      <img src="https://assets.nexgenio.com/PECB/logo/PNG/PECB_Logo_RedWhite_Tagline@2x.png" alt="PECB — Where Excellence Meets Recognition" class="pecb-mark" height="35">
    </a>
    <nav>
      <a href="/">Home</a>
      <a href="/training/index.html">Training</a>
      <a href="/blog/">Blog</a>
      <a href="/#contact">Contact</a>
    </nav>
  </div>
</header>
<!-- /NAV -->`;
