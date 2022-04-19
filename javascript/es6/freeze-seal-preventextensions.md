# `preventExtensions()`, `seal()` and `freeze()`

| | addition | removal | update |
|--|--|--|--|
| `preventExtensions()` | no | yes | yes |
| `seal()` | no | no | yes |
| `freeze()` | no | no | no |

```
const obj = {a: 1, b: 2};
Object.freeze(obj);

obj.c = 3;
obj.b = 100;
delete obj.a;

obj;
// {a: 1, b: 2}
```

## Checking Object

| | `preventExtensions()` | `seal()` | `freeze()` |
|--|--|--|--|
| `isExtensible()` | `false` | `false` | `false` |
| `isSealed()` | `false` | `true` | `true` |
| `isFrozen()` | `false` | `false` | `true` |

```
const obj = { a: 1 };
Object.freeze(obj);

Object.isFrozen(obj);
// true

Object.isSealed(obj);
// true

Object.isExtensible(obj);
// false
```

### Custom Names

```
Object.defineProperties(Object.prototype, {
  canWrite: {
    value() {
      return Object.isExtensible(this);
    }
  },
  canUpdate: {
    value() {
      return !Object.isFrozen(this);
    }
  },
  canRemove: {
    value() {
      return !Object.isSealed(this);
    }
  }
});

const obj = { a: 1 };
Object.seal(obj);

obj.canWrite();
// false

obj.canUpdate();
// true

obj.canRemove();
// false
```

## Unfreezing Object

```
const obj = {a: 1, b: 2};
Object.freeze(obj);

obj.c = 3;
obj.b = 100;
delete obj.a;

obj;
// {a: 1, b: 2}


/* unfreezing */

const unfrozen = { ...obj };

unfrozen.c = 3;
unfrozen.b = 100;
delete unfrozen.a;

unfrozen;
// { b: 100, c: 3 }
```