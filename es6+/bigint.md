# `BigInt`

```
var a = 25 ** 25;
// 8.881784197001253e+34

var b = BigInt(25 ** 25);
// 88817841970012530010487453583933440n
```

## Constructor

```
var hugeString = BigInt('9007199254740991');
// 9007199254740991n

var hugeHex = BigInt('0x1fffffffffffff');
// 9007199254740991n

var hugeBin = BigInt('0b11111111111111111111111111111111111111111111111111111');
// 9007199254740991n
```

## Literal

```
var a = 2500000000000000000000n;
```

## Type Checking

```
typeof 2n
// "bigint"

2n == 2
// true

2n === 2
// false

1 < 2n
// true

2 >= 2n
// true

[1, 2n, 3, 4n].indexOf(4n)
// 3

[1, 2n, 3, 4n].indexOf(4)
// -1
```

## Sorting an Array of `BigInt` and `Number` Values

```
var mixed = [4n, 6, -12n, 10, 4, 0, 0n];

mixed.sort();
// [-12n, 0, 0n, 4n, 4, 6, 10]
// X is before/after Xn if X does so in the original array
```

## Conversion to Other Types

```
var a = 123456789123456789123456789n;

var b = Number(a);
// 1.2345678912345679e+26

var c = a.toString();
// or: String(a), ''+a
// "123456789123456789123456789"
```

## Precision Loss

```
var a = 123456789123456789123456789n;

var b = Number(a);
// 1.2345678912345679e+26

var x = BigInt(b);
// 123456789123456791337762816n
// not 123456789123456789123456789n
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

## `BigInt` Cannot Be Float Number

```
var x = 5n / 2n;
// 2n
```

## Typed Arrays of `BigInt`

* `BigInt64Array`
* `BigUInt64Array`
