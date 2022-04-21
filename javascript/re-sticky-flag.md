# RegExp _Sticky_ Flag

Regular expression with  _sticky flag_ (`y`) performs two conceptual operations:
* cut `n` first characters from an input string (`n = lastIndex`)
* match start of the input string against expression (as if `^` was present at the beginning of RegExp)

## Flag `g`  vs Flag `y`

<table>
<tr>
<th><code>const re = /\d/g;</code></th>
<th><code>const re = /\d/y;</code></th>
</tr>
<tr>
<td>
<pre>
re.exec('45A8');
// ['4', index: 0]
re.exec('45A8');
// ['5', index: 1]
re.exec('45A8');
// ['8', index: 3]
re.exec('45A8');
// null
</pre>
</td>
<td>
<pre>
re.exec('45A8');
// ['4', index: 0]
re.exec('45A8');
// ['5', index: 1]
re.exec('45A8');
// null
</pre>
</td>
</tr>
</table>

### Results Explanation

* regular expression is defined:

```
const re = /\d/y;
// re.lastIndex is 0
```

* first `exec()` call matches `4` and sets `lastIndex` to `1` (index of very last match [`0`] + length of it [`1`])
* after `exec()` call, string `5A8` will be being matched later on

```
re.exec('45A8'); // '45A8' is processed
// ['4', index: 0]
// lastIndex is 1
```

* second `exec()` call matches `5` and sets `lastIndex` to `2`
* after `exec()` call, string `A8` will be being matched later on

```
re.exec('45A8'); // '5A8' is processed
// ['5', index: 1]
// lastIndex is 2
```

* as _sticky_ flag makes a regular expression being treated as if it had `^` (_match start_) at the beginning, another `exec()` call does not match anything - the remaining string - `A8` - does not start with a digit (`\d`)
* `lastIndex` is reset to `0`
```
re.exec('45A8'); // 'A8' is processed
// null
// lastIndex is 0
```

* nonetheless, we can set `lastIndex` property by hand so that matching will start from a digit

```
re.lastIndex = 3;

re.exec('45A8'); // '8' is processed
// ['8', index: 3]
// lastIndex is 4

re.exec('45A8');
// null
// lastIndex is 0
```