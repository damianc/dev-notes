# Transformation Operators

## `buffer(closingNotifier)`

```
var int = interval(1000);
var e = fromEvent(document, 'click');

int.pipe(
	buffer(e)
).subscribe(console.log);
```

| TIME | 1s | 2s | 3s | 3.5s    | 4s | 5s | 5.5s    | 6s | 6.5s | 7s | 8s | 9s | 9.25s   | 9.75s | 10s |
|------|----|----|----|---------|----|----|---------|----|------|----|----|----|---------|-------|-----|
| intv | 0  | 1  | 2  |         | 3  | 4  |         | 5  |      | 6  | 7  | 8  |         |       | 9   |
| click |   |    |    | x       |    |    | x       |    | x    |    |    |    | x       | x     |     |
| obs. |    |    |    | [0,1,2] |    |    | [3,4]   |    | [5]  |    |    |    | [6,7,8] | []    |     |

## `bufferCount(bufferSize, startBufferEvery?)`

```
var i = 1;
fromEvent(document, 'click').pipe(
	map(e => i++),
	bufferCount(<N>)
).subscribe(console.log);
```

| CLICKS      | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
|-------------|---|---|---|---|---|---|---|---|---|----|----|----|----|
| N = (3)     |   |   | [1,2,3] | | | [4,5,6] | | | [7,8,9] | | | [10,11,12] | |
| N = (3, 1)  |   |   | [1,2,3] | [2,3,4] | [3,4,5] | [4,5,6] | [5,6,7] | [6,7,8] | [7,8,9] | [8,9,10] | [9,10,11] | [10,11,12] | [11,12,13] |
| N = (3, 2)  |   |   | [1,2,3] | | [3,4,5] | | [5,6,7] | | [7,8,9] | | [9,10,11] | | [11,12,13] |
| N = (3, 5)  |   |   | [1,2,3] | | | | | [6,7,8] | | | | | [11,12,13] |

## `bufferTime(bufferTimeSpan)`

```
var i = 1;
fromEvent(document, 'click').pipe(
	map(e => i++),
	bufferTime(3000)
).subscribe(console.log);
```

| TIME        | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s | 11s | 12s |
|-------------|----|----|----|----|----|----|----|----|----|-----|-----|-----|
| click       | 1  | 2  |    |    |    |    |    | 3  |    | 4   | 5   | 6   |
| obs.        | | | [1,2]    |    |    |    |    |   | [3] |     |     | [4,5,6] |

```
// every 5s emit the values from the next 2s
interval(1000).pipe(
	bufferTime(2000, 5000)
).subscribe(console.log);
```

| TIME        | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s | 11s | 12s | 13s | 14s |
|-------------|----|----|----|----|----|----|----|----|----|-----|-----|-----|-----|-----|
| intv        | **0**  | **1**  | 2  | 3  | **4**  | **5**  | **6**  | 7  | 8  | **9** | **10** | **11** | 12  | 13  |
| obs.        |    | [0] |   |    |    |    | [4,5,6] | |  |     |     | [9,10,11] | |   |

## `bufferToggle(openings, closingSelector)`

|  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
|     | a   |    | b   |    | c    |    | d    |    | e    |    | f   |    | g   |
| o   |     |    |     |    |      |    |      |    |      | o  |     |    |     |
| **\|**  | **-**   | **-**  | **-**   | c  |      |    |      |    |      | **\|** | **-**    | c  |     |
|     |     |    |     | **[a,b]**   |      |    |      |    |      |    |     | **[f]**   |     |

```
import { interval, EMPTY } from 'rxjs';
import { bufferToggle } from 'rxjs/operators';

interval(250).pipe(
	bufferToggle(
		// every second
		interval(1000),
		// if it is an odd second
		// emit values (of interval(250)) from the next 500ms
		i => i % 2 ? interval(500) : EMPTY
	)
).subscribe(console.log);
```

| TIME | 0s | 1s | 2s | 3s | 4s | 5s | 6s | 7s |
|--------|----|----|----|-----|----|----|----|----|
| intv100 | | 0 | `1` | 2 | `3` | 4 | `5` | 6 |
| intv500 | x 0 | 1 2 | 3 4 | 5 6 | 7 8 | 9 10 | 11 12 | 13 14 |
| int250 | x 0 1 2 | 3 4 5 6 | `7` `8` `9` 10 | 11 12 13 14 | `15` `16` `17` 18 | 19 20 21 22 | `23` `24` `25` 26 | 27 28 29 30 |

```
const clicks = fromEvent(document, 'click');
const buffered = clicks.pipe(
	bufferToggle(
		// every second
		interval(1000),
		// if it is an odd second
		// emit clicks from the next 500ms
		i => i % 2 ? interval(500) : EMPTY
	)
).subscribe(console.log);
```

| TIME | 0.5s | 1s | 1.5s | 2s | 2.5s | 3s | 3.5s | 4s | 4.5s | 5s | 5.5s | 6s | 6.5s | 7s | 7.5s | 8s |
|--------|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| click | | | | 2.25s | | | ~~3.75s, 3.85s~~ | 4.25s | ~~4.75s~~ | | | 6.25s, 6.35s | ~~6.75s~~ |
| logged | | | `[]` | \|____ | `[Ev]` | | `[]` | \|____ | `[Ev]` | | `[]` | \|____ | `[Ev, Ev]` | | `[]` |

## `bufferWhen(closingSelector)`

```
interval(500).pipe(
	bufferWhen(i => interval(2000))
).subscribe(console.log);
```

| TIME | 0.5s | 1s | 1.5s | 2s | 2.5s | 3s | 3.5s | 4s | 4.5s | 5s | 5.5s | 6s | 6.5s | 7s | 7.5s | 8s |
|-------|------|----|-------|----|------|----|--------|----|-----|----|------|-----|-----|----|------|----|
| intv500 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
| logged | | | | `[0,1,2]` | | | | `[3,4,5,6,7]` | | | | `[8,9,10,11]` | | | | `[12,13,14,15]` |

```
interval(1000).pipe(
	bufferWhen(i => interval(2000))
).subscribe(console.log);
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s | 11s | 12s|
|--------|----|----|----|----|----|----|----|----|-----|-----|------|----|
intv1000 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| logged | | `[0]` | | `[1,2,3]` | | `[4,5]` | | `[6,7]` | | `[8,9]` | | `[10,11]` |

## `exhaust()`

```
// max 1 click/5 seconds
const clicks = fromEvent(document, 'click');
const higherOrder = clicks.pipe(
	map(e => of('hi').pipe(delay(2000)))
);
const result = higherOrder.pipe(
	exhaust()
);
result.subscribe(console.log);
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s | 11s | 12s |
|-------|-----|----|----|----|----|----|----|----|----|------|------|---|
| click | x   |    |    |    |    | x   | x  |
| obs.  |     |    |  hi |   |    |     |     | hi | | | | |

## `exhaustMap(project, resultSelector?)`

* `project: (value, index)`
* `resultSelector: (outerValue, innerValue, outerIndex, innerIndex)`
```
fromEvent(document, 'click').pipe(
	exhaustMap(e => interval(1000).pipe(take(4)))
).subscribe(console.log);
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s | 11s | 12s |
|-------|-----|----|----|----|----|----|----|----|----|------|------|---|
| click | x |   |   |   |   | | | x | | x | | |
| obs. | | 0 | 1 | 2 | 3 | | | | 0 | 1 | 2 | 3 |

> compare with `concatMap()`

## `switchMap(project, resultSelector?)`

* `project: (value, index)`
* `resultSelector: (outerValue, innerValue, outerIndex, innerIndex)`

```
fromEvent(document, 'click').pipe(
	switchMap(e => interval(1000).pipe(take(4)))
).subscribe(console.log);
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 8.5 | 9s | 9.5s | 10s | 10.5s | 11s | 11.5s | 12s | 12.5s | 13s | 13.5s | 14s | 14.5s | 15s |
|-------|----|----|----|----|----|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
| click | x   |    |   |   | | | | `x` | | | | | x | | | |
| obs.  |  |  0  | 1 | 2 | 3 | | | | | `0` | | `1` | | | 0 | | 1 | | 2 | | 3 | |

## `switchMapTo(innerObservable, resultSelector?)`

* `resultSelector: (outerValue, innerValue, outerIndex, innerIndex)`

```
fromEvent(document, 'click').pipe(
	switchMapTo(interval(1000).pipe(take(4)))
).subscribe(console.log);
```

The result is like the above one (_switchMap()_).

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 8.5 | 9s | 9.5s | 10s | 10.5s | 11s | 11.5s | 12s | 12.5s | 13s | 13.5s | 14s | 14.5s | 15s |
|-------|----|----|----|----|----|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
| click | x   |    |   |   | | | | `x` | | | | | x | | | |
| obs.  |  |  0  | 1 | 2 | 3 | | | | | `0` | | `1` | | | 0 | | 1 | | 2 | | 3 | |

## `concatMap(project, resultSelector?)`

* `project: (value, index)`
* `resultSelector: (outerValue, innerValue, outerIndex, innerIndex)`

> `concatMap` is equivalent to `mergeMap` with concurrency parameter set to `1`

