# Join of Observables

* [`combineLatest(observable1, ..., observableN)`](#combinelatestobservable1--observablen)
* [`concat(observable1, ..., observableN)`](#concatobservable1--observablen)
* [`forkJoin(sourceObservablesArrOrDict)`](#forkjoinsourceobservablesarrordict)
* [`merge(observable1, ..., observableN)`](#mergeobservable1--observablen)
* [`race(observable1, ..., observableN)`](#raceobservable1--observablen)
* [`zip(observable1, ..., observableN, selectorFn?)`](#zipobservable1--observablen-selectorfn)

## `combineLatest(observable1, ..., observableN)`

| TIME   | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s |
|--------|----|----|----|----|----|----|----|----|----|-----|
| obs. 1 | a  |    | b  |    |    |    | c  | d  | e  |     |
| obs. 2 |    | 1  |    | 2  | 3  | 4  |    |    |    |     |
| FINAL  |    | a1 | b1 | b2 | b3 | b4 | c4 | d4 | e4 |     |

### Example

```
import { combineLatest, timer } from 'rxjs';

const firstTimer = timer(0, 1000);
const secondTimer = timer(500, 1000);
const combinedTimers = combineLatest(firstTimer, secondTimer);

combinedTimers.subscribe(console.log);
```

| TIME    | Im     | 0.5s    | 1s     | 1.5s   | 2s     | 2.5s   | 3s     | ... |
|---------|--------|---------|--------|--------|--------|--------|--------|-----|
| obs. 1  | 0      |         | 1      |        | 2      |        | 3      | ... |
| obs. 2  |        | 0       |        | 1      |        | 2      |        | ... |
| FINAL   |        | [0,0]   | [1,0]  | [1,1]  | [2,1]  | [2,2]  | [3,2]  | ... |

## `concat(observable1, ..., observableN)`

| TIME   | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s |
|--------|----|----|----|----|----|----|----|----|
| obs. 1 | a  |    | b  |    |    |    |    |    |
| obs. 2 | x  |    |    | y  |    |    |    |    |
| FINAL  | a  |    | b  |    | x  |    |    | y  |

### Example

```
import { concat, interval } from 'rxjs';
import { take } from 'rxjs/operators';

const intvA = interval(1000).pipe(take(4));
const intvB = interval(2000).pipe(take(2));
const combinedIntvs = concat(intvA, intvB);

combinedIntvs.subscribe(console.log);
```

| TIME     | Im | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s |
|----------|----|----|----|----|----|----|----|----|----|
| obs. 1   |    | 0  | 1  | 2  | 3  |    |    |    |    |
| obs. 2   |    |    | 0  |    | 1  |    |    |    |    |
| FINAL    |    | 0  | 1  | 2  | 3  |    | 0  |    | 1  |

## `forkJoin(sourceObservablesArrOrDict)`

| TIME   | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s       |
|--------|----|----|----|----|----|----|----|----------|
| obs. 1 | a  |    | b  |    | c  | d  | e  |          |
| obs. 2 |    |    |    |    | f  |    | g  | h        |
| obs. 3 |    | 1  |    | 2  | 3  | 4  |    |          |
| FINAL  |    |    |    |    |    |    |    | [e,h,4]  |

### Example 1: Source as a Dictionary

```
import { forkJoin, of, timer } from 'rxjs';

const observable = forkJoin({
	foo: of(1, 2, 3, 4),
	bar: Promise.resolve(8),
	baz: timer(4000)
});

observable.subscribe(console.log);
// after 4 seconds: {foo: 4, bar: 8, baz: 0}
```

### Example 2: Source as an Array

```
import { forkJoin, of, timer } from 'rxjs';

const observable = forkJoin([
	of(1, 2, 3, 4),
	Promise.resolve(8),
	timer(4000)
]);

observable.subscribe(console.log);
// after 4 seconds: [4, 8, 0]
```

## `merge(observable1, ..., observableN)`

| TIME   | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s |
|--------|----|----|----|----|----|----|----|----|
| obs. 1 | a  |    | b  |    | c  |    |    |    |
| obs. 2 |    | d  |    | e  |    |    | f  |    |
| FINAL  | a  | d  | b  | e  | c  |    | f  |    |

### Example 1: No Limit for Concurrency

```
import { merge, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

var t1 = interval(1000).pipe(
	take(4),
	map(n => 'A' + n)
);

var t2 = interval(2000).pipe(
	take(4),
	map(n => 'B' + n)
);

var t3 = interval(500).pipe(
	take(4),
	map(n => 'C' + n)
);

var merged = merge(t1, t2, t3);

merged.subscribe(console.log);
```

| TIME    | Im | 0.5s | 1s | 1.5s | 2s | 2.5s | 3s | 3.5s | 4s | 4.5s | 5s | 5.5s | 6s | 6.5s | 7s | 7.5s | 8s |
|---------|----|------|----|------|----|------|----|------|----|------|----|------|----|------|----|------|----|
| obs. 1  |    |      | A0 |      | A1 |      | A2 |      | A3 |      |    |      |    |      |    |      |    |
| obs. 2  |    |      |    |      | B0 |      |    |      | B1 |      |    |      | B2 |      |    |      | B3 |
| obs. 3  |    | C0   | C1 | C2   | C3 |      |    |      |    |      |    |      |    |      |    |      |    |
| FINAL   |    | C0   | A0 and C1 | C2 | A1, B0 and C3 | | A2 | | A3 and B1 | | | | B2 |      |    |      | B3 |

### Example 2: Concurrency Limited to 2

> 3 observables, but only 2 run concurrently

```
import { merge, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

var t1 = interval(1000).pipe(
	take(4),
	map(n => 'A' + n)
);

var t2 = interval(2000).pipe(
	take(4),
	map(n => 'B' + n)
);

var t3 = interval(500).pipe(
	take(4),
	map(n => 'C' + n)
);

const CONCURRENT = 2;
var merged = merge(t1, t2, t3, CONCURRENT);

merged.subscribe(console.log);
```

| TIME    | Im | 0.5s | 1s | 1.5s | 2s | 2.5s | 3s | 3.5s | 4s | 4.5s | 5s | 5.5s | 6s | 6.5s | 7s | 7.5s | 8s |
|---------|----|------|----|------|----|------|----|------|----|------|----|------|----|------|----|------|----|
| obs. 1  |    |      | A0 |      | A1 |      | A2 |      | A3 |      |    |      |    |      |    |      |    |
| obs. 2  |    |      |    |      | B0 |      |    |      | B1 |      |    |      | B2 |      |    |      | B3 |
| obs. 3  |    | C0   | C1 | C2   | C3 |      |    |      |    |      |    |      |    |      |    |      |    |
| FINAL   |    |      | A0 |      | A1 and B0 | | A2 | | | A3 and B1 | C0 | C1 | C2 | B2 and C3 | | | | B3     |

## `race(observable1, ..., observableN)`

```
import { race, interval } from 'rxjs';
import { take, mapTo } from 'rxjs/operators';

const obs1 = interval(1000).pipe(take(4), mapTo('A'));
const obs2 = interval(2000).pipe(take(3), mapTo('B'));
const obs3 = interval(4000).pipe(take(2), mapTo('C'));

race(
	obs3,
	obs1,
	obs2
).subscribe(console.log);
```

| TIME     | Im | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s |
|----------|----|----|----|----|----|----|----|----|----|
| obs. 1   |    | A  | A  | A  | A  |    |    |    |    |
| obs. 2   |    |    | B  |    | B  |    | B  |    |    |
| obs. 3   |    |    |    |    | C  |    |    |    | C  |
| FINAL    |    | A  | A  | A  | A  |    |    |    |    |

## `zip(observable1, ..., observableN, selectorFn?)`

```
import { zip, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

var a$ = interval(500).pipe(
	take(3),
	map(n => 'A' + n)
);

var b$ = interval(1000).pipe(
	take(3),
	map(n => 'B' + n)
);

zip(a$, b$).subscribe(console.log);
```

| TIME    | Im | 0.5s | 1s   | 1.5s | 2s   | 2.5s | 3s   | 3.5s | 4s   |
|---------|----|------|------|------|------|------|------|------|------|
| obs. 1  |    | A0   | A1   | A2   |      |      |      |      |      |
| obs. 2  |    |      | B0   |      | B1   |      | B2   |      |      |
| FINAL   |    |      | [A0,B0] |   | [A1,B1] |   | [C1,C2] |   |      |

### Selector Function

```
import { zip, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

var a$ = interval(500).pipe(
	take(3),
	map(n => 'A' + n)
);

var b$ = interval(1000).pipe(
	take(3),
	map(n => 'B' + n)
);

zip(a$, b$, (a, b) => {
	return `${a}/${b}`;
}).subscribe(console.log);
```

| TIME    | Im | 0.5s | 1s   | 1.5s | 2s   | 2.5s | 3s   | 3.5s | 4s   |
|---------|----|------|------|------|------|------|------|------|------|
| obs. 1  |    | A0   | A1   | A2   |      |      |      |      |      |
| obs. 2  |    |      | B0   |      | B1   |      | B2   |      |      |
| FINAL   |    |      | A0/B0 |     | A1/B1 |     | A2/B2 |     |      |

### Matching Arrays Items by Index

```
import { zip, of } from 'rxjs';
import { map } from 'rxjs/operators';

let age$ = of<number>(27, 25, 29);
let name$ = of<string>('Foo', 'Bar', 'Beer');
let isDev$ = of<boolean>(true, true, false);

zip(age$, name$, isDev$).pipe(
	map(
		([age, name, isDev]) => ({age, name, isDev})
	)
).subscribe(console.log);

// {age: 27, name: "Foo", isDev: true}
// {age: 25, name: "Bar", isDev: true}
// {age: 29, name: "Beer", isDev: false}
```
