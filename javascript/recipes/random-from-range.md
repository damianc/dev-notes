# Random Number from a Range

```
function random(min, max) {
  const r = Math.random() * (max-min+1);
  return Math.floor(r) + min;
}
```
