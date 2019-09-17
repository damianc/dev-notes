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

## Closure as a Callback

```
$arr = [1, 2, 3, 4];
$factor = 1.25;

$mappedArr = array_map($arr, function ($item) use ($factor) {
	return $item * $factor;
});
```
