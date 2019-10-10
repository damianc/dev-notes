# The `response` Object

> The `response` object in Express.js is the `http.response` from Node wrapped and enhanced by additional features.

## Properties

* [`res.app`](#resapp)
* [`res.headersSent`](#resheaderssent)
* [`res.locals`](#reslocals)

## Methods

* [`res.append()`](#resappendfield-value)
* [`res.cookie()`](#rescookiename-value-options)
* [`res.clearCookie()`](#resclearcookiename-options)
* [`res.get()`](#resgetfield)
* [`res.set()`](#ressetfield-value)
* [`res.type()`](#restypetype)
* [`res.vary()`](#resvaryfield)
* [`res.links()`](#reslinkslinks)
* [`res.location()`](#reslocationpath)
* [`res.redirect()`](#resredirectstatus-path)
* [`res.status()`](#resstatuscode)
* [`res.sendStatus()`](#ressendstatusstatuscode)
* [`res.render()`](#resrenderview-locals-callback)
* [`res.end()`](#resenddata-encoding)
* [`res.send()`](#ressendbody)
* [`res.format()`](#resformatobject)
* [`res.json()`](#resjsonbody)
* [`res.jsonp()`](#resjsonpbody)
* [`res.sendFile()`](#ressendfilepath-options-fn)
* [`res.download()`](#resdownloadpath-filename-options-fn)
* [`res.attachment()`](#resattachmentfilename)

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

## `res.cookie(name, value[, options])`

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

* chaining `cookie()` calls

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

* custom encoding

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

* object as the value

```
// serialized as JSON
// parsed by bodyParser() middleware

res.cookie('cart', {
	items: [1, 2, 3]
});
```

## `res.clearCookie(name[, options])`

```
res.cookie('user_id', '120', { path: '/admin' });
res.clearCookie('user_id', { path: '/admin' });
```

> Web browsers and other compliant clients will only clear the cookie if the given `options` is identical to those given to `res.cookie()`, excluding `expires` and `maxAge`.

## `res.get(field)`

```
res.get('Content-Type');
// "text/plain"
```

## `res.set(field[, value])`

```
res.set('Content-Type', 'text/html');

res.set({
  'Content-Type': 'text/csv',
  'Content-Length': req.body.length,
  'Set-Cookie': ['type=reader', 'language=javascript'],
  'ETag': '12345'
});
```

> Aliased as `res.header(field[, value])`.

## `res.type(type)`

```
res.type('.html');
// Content-Type: 'text/html'

res.type('html');
// Content-Type: 'text/html'

res.type('json');
// Content-Type: 'application/json'

res.type('application/json');
// Content-Type: 'application/json'

res.type('png');
// Content-Type: 'image/png'
```

## `res.vary(field)`

```
res.vary('User-Agent').render('docs');
// Vary: 'User-Agent'
```

## `res.links(links)`

```
res.links({
	next: 'http://api.example.com/users?page=2',
	last: 'http://api.example.com/users?page=5'
});

// Link: <http://api.example.com/users?page=2>; rel="next",
// <http://api.example.com/users?page=5>; rel="last"
```

## `res.location(path)`

```
res.location('/foo/bar');
// Location: '/foo/bar'

res.location('back');
// Location: @Referer | '/'
```

## `res.redirect([status,] path)`

```
res.redirect('/foo/bar');
res.redirect('http://example.com');
res.redirect(301, 'http://example.com');
res.redirect('../login');
```

###  Redirect from `/path` and `/path/`

```
app.get('/admin/logout', (req, res) => {
	res.redirect('/home');
});

// example.com/admin/logout -> example.com/home
```

```
app.get('/blog/posts/newest', (req, res) => {
	res.redirect('/magazine')
});

// example.com/blog/posts/newset -> example.com/magazine
```

### Relative Redirect

```
app.get('/admin/reports/', (req, res) => {
	res.redirect('tickets');
});
// example.com/admin/reports -> example.com/admin/tickets

app.get('/admin/users/admins/poland/', (req, res) => {
	res.redirect('pl');
});
// example.com/admin/users/admins/poland -> example.com/admin/users/admins/pl
```

```
app.get('/admin/post/new', (req, res) => {
	res.redirect('..');
});

// example.com/admin/post/new -> example.com/admin/post
```

### The `back` value

```
res.redirect('back');
// @Referer | '/'
```

## `res.status(code)`

```
res.status(403).end();
res.status(400).send('Bad Request');
res.status(404).sendFile('/absolute/path/to/404.png');
```

## `res.sendStatus(statusCode)`

```
res.sendStatus(200);
// equivalent to res.status(200).send('OK')

res.sendStatus(403);
// equivalent to res.status(403).send('Forbidden')

res.sendStatus(9999);
// equivalent to res.status(9999).send('9999')
```

## `res.render(view[, locals][, callback])`

```
res.render('index');

res.render('posts', {category: 'health'});

res.render('index', (err, html) => {
	// sent HTML explicitly
	res.send(html);
});

res.render('posts', {category: 'health'}, (err, html) => {
	// sent HTML explicitly
	res.send(html);
});
```

## `res.end([data][, encoding])`

```
res.end();

res.status(200).end('OK');
```

## `res.send([body])`

Sets headers like `Content-Length` and `Content-Type`.

```
res.send('OK');
// text/html

res.send({a: 1});
res.send([1, 2]);
// application/json

res.send(Buffer.from('HELLO'));
// application/octet-stream
```

* the `Content-Type` can be overriden:

```
res.set('Content-Type', 'text/html');
res.send(Buffer.from('HELLO'));
// text/html
```

## `res.format(object)`

```
res.format({
	'text/plain': function () {
		res.send('hello');
	},

	'text/html': function () {
		res.send('<b>hello</b>');
	},

	'application/json': function () {
		res.send({ message: 'hello' });
	},

	'default': function () {
		res.status(406).send('Not Acceptable');
	}
});
```

* if `Accept` header equals `text/html` or `*/html`: `<b>hello</b>` will be sent
* if `Accept` header equals `*/*`: `hello` will be sent
* if `Accept` header is not specified: the first one (`hello`) will be sent
* if `Accept` header is not matched: `default` is called if present, the server responds with `406 "Not Acceptable"` otherwise

### Simple Extension Names

```
res.format({
	text: function () {
		res.send('hey')
	},

	html: function () {
		res.send('<p>hey</p>')
	},

	json: function () {
		res.send({ message: 'hey' })
	}
});
```

## `res.json([body])`

> Converts values of type like `String` or `Number`.

```
res.json(1234);

res.json({name: 'John'});
```

## `res.jsonp([body])`

> A name of the parameter containing a name of the callback to call is set with `jsonp callback name` setting.  
> It defaults to `callback`.


```
app.get('/js/lib', (req, res) => {
	res.jsonp([1, 2, 3, 4]);
});

example.com/js/lib?callback=getNums
// /**/ typeof cb === 'function' && cb([1, 2, 3, 4]);

example.com/js/lib?other_param=its_value
// [1, 2, 3, 4]
```

```
<script>
function getNums(nums) {
	console.log(...nums);
}
</script>
<script src="example.com/js/lib?callback=getNums"></script>
```

## `res.sendFile(path[, options][, fn])`

* transfers the file at the given `path`
* unless the `root` option is set in the `options` object, `path` must be an absolute path to the file
* sets the `Content-Type` header based on the filename’s extension

| Option | Default Value | Description |
|--------|---------------|-------------|
| `maxAge` | `0` | max-age property of the `Cache-Control` header in milliseconds or a string in [ms format](https://www.npmjs.org/package/ms) |
| `root` | | root directory for relative filenames |
| `lastModified` | _enabled_ | sets the `Last-Modified` header to the last modified date of the file on the OS (set `false` to disable it) |
| `headers` | | object containing HTTP headers to serve with the file |
| `dotfiles` | `"ignore"` | option for serving dotfiles (`"allow"` | `"deny"` | `"ignore"`) |
| `acceptRanges` | `true` | enable/disable accepting ranged requests |
| `cacheControl` | `true` | enable/disable setting `Cache-Control` response header |
| `immutable` | `false` | enable/disable the immutable directive in the `Cache-Control` response header (If enabled the `maxAge` option should also be specified to enable caching. The immutable directive will prevent supported clients from making conditional requests during the life of the `maxAge` option to check if the file has changed. |

```
app.get('/file/:name', function (req, res, next) {
	var options = {
		root: path.join(__dirname, 'public'),
		dotfiles: 'deny',
		headers: {
			'x-timestamp': Date.now()
		}
	};

	var fileName = req.params.name;
	res.sendFile(fileName, options, function (err) {
		if (err) {
			next(err);
		} else {
			console.log('Sent:', fileName);
		}
	});
});
```

* conditional serving files

```
app.get('/user/:uid/photos/:file', function (req, res) {
	var uid = req.params.uid;
	var file = req.params.file;

	req.user.mayViewFilesFrom(uid, function (yes) {
		if (yes) {
			res.sendFile('/uploads/' + uid + '/' + file);
		} else {
			res.status(403).send('Sorry! You can't see that.');
		}
	});
});
```

## `res.download(path[, filename][, options][, fn])`

* transfers the file at `path` as an `"attachment"` (typically, browsers will prompt the user for download)
* by default, the `Content-Disposition` header `"filename="` parameter is `path` (this typically appears in the browser dialog)
* it can be overrided with the `filename` parameter
* the `options` argument passes through to the underlying `res.sendFile()` call (takes the exact same parameters)
* when an error occurs or transfer is complete, the method calls the optional callback function `fn`
* this method uses `res.sendFile()` to transfer the file

```
res.download('/report-201812.pdf');

res.download('/report-201812.pdf', 'report-2018-02.pdf');

res.download('/report-201812.pdf', 'report-2018-02.pdf', function (err) {
	if (err) {
		// handle error
		// but keep in mind the response may be partially-sent
		// so check res.headersSent
	} else {
		// decrement a download credit, etc
	}
});
``` 

## `res.attachment([filename])`

```
res.attachment();
// Content-Disposition: attachment

res.attachment('img/logo.png');
// Content-Disposition: attachment; filename="logo.png"
// Content-Type: image/png [received with res.type()]
```
