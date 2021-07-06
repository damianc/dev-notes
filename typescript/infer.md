# The `infer` Keyword

```
MyType<T> = T extends Gen<infer R> ? R : T;

// if type T extends generic type Gen
// deduce subtype of the Gen type
// and remember it as R

// MyType = R if T extends Gen<R>
// MyType = T otherwise
```

## Example: Promise Value

```
type PromiseValue<T> = T extends Promise<infer R> ? R : never;

let pv1: PromiseValue<Promise<number>>;
// pv1: number

let pv2: PromiseValue<string>;
// pv2: never

const promise = Promise.resolve(12);
type PV = PromiseValue<typeof promise>;
// type PV = number
```

## Example: Function Arguments Array

```
type Args<Fn> = Fn extends (...args: infer T) => any ? T : never;

let opArgs: Args<typeof op>;
// opArgs: [sym: string, ...n: number[]]

opArgs = ['+'];
opArgs = ['+', 1];
opArgs = ['+', 1, 2, 3, 4];

function op(sym: string, ...n: number[]): number {
    if (sym === '+') return n.reduce((acc, curr) => acc + curr);
    return n.reduce((acc, curr) => acc * curr);
}
```

## Example: Array Items

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

```
type HeadTail<T> = T extends [infer Head, ...any[], infer Tail] ? [Head, Tail] : T;

let ht1: HeadTail<number> = 10;
let ht2: HeadTail<[1,2,3,4]> = [1, 4];
let ht3: HeadTail<[number, string, boolean]> = [1, true];
let ht4: HeadTail<[number, string]> = [1, 'a'];
let ht5: HeadTail<[string]> = ['a'];
```

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