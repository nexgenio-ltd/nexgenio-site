/**
 * NexGenio GA4 conversion events.
 * Fires a "begin_checkout" event on Buy / Reserve button clicks,
 * only when analytics consent has been given via CookieConsent.
 *
 * Buttons must carry these data attributes:
 *   data-course   — course name (e.g. "ISO/IEC 27001 Lead Implementer")
 *   data-format   — delivery format (live-online | self-study | e-learning)
 *   data-price    — price in EUR (e.g. "2222")
 *   data-date     — session date, live courses only (e.g. "21 September 2026")
 */
(function () {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-course]');
    if (!btn) return;

    if (typeof CookieConsent === 'undefined' ||
        !CookieConsent.acceptedService('ga4', 'analytics')) return;

    if (typeof gtag !== 'function') return;

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
})();
