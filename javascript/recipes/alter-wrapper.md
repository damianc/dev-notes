# Alter Wrapper

```
function alter(obj, processor) {
  let copy;
  if (Array.isArray(obj)) {
    copy = [...obj];
  } else if (typeof obj === 'object' && obj !== null) {
    copy = {...obj};
  } else return obj;

  processor(copy);
  return copy;
}
```

use:

```
const arr = [1,2,3,4];
alter(arr, a => a.reverse());
// [4, 3, 2, 1]
arr
// [1, 2, 3, 4]

const obj = {a:1, b:2};
alter(obj, o => o.a++);
// {a: 2, b: 2}
obj
// {a: 1, b: 2}
```