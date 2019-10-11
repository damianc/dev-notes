# `match()` vs. `exec()`

<table>
	<tr>
		<td colspan="4" align="left">
			<code><div>var str = 'aAbBcC';</div>
				<div>var re_once = /([a-z])([A-Z])/;</div>
				<div>var re_glob = /([a-z])([A-Z])/g;</div></code>
		</td>
	</tr>
	<tr>
		<td>
			<code><div>str.match(re_once);</div>
				<div>// ['aA', 'a', 'A']</div></code>
		</td>
		<td>
			<code><div>str.match(re_glob);</div>
				<div>// ['aA', 'bB', 'cC']</div></code>
		</td>
		<td>
			<code><div>re_once.exec(str);</div>
				<div>// ['aA', 'a', 'A']</div>
				<div>re_once.exec(str);</div>
				<div>// ['aA', 'a', 'A']</div>
				<div>// ...</div></code>
		</td>
		<td>
			<code><div>re_glob.exec(str);</div>
				<div>// ['aA', 'a', 'A']</div>
				<div>re_glob.exec(str);</div>
				<div>// ['bB', 'b', 'B']</div>
				<div>re_glob.exec(str);</div>
				<div>// ['cC', 'c', 'C']</div>
				<div>re_glob.exec(str);</div>
				<div>// null</div>
				<div>re_glob.exec(str);</div>
				<div>// ['aA', 'a', 'A']</div>
				<div>// ...</div></code>
		</td>
	</tr>
</table>
