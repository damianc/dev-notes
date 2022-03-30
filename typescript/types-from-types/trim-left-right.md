# `TrimLeft<Str>`, `TrimRight<Str>` and `Trim<Str>`

```
const Trimable = [' ', '\t', '\n', '\r'] as const;
```

## `TrimLeft<Str>`

```
type TrimLeft<
  Str extends string
> = Str extends `${typeof Trimable[number]}${infer T}`
    ? TrimLeft<T>
    : Str;

type TL1 = TrimLeft<'    abc    '>;
// 'abc    '

type TL2 = TrimLeft<` \t\t
\t\t
\n\t\t
\n\r
abc \t\t`>;
// 'abc \t\t'
```

## `TrimRight<Str>`

```
type TrimRight<
  Str extends string
> = Str extends `${infer T}${typeof Trimable[number]}`
    ? TrimRight<T>
    : Str;

type TR1 = TrimRight<'    abc    '>;
// '    abc'

type TR2 = TrimRight<` \t\t abc \t\t
\n\t\t\n
\n\r\n\n`>;
// ' \t\t abc'
```

## `Trim<Str>`

```
type Trim<
  Str extends string
> = TrimLeft<TrimRight<Str>>;

type T1 = Trim<'    abc    '>;
// 'abc'

type T2 = Trim<`
 \t\t
 \n\r
 abc
 \r\n
 \t\t
`>;
// 'abc'
```