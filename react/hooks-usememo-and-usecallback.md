# `useMemo()` and `useCallback()`

## `useMemo()`

```
const memoizedValue = useMemo(() => {
  computeValue(a, b);
}, [a, b]);
```

Normally, `const value = computeValue(a, b)` would be called on every render. With `useMemo()`, it will be called again only if `a` or `b` changes.

```
function NiceComponent({ size, theme }) {
  const config = useMemo(() => ({
    size,
    theme
  }), [size, theme]);

  return <FancyComponent config={config} />;
}
```

Without `useMemo()`, `config` object would be a new reference on every render.

## `useCallback()`

> `useCallback(fn, deps)` is equivalent to  `useMemo(() => fn, deps)`.

```
function NavComponent({ size, theme }) {
  const handleClick = useCallback(() => {
    // ...
  }, [size, theme]);

  return <ButtonComponent onClick={handleClick} />;
}
```

As long as `size` and `theme` remain unchanged, `handleClick` is the same function and `<ButtonComponent />` will not be unnecessarily re-rendered.

## Dependencies Array

For both hooks:

* if no array is provided, a new value will be computed on every render
* if empty array is provided, a value will be memoized once and always returned