# `reduce()` Uses

* [Numbers](#numbers)
  - [Average](#average)
  - [Minimum and Maximum Value](#minimum-and-maximum-value)
  - [Factorial](#factorial)
* [Strings](#strings)
  - [Object to Query String](#object-to-query-string)
  - [Query String to Object](#query-string-to-object)
* [HTML Elements](#html-elements)
  - [Nested](#nested)
  - [Siblings](#siblings)
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
      }).map(([k, v]) => k);
    } else {
      return [update, idxEnumed];
    }
  }, [{}, []]);
}

const arrs = [ [1, 2, 3, 4], [2, 2, 8, 4], [4, 12, 20] ];

items(arrs)
// ['4']

items(arrs, 'common')
// ['4']

items(arrs, 'unique')
// ['1', '3', '8', '12', '20']
```