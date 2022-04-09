# Wrapped Numeral System

> As there is no loop in TypeScript, we must have created a non-standard numeral system, in which we can pass a number of repetition.  
> We have used dots to determine such the number, yet we can wrap it so that dots are converted to number.

```
const DotsToNumMap = {
	'': 0,
	'.': 1,
	'..': 2,
	'...': 3,
	'....': 4,
	'.....': 5,
	'......': 6,
	'.......': 7,
	'........': 8,
	'.........': 9
} as const;

const NumToDotsMap = {
	0: '',
	1: ',',
	2: '..',
	3: '...',
	4: '....',
	5: '.....',
	6: '......',
	7: '.......',
	8: '........',
	9: '.........'
} as const;

type DotsToNum<T extends keyof typeof DotsToNumMap> = typeof DotsToNumMap[T];
type NumToDots<T extends keyof typeof NumToDotsMap> = typeof NumToDotsMap[T];

type RepeatString<
  Str extends string,
  Times extends keyof typeof NumToDotsMap
> = Repeat<Str, NumToDots<Times>>;
```

```
type FourFoos = RepeatString<'Foo', 4>;
// 'FooFooFooFoo'
```

The disadvantage is that a number is limited to `9`.  
We can increase it, but all numbers must be typed by hand.

> Better Numeral System is [Described Here](https://github.com/damianc/dev-notes/blob/master/typescript/types-from-types/numeral-system.md)