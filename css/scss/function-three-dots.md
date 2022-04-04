# `@function` and `...`

## `...` in a Function Call

```
@function midpoint($x1, $y1, $x2, $y2) {
  $midX: ($x1 + $x2) / 2;
  $midY: ($y1 + $y2) / 2;
  @return $midX, $midY;
}
```

* possible calls:

```
prop: midpoint(10, 40, 20, 20);
// 15, 30 (here and in all the calls below)

prop: midpoint((10, 40, 20, 20)...);
prop: midpoint((10, 40, 20, 20) ...);

prop: midpoint(10, 40, 20, 20...);
prop: midpoint(10, 40, 20, 20 ...);

$line: 10, 40, 20, 20;
prop: midpoint($line...);

$aPoint: 10, 40;
prop: midpoint($aPoint..., 20, 20);

$bPoint: 20, 20;
prop: midpoint(10, 40, $bPoint...);
```

* weird or wrong calls:

```
$aYbX: 40, 20;
prop: midpoint(10, $aYbX..., 20);
// 25, 20
// ??

$aYbX: 20, 40;
prop: midpoint(10, $aYbX..., 20);
// 15, 30
// ok when swapped
```

```
$aPoint: 10, 40;
$bPoint: 20, 20;
prop: midpoint($aPoint..., $bPoint...);
// Error: Variable keyword arguments must be a map (was 20, 20).

$aPointMap: (x1: 10, y1: 40);
$bPointMap: (x2: 20, y2: 20);
prop: midpoint($aPointMap..., $bPointMap...);
// ok when maps
// even in reverse order ($bPointMap..., $aPointMap...)
```

```
$aPoint: 10, 40;
$bPoint: 20, 20;
$aPointMap: (x1: 10, y1: 40);
$bPointMap: (x2: 20, y2: 20);

prop: midpoint($aPoint..., $bPointMap...);
// ok

prop: midpoint($aPointMap..., $bPoint...);
// Error: Variable keyword arguments must be a map (was 20, 20).
```

### Using Maps

```
prop: midpoint((x1:10, x2:20, y1:40, y2:20)...);
// ok

prop: midpoint(10, 40, (y2:20, x2:20)...);
prop: midpoint((y2:20, x2:20)..., 10, 40);
// ok

prop: midpoint((y1:40, x1:10)..., 20, 20);
prop: midpoint(20, 20, (y1:40, x1:10)...);
// Error: Argument $x1 was passed both by position and by name.
```

* using named params:

```
prop: midpoint($x1:10, $y1:40, (x2:20, y2:20)...);
prop: midpoint((x1:10, y1:40)..., $x2:20, $y2:20);
prop: midpoint($x1:10, (x2:20, y1:40)..., $y2:20);

prop: functionSumming6Numbers(a:1, b:2)..., $c:3, $d:4, (e:5, f:6)...);
// ok too
```

## `...` in a Function Definition

```
@function sum($ns...) {
  $sum: 0;
  @each $n in $ns {
    $sum: $sum + $n;
  }
  @return $sum;
}
```

```
propA: sum(1,2,3,4);
propB: sum((1,2,3,4)...);

propC: sum((1,2)...,3,4);
propD: sum(1,2,(3,4)...);
propE: sum(1,(2,3)...,4);

propF: sum((1,2)..., (3,4)...);
// Error: Variable keyword arguments must be a map (was 3, 4).
```