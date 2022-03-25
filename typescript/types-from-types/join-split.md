# `Join<Arr>` and `Split<Str>`

## `Join<Arr, Sep>`

```
type Join<
	Arr extends any[],
	Sep extends string = '',
	Acc extends string = ''
>
  = Arr extends []
    ? Acc
    : Arr extends [curr: infer C, ...rest: infer R]
      ? Join<
          R,
          Sep,
          `${Acc}${Acc extends '' ? '' : Sep}${C & (string | number)}`
        >
      : Arr;


type J1 = Join<[1, 2, 3, 4], '-'>;
// '1-2-3-4'
type J2 = Join<[1, 2, 3, 4]>;
// '1234'
type J3 = Join<['a', 'b', 'c', 'd'], '-'>;
// 'a-b-c-d'
type J4 = Join<[1, 'b', 3, 'd'], '-'>;
// '1-b-3-d'
```

## `Split<Str, Sep>`

```
type Split<
  Str extends string,
  Sep extends string = '',
  Acc extends any[] = []
> =
  Str extends `${infer H}${Sep}${infer T}`
    ? T extends ''
      ? [...Acc, H]
      : Split<T, Sep, [...Acc, H]>
    : [...Acc,Str];


type S1 = Split<'foo'>;
// ['f', 'o', 'o']

type S2 = Split<'ab:cd:ef:gh:xyz', ':'>;
// ['ab', 'cd', 'ef', 'gh', 'xyz']

type S3 = Split<'foo/bar/baz', '/'>;
// ['foo', 'bar', 'baz']
```