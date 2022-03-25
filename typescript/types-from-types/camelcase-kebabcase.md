# `CamelCase<Str>` and `KebabCase<Str>`

## `CamelCase<Str>`

```
type CamelCase<T extends string> =
  T extends `${infer H}-${infer Prop}${infer E}`
    ? CamelCase<`${H}${Capitalize<Prop>}${E}`>
    : T;

type CC1 = CamelCase<'get-foo-bar'>;
// 'getFooBar'
type CC2 = CamelCase<'get-foo-ba-r'>;
// 'getFooBaR'
type CC3 = CamelCase<'getfoobar'>;
// 'getfoobar'
type CC4 = CamelCase<'g-e-t-f-o-o-b-a-r'>;
// 'gETFOOBAR'
type CC5 = CamelCase<'ab-cd-ef'>;
// 'abCdEf'
type CC6 = CamelCase<'a-bc-de-f'>;
// 'aBcDeF'
```

##  `KebabCase<Str>`

```
type KebabCase<
  T extends string,
  Q extends string = ''
> =
  T extends `${infer H}${infer N}`
    ? N extends ''
      ? H extends LTR
        ? `${Q}-${Uncapitalize<H>}`
        : `${Q}${H}`
      : H extends LTR
        ? KebabCase<N, `${Q}${Q extends '' ? '' : '-'}${Uncapitalize<H>}`>
        : KebabCase<N, `${Q}${H}`>
    : T;

type KC1 = KebabCase<'getFooBar'>;
// 'get-foo-bar'
type KC2 = KebabCase<'GetFooBaR'>;
// 'get-foo-ba-r'
type KC3 = KebabCase<'getfoobar'>;
// 'getfoobar'
type KC4 = KebabCase<'GETFOOBAR'>;
// 'g-e-t-f-o-o-b-a-r'
type KC5 = KebabCase<'AbCdEf'>;
// 'ab-cd-ef'
type KC6 = KebabCase<'aBcDeF'>;
// 'a-bc-de-f'
```

## Processing Keys

```
type Obj = {
  getFooBar: string;
  GetBazQuuxX: number;
};

type KebabCaseKeys<T> = {
  [K in keyof T as KebabCase<K & string>]: T[K]
};

type KC_Obj = KebabCaseKeys<Obj>;
// {
//   'get-foo-bar': string;
//   'get-baz-quux-x': number;
// }
```

```
type Obj = {
  'get-foo-bar': string;
  'get-baz-quux-x': number;
}

type CamelCaseKeys<T> = {
  [K in keyof T as CamelCase<K & string>]: T[K]
};

type CC_Obj = CamelCaseKeys<Obj>;
// {
//   getFooBar: string;
//   getBazQuuxX: number;
// }
```