# `match()` vs. `exec()` and RegExp with/without the `g` Flag

## Summary

| | RegExp without `g` | RegExp with `g` |
|--|--|--|
| `match()` | `[WHOLE_MATCH_1, ...MATCH_1_GROUPS]` | `[WHOLE_MATCH_1, WHOLE_MATCH_2 ...]` |
| `exec()` | `[WHOLE_MATCH_1, ...MATCH_1_GROUPS]` | `[WHOLE_MATCH_N, ...MATCH_N_GROUPS]`, `null` if there's no more matches (another call repeats the process) |


## RegExp without the `g` Flag

### `match()`

```
const str = 'A1aB2bC3cD4d';
const re = /([A-Z])[0-9]([a-z])/;

str.match(re);
// ['A1a', 'A', 'a']

str.match(re);
// ['A1a', 'A', 'a']
```

### `exec()`

```
const str = 'A1aB2bC3cD4d';
const re = /([A-Z])[0-9]([a-z])/;

re.exec(str);
// ['A1a', 'A', 'a']

re.exec(str);
// ['A1a', 'A', 'a']
```

## RegExp with the `g` Flag

### `match()`

```
const str = 'A1aB2bC3cD4d';
const re = /([A-Z])[0-9]([a-z])/g;

str.match(re);
// ['A1a', 'B2b', 'C3c', 'D4d']

str.match(re);
// ['A1a', 'B2b', 'C3c', 'D4d']
```

### `exec()`

```
const str = 'A1aB2bC3cD4d';
const re = /([A-Z])[0-9]([a-z])/g;

re.exec(str);
// ['A1a', 'A', 'a']
re.exec(str);
// ['B2b', 'B', 'b']
re.exec(str);
// ['C3c', 'C', 'c']
re.exec(str);
// ['D4d', 'D', 'd']
re.exec(str);
// null

re.exec(str);
// ['A1a', 'A', 'a']
// ...
```

* use with `while` loop:

```
let match;
while(match = re.exec(str)) {
  console.log(match);
}

// ['A1a', 'A', 'a']
// ['B2b', 'B', 'b']
// ['C3c', 'C', 'c']
// ['D4d', 'D', 'd']
```

* use with `for` loop:

```
for (let match; match !== null; match = re.exec(str)) {
  console.log(match);
}

// ['A1a', 'A', 'a']
// ['B2b', 'B', 'b']
// ['C3c', 'C', 'c']
// ['D4d', 'D', 'd']
```

```
for (let match; (match = re.exec(str)) !== null; ) {
  console.log(match);
}

// ['A1a', 'A', 'a']
// ['B2b', 'B', 'b']
// ['C3c', 'C', 'c']
// ['D4d', 'D', 'd']
```