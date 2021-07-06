# The `infer` Keyword

```
type MyType<T> = T extends Gen<infer R> ? R : T;

// MyType = R if T extends Gen<R>
// MyType = T otherwise
```

* if type `T` extends a generic type `Gen`
  * deduce the subtype of the `Gen` type
  * remember it as `R`
  * set `MyType` as `R`
* otherwise, set `MyType` as `T`

```
type ArrayValue<T> = T extends Array<infer R> ? R : T;

const arr = [1, 2];
// arr: number[]

const arrItem1: ArrayValue<[number]> = 1;
// arrItem1: number

const arrItem2: ArrayValue<typeof arr> = 2;
// arrItem2: number
// same as ArrayValue<number[]>
```

## Example: Type of a Promise Value

```
type PromiseValue<T> = T extends Promise<infer R> ? R : never;

let pv1: PromiseValue<Promise<number>>;
// pv1: number

let pv2: PromiseValue<string>;
// pv2: never

const promise = Promise.resolve(12);
type PV = PromiseValue<typeof promise>;
// type PV = number
// same as PromiseValue<Promise<number>>
```

## Example: Types of the Function Arguments

* with this type:

```
type Args<Fn> = Fn extends (...args: infer T) => any ? T : never;
```

* having the following function:

```
function op(sym: string, ...n: number[]): number {
  if (sym === '+') return n.reduce((acc, curr) => acc + curr);
  return n.reduce((acc, curr) => acc * curr);
}
```

* we get that:

```
let opArgs: Args<typeof op>;
// opArgs: [sym: string, ...n: number[]]

opArgs = ['+'];
opArgs = ['+', 1];
opArgs = ['+', 1, 2, 3, 4];
```

## Example: Type of the Array Items

```
type Flatten<T> = T extends (infer R)[] ? R : T;

let item1: Flatten<number>;
// item1: number

let item2: Flatten<number[]>;
// item2: number

let item3: Flatten<number[][]>;
// item3: number[]
```

## Multiple of the `infer` Keywords

* in one expression

```
type HeadTail<T> = T extends [infer Head, ...any[], infer Tail] ? [Head, Tail] : T;

let ht1: HeadTail<number>;
// ht1: number

let ht2: HeadTail<[1,2,3,4]>;
// ht2: [1, 4]

let ht3: HeadTail<[number, string, boolean]>;
// ht3: [number, boolean]

let ht4: HeadTail<[number, string]>;
// ht4: [number, string]

let ht5: HeadTail<[string]>;
// ht5: [string]
```

* in different expressions

```
type DeeperFlatten<T> = T extends (infer R)[]
    ? R extends (infer Q)[]
        ? Q
        : R
    : T;

let item1: DeeperFlatten<number>;
// item1: number

let item2: DeeperFlatten<number[]>;
// item2: number

let item3: DeeperFlatten<number[][]>;
// item3: number

let item4: DeeperFlatten<number[][][]>;
// item4: number[]
```

## Recursion with the `infer` Keyword

```
type DeepFlatten<T> = T extends (infer R)[] ? DeepFlatten<R> : T;

let item1: DeepFlatten<number>;
// item1: number

let item2: DeepFlatten<number[]>;
// item2: number

let item3: DeepFlatten<number[][][][][][][][]>;
// item3: number
```