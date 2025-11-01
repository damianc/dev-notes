# Random Number from a Range

```
function random(min, max) {
  const r = Math.random() * (max-min+1);
  return Math.floor(r) + min;
}
```

> Better implementations may be found in the note [Getting a Random Value](https://github.com/damianc/dev-notes/blob/master/javascript/recipes/random-value.md).

## `n` Random Numbers from a Range

```
function randoms(count, minValue, maxValue) { 
  count = Math.min(count, maxValue-minValue);

  const res = [];
  while (res.length !== count) {
    const rand = random(minValue, maxValue);
    if (res.indexOf(rand) === -1) res.push(rand);
  }

  return res;
}
```
