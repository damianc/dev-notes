# Custom Middleware

## `log-divider.middleware.js`

```
function logDivider(divider = '-', length = 20) {
	return function (req, res, next) {
		var arr = new Array(length);
		arr.fill(divider);

		console.log(arr.join(''));
		next();
	};
}

module.exports = logDivider;
```

## The main `app.js`

```
...
var logDivider = require('./log-divider.middleware');
app.use(logDivider());
...
```

## Output (`stdout`)

```
--------------------
GET / 304 178.220 ms - -
--------------------
GET / 200 10.136 ms - 161
--------------------
GET /css/style.css 304 1.540 ms - -
```
