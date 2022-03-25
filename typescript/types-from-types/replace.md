# `Replace<Str, S, E>`

## Implementation

```
type Replace<
  Str extends string,
  S extends string,
  E extends string,
  Global = true
> = Str extends `${infer Head}${S}${infer Tail}`
  ? (
    Global extends true
      ? Replace<`${Head}${E}${Tail}`, S, E, Global>
      : `${Head}${E}${Tail}`
  )
  : Str;
```

## Use

```
type ReplaceTest1 = Replace<'**foo', '*', '$'>;
// '$$foo'

type ReplaceTest2 = Replace<'**foo', '*', '$', true>;
// '$$foo'

type ReplaceTest3 = Replace<'**foo', '*', '$', false>;
// '$*foo'

type ReplaceTest4 = Replace<'**foo**', '*', '$'>;
// '$$foo$$'
```

### Nesting

```
type WeirdString = '_g_e_tF_oo';

// replace first _ with $
// remove remaining _ chars
type FirstOnlyReplaced = Replace<
  Replace<WeirdString, '_', '$', false>,
  '_',
  ''
>;

// '$getFoo'
```

### `ReplaceIfFirst<Str, S, E>`

```
type ReplaceIfFirst<
  Str extends string,
  S extends string,
  E extends string
> =
  Str extends `${S}${infer R}`
    ? `${E}${R}`
    : Str;

type RIF1 = ReplaceIfFirst<'_foo', '_', '$'>;
// '$foo
type RIF2 = ReplaceIfFirst<'_foo', '%', '$'>;
// '_foo'
type RIF3 = ReplaceIfFirst<'%foo', '_', '$'>;
// '%foo'
type RIF4 = ReplaceIfFirst<'%foo', '_' | '%', '$'>;
// '$foo'
```

* or:

```
type ReplaceIfFirst<
  Str extends string,
  S extends string,
  E extends string
> =
  Replace<
    Str,
    Str extends `${S}${string}` ? S : never,
    E,
    false
  >;

type RIF1 = ReplaceIfFirst<'_foo', '_', '$'>;
// '$foo
type RIF2 = ReplaceIfFirst<'_foo', '%', '$'>;
// '_foo'
type RIF3 = ReplaceIfFirst<'%foo', '_', '$'>;
// '%foo'
type RIF4 = ReplaceIfFirst<'%foo', '_' | '%', '$'>;
// '$foo'
```

## Replacing Object Keys

```
type FooBarBazObj = {
  __foo: string;
  __bar__: number;
  __b_az: boolean;
};


type ReplaceKeys<T, S extends string, E extends string> = {
  [K in keyof T as Replace<K, S, E>]: T[K];
};

type CleanFBB = ReplaceKeys<FooBarBazObj, '_', ''>;
// { foo: string; bar: number; baz: boolean; }

type DollaredFBB = ReplaceKeys<FooBarBazObj, '_', '$'>;
// {$$foo: string; $$bar$$: number; $$b$az: boolean; }
```