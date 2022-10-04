# `Object.is()`

## Objects

```
const foo = { a: 1 };
const bar = { a: 1 };
const fooRef = foo;

Object.is(foo, foo)
// true

Object.is(foo, fooRef)
// true

Object.is(foo, bar)
// false

Object.is(fooRef, bar)
// false

Object.is({ a: 1 }, bar)
// false

Object.is({}, {})
// false
```

## Arrays

```
const arr = [];
const arr2 = [];
const arr2Ref = arr2;

Object.is(arr, arr)
// true

Object.is(arr2, arr2Ref)
// true

Object.is(arr, arr2)
// false

Object.is(arr2Ref, arr)
// false

Object.is(arr, [])
// false

Object.is([], [])
// false
```

## Numbers

| Comparison | Result |
|--|--|
| `Object.is(25, 25)` | `true` |
| `Object.is(25, +25)` | `true` |
| `Object.is(-25, -25)` | `true` |
| `Object.is(25, -25)` | `false` |

### (Un)signed Zeros

| Comparison | Result |
|--|--|
| `Object.is(0, +0)` | `true` |
| `Object.is(-0, -0)` | `true` |
| `Object.is(0, -0)` | `false` |
| `Object.is(+0, -0)` | `false` |

### `BigInt()`

```
const biZero = BigInt(0); // 0n
const biNZero = BigInt(-0); // 0n

Object.is(biZero, biZero)
// true

Object.is(biZero, biNZero)
// true
```

```
const biFour = BigInt(4); // 4n
const biNFour = BigInt(-4); // -4n

Object.is(biFour, biFour)
// true

Object.is(biFour, biNFour)
// false
```

## Strings

| Comparison | Result |
|--|--|
| `Object.is('foo', 'foo')` | `true` |
| `Object.is('foo', 'bar')` | `false` |
| `Object.is('4', 4)` | `false` |

## Symbols

```
Object.is(Symbol.iterator, Symbol.iterator)
// true
```

```
const sym = Symbol('foo');

Object.is(sym, sym)
// true

Object.is(sym, Symbol('foo'))
// false

Object.is(sym, Symbol.for('foo'))
// false
```

```
const symf = Symbol.for('bar');

Object.is(symf, symf)
// true

Object.is(symf, Symbol.for('bar'))
// true

Object.is(symf, Symbol('bar'))
// false
```

## Other

| Comparison | Result |
|--|--|
| `Object.is(null, null)` | `true` |
| `Object.is(undefined, undefined)` | `true` |
| `Object.is(undefined, null)` | `false` |
| `Object.is(undefined, ({}).foo)` | `true` |
| `Object.is(NaN, NaN)` | `true` |
| `Object.is(window, window)` | `true` |
| `Object.is(Math, Math)` | `true` |