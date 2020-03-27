#Settings

<table>
	<tr>
		<th>Option</th>
		<th>Type</th>
		<th>Default value</th>
		<th>Purpose</th>
	</tr>
	<tr>
		<td><code>case sensitive routing</code></td>
		<td><code>Boolean</code></td>
		<td><code>undefined</code></td>
		<td>When enabled, <code>/Users</code> and <code>/users</code> are different routes.</td>
	</tr>
	<tr>
		<td><code>env</code></td>
		<td><code>String</code></td>
		<td><code>process.env.NODE_ENV` || `"development"`</code></td>
		<td>Environment mode (like _test_, _qa_, _stage_, _codeview_, _production_).</td>
	</tr>
</table>

| Option | Type | Default value | Purpose |
|--------|------|---------------|---------|
| `case sensitive routing` | `Boolean` | `undefined` | When enabled, `/Users` and `/users` are different routes. |
| `env` | `String` | `process.env.NODE_ENV` \|\| `"development"` | Environment mode (like _test_, _qa_, _stage_, _codeview_, _production_). |
| `etag` | `Boolean\|String\|Function` | `"weak"` | The _ETag_ response header. |
| `jsonp callback name` | `String` | `"callback"` | The default JSONP callback name. |
| `json escape` | `Boolean` | `undefined` | Enable escaping the characters `<`, `>`, and `&` as Unicode escape sequences in JSON from a response of `res.json()`, `res.jsonp()`, and `res.send()`. |
| `json replacer` | `Function\|String[]\|Number[]` | `undefined` | The `replacer` argument used by `JSON.stringify()`. |
| `json spaces` | `Number\|String` | `undefined` | The `space` argument used by `JSON.stringify()`. |
| `query parser` | `String\|Boolean\|(String):Object` | `"extended"` | Query parsing (_?name=value&name2=value2_):  
* `false` - disabled
* `"simple"` - Node's _querystring_
* `"extended"` - _qs_ module (\|\| `true`) |
| `strict routing` | `Boolean` | `undefined` | When enabled, `/foo` and `/foo/` are different routes. |

## Examples

### `env`

```
$ NODE_ENV=production node app
```

### `etag`

```
app.set('etag', (body, encoding) => {
	return generateHash(body, encoding);
});
```

### `json replacer`

```
app.set('json replacer', (key, value) => {
	if (key == 'discount') {
		return undefined; // omit value
	} else {
		return value;
	}
});
```

### `json spaces`

```
app.set('json spaces', 4);
```