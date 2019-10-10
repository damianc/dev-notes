# The `response` Object

## Properties

* `res.app`
* `res.headersSent`
* `res.locals`

## Methods

* `res.append()`
* `res.attachment()`
* `res.cookie()`
* `res.clearCookie()`
* `res.download()`
* `res.end()`
* `res.format()`
* `res.get()`
* `res.json()` ****
* `res.jsonp()` ****
* `res.links()`
* `res.location()`
* `res.redirect()` ****
* `res.render()` ****
* `res.send()` ****
* `res.sendFile()`
* `res.sendStatus()`
* `res.set()` ****
* `res.status()` ****
* `res.type()`
* `res.vary()`

## `res.app`

```
// index.js
app.get('/viewkey', require('./view-middleware.js'));
```

```
// view-middleware.js
module.exports = function (req, res) {
  res.send('The KEY is ' + req.app.get('APP_KEY'));
};
```

## `res.headersSent`

```
app.get('/', function (req, res) {
	console.log(res.headersSent);
	// false

	res.send('OK');

	console.log(res.headersSent);
	// true
});
```

## `res.locals`

```
app.get('/report', (req, res, next) => {
	res.locals = {user: {admin: true}};
	next();
}, (req, res) => {
	res.render('index');
});
```

```
{{!-- index.hbs --}}

{{#if user.admin}}
	<div>...</div>
{{/if}}
```

## `res.append(field[, value])`

```
res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
```

> Calling `res.set()` after `res.append()` will reset the previously-set header value.

## `res.attachment([filename])`

```
res.attachment();
// Content-Disposition: attachment

res.attachment('img/logo.png');
// Content-Disposition: attachment; filename="logo.png"
// Content-Type: image/png [received with res.type()]
```

`res.cookie(name, value[, options])`

| Option | Type | Notes |
|--------|------|-------|
| `domain` | _String_ | defaults to the app's domain name of the app |
| `encode` | _Function_ | defaults to `encodeURIComponent` |
| `expires` | _Date_ |  if not specified or set to 0, creates a session cookie |
| `httpOnly` | _Boolean_ | cookie accessible only by the web server |
| `maxAge` | _Number_ | the expiry time relative to the current time in milliseconds |
| `path` | _String_ | defaults to `/` |
| `secure` | _Boolean_ | cookie used with HTTPS only |
| `signed` | _Boolean_ | cookie is signed |
| `sameSite` | _Boolean\|String_ | send cookie along with requests initiated by third party websites (`Lax`) or not (`Strict`) |

```
res
.cookie('user_id', '120', {
	domain: '.example.com',
	path: '/admin',
	signed: true
})
.cookie('start_timestamp', Date.now())
.redirect(301, '/admin');
```

```
res.cookie('some_cross_domain_cookie', 'http://mysubdomain.example.com', {
	domain: 'example.com'
});
// default encoding
// 'http%3A%2F%2Fmysubdomain.example.com'

res.cookie('some_cross_domain_cookie', 'http://mysubdomain.example.com', {
	domain: 'example.com',
	encode: String
});
// custom encoding
// 'http://mysubdomain.example.com'
```

```
// object as the value parameter
// serialized as JSON
// parsed by bodyParser() middleware

res.cookie('cart', {
	items: [1, 2, 3]
});
```
