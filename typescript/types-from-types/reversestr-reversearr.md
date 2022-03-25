# `ReverseStr<Str>` and `ReverseArr<Arr>`

## `ReverseStr<Str>`

```
type ReverseStr<
	Str extends string,
	Acc extends string = ''
> =
	Str extends ''
		? Acc
		: Str extends `${infer F}${infer R}`
			? ReverseStr<R, `${F}${Acc}`>
			: Str;


type RS1 = ReverseStr<'cat'>;
// 'tac'
type RS2 = ReverseStr<'dog'>;
// 'god'
type RS3 = ReverseStr<ReverseStr<'foo'>>;
// 'foo'
```

## `ReverseArr<Arr>`

```
type ReverseArr<
	Arr extends Array<any>,
	Acc extends Array<any> = []
> =
  Arr extends []
    ? Acc
    : Arr extends [first: infer F, ...rest: infer R]
      ? ReverseArr<R, [F, ...Acc]>
      : Arr;


type RA1 = ReverseArr<[1, 2, 3, 4]>;
// [4, 3, 2, 1]

type RA2 = ReverseArr<['a', 2, true]>;
// [true, 2, 'a']
```