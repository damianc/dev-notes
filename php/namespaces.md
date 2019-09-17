# Namespaces

Any code may be contained within a namespace, but only 4 code constructs are affected:
* classes
* interfaces
* functions
* constants

## Creating Namespace

A file that contains namespaced code must declare the namespace at the top of the file before any other code, markup, or whitespace.
Declare statements are an exception to this because they must be placed before namespace declarations.

> Unlike other PHP constructs, the same namespace may be defined in more than one file.
> This allows namespace members to be split up across multiple files.

```
<?php
namespace ns;

class MyClass {}
?>
<html><body></body></html>
```

### Alternative Syntax

Namespaces may be defined with the bracketed syntax.  
Just as with the regular syntax, no text or code may exist outside of the namespace.

```
<?php
namespace ns {
	class MyClass {}
?>

<html><body></body></html>

<?php } ?>
```

## Nested Namespaces

Namespaces can be nested any number of levels deep to further define the namespace hierarchy.

```
namespace ns\sub;

class MyClass {}
// my\sub\MyClass
```

## Referencing Namespaces

### #1 - Fully qualified

The fully qualified name can always be used.  
It consists of the _global prefix operator_ (`\`), followed by the namespace path and member.  
The _global prefix operator_ indicates that the path is relative to the global namespace.

```
namespace ns {
	class MyClass {}
}

namespace other {
	$obj = new \ns\MyClass();
}
```

### #2 - Qualified

The qualified name includes the namespace path, but not the _global prefix operator_.  
Therefore, it can only be used if the wanted member is defined in a namespace below the current namespace in the hierarchy.

```
namespace ns {
	class MyClass {}
}

namespace {
	$obj = new ns\MyClass();
}
```

### #3 - Unqualified

The member name alone (unqualified name) may only be used within the namespace that defines the member.

```
namespace ns {
	class MyClass {}

	$obj = new MyClass();
}
```

Unqualified **class** and **interface** names only resolve to the current namespace.  
In contrast, if an unqualified **function** or **constant** does not exist in the current namespace, they will try to resolve to
any global function or constant by the same name.

```
namespace {
	function print() {
		echo 'global';
	}
}

namespace ns {
	print();
	// "global"
}
```

The _global prefix operator_ can be used to explicitly refer to the global member.  
This would be necessary if the current namespace contained a function with the same name.

```
namespace {
	function print() {
		echo 'global';
	}
}

namespace ns {
	function print() {
		echo 'local';
	}

	\print();
	// "global"

	print();
	// "local"
}
```

## Namespace Aliases

The names for **classes**, **interfaces** and **namespaces** can be shortened.  
An alias is defined with a `use` directive, which must be placed after the namespace name in the topmost scope of the file.

```
namespace ns;
class MyClass {}

namespace foo;
use ns\MyClass as MyAlias;

$obj = new MyAlias;
```

```
namespace foo {
	use ns\MyClass as MyAlias;

	$obj = new MyAlias();
}
```

### Original Name without Alias

```
namespace foo;
use \ns\MyClass;

$obj = new MyClass();
```

### Mass-import the Members

It is not possible to mass-import the members of another namespace.  
However, there is a syntatical shortcut for importing multiple members in the same `use` statement.

```
namespace foo;
use ns\Class1 as C1, ns\Class2 as C2;
```

PHP 7 allows `use` declaration to be grouped within curly brackets.

```
namespace foo;
use ns\{ Class1 as C1, Class2 as C2 };
```

### Function and Constant Aliases

PHP 5.6 extended the `use` construct to support **function** and **constant** aliases (in addition to _classes_, _interfaces_, and _namespaces_).  
These are imported with the `use function` and `use const` constructs, respectively.

```
namespace my\space {
	const C = 5;
	function f() {}
}

namespace {
	use const my\space\C;
	use function my\space\f;
}
```

> Aliases only apply to the script file that defines them.
> Therefore, an imported file does not inherit the parent file's aliases.

## `namespace` Keyword

The `namespace` keyword can be used as a constant that evaluates to the current namespace or an empty string in global code.  
It may be used to explicitly refer to the current namespace.

```
namespace my\name {
	function print() {
		echo 'hello';
	}
}

namespace my {
	namespace\name\print();
	\\ "hello"

	name\print();
	// "hello"
}
```
