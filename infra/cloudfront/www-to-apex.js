// CloudFront Function — viewer-request on the public distribution.
// Canonicalises www.nexgenio.com to the apex, which is what every page's
// rel="canonical" already points at. Without this, both hosts answer 200 and
// the same page is indexed twice.
//
// Exact host match only: anything that is not www.nexgenio.com passes through
// untouched, so a future alias cannot be caught by accident.
function handler(event) {
    var request = event.request;
    var hostHeader = request.headers.host;

    if (!hostHeader || hostHeader.value !== 'www.nexgenio.com') {
        return request;
    }

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
