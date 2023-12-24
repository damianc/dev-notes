# `keyof any`

`keyof any` is a trick to write types that can be used to index objects, i.e., `string | number | symbol`.

```
type Record<K extends keyof any, T> = {
  [P in K]: T;
}
```

```
type X = Record<'a' | 'b', number>;
// { a: number; b: number; }
```
