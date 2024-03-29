# `Array.fill(object)`

## Problem

```
const arr = new Array(2).fill([]);
arr[0].push(1);

console.log(arr);
// [ [1], [1] ]
// not [ [1], [] ]


const arr2 = new Array(2).fill([0,0]);
arr2[0][0] = 1;

console.log(arr2);
// [ [1,0], [1,0] ]
// not [ [1,0], [0,0] ]


const arr3 = new Array(2).fill(
  (()=>[0,0])()
);
arr3[0][0] = 1;

console.log(arr3);
// [ [1,0], [1,0] ]
// not [ [1,0], [0,0] ]
```

```
const arr = new Array(2).fill(
  new Array(2).fill(0)
);
arr[0][0] = 1;

console.log(arr);
// [ [1,0], [1,0] ]
```

## Solution

```
const arr2 = fill2D(2,2,0);
arr2[0][0] = 1;

console.log(arr2);
// [ [1,0], [0,0] ]

function fill2D(m,n,value) {
  const arr = [];
  for (let i=1; i<=m; i++) {
    arr.push(new Array(n).fill(value));
  }
  return arr;
}
```
