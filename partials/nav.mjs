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

const navAlignCss = `<style id="nav-align">header{padding:0 32px}.hi{padding-left:0;padding-right:0}.brand .pecb-mark{height:35px;width:auto;display:inline;object-fit:contain}@media(max-width:520px){header{padding:0 20px}}.hamburger{display:none;background:none;border:none;cursor:pointer;padding:8px;flex-direction:column;justify-content:center;gap:5px;z-index:102}.hamburger span{display:block;width:24px;height:2.5px;background:#215675;border-radius:2px;transition:transform .3s,opacity .3s}.hamburger.open span:nth-child(1){transform:translateY(7.5px) rotate(45deg)}.hamburger.open span:nth-child(2){opacity:0}.hamburger.open span:nth-child(3){transform:translateY(-7.5px) rotate(-45deg)}.mobile-menu{display:none;position:absolute;top:100%;left:0;right:0;background:#fff;border-bottom:2px solid #e6eef3;box-shadow:0 4px 16px rgba(33,86,117,.1);padding:16px 32px;z-index:101}.mobile-menu.open{display:flex;flex-direction:column;gap:0}.mobile-menu a{color:#215675;text-decoration:none;font-size:17px;font-weight:600;padding:14px 0;border-bottom:1px solid #e6eef3}.mobile-menu a:last-child{border-bottom:none}.mobile-menu a:hover,.mobile-menu a:active{color:#f6911b}@media(max-width:900px){.hamburger{display:flex}.brand-divider,.pecb-mark{display:none!important}}@media(max-width:520px){.mobile-menu{padding:12px 20px}}</style>`;

const mobileMenuJs = `<script>(function(){var b=document.querySelector('.hamburger'),m=document.querySelector('.mobile-menu');if(!b||!m)return;b.addEventListener('click',function(e){e.stopPropagation();b.classList.toggle('open');m.classList.toggle('open')});m.addEventListener('click',function(){b.classList.remove('open');m.classList.remove('open')});document.addEventListener('click',function(e){if(!b.contains(e.target)&&!m.contains(e.target)){b.classList.remove('open');m.classList.remove('open')}});})()</script>`;

const cookieConsentBlock = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.css">
<script src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js"></script>
<script>
  CookieConsent.run({
    guiOptions:{
      consentModal:{layout:'box',position:'bottom center'},
      preferencesModal:{layout:'box'}
    },
    categories:{
      necessary:{enabled:true,readOnly:true},
      analytics:{autoClear:{cookies:[{name:/^_ga/},{name:'_gid'}]}},
      marketing:{autoClear:{cookies:[{name:/^_fb/},{name:'_gcl_au'}]}}
    },
    language:{
      default:'en',
      translations:{
        en:{
          consentModal:{
            title:'We value your privacy',
            description:'This website uses cookies to measure site performance and improve your experience. You can choose which categories to allow. For details, see our <a href="/legal/privacy.html">Privacy Policy</a>.',
            acceptAllBtn:'Accept All',
            acceptNecessaryBtn:'Reject All',
            showPreferencesBtn:'Cookie Settings'
          },
          preferencesModal:{
            title:'Cookie Preferences',
            acceptAllBtn:'Accept All',
            acceptNecessaryBtn:'Reject All',
            savePreferencesBtn:'Save Preferences',
            sections:[
              {title:'Cookie Usage',description:'We use cookies to ensure basic site functionality and to improve your experience. You can choose for each category to opt-in or opt-out.'},
              {title:'Necessary',description:'These cookies are essential for the website to function. They cannot be disabled.',linkedCategory:'necessary'},
              {title:'Analytics',description:'Analytics cookies help us understand how visitors interact with the website by collecting and reporting information anonymously. [Specific analytics tools to be confirmed by Director.]',linkedCategory:'analytics'},
              {title:'Marketing',description:'Marketing cookies are used to track visitors across websites to display relevant advertisements. [Specific marketing tools to be confirmed by Director.]',linkedCategory:'marketing'},
              {title:'More information',description:'For questions about our cookie policy, please <a href="/#contact">contact us</a>. You can change your preferences at any time using the Cookie Settings link in the footer.'}
            ]
          }
        }
      }
    }
  });
  document.addEventListener('DOMContentLoaded',function(){var lc=document.querySelector('.footer-col:last-child');if(lc){var a=document.createElement('a');a.href='#';a.textContent='Cookie Settings';a.setAttribute('data-cc','show-preferencesModal');a.onclick=function(e){e.preventDefault()};lc.appendChild(a);}});
</script>`;

export const baseNav = `<!-- NAV -->${navAlignCss}
<header>
  <div class="hi">
    <a href="/" class="brand">
      <img src="/tokens/logo.jpg" alt="NexGenio" width="230">
    </a>
    <nav>
      <a href="/">Home</a>
      <a href="/training/index.html">Training</a>
      <a href="/blog/index.html">Blog</a>
      <a href="/#contact">Contact</a>
    </nav>
    <button class="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
  <div class="mobile-menu">
    <a href="/">Home</a>
    <a href="/training/index.html">Training</a>
    <a href="/blog/index.html">Blog</a>
    <a href="/#contact">Contact</a>
  </div>
</header>
${mobileMenuJs}${cookieConsentBlock}<!-- /NAV -->`;

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
      <a href="/blog/index.html">Blog</a>
      <a href="/#contact">Contact</a>
    </nav>
    <button class="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
  <div class="mobile-menu">
    <a href="/">Home</a>
    <a href="/training/index.html">Training</a>
    <a href="/blog/index.html">Blog</a>
    <a href="/#contact">Contact</a>
  </div>
</header>
${mobileMenuJs}${cookieConsentBlock}<!-- /NAV -->`;
