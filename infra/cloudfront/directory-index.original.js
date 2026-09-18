// Captured from the LIVE stage of CloudFront function `nexgenio-directory-index`
// on 2026-09-18, before the www-to-apex redirect was merged into it.
//
// This file exists only as the revert target. If the merged function misbehaves,
// publish this content back to `nexgenio-directory-index` and the distribution
// returns to its previous behaviour. Do not edit it.

function handler(event) {
    var request = event.request;
    var uri = request.uri;
    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    }
    return request;
}
