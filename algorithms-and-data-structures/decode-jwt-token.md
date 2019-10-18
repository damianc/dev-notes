# Decoding JWT Token

```
function parseJwt(token) {
    var [, base64Url] = token.split('.');
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var payload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    try {
        return JSON.parse(payload);
    } catch (e) {
        return payload;
    }
};
```
