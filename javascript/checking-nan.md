# Checking `NaN`

```
NaN == NaN
// false
```

```
const nan = NaN;

nan == nan
// false
```

## `isNaN()`, `Number.isNaN()` and `Object.is()`

* `isNaN()` - checks if a value currently is `NaN` or will be `NaN` when coerced to a number
* `Number.isNaN()` - checks if a value currently is `NaN`
* `Object.is(NaN, ...)` - checks if a value currently is `NaN`

| | `isNaN(...)` | `Number.isNaN(...)` | `Object.is(NaN, ...)` | `checkNaN(...)`* |
|--|--|--|--|--|
| `NaN` | `true` | `true` | `true` | `true` |
| `Number.NaN` | `true` | `true` | `true` | `true` |
| `0 / 0` | `true` | `true` | `true` | `true` |
|||||
| `'10'` | `false` | `false` | `false` | `false` |
| `'foo'` | `true` | `false` | `false` | `false` |
| `new Date('!')` | `true` | `false` | `false` | `false` |
| `2n` | `TypeError` | `false` | `false` | `false` |
| `undefined` | `true` | `false` | `false` | `false` |
|||||
| `null` | `false` | `false` | `false` | `false` |
| `true/false` | `false` | `false` | `false` | `false` |

\* since `NaN` is the only value that compares unequal to itself, we can perform a check with a self-comparison (`x !== x`):

```
function checkNaN(value) {
  return value !== value;
}
```


## `NaN` in Array

```
const arr = [2, 'foo', NaN, 100];

arr.indexOf(NaN)
// -1

arr.includes(NaN)
// true

arr.findIndex(n => isNaN(n))
// 1
arr.findIndex(n => Number.isNaN(n))
// 2
arr.findIndex(n => Object.is(NaN, n))
// 2
```