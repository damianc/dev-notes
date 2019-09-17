# Closure

```
$x = 1;
$y = 2;

$closure = function ($z) use ($x, $y) {
	return $x + $y + $z;
};

echo $closure(3);
// 6
```
