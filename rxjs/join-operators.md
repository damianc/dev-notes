# Join Operators

* [`combineAll(projectFn?)`](#combineallprojectfn)
* [`concatAll()`](#concatall)
* [`mergeAll(concurrent?)`](#mergeallconcurrent)
* [`startWith(value1, ..., valueN?)`](#startwithvalue1--valuen)
* [`withLatestFrom()`](#withlatestfrom)

## `combineAll(projectFn?)`

```
import { interval } from 'rxjs';
import { combineAll, take, map } from 'rxjs/operators';

var source$ = interval(1000).pipe(take(2));
var obs$ = source$.pipe(
	map(i => {
		return interval(1000 * (i + 1)).pipe(take(5))
	})
);

obs$.pipe(
	combineAll()
).subscribe(console.log);
```

| TIME      | Im | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s | 11s | 12s |
|-----------|----|----|----|----|----|----|----|----|----|----|-----|-----|-----|
| source$   |    | `A` | `B` |  |    |    |    |    |    |    |     |     |     |
| obs. `A`  |    |    | 0  | 1  | 2  | 3  | 4  |    |    |    |     |     |     |
| obs. `B`  |    |    |    |    | 0  |    | 1  |    | 2  |    | 3   |     | 4   |
| FINAL     |    |    |    |    | [1,0] | [2,0] | [3,0] and [3,1] | [4,1] | [4,2] | | [4,3] | | [4,4] |

* `A` emits `0` but `B` has no latest value
* `A` emits `1` but `B` has no latest value
* `B` emits `0` and `A` has `1` &rarr; `[1,0]` (_format: [A,B]_)
* `A` emits `2` and `B` has `0` &rarr; `[2,0]`
* `A` emits `3` and `B` has `0` &rarr; `[3,0]`
* `B` emits `1` and `A` has `3` &rarr; `[3,1]`
* `A` emits `4` and `B` has `1` &rarr; `[4,1]`
* `B` emits `2` and `A` has `4` &rarr; `[4,2]`
* `B` emits `3` and `A` has `4` &rarr; `[4,3]`
* `B` emits `4` and `A` has `4` &rarr; `[4,4]`

## `concatAll()`

```
import { fromEvent, interval } from 'rxjs';
import { concatAll, map, take } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const higherOrder = click$.pipe(
	map(e => interval(1000).pipe(take(4)))
);

const firstOrder = higherOrder.pipe(concatAll());
firstOrder.subscribe(console.log);
```

| TIME     | Im | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s | 11s | 12s | 13s | 14s | 15s |
|----------|----|----|----|----|----|----|----|----|----|----|-----|-----|-----|-----|-----|-----|
| _click_  |    | `C` |   |    |    |    |    | `C`  |    |    | `C`   | |     |     |     |     |
| observer |    |    | 0  | 1  | 2  | 3  |    |    | 0  | 1  | 2   | 3   | 0   | 1   | 2   | 3   |

## `mergeAll(concurrent?)`

```
import { fromEvent, interval } from 'rxjs';
import { mergeAll, map, take } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const higherOrder = click$.pipe(
	map(e => interval(1000).pipe(take(4)))
);

const firstOrder = higherOrder.pipe(mergeAll());
firstOrder.subscribe(console.log);
```

| TIME     | Im | 0.5s | 1s | 1.5s | 2s | 2.5s | 3s | 3.5s | 4s | 4.5s | 5s | 5.5s | 6s | 6.5s | 7s | 7.5s | 8s |
|----------|----|------|----|------|----|------|----|------|----|------|----|------|----|------|----|------|----|
| _click_  |    |      | C  |      |    |      |    | C    |    |      |    |      |    |      |    |      |    |
| observer |    |      |    |      | 0  |      | 1  |      | 2  | 0    | 3  | 1    |    | 2    |    | 3    |    |

## `startWith(value1, ..., valueN?)`

```
import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';

of(3).pipe(
	startWith(1, 2)
).subscribe(console.log);
// 1 2 3
```

## `withLatestFrom()`

```
var intv1 = interval(2000).pipe(take(4));
var intv2 = interval(1000).pipe(take(4));

intv1.pipe(
	withLatestFrom(intv2)
).subscribe(console.log);
```

| TIME     | Im | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s |
|----------|----|----|----|----|----|----|----|----|----|
| obs. 1   |    |    | 0  |    | 1  |    | 2  |    | 3  |
| obs. 2   |    | 0  | 1  | 2  | 3  |    |    |    |    |
| FINAL    |    |    | [0,1] | | [1,3] | | [2,3] | | [3,3] |
