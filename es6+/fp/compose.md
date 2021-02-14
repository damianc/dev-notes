# `compose`

## Implementation

```
function compose(...funcs) {
  return function (n) {
    let res = n;
    funcs.reverse();
    
    for (fn of funcs) {
        res = fn(res);
    }
    
    return res;
  }
}
```

## Use

```
const plus2 = n => n + 2;
const double = n => n * 2;
const minus1 = n => n - 1;

const x = compose(plus2, double, minus1)(10);
// 20
```

Functions are called from the right to the left: `10 - 1 = 9`, `9 * 2 = 18` and then `18 + 2 = 20`.