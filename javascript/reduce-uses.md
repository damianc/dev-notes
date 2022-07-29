# `reduce()` Uses

* [General](#general)
  - [Counting Elements](#counting-elements)
  - [Grouping Elements](#grouping-elements)
  - [Flat](#flat)
* [Numbers](#numbers)
  - [Average](#average)
  - [Minimum and Maximum Value](#minimum-and-maximum-value)
  - [Factorial](#factorial)
  - [Bitwise Flags](#bitwise-flags)
* [Strings](#strings)
  - [Object to Query String](#object-to-query-string)
  - [Query String to Object](#query-string-to-object)
* [Functions](#functions)
  - [Combine Functions](#combine-functions)
* [RegExps](#regexps)
  - [Test Input with Multiple _Sticky_ RegExps](#test-input-with-multiple-sticky-regexps)
* [HTML Elements](#html-elements)
  - [Nested](#nested)
  - [Siblings](#siblings)
  - [Repeated Template with Data](#repeated-template-with-data)
* [Entries](#entries)
  - [Entries to Object](#entries-to-object)
  - [Object to Entries](#object-to-entries)
* [Arrays of Objects](#arrays-of-objects)
  - [Counting](#counting)
  - [Collecting](#collecting)
* [Maps](#maps)
  - [Filter Empty Values in Object](#filter-empty-values-in-object)
* [Sets](#sets)
  - [Common and Unique Items](#common-and-unique-items)
* [Objects](#objects)
  - [Link Objects with Protos](#link-objects-with-protos)
* [Coordinates](#coordinates)
  - [Polygon Length](#polygon-length)
  - [Closest Sibling](#closest-sibling)


## General

### Counting Elements

```
function count(arr, match) {
  return arr.reduce((acc, curr) => acc + (
    (typeof match === 'function' && match(curr)) ||
    curr === match
  ), 0);
}

count([1, 2, 3, 4, 2, 2], 2);
// 3

count([1, 2, 3, 4, 5, 6], x => x % 2 === 0);
// 3

count([1, 2, 3, 4, 5, 6], x => !(x % 3));
// 2

count([1, 2, 3, 4, 5, 6], 100);
// 0
```

### Grouping Elements

```
function group(arr, labelFactory) {
  return arr.reduce((acc, curr) => {
    const g = { ...acc };
    const label = typeof labelFactory === 'function' ? labelFactory(curr) : curr[labelFactory];

    if (!(label in g)) g[label] = [];
    g[label] = [ ...g[label], curr ];
    return g;
  }, {});
}

group([1,2,3,4,5,6], x => x % 2 === 0 ? 'even' : 'odd');
// { odd: [1,3,5], even: [2,4,6] }

group(['a', 'bb', 'cc', 'ddd'], 'length');
// { 1: ['a'], 2: ['bb', 'cc'], 3: ['ddd'] }

group([
  { name: 'Mark', country: 'PL' },
  { name: 'Adam', country: 'US' },
  { name: 'John', country: 'US' }
], 'country');
// {
//   PL: [{name: 'Mark', country: 'PL'}],
//   US: [{name: 'Adam', country: 'US'}, {name: 'John', country: 'US'}]
// }
```

### Flat

```
function flat(arr) {
  return arr.reduce((acc, curr) => {
    return Array.isArray(curr) ? [...acc, ...curr] : [...acc, curr];
  }, []);
}

flat([1, 2, 3, 4, [5, 6]]);
// [1, 2, 3, 4, 5, 6]

flat([1, 2, 3, 4, [5, 6, [7, 8]] ]);
// [1, 2, 3, 4, 5, 6, [7, 8]]
```

#### Deep Flat

```
function deepFlat(arr) {
  return arr.reduce((acc, curr) => {
    return Array.isArray(curr)
      ? [...acc, ...deepFlat(curr)]
      : [...acc, curr];
  }, []);
}

deepFlat([1, 2, [3, 4, 5, [6, 7, [8, [9]] ] ] ]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Numbers

### Average

```
function avg(nums) {
  return nums.reduce((acc, curr, idx, arr) => {
    return (acc + curr) / (idx === arr.length - 1 ? arr.length : 1);
  });
}

avg([1, 2, 3, 4]);
// 2.5
```

```
function avgByKey(objArr, key) {
  return objArr.reduce((acc, { [key]: field }, idx, arr) => {
    return (acc + field) / (idx === arr.length - 1 ? arr.length : 1);
  }, 0);
}

avgByKey([
  { name: 'John', age: 22 },
  { name: 'Mark', age: 21 },
  { name: 'Mark', age: 17 }
], 'age');
// 20
```

### Minimum and Maximum Value

```
function min(nums) {
  return nums.reduce((acc, curr) => {
    return curr < acc ? curr : acc;
  });
}

function max(nums) {
  return nums.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
  });
}

min([1, 2, 3, 4]) // 1
min([1, 2, 3, 4, 0]) // 0
min([2, 4, -10, 0]) // -10
min([-1, -10, -100]) // -100

max([1, 2, 3, 4]) // 4
max([1, 2, 3, 4, 0]) // 4
max([2, 4, -10, 4]) // 4
max([-1, -10, -100]) // -1
```

### Factorial

```
function factorial(n) {
  return 'x'.repeat(n).split('').reduce((acc, _, idx) => {
    return acc * (idx + 1);
  }, 1);
}

factorial(0) // 1
factorial(1) // 1
factorial(2) // 2
factorial(3) // 6
factorial(4) // 24
factorial(5) // 120
factorial(6) // 720
factorial(7) // 5040
factorial(8) // 40320
```

### Bitwise Flags

```
function createRole(perms) {
  return perms.reduce(
    (acc, curr) => acc | curr,
    0
  );
}


const Perm = {
  READ: 0b1,
  WRITE: 0b10,
  EDIT: 0b100,
  DELETE: 0b1000,
  can: (role, permChecked) => (role & permChecked) === permChecked
};

const Role = {
  Remover: createRole([Perm.READ, Perm.DELETE])
};

Perm.can(Role.Remover, Perm.READ) // true
Perm.can(Role.Remover, Perm.WRITE) // false
Perm.can(Role.Remover, Perm.EDIT) // false
Perm.can(Role.Remover, Perm.DELETE) // true
```

## Strings

### Object to Query String

```
function queryParams(obj) {
  return Object.entries(obj).reduce((acc, [p,v], idx, arr) => {
    return
      acc +
      `${p}=${encodeURIComponent(v)}${idx !== arr.length-1 ? '&' : ''}`;
  }, '?');
}

queryParam({ page: 1, query: 'something cool', lang: 'en' })
// '?page=1&query=something%20cool&lang=en'
```

### Query String to Object

```
function fromQueryString(queryStr) {
  return queryStr.split(/[?&]/).reduce((acc, curr) => {
    if (!curr) return acc;

    const [p, v] = curr.split('=');

    return {
      ...acc,
      [p]: decodeURIComponent(v)
    };
  }, {});
}

fromQueryString('?page=1&query=something%20cool&lang=en');
// {page: '1', query: 'something cool', lang: 'en'}
```

## Functions

### Combine Functions

```
const funcs = [
  x => x + 10,
  x => x * 10,
  x => x / 2
];

const combined = funcs.reduce((acc, curr) => {
  return x => curr(acc(x));
}, x => x);

combined(10);
// 100
// (10 + 10 = 20 -> 20 * 10 = 200 -> 200 / 2 = 100)
```

> `curr(acc(x))` -> `acc(curr(x))`: `60` (10 / 2 = 5 -> 5 * 10 = 50 -> 50 + 10 = 60)

## RegExps

### Test Input with Multiple _Sticky_ RegExps

```
function reTest(
  inputStr,
  reArr,
  reMap
) {
  const m = reArr.map(re => reMap[re]);
  m.push(/$/y);

  const [, match] = m.reduce(([lastIdx, res], curr) => {
    curr.lastIndex = lastIdx;
    const t = curr.test(inputStr);

    return [
      curr.lastIndex,
      res && t
    ];
  }, [0, true]);

  return match;
}
```

```
reTest('2020-06-01', ['d4', 'dash', 'd2', 'dash', 'd2'], {
  d2: /\d{2}/y,
  d4: /\d{4}/y,
  dash: /\-/y
});
// true

reTest('2020-06-010', ['d4', 'dash', 'd2', 'dash', 'd2'], {
  d2: /\d{2}/y,
  d4: /\d{4}/y,
  dash: /\-/y
});
// false
```

## HTML Elements

### Nested

```
function markupTree(tree) {
  tree.reverse().reduce((acc, curr) => {
    const { $elem, ...attrs } = curr;
    const elem = document.createElement($elem);

    Object.entries(attrs).forEach(([attr, val]) => {
      elem.setAttribute(attr, val);
    });

    elem.append(acc);
    return elem;
  }, document.createDocumentFragment());
}

const markup = markupTree([
  {
    $elem: 'div', id:'article', class:'section'
  }, {
    $elem: 'p',
    id: 'box',
    class: 'line line-main',
    title: 'Title',
    'aria-label': 'Title'
  }, {
    $elem:'img',
    src:'./photo.png',
    alt:'Photo'
  },
]);
// <div id="article" class="section">
//   <p id="box" class="line line-main" title="Title" aria-label="Title">
//     <img src="./photo.png" alt="Photo">
//   </p>
// </div>
```

### Siblings

```
function listMarkup(points, ordered = false) {
  return points.reduce((acc, curr) => {
    const li = document.createElement('li');
    li.textContent = curr;

    acc.append(li);
    return acc;
  }, document.createElement(ordered ? 'ol' : 'ul'));
}

listMarkup(['Point 1', 'Point 2'])
// <ul>
//   <li>Point 1</li>
//   <li>Point 2</li>
// </ul>

listMarkup(['Point 1', 'Point 2'], true)
// <ol>
//   <li>Point 1</li>
//   <li>Point 2</li>
// </ol>
```

### Repeated Template with Data

```
function htmlFor(container, template, data) {
  return data.reduce((acc, curr) => {
    const parsed = template.replace(
      /\{\{\s*(\w+)\s*\}\}/g,
      (w, m) => m in curr ? curr[m] : w
    );

    acc.insertAdjacentHTML('beforeend', parsed);
    return acc;
  }, container);
}
```

```
htmlFor(
  document.createElement('ul'), `
    <li class="item item-{{ priority }}">
      {{ name }}
    </li>
  `, [
    { priority: 'high', name: 'Buy food' },
    { priority: 'medium', name: 'Wash car' }
  ]
);

// <ul>​
//   <li class=​"item item-high">​ Buy food ​</li>​
//   <li class=​"item item-medium">​ Wash car ​</li>​
// </ul>​
```

## Entries

### Entries to Object

```
function fromEntries(entries) {
  return entries.reduce((acc, [k,v]) => ({
    ...acc,
    [k]: v
  }), {});
}

fromEntries([['a', 1], ['b', 2]]);
// {a: 1, b: 2}
```

### Object to Entries

```
function toEntries(obj) {
  return Object.keys(obj).reduce((acc, curr) => [
      ...acc,
      [curr, obj[curr]]
    ], []);
}

toEntries({a: 1, b: 2});
// [ ['a', 1], ['b', 2] ]
```

## Arrays of Objects

### Counting

```
function count(arr) {
  return arr.reduce((acc, curr) => {
    if (!(curr in acc)) acc[curr] = 0;

    return {
      ...acc,
      [curr]: acc[curr] + 1
    };
  }, {});
}

count(['A', 'B', 'C', 'A', 'A', 'B'])
// {A: 3, B: 2, C: 1}
```

```
function countByKey(objArr, key) {
  return objArr.reduce((acc, { [key]: field }) => {
    if (!(field in acc)) acc[field] = 0;

    return {
      ...acc,
      [field]: acc[field] + 1
    };
  }, {});
}

countByKey([
  {
    name: 'John',
    age: 22
  }, {
    name: 'Mark',
    age: 21
  }, {
    name: 'Mark',
    age: 17
  }
], 'name')
// {John: 1, Mark: 2}
```

### Collecting

```
function collectByKey(objArr, key, itemKey) {
  return objArr.reduce((acc, { [key]: k, [itemKey]: i }) => {
    if (!(k in acc)) acc[k] = [];

    return {
      ...acc,
      [k]: [...acc[k], i]
    };
  }, {});
}

const data = [
  {
  	student:'Mark',
  	exam:1,
  	mark:4
  }, {
  	student:'John',
  	exam:1,
  	mark:5
  }, {
  	student:'Eva',
  	exam:1,
  	mark:2
  }, {
  	student: 'Mark',
  	exam:2,
  	mark:5
  }
];

collectByKey(data, 'student', 'mark');
// {
//   Eva: [2],
//   John: [5],
//   Mark: [4, 5]
// }

collectByKey(data, 'exam', 'mark');
// {
//   1: [4, 5, 2],
//   2: [5]
// }

collectByKey(data, 'mark', 'student');
// {
//   2: ['Eva'],
//   4: ['Mark'],
//   5: ['John', 'Mark']
// }
```

## Maps

### Filter Empty Values in Object

```
function filterEmpty(obj) {
  return Object.entries(obj).reduce((acc, [k,v]) => {
    if (!v) return acc;

    return {
      ...acc,
      [k]: v
    };
  }, {});
}

filterEmpty({name: 'foobar', size: 'S', color: '', pattern: ''});
// { name: 'foobar', size: 'S' }
```

## Sets

### Common and Unique Items

```
function items(arrsArr, mode = 'common') {
  return arrsArr.reduce(([coll, idxs], curr, idx, arr) => {
    const idxEnumed = [...idxs, idx];
    const update = curr.reduce((a, c) => {
      return {
        ...a,
        [c]: c in a ? [...a[c], idx] : [idx]
      };
    }, coll);

    if (idx === arr.length - 1) {
      return Object.entries(update).filter(([k, v]) => {
        if (mode === 'common') {
          return v.join() === idxEnumed.join();
        } else if (mode === 'unique') {
          return v.join().indexOf(',') === -1;
        }
      }).map(([k, v]) => +k == k ? +k : k);
    } else {
      return [update, idxEnumed];
    }
  }, [{}, []]);
}


const numArrs = [ [1, 2, 3, 4], [2, 2, 8, 4], [4, 12, 20] ];

items(numArrs) // [4]
items(numArrs, 'common') // [4]
items(numArrs, 'unique') // [1, 3, 8, 12, 20]


const charArrs = [ ['a', 'b'], ['b', 'c'] ];

items(charArrs) // ['b']
items(charArrs, 'common') // ['b']
items(charArrs, 'unique') // ['a', 'c']
```

## Objects

### Link Objects with Protos

```
const obj = [
  {a: 1},
  {a: 2, b: 3},
  {b: 4, c: 5}
].reduce((acc, curr) => {
    return Object.setPrototypeOf(curr, acc);
}, {});

obj;
/*
  {b: 4, c: 5}
  |-- {a: 2, b: 3}
    |-- {a: 1}
*/
```

```
function linkWithProtos(...objs) {
  return [...objs].reverse().reduce((acc, curr) => {
    return Object.setPrototypeOf(curr, acc);
  }, {});
}

const obj = linkWithProtos(
  {a: 1},
  {a: 2, b: 3},
  {b: 4, c: 5}
);

obj;
/*
  {a: 1}
  |-- {a: 2, b: 3}
    |-- {b: 4, c: 5}
*/
```

## Coordinates

### Polygon Length

```
[
  [0, 0], [50, 0], [50, 25], [75, 50],
  [120, 100], [50, 200], [80, 100], [250, 250]
].reduce((acc, [xa, ya], idx, arr) => {
  if (idx === arr.length - 1) return +acc.toFixed(2);

  const [xb, yb] = arr[idx + 1];
  return acc + Math.sqrt( (xb - xa)**2 + (yb - ya)**2 );
}, 0);
// 630.81
```

### Closest Sibling

```
function closestSibling(ctx, siblings) {
  return siblings.reduce((acc, [xa, ya], idx) => {
    const [xb, yb] = ctx;
    const dist = +Math.sqrt(
      (xb - xa)**2 + (yb - ya)**2
    ).toFixed(2);

    return dist < acc.dist
      ? {dist, idx, coords: [xa, ya]}
      : acc;
  },  {dist: Number.MAX_SAFE_INTEGER});
}

const siblings = [
  [0, 0], [50, 0],
  [50, 25], [75, 50],
  [120, 100], [50, 200],
  [80, 100], [250, 250]
];

closestSibling([50, 0], siblings);
// {dist: 0, idx: 1, coords: [50, 0]}

closestSibling([30, 100], siblings);
// {dist: 50, idx: 6, coords: [80, 100]}

closestSibling([80, 205], siblings);
// {dist: 30.41, idx: 5, coords: [50, 200]}
```