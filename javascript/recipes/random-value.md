# Getting a Random Value

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
