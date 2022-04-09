# Numeral System

If we want to utilize numbers in operations, we must operate on strings being turned into numbers.  
Henceforth different utility types can be created with use of generic types with accumulator (being the last parameter of a generic type).

## `Sum<A, B>` and `Diff<A, B>` without Numeral System

```
type Sum<A extends string, B extends string> = `${A}${B}`;


type Sum1 = Sum<'....', '..'>;
// '......'

type Sum2 = Sum<'..', '..........'>;
// '............'
```

```
type Diff<A extends string, B extends string> =
  A extends B
    ? ''
    : A extends `${B}${infer Q}`
      ? Q
      : Diff<B, A>;


type Diff1 = Diff<'......', '..'>;
// '....'

type Diff2 = Diff<'...', '.....'>;
// '..'

type Diff3 = Diff<'..', '..'>;
// ''
```

## Numeral System

### Number to Dots - `$$NumToDots<T>`

```
type $$NumToDots<
  T extends number,
  ArrCtrl extends string[] = [],
  Acc extends string = ''
> =
  ArrCtrl['length'] extends T
    ? Acc
    : $$NumToDots<T, [...acc: ArrCtrl, x: string], `${Acc}.`>;


type TenDots = $$NumToDots<10>;
// '..........'

type FourDots = $$NumToDots<4>;
// '....'

type ZeroDots = $$NumToDots<0>;
// ''
```

### Dots to Number - `$$DotsToNum<T>`

```
type $$DotsToNum<
  T extends string,
  Acc extends string[] = []
> =
  T extends ''
    ? Acc['length']
    : T extends `.${infer R}`
      ? $$DotsToNum<R, [...acc: Acc, x: string]>
      : [...acc: Acc, x: string]['length'];


type Two = $$DotsToNum<'..'>;
// 2

type Ten = $$DotsToNum<'..........'>;
// 10

type Zero = $$DotsToNum<''>;
// 0
```

```
type ResFour = $$DotsToNum<$$NumToDots<4>>;
// 4

type ResTwoDots = $$NumToDots<$$DotsToNum<'..'>>;
// '..'
```

## `Sum<A, B>` and `Diff<A, B>` with Numeral System

```
type NSum<A extends number, B extends number> =
  $$DotsToNum<
    `${$$NumToDots<A>}${$$NumToDots<B>}`
  >;


type Sum1 = Sum<4, 2>;
// 6

type Sum2 = Sum<2, 10>;
// 12

type Sum3 = Sum<0, 1>;
// 1
```

```
type Diff<A extends number, B extends number> =
  A extends B
    ? 0
    : A extends `${$$NumToDots<B>}${infer Q}`
      ? $$DotsToNum<Q>
      : Diff<B, A>;


type Diff1 = Diff<6, 2>;
// 4

type Diff2 = Diff<3, 5>;
// 2

type Diff3 = Diff<2, 2>;
// 0
```

## `Compare<A, B>` with Numeral System

```
type Compare<A extends number, B extends number> =
  A extends B
    ? 0
    : $$NumToDots<A> extends `${$$NumToDots<B>}${string}`
      ? 1
      : -1;


type Comp1 = Compare<4, 2>;
// 1

type Comp2 = Compare<2, 4>;
// -1

type Comp3 = Compare<8, 8>;
// 0

type Comp4 = Compare<2, 0>;
// 1
```

## `Length<L>` with Numeral System

```
type Length<
  L extends string | any[],
  Acc extends string = '.'
> =
  L extends string
    ? L extends `${string}${infer T}`
      ? T extends ''
        ? $$DotsToNum<Acc>
        : Length<T, `.${Acc}`>
      : 0
    : L extends any[]
      ? L['length']
      : never;


type LenStr1 = Length<'ABC'>;
// 3

type LenStr2 = Length<''>;
// 0

type LenArr1 = Length<[1, 'a', true, ]>;
// 3

type LenArr2 = Length<[]>;
// 0
```