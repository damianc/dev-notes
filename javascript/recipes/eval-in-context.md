# Calling `eval()` in a Context

## Function: `exec()`

```
function exec(code, context) {
  const ctx = Object.entries(context).map(([k, v]) => {
    if (typeof v === 'string') {
      v = v.replace(/"/g, '\\"');
      v = `"${v}"`;
    }

    if (typeof v === 'object' && v !== null) {
      v = JSON.stringify(v);
    }

    return `const ${k} = ${v};`
  }).join('');
  
  return eval(`
    (function () {
      ${ctx}
      return ${code};
    })()
  `);
}
```

## Use

* numbers:

```
exec('a + b', {
  a: 10,
  b: 20
})
// 30
```

* strings:

```
exec('name.toUpperCase() + "!"', {
  name: 'John'
})
// 'JOHN!'
```

```
exec('name.toUpperCase() + "!"', {
  name: 'John "Great"'
})
// 'JOHN "GREAT"!'

exec('name.toUpperCase() + "!"', {
  name: "John 'Great'"
})
// "JOHN 'GREAT'!"
```

* objects:

```
exec('foo.bar + 10', {
  foo: {
    bar: 110
  }
})
// 120
```

* arrays:

```
exec('(arr[0] + arr[1]) / x', {
  arr: [10, 40],
  x: 2
})
// 25
```