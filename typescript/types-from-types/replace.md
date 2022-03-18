# `Replace<Str, S, E>`

## Implementation

```
type Replace<
  Str extends string,
  S extends string,
  E extends string,
  Global = true
> = Str extends `${infer Head}${S}${infer Tail}`
  ? Global extends true ? GenReplace<`${Head}${E}${Tail}`, S, E, Global> :  `${Head}${E}${Tail}`
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