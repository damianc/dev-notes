# Random Number from a Range

```
function random(min, max) {
  const r = Math.random() * (max-min+1);
  return Math.floor(r) + min;
}
```
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
