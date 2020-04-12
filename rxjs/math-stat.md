# Mathematical and Aggregation Operators

* [`count(predicate?)`](#countpredicate)
* [`reduce(accumulator, seed?)`](#reduceaccumulator-seed)
* [`max(comparer?)`](#maxcomparer)
* [`min(comparer?)`](#mincomparer)

## `count(predicate?)`

* `predicate: (value, index, sourceObservable)`

```
const numbers = range(1, 7);
numbers.pipe(
	count(i => i % 2 == 1)
).subscribe(console.log);
// 4
```

```
interval(1000).pipe(
	takeUntil(
		fromEvent(document, 'click')
	)
).pipe(
	count()
)
```

| TIME | 0.5s | 1s | 1.5s | 2s | 2.5s | 3s | 3.5s | 4s | 4.5s | 5s |
|------|------|----|------|----|------|----|------|----|------|----|
| click |     |    |      |    |      |    |      |    | x    |    |
| intv |      | 0  |      | 1  |      | 2  |      | 3  |      |    |
| obs. |      |    |      |    |      |    |      |    | 4    |    |

## `reduce(accumulator, seed?)`

* `accumulator: (acc, value, index?)`

```
of(1, 2, 3, 4).pipe(
	reduce((acc, val) => acc + val)
).subscribe(console.log);
// 10
```

```
// number of clicks
// that happened in 5 seconds

const clicks = fromEvent(document, 'click').pipe(
	takeUntil(interval(5000))
);
const ones = clicks.pipe(mapTo(1));
const seed = 0;

const _count = ones.pipe(
	reduce(
		(acc, one) => acc + one,
		seed
	)
).subscribe(console.log);
```

## `max(comparer?)`

* `comparer: (x, y)`

```
of(5, 4, 7, 2, 8).pipe(
	max()
).subscribe(console.log);
// 8
```

```
of(
	{age: 7, name: 'Foo'},
	{age: 5, name: 'Bar'},
	{age: 9, name: 'Beer'}
).pipe(
	max(
		(a, b) => a.age < b.age ? -1 : 1
	)
).subscribe(x => console.log(x.name));
// Beer
```

## `min(comparer?)`

* `comparer: (x, y)`

```
of(5, 4, 7, 2, 8).pipe(
	min()
).subscribe(console.log);
// 2
```

```
of(
	{age: 7, name: 'Foo'},
	{age: 5, name: 'Bar'},
	{age: 9, name: 'Beer'}
).pipe(
	min(
		(a, b) => a.age < b.age ? -1 : 1
	)
).subscribe(x => console.log(x.name));
// Bar
```