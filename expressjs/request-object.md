# The `request` Object

> The `request` object in Express.js is the `http.request` from Node wrapped and enhanced by additional features.

## Properties

* [`req.app`](#reqapp)
* [`req.body`](#reqbody)
* [`req.cookies`](#reqcookies)
* [`req.signedCookies`](#reqsignedcookies)
* [`req.protocol`](#reqprotocol)
* [`req.secure`](#reqsecure)
* [`req.hostname`](#reqhostname)
* [`req.subdomains`](#reqsubdomains)
* [`req.path`](#reqpath)
* [`req.query`](#reqquery)
* [`req.originalUrl`](#reqoriginalurl)
* [`req.baseUrl`](#reqbaseurl)
* [`req.route`](#reqroute)
* [`req.method`](#reqmethod)
* [`req.params`](#reqparams)
* [`req.fresh`](#reqfresh)
* [`req.stale`](#reqstale)
* [`req.xhr`](#reqxhr)
* [`req.ip`](#reqip)
* [`req.ips`](#reqips)

## Methods

* [`req.accepts()`](#reqacceptstypes)
* [`req.acceptsCharsets()`](#reqacceptscharsetscharset--)
* [`req.acceptsEncodings()`](#reqacceptsencodingsencoding--)
* [`req.acceptsLanguages()`](#reqacceptslanguageslang--)
* [`req.is()`](#reqistype)
* [`req.get()`](#reqgetfield)
* [`req.param()`](#reqparamname-defaultvalue)
* [`req.range()`](#reqrangesize-options)

## `req.app`

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

## `req.body`

Data contained in this object are put with the `body-parser` middleware (its methods `json()` and `urlencoded()`).  
Due to the above, **the `body-parser` middleware must be installed** to be able to use this property.

```
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// only one can be used
// if another is not needed
```

> `$ curl <URL> -d 'name=John'`
> `{name: 'John'}`

> `$ curl -H "Content-Type: application/json" -d '{"username": "John"}' <URL>`
> `{username: 'John'}`

## `req.cookies`

```
app.get('/cookies', (req, res) => {
	if (!req.cookies.counter) {
		res.cookie('counter', 0);
	} else {
		let counter = parseInt(req.cookies.counter, 10);
		res.cookie('counter', counter);
	}

	res.status(200).send(req.cookies);
});
```

## `req.signedCookies`

It is like `cookies`, but it is used if a secret key has been passed to a call of the `cookieParser()` middleware.  
Cookies are signed if the third parameter of `res.cookie()` is the object `{signed: true}`.

```
app.use(cookieParser('Secret Key'));
...
app.get('/cookies', (req, res) => {
	if (!req.signedCookies.counter) {
		res.cookie('counter', 0, {signed: true});
	} else {
		let counter = parseInt(req.signedCookies.counter, 10);
		res.cookie('counter', counter, {signed: true});
	}

	res.status(200).send(req.signedCookies);
});
```

> The signed cookie is neither hidden or encrypted!  
> Signing is just meant to prevent override a value of the cookie with a custom value by website user.

## `req.protocol`

For `http://example.com:3000` it is `'http'`.

## `req.secure`

For TLS connection like `https://example.com:3000` it is `true`.

## `req.hostname`

For `http://example.com:3000` it is `'example.com'`.

## `req.subdomains`

For `http://abc.def.example.com:3000` it is `['def', 'abc']`.

## `req.path`

For `http://example.com/users?status=active` it is `/users`.

## `req.query`

```
/search?q=node&lang=fr

console.log(req.query);
// {q: 'node', lang: 'fr'}
```

```
/search?q=red+carpet

console.log(req.query.q)
// 'red carpet'
```

```
/shoes?order=desc&shoe[color]=blue&shoe[type]=converse

console.log(req.query.order)
// 'desc'

console.log(req.query.shoe.color)
// 'blue'

console.log(req.query.shoe.type)
// 'converse'
```

```
/shoes?color[]=blue&color[]=black&color[]=red

console.log(req.query.color)
// ['blue', 'black', 'red']
```

## `req.originalUrl`

* for `/search?q=something` it is `'/search?q=something'`
* in a middleware function, it is a combination of `req.baseUrl` and `req.path` (as below)

```
app.use('/admin', function (req, res, next) {
	// for http://www.example.com/admin/new

	console.log(req.originalUrl);
	// '/admin/new'

	console.log(req.baseUrl);
	// '/admin'

	console.log(req.path);
	// '/new'

	next();
});
```

## `req.baseUrl`

The URL path on which a router instance was mounted.

```
var routerInst = express.Router()

routerInst.get('/bu', (req, res) => {
	res.send(req.baseUrl);
});

app.use('/example', routerInst);

// for /example/bu
// it is '/example'
```

```
...
app.use(['/exa+mple', '/st{2}h'], routerInst);

// for /exaaaample/bu
// it is '/exaaaample'

// for /stth/bu
// it is '/stth'
```

## `req.route`

```
app.get('/user/:id?', function userIdHandler(req, res) {
	res.send(req.route);
});
```
```
{
	"path": "/user/:id?",
	"stack": [
		{
			"name":"userIdHandler",
			"keys": [],
			"regexp": {
				"fast_star": false,
				"fast_slash":false
			},
			"method":"get"
		}
	],
	"methods": {
		"get":true
	}
}
```

## `req.method`

The name of a method used in the query, for example `GET`.

## `req.params`

If:
* the route is `/api/:role/:name/:status`
* the URL is `/api/user/bob/active`

Then the `req.params` object is:

```
{
	role: 'user',
	name: 'bob',
	status: 'active'
}
```

----

If:
* the route is `/api/file/*`
* the URL is `/api/file/css/bootstrap.css`

Then the `req.params` object is:

```
{
	0: 'css/bootstrap.css'
}
```

----

If:
* the route is `/api/file/*/*`
* the URL is `/api/file/css/bootstrap.css`

Then the `req.params` object is:

```
{
	0: 'css',
	1: 'bootstrap.css'
}
```

----

If:
* the route is `api//file\/\w+?(\d+)(\w+?)\d+/` (_lazy capturing of words_)
* the URL is `api/file/AB12CD34`

Then the `req.params` object is:

```
{
	0: '12',
	1: 'CD'
}
```

## `req.fresh`

It is `true` if the `cache-control` request header doesn’t have a `no-cache` directive and any of the following are true:

* the `if-modified-since` request header is specified and `last-modified` request header is equal to or earlier than the `modified` response header
* the `if-none-match` request header is `*`
* the `if-none-match` request header, after being parsed into its directives, does not match the `etag` response header

## `req.stale`

 The opposite of `req.fresh`.

 ## `req.xhr`

Whether the request’s `X-Requested-With` header field is `XMLHttpRequest` (indicating that the request was issued by a client library such as jQuery).

## `req.ip`

* the remote IP address of the request (e.g., `127.0.0.1`)
* when the trust proxy setting does not evaluate to `false`, the value of this property is derived from the left-most entry in the `X-Forwarded-For` header (be set by the client or by the proxy)

## `req.ips`

When the trust proxy setting does not evaluate to false, this property contains an array of IP addresses specified in the X-Forwarded-For request header (set by the client or by the proxy). Otherwise, it contains an empty array.

If `X-Forwarded-For` is `client, proxy1, proxy2`, it would be `["client", "proxy1", "proxy2"]`, where `proxy2` is the furthest downstream.

## `req.accepts(types)`

If `Accept` header is `text/*, application/json`:

```
req.accepts('html');
// "html"

req.accepts('text/html');
// "text/html"

req.accepts(['json', 'text']);
// "json"

req.accepts(['video', 'text']);
// "text"

req.accepts('application/json');
// "application/json"
```

## `req.acceptsCharsets(charset [, ...])`

It is like `req.accepts`, but based on `Accept-Charset` header.

## `req.acceptsEncodings(encoding [, ...])`

It is like `req.accepts()`, but based on `Accept-Encoding` header.

## `req.acceptsLanguages(lang [, ...])`

It is like `req.accepts()`, but based on `Accept-Language` header.

## `req.is(type)`

If `Content-Type` header is `application/json`:

```
req.is('json');
// "json"

req.is('application/json');
// "application/json"

req.is('application/*');
// "application/*"

req.is('html');
// false
```

>  If the request has no body, returns `null`.

## `req.get(field)`

```
req.get('Content-Type');
// "text/plain"
```

> The `Referrer` and `Referer` fields are interchangeable.

## `req.param(name[, defaultValue])`

Lookup is performed in the following order:

* `req.params`
* `req.body`
* `req.query`
* default value if given or `undefined` otherwise

```
// for /user/:name
// GET /user/john
req.param('name');
// "john"

// POST name=john
req.param('name');
// "john"

// GET ?name=john
req.param('name');
// "john"

// POST ?nickname=john90
req.param('name', 'somebody');
// "somebody"
```

## `req.range(size[, options])`

`Range` header parser.

* the `size` parameter is the maximum size of the resource
* the `options` parameter is an object that can have the `combined:boolean` (defaults to `false`) property specifying if overlapping & adjacent ranges should be combined (ranges will be combined and returned as if they were specified that way in the header)

An array of ranges will be returned or negative numbers indicating an error parsing.

* `-2` signals a malformed header string
* `-1` signals an unsatisfiable range

```
// parse header from request
var range = req.range(1000)

// the type of the range
if (range.type === 'bytes') {
	// the ranges
	range.forEach(function (r) {
		// do something with r.start and r.end
	});
}
```
