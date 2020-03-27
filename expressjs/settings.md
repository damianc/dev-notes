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
		<td>
			Environment mode (like <i>test</i>, <i>qa</i>, <i>stage</i>, <i>preview</i>, <i>production</i>).
<pre>
$ NODE_ENV=production node app
</pre>
		</td>
	</tr>
	<tr>
		<td><code>etag</code></td>
		<td><code>Boolean|String|Function</code></td>
		<td><code>"weak"</code></td>
		<td>
			The <i>ETag</i> response header.
<pre>
app.set('etag', (body, encoding) => {
    return generateHash(body, encoding);
});
</pre>
		</td>
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
		<td>
			The <code>replacer</code> argument used by <code>JSON.stringify()</code>.
<pre>
app.set('json replacer', (key, value) => {
    if (key == 'discount') {
        return undefined; // omit value
    } else {
        return value;
    }
});
</pre>
		</td>
	</tr>
	<tr>
		<td><code>json spaces</code></td>
		<td><code>Number|String</code></td>
		<td><code>undefined</code></td>
		<td>
			The <code>space</code> argument used by <code>JSON.stringify()</code>.
<pre>
app.set('json spaces', 4);
</pre>
		</td>
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
	<tr>
		<td><code>subdomain offset</code></td>
		<td><code>Number</code></td>
		<td><code>2</code></td>
		<td>
			The number of dot-separated parts of the host to remove to access subdomain.
			<ul>
				<li><code>2</code>: <i>ncbi.nlm.<u>nih.gov</u></i> &rarr; <code>['nlm', 'ncbi']</code></li>
				<li><code>3</code>: <i>ncbi.<u>nlm.nih.gov</u></i> &rarr; <code>['ncbi']</code></li>
			</ul>
		</td>
	</tr>
	<tr>
		<td><code>trust proxy</code></td>
		<td><code>Boolean|String|String[]|Number|(ip):Boolean</code></td>
		<td><code>false</code></td>
		<td>
			Trust Proxy headers, e.g., <code>X-Forwarded-Proto</code> (<code>req.protocol</code>) and <code>X-Forwarded-For</code> (<code>req.ips</code>).
			<ul>
				<li><code>true</code> - IP is leftmost entry in <code>X-Forwarded-*</code></li>
				<li><code>false</code> - IP is in <code>req.connection.remoteAddress</code></li>
				<li>
					IP adresses to trust
					<ul>
						<li><code>'loopback'</code> - single subnet</li>
						<li><code>'loopback, 123.123.123.123'</code> - subnet and IP address</li>
						<li><code>'loopback, linklocal, uniquelocal'</code> - multiple subnets</li>
						<li><code>['loopback', 'linklocal', 'uniquelocal']</code> - multiple subnets (as array)</li>
					</ul>
					Built-in values: <code>loopback</code> - 127.0.0.1/8, ::1/128; <code>linklocal</code> - 169.254.0.0/16, fe80::/10; <code>uniquelocal</code> - 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, fc00::/7
				</li>
				<li><i>Number</i> - trust the n-th hop from the front-facing proxy server as the client</li>
				<li>custom function - custom implementation of trust</li>
<pre>
app.set('trust proxy', ip => {
    if (ip == '127.0.0.1' || ip == '123.123.123.123') {
        return true; // trusted IPs
    } else {
        return false;
    }
});
</pre>
			</ul>
		</td>
	</tr>
	<tr>
		<td><code>views</code></td>
		<td><code>String|String[]</code></td>
		<td><code>process.cwd() + '/views'</code></td>
		<td>
			Directory (or directories) for the application's views.
<pre>
app.set('views', path.join(__dirname, 'templates'));
</pre>
		</td>
	</tr>
	<tr>
		<td><code>view cache</code></td>
		<td><code>Boolean</code></td>
		<td><code>true</code> in production, <code>undefined</code> otherwise</td>
		<td>View template compilation cache.</td>
	</tr>
	<tr>
		<td><code>view engine</code></td>
		<td><code>String</code></td>
		<td><code>undefined</code></td>
		<td>Default engine extension to use when omitted.</td>
	</tr>
	<tr>
		<td><code>x-powered-by</code></td>
		<td><code>Boolean</code></td>
		<td><code>true</code></td>
		<td>Enable the <code>X-Powered-By: Express</code> HTTP header.</td>
	</tr>
</table>