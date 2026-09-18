// CloudFront function `nexgenio-directory-index`, viewer-request on the default
// cache behavior of distribution E2WWYNB9MTIF3N.
//
// CloudFront permits exactly one viewer-request function per cache behavior, so
// both behaviours live here:
//
//   1. www.nexgenio.com is redirected 301 to the apex. Every page carries
//      rel="canonical" pointing at the apex, so www must not serve content.
//   2. Directory requests get index.html appended. This is the original
//      behaviour of this function and must be preserved exactly — without it
//      every URL ending in "/" returns 404.
//
// The redirect is checked first and returns immediately, so a www request never
// reaches the index-append branch. The redirect target keeps the original URI,
// and the apex request that follows hits this function again and gets its
// index.html appended there.
//
// Revert target: directory-index.original.js in this directory.

function handler(event) {
    var request = event.request;
    var host = request.headers.host;

    if (host && host.value === 'www.nexgenio.com') {
        var parts = [];
        var qs = request.querystring;
        for (var name in qs) {
            var param = qs[name];
            if (param.multiValue) {
                for (var i = 0; i < param.multiValue.length; i++) {
                    parts.push(name + '=' + param.multiValue[i].value);
                }
            } else if (param.value) {
                parts.push(name + '=' + param.value);
            } else {
                parts.push(name);
            }
        }
        var suffix = parts.length ? '?' + parts.join('&') : '';

        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: {
                location: { value: 'https://nexgenio.com' + request.uri + suffix },
                'cache-control': { value: 'max-age=3600' }
            }
        };
    }

    var uri = request.uri;
    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    }
    return request;
}
