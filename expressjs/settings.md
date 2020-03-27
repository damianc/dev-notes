# Settings

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
		<td><code>process.env.NODE_ENV || "development"</code></td>
		<td>Environment mode (like <i>test</i>, <i>qa</i>, <i>stage</i>, <i>codeview</i>, <i>production</i>).</td>
	</tr>
	<tr>
		<td><code>etag</code></td>
		<td><code>Boolean|String|Function</code></td>
		<td><code>"weak"</code></td>
		<td>The <i>ETag</i> response header.</td>
	</tr>
	<tr>
		<td><code>jsonp callback name</code></td>
		<td><code>String</code></td>
		<td><code>"callback"</code></td>
		<td>The default JSONP callback name.</td>
	</tr>
	<tr>
		<td><code>json escape</code></td>
		<td><code>Boolean</code></td>
		<td><code>undefined</code></td>
		<td>Enable escaping the characters <code>&lt;</code>, <code>&gt;</code>, and <code>&</code> as Unicode escape sequences in JSON from a response of <code>res.json()</code>, <code>res.jsonp()</code>, and <code>res.send()</code>.</td>
	</tr>
	<tr>
		<td><code>json replacer</code></td>
		<td><code>Function|String[]|Number[]</code></td>
		<td><code>undefined</code></td>
		<td>The <code>replacer</code> argument used by <code>JSON.stringify()</code>.</td>
	</tr>
	<tr>
		<td><code>json spaces</code></td>
		<td><code>Number|String</code></td>
		<td><code>undefined</code></td>
		<td>The <code>space</code> argument used by <code>JSON.stringify()</code>.</td>
	</tr>
	<tr>
		<td><code>query parser</code></td>
		<td><code>String|Boolean|(String):Object</code></td>
		<td><code>"extended"</code></td>
		<td>
			Query parsing (<i>?name=value&name2=value2</i>):
			<ul>
				<li><code>false</code> - disabled</li>
				<li><code>"simple"</code> - Node's <i>querystring</i></li>
				<li><code>"extended"</code> - <i>qs</i> module (|| <code>true</code>)</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td><code>strict routing</code></td>
		<td><code>Boolean</code></td>
		<td><code>undefined</code></td>
		<td>When enabled, <code>/foo</code> and <code>/foo/</code> are different routes.</td>
	</tr>
</table>

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