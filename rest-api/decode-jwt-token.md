# Decoding JWT Token

```
function parseJwt(token) {
    var [, base64Url] = token.split('.');
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var decodedBase64 = atob(base64);
    var encodedPayload = decodedBase64.split('').map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('');
    var payload = decodeURIComponent(encodedPayload);

    try {
        return JSON.parse(payload);
    } catch (e) {
        return payload;
    }
}
```

## `atob()` in Node.js

```
...
var decodedBase64 = Buffer.from(base64, 'base64').toString();
...
```
