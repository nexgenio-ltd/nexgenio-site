/**
 * NexGenio GA4 conversion events.
 * Fires "begin_checkout" on Buy / Reserve button clicks and "generate_lead"
 * on booking CTAs, only when analytics consent has been given via
 * CookieConsent.
 *
 * Buy / Reserve buttons must carry these data attributes:
 *   data-course   — course name (e.g. "ISO/IEC 27001 Lead Implementer")
 *   data-format   — delivery format (live-online | self-study | e-learning)
 *   data-price    — price in EUR (e.g. "2222")
 *   data-date     — session date, live courses only (e.g. "21 September 2026")
 *
 * Booking CTAs must carry:
 *   data-lead          — the offer being booked (e.g. "nis2_scope_call")
 *   data-lead-position — where on the page it sits (hero | closing)
 */
(function () {
  function consented() {
    return typeof CookieConsent !== 'undefined' &&
           CookieConsent.acceptedService('ga4', 'analytics') &&
           typeof gtag === 'function';
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-course]');
    if (!btn) return;

    if (!consented()) return;

    var params = {
      course_name: btn.getAttribute('data-course') || '',
      delivery_format: btn.getAttribute('data-format') || '',
      price: btn.getAttribute('data-price') || '',
      currency: 'EUR'
    };
    var sessionDate = btn.getAttribute('data-date');
    if (sessionDate) params.session_date = sessionDate;

    gtag('event', 'begin_checkout', params);
  });

  document.addEventListener('click', function (e) {
    var cta = e.target.closest('[data-lead]');
    if (!cta) return;

    if (!consented()) return;

    // The click navigates away to Calendly, so gtag must use sendBeacon to
    // survive the unload. It is the gtag.js default, set here explicitly
    // because losing the beacon would lose the whole conversion signal.
    gtag('event', 'generate_lead', {
      lead_offer: cta.getAttribute('data-lead') || '',
      lead_position: cta.getAttribute('data-lead-position') || '',
      transport_type: 'beacon'
    });
  });
})();
