# Recursive Functions

## `repeatString()`

```
@function repeatString($string, $times: 1, $acc: '') {

  @if ($times >= 1) {

    @return repeatString($string, $times - 1, '#{$acc}#{$string}');

  } @else {

    @return $acc;

  }

}

 
span.wrong-word {
  content: repeatString('*', 8);
}
 ```

output:

```
span.wrong-word {
  content: '********';
}
 ```

## `mod()`

```
@function mod($x, $y) {

  @if $x < $y {

    @return $x;

  } @else {

    @return mod($x - $y, $y);

  }

}


$cols: 6;
$col-width: 150px;

.col-last {
  width: mod(1200px, $cols * $col-width);
}
```

output:

```
.col-last {
  width: 300px;
}
```

## `fittableSlices()`

```
@function fittableSlices($x, $y, $z: 0) {

  @if $x < $y {

    @return $z;

  } @else {

    @return fittableSlices($x - $y, $y, $z + 1);

  }

}


$base: 1250px;
$thousandSquare: 250px;
$thousandEighth: 125px;

.row-of-square {
  grid-columns: repeat(fittableSlices($base, $thousandSquare), 1fr);
}
.row-of-eighth {
  grid-columns: repeat(fittableSlices($base, $thousandEighth), 1fr);
}
```

output:

```
.row-of-square {
  grid-columns: repeat(5, 1fr);
}
.row-of-eighth {
  grid-columns: repeat(10, 1fr);
}
```