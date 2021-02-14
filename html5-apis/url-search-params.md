# `URLSearchParams`

```
const params = new URLSearchParams();

params.set('query', 'laptop');
params.set('color', 'black');
params.append('color', 'white');

console.log('' + params);
// query=laptop&color=black&color=white
```

## Constructor

Constructor can be passed one of the following:

* nothing - `new URLSearchParams()`
* object - `new URLSearchParams({a: 1, b: 2})`
* map entities - `new URLSearchParams([['a', 1], ['b', 2]])`
* string:

```
const params = new URLSearchParams('a=1&b=2');
console.log('' + params);
// 'a=1&b=2'
```

### Full URLs

```
const url = 'https://example.com/en/search.html?a=1&b=2';

const params1 = new URLSearchParams(url);

console.log('' + params1);
// 'https%3A%2F%2Fexample.com%2Fen%2Fsearch.html%3Fa=1&b=2'

console.log([...params1.keys()])
// ['https%3A%2F%2Fexample.com%2Fen%2Fsearch.html%3Fa', 'b']

const urlForParams2 = new URL(url);
const params2 = new URLSearchParams(urlForParams2.search);

console.log('' + params2);
// 'a=1&b=2'
```

## `set()` and `append()`

* `set()` - sets a new value, discards previous one if set
* `append()` - adds a new value to the existing ones

```
const params = new URLSearchParams();

params.set('foo', 10);
params.set('foo', 20);

console.log('' + params);
// foo=20
```

```
const params = new URLSearchParams();

params.append('foo', 10);
params.append('foo', 20);

console.log('' + params);
// foo=10&foo=20
```

## `get()`, `getAll()` and `has()`

```
const params = new URLSearchParams();

params.set('a', 10);
params.append('b', 20);
params.append('b', 30);

console.log(params.get('a'));
// '10'

console.log(params.getAll('a'));
// ['10']

console.log(params.get('a'));
// '20'

console.log(params.getAll('a'));
// ['20', '30']

console.log(params.has('a'));
// true
```

## `delete()`

```
const params = new URLSearchParams();

params.append('foo', 10);
params.append('foo', 20);
params.append('bar', 30);
params.delete('foo');

console.log('' + params);
// bar=30
```

## Iterators

### `keys()`, `values()` and `entries()`

```
const params = new URLSearchParams();

params.set('x', 1);
params.set('y', 2);

console.log([...params.keys()]);
// ['x', 'y']

console.log([...params.values()]);
// ['1', '2']

console.log([...params.entries()]);
// [['x', '1'], ['y', '2']]
```

### `forEach()`

```
const params = new URLSearchParams();

params.set('a', 10);
params.set('b', 20);
params.set('c', 30);

params.append('c', 40);
params.append('d', 50);
params.append('d', 60);

params.forEach((val, key) => {
  console.log(val + ' @' + key);
});
10 @a
20 @b
30 @c
40 @c
50 @d
60 @d
```

## `sort()`

Sorts params by keys.

```
const params = new URLSearchParams();

params.set('x', 3)
params.set('a', 10);
params.set('z', 1)

console.log('' + params);
// 'x=3&a=10&z=1'

params.sort()

console.log('' + params);
// 'a=10&x=3&z=1'
```

* values are not sorted:

```
const params = new URLSearchParams();

params.append('a', 20);
params.append('a', 30);
params.append('a', 10);

console.log('' + params);
// 'a=20&a=30&a=10'

params.sort();

console.log('' + params);
// 'a=20&a=30&a=10'
```