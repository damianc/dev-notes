# [Weak]Map vs. [Weak]Set

## Maps

```
new Map(Iter<Array:[[key, value] ...]>?)
new WeakMap(Iter<Array:[[object, value] ...]>?)
```

### Differences

| | `Map` | `WeakMap` |
|-|-------|-----------|
| type of key | any | object |
| GC | no | yes |
| `get()`, `set()` and `delete()` methods | yes | yes |
| `clear()` method | yes | no |
| `size` property | yes | no |
| iterators | `entries()` / `keys()` / `values()` | none |

## Sets

```
new Set(Iter<Array:[value ...]>?)
new WeakSet(Iter<Array:[object ...]>?)
```

### Differences

| | `Set` | `WeakSet` |
|-|-------|-----------|
| typ of value | any | object |
| GC | no | yes |
| `add()`, `delete()` and `has()` methods | yes | yes |
| `clear()` method | yes | no |
| `size` property | yes | no |
| iterators | `entries()` / `keys()` / `values()` | none |
