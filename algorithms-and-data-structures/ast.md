# Abstract Syntax Tree

AST (_Abstract Syntax Tree_) is a tree representation of the source code constructs, e.g., statements and expressions, which consist of further details - tokens (some very details, like semi-colon, are omitted in AST).

```
function abs(x) {
	if (x >= 0) {
		return x;
	}
	
	return x * -1;
}
```

## AST Representation

* `FunctionDeclaration`
	* `BlockStatement`
		* `IfStatement`
			* `BinaryExpression (>=)`
				* `Identifier (x)`
				* `NumberLiteral (0)`
			* `BlockStatement`
				* `ReturnStatement`
					* `Identifier (x)`
		* `ReturnStatement`
			* `BinaryExpression (*)`
				* `Identifier (x)`
				* `NumberLiteral (-1)`

## Table/Graph Representation

<table>
	<tr>
		<td colspan="5"><code>FunctionDeclaration</code></td>
	</tr>
	<tr>
		<td colspan="3"><code>IfStatement</code></td>
		<td colspan="2"><code>ReturnStatement</code></td>
	</tr>
	<tr>
		<td colspan="2"><code>BinaryExpression (>=)</code></td>
		<td><code>BlockStatement</code></td>
		<td colspan="2"><code>BinaryExpression (*)</code></td>
	</tr>
	<tr>
		<td><code>Identifier (x)</code></td>
		<td><code>NumberLiteral (0)</code></td>
		<td><code>Return Statement</code></td>
		<td><code>Identifier (x)</code></td>
		<td><code>NumberLiteral (-1)</code></td>
	</tr>
	<tr>
		<td></td><td></td>
		<td><code>Identifier (x)</code></td>
		<td></td><td></td>
	</tr>
</table>