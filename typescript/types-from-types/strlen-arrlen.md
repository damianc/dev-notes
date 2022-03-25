# `StrLength<Str>` and `ArrLength<Arr>`

## `StrLength<Str>`

```
type StrLength<
  Str extends string,
  Acc extends string = '.'
> =
  Str extends `${string}${infer T}`
    ? T extends ''
      ? DotsToNum<Acc>
      : StrLength<T, `.${Acc}`>
    : 0;


type SL1 = StrLength<'abc'>;
// 3
type SL2 = StrLength<'x'>;
// 1
type SL3 = StrLength<''>;
// 0
```

## `ArrLength<Arr>`


```
type ArrLength<
  Arr extends any[],
  Acc extends string = '.'
> =
  Arr extends [...items: infer H, last: any]
    ? H extends []
      ? DotsToNum<Acc>
      : ArrLength<H, `.${Acc}`>
    : 0;


type AL1 = ArrLength<[1, 2, true]>;
// 3
type AL2 = ArrLength<['a']>;
// 1
type AL3 = ArrLength<[]>;
// 0
```


## Dot-Based Numeral System

```
type DotsToNum<
  T extends string,
  Acc extends string[] = []
> =
  T extends ''
    ? Acc['length']
    : T extends `.${infer R}`
      ? DotsToNum<R, [...acc: Acc, x: string]>
      : [...acc: Acc, x: string]['length'];


type DTN1 = $$DotsToNum<''>;
// 0
type DTN2 = $$DotsToNum<'.'>;
// 1
type DTN3 = $$DotsToNum<'....'>;
// 4
```

