# `const` vs `define`

| `const` | `define` |
|---------|----------|
| modifier | function |
| creates class constants (as of PHP 5.3 can create global constants) | creates global and local constants (but not class constants) |
| may only be initialized with a constant value, not with expression | allows an expression in the assignment |
| compile-time constant (compiler replaces all usage of the constant with its value) | run-time constant (not set until run-time) |

## `const`

### Class Constant

```
class Circle {
	const PI = 3.14;
}

echo Circle::PI;
// 3.14
```

> Yep, a constant is accessed with `::` like a static member of a class.

### Global Constant

```
const PI = 3.14;
// can be accessed anywhere in the script

echo PI;
// 3.14
```

## `define`

```
define('ONE', 1);
define('TWO', ONE + 1);
```

## Constant Arrays

* with `const`: as of PHP 5.6
* with `define()`: as of PHP 7

```
const A = [1, 2, 3];
define('B', [1, 2, 3]);
```

## Checking Whether a Constant Exists

```
if (!defined('PI')) {
	define('PI', 3.14);
}
```

> The `defined()` function works for constants created with both `const` and `define()`.

## Case Sensitivity

Constants are case sensitive by default.  
However, the `define` function takes a third optional argument that may be set to `true` to create a case-insensitive constant.

```
define('DEBUG', 1, true);
echo debug;
// 1
```

## Magic Constants in PHP

| Constant | Description |
|----------|-------------|
| `__LINE__` | current line number of the file |
| `__FILE__` | full path and filename of the file |
| `__DIR__` | directory of the file |
| `__FUNCTION__` | function name |
| `__CLASS__` | class name (including namespace) |
| `__TRAIT__` | trait name (including namespace) |
| `__METHOD__` | class method name |
| `__NAMESPACE__` | current namespace |

```
if (!isset($var)) {
	echo '$var not set on line ' . __LINE__;
}
```
