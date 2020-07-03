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

The code above may be represented as follows:

* `FunctionDeclaration`
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