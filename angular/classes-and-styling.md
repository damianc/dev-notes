# Classes and styling

## Classes

### `[ngClass]` directive

> `[ngClass]="string | string[] | Set<string> | Record<string,boolean> | Map<string,boolean>"`

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

## Styling

### `[ngStyle]` directive

> `[ngClass]="Record<string,any> | Map<string,any>"`

```
<div [ngStyle]="getStyling()">
  ...
</div>
```

```
getStyling() {
  return {
    color: 'red',
    'marginLeft.px': 150,
    'font-size.px': 30
  };
}

getStylingMap() {
  return new Map([
    ['color', 'red'],
    ['marginLeft.px', 150],
    ['font-size.px', 30]
  ]);
}
```

### `[style.*]` attribute

- `[style.color]="'red'"`
- `[style.marginLeft.px]="150"`
- `[style.font-size.px]="30"`
- `[style.height.%]="100"`
