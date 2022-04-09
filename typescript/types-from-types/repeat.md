# `Repeat<Str, N>`

## Implementation and Use

```
type Repeat<
	Str extends string,
	Times extends string,
	Acc extends string = Str
> = Times extends `.${infer Q}`
	? (Q extends '' ? Acc : Repeat<Str, Q, `${Str}${Acc}`>)
	: Acc;
```

```
type FourFoos = Repeat<'Foo', '....'>;
// 'FooFooFooFoo'
```

## With Numeral System

> Numeral System is [Described Here](https://github.com/damianc/dev-notes/blob/master/typescript/types-from-types/numeral-system.md)

```
type Repeat<
	Str extends string,
	Times extends number,
	Acc extends string = Str
> = $$NumToDots<Times> extends `.${infer Q}`
	? (Q extends '' ? Acc : Repeat<Str, Q, `${Str}${Acc}`>)
	: Acc;
```

```
type FourFoos = Repeat<'Foo', 4>;
// 'FooFooFooFoo'
```