```
fromEvent(document, 'click').pipe(
	concatMap(e => interval(1000).pipe(take(4)))
).subscribe(console.log);
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s | 11s | 12s | 13s | 14s | 15s |
|--------|----|----|----|----|-----|---|----|-----|----|----|-----|-------|------|-----|----|
| click | x | | | | | | x | | | x | | | | | |
| obs. | | 0 | 1 | 2 | 3 | | | 0 | 1 | 2 | 3 | 0 | 1 | 2 | 3 |

```
interval(1000).pipe(
	take(2),
	concatMap(i => of('it is ' + i))
).subscribe(console.log);
```

| TIME | 1s | 2s | 3s | 4s | 5s |
|-------|----|-----|----|----|----|
| obs.  | it is 0 | it is 1 | | | |

### The `resultSelector` Callback

```
fromEvent(document, 'click').pipe(
	concatMap(
		e => interval(1000).pipe(take(4)),
		(ov, iv, oi, ii) => console.log(ov, iv, oi, ii)
	)
).subscribe(console.log);
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s | 11s | 12s |
|-------|-----|----|----|----|----|----|-----|----|----|-----|------|----|
| click | x | | | | | | x | | | | | |
| ov | | Ev | Ev | Ev | Ev | | | Ev | Ev | Ev | Ev | |
| iv | | 0 | 1 | 2 | 3 | | | 0 | 1 | 2 | 3 | |
| oi | | 0 | 0 | 0 | 0 | | | 1 | 1| 1| 1 | |
| ii | | 0 | 1 | 2 | 3 | | | 0 | 1 | 2 | 3 | |

### `concatMap()` vs. `map()`

```
fromEvent(document, 'click').pipe(
	map(
		e => interval(1000).pipe(take(4))
	)
).subscribe(console.log);
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s |
|--------|----|----|----|----|----|----|-----|----|
| click | x | | | x | | | | |
| obs. | Observable | | | Observable | | | | |

## `concatMapTo(innerObservable, resultSelector?)`

* `resultSelector: (outerValue, innerValue, outerIndex, innerIndex)`

```
fromEvent(document, 'click').pipe(
	concatMapTo(
		interval(1000).pipe(take(4))
	)
).subscribe(console.log);
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s |
|-------|-----|-----|----|----|----|----|----|----|
| click | | x | | | | | | |
| obs. | | | 0 | 1 | 2 | 3 | | |

## `mergeMap(project, resultSelector?, concurrent?=Number.POSITIVE_INFINITY)`

* `project: (value, index)`
* `resultSelector: number || (outerValue, innerValue, outerIndex, innerIndex)`

```
fromEvent(document, 'click').pipe(
	mergeMap(e => interval(1000).pipe(take(4)))
).subscribe(console.log);
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 8.5s | 9s | 9.5s | 10s | 10.5 s | 11s | 11.5s | 12s | 12.5s | 13s | 13.5s | 14s |
|-------|-----|----|----|----|----|----|----|----|----|------|------|---|---|---|---|--|--|--|--|--|
| click | x |   |   |   |   | | | `x` | | |x | | | | | | | | | |
| obs. | | 0 | 1 | 2 | 3 | | | | | `0` | | `1` | 0 | `2` | 1 | `3` | 2 | | 3 | |

## `mergeMapTo(innerObservable, resultSelector?, concurrent?=Number.POSITIVE_INFINITY)`

* `resultSelector: number || (outerValue, innerValue, outerIndex, innerIndex)`

```
// click -> start internal Observable ticking every 2 seconds
fromEvent(document, 'click').pipe(
	mergeMapTo(interval(2000))
).subscribe(console.log);
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s | 11s | 12s | 13s |
|--------|---|-----|----|----|-----|---|----|----|-----|------|-----|----|----|
| click  | x  |     |     |    |   | `x`   |  x   | | | | | | |
| obs.   |    |   | 0  |   | 1 | | ... | `0` | 0  | `1` |1  | `...` | ... |

### `concatMap()` vs. `mergeMap()` vs. `exhaustMap()` vs. `switchMap()`

```
of('a', 'b').pipe(
	<OP>(
		x => interval(1000).pipe(
			take(3),
			map(i => x + i)
		)
	)
).subscribe(console.log);
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s |
|--------|----|----|----|-----|---|----|
| `concatMap()` | `a0` | `a1` | `a2` | `b0` | `b1` | `b2` |
| `mergeMap()` | `a0` & `b0` | `a1` & `b1` | `a2` & `b2` | | | |
| `exhaustMap()` | `a0` | `a1` | `a2` | | | |
| `switchMap()` | `b0` | `b1` | `b2` | | | |

## `map(project, thisArg?)`

* `project: (value, index)`

```
fromEvent(document, 'click').pipe(
	map(e => e.clientX)
).subscribe(console.log);
```

## `mapTo(value)`

```
fromEvent(document, 'click').pipe(
	mapTo('hi')
).subscribe(console.log);
```