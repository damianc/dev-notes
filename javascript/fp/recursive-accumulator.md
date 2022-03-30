# Recursive Accumulator

## Ex. 1: `fromEntries`

```
function fromEntries(entries, acc = {}) {
  if (!entries.length) return acc;

  const [k,v] = entries.shift();
  return fromEntries(entries, {
    ...acc,
    [k]: v
  });
}


fromEntries([['a', 10], ['b', 20]])
// {a: 10, b: 20}
```

## Ex. 2: `toEntries`

```
function toEntries(obj, acc = []) {
  const keys = Object.keys(obj);
  if (!keys.length) return acc;

  const [first] = keys;
  const [k,v] = [first, obj[first]];
  delete obj[first];

  return toEntries(obj, [...acc, [k,v]]);
}


toEntries({a: 1, b: 2})
// [['a', 1], ['b', 2]]
```