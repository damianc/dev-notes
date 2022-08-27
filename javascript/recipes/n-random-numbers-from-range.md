# `n` Random Numbers from a Range

```
function rands(count, minValue, maxValue) {
  const res = [];

  while (res.length !== count) {
    const rand = Math.ceil(Math.random() * (maxValue - minValue)) + minValue;
    if (res.indexOf(rand) === -1) res.push(rand);
  }

  return res;
}
```

* 10 random numbers from 20 to 80:

```
randoms(10, 20, 80);
// [52, 36, 38, 69, 47, 58, 80, 41, 30, 37]
// example result
```