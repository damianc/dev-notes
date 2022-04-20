# Deep Clone of Object

```
function deepClone(object) {
  const newObject = {};

  for (let key in object) {
    const obj = object[key];
    if (typeof obj === 'object' && obj !== null) {
      newObject[key] = deepClone(obj);
    } else {
      newObject[key] = obj;
    }
  }

  return newObject;
}
```

* use

```
const obj = {a:1, b: {
  c: 2,
  d: {
    e: 3,
    f: {
      g:4
    }
  }
}};

const cp = deepClone(obj);

cp.a = 10;
cp.b.c = 20;
cp.b.d.e = 30;
cp.b.d.f.g = 40;

cp;
// { a: 10, b: { c: 20, d: { e: 30, f: { g: 40 } } } }

obj;
// { a: 1, b: { c: 2, d: { e: 3, f: { g: 4 } } } }
```