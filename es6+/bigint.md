# `BigInt`

```
var a = 25 ** 25;
// 8.881784197001253e+34

var b = BigInt(25 ** 25);
// 88817841970012530010487453583933440n
```

## Literal

```
var a = 2500000000000000000000n;
```

## `BigInt` Cannot Be Mixed with Other Types

```
var a = 25n;
var b = a ** 2n;
// 625n

var a = 25n;
var b = a ** 2;
// TypeError
```

## Typed Arrays of `BigInt`

* `BigInt64Array`
* `BigUInt64Array`
