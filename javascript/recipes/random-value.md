# Getting a Random Value

## A Single Value

- random value $\in$ [0,1):

```
Math.random()
```

- random value $\in$ [min,max):

```
Math.random() * (max-min) + min
```

- random value (integer) $\in \Bbb{Z} \ \cap$ [min,max):

```
function random(min, max) {
  const rMin = Math.ceil(min);
  const rMax = Math.floor(max);
  return Math.floor(
    Math.random() * (rMax-rMin) + rMin
  );
}
```

- random value (integer) $\in \Bbb{Z} \ \cap$ [min,max]:

```
function random(min, max) {
  const rMin = Math.ceil(min);
  const rMax = Math.floor(max);
  return Math.floor(
    Math.random() * (rMax-rMin+1) + rMin
  );
}
```

## Multiple Values

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
