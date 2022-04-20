# `(...[,param2]) => ...`

```
function callCb(cb) {
  return cb(1, 2, 3, 4);
}

callCb(
  (...[,second]) => second
);
// 2
```

## Real-World Example

```
function parse(template, data) {
  return template.replace(/@(\w+)/g, (...[, match]) => {
    return match in data ? data[match] : '@' + match;
  });
}

parse('@john, note that 2 + @x = @y, so @z', {
  x: 3,
  y: 5,
  z: 'back to school'
});

// '@john, note that 2 + 3 = 5, so back to school'
```