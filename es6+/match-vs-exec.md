# `match()` vs. `exec()`

<table>
	<tr>
		<td colspan="4">
			<code>
				var str = 'aAbBcC';
				var re_once = /([a-z])([A-Z])/;
				var re_glob = /([a-z])([A-Z])/g;
			</code>
		</td>
	</tr>
	<tr>
		<td>
			<code>
				str.match(re_once);
				// ['aA', 'a', 'A']
			</code>
		</td>
		<td>
			<code>
				str.match(re_glob);
				// ['aA', 'bB', 'cC']
			</code>
		</td>
		<td>
			<code>
				re_once.exec(str);
				// ['aA', 'a', 'A']
				re_once.exec(str);
				// ['aA', 'a', 'A']
				// ...
			</code>
		</td>
		<td>
			<code>
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
			</code>
		</td>
	</tr>
</table>
