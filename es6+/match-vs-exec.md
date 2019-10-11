# `match()` <span style="color:red">vs.</span> `exec()`
<span style="color:blue">2</span>
<table>
	<tr>
		<td colspan="4" align="left">
			<pre>
				var str = 'aAbBcC';
				var re_once = /([a-z])([A-Z])/;
				var re_glob = /([a-z])([A-Z])/g;
			</pre>
		</td>
	</tr>
	<tr>
		<td>
			<pre>
				str.match(re_once);
				// ['aA', 'a', 'A']
			</pre>
		</td>
		<td>
			<pre>
				str.match(re_glob);
				// ['aA', 'bB', 'cC']
			</pre>
		</td>
		<td>
			<pre>
				re_once.exec(str);
				// ['aA', 'a', 'A']
				re_once.exec(str);
				// ['aA', 'a', 'A']
				// ...
			</pre>
		</td>
		<td>
			<pre>
				re_glob.exec(str);
				// ['aA', 'a', 'A']
				re_glob.exec(str);
				// ['bB', 'b', 'B']
				re_glob.exec(str);
				// ['cC', 'c', 'C']
				re_glob.exec(str);
				// null
				re_glob.exec(str);
				// ['aA', 'a', 'A']
				// ...
			</pre>
		</td>
	</tr>
</table>
