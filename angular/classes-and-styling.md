# Classes and styling

## Classes

### `[ngClass]` directive

> `[ngClass]="string | string[] | Set<string> | Record<string,boolean> | Map<string,boolean>`

```
<div [ngClass]="getClass()">
  ...
</div>
```

```
getClass() {
  return 'foo bar baz';
}

getClassArr() {
  return ['foo', 'bar baz'];
}

getClassSet() {
  return new Set([
    'foo', 'bar baz'
  ]);
}

getClassObj() {
  return {
    foo: expr1,
    'bar baz': expr2
  };
}

getClassMap() {
  return new Map([
    ['foo', expr1],
    ['bar baz', expr2]
  ]);
}
```

### `[class.*]` attribute

- `[class.foo]="expr"`
- `[class.fooBar]="expr"`
- `[class.foo-bar]="expr"`
