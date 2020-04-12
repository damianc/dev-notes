# Transformation Operators

* [`buffer(closingNotifier)`](#bufferclosingnotifier)
* [`bufferCount(bufferSize, startBufferEvery?)`](#buffercountbuffersize-startbufferevery)
* [`bufferTime(bufferTimeSpan)`](#buffertimebuffertimespan)
* [`bufferToggle(openings, closingSelector)`](#buffertoggleopenings-closingselector)
* [`bufferWhen(closingSelector)`](#bufferwhenclosingselector)
* [`exhaust()`](#exhaust)
* [`exhaustMap(project, resultSelector?)`](#exhaustmapproject-resultselector)
* [`switchMap(project, resultSelector?)`](#switchmapproject-resultselector)
* [`switchMapTo(innerObservable, resultSelector?)`](#switchmaptoinnerobservable-resultselector)
* [`concatMap(project, resultSelector?)`](#concatmapproject-resultselector)
	* [The `resultSelector` Callback](#the-resultselector-callback)
	* [`concatMap()` vs. `map()`](#concatmap-vs-map)
* [`concatMapTo(innerObservable, resultSelector?)`](#concatmaptoinnerobservable-resultselector)
* [`mergeMap(project, resultSelector?, concurrent?=Number.POSITIVE_INFINITY)`](#mergemapproject-resultselector-concurrentnumberpositive_infinity)
* [`mergeMapTo(innerObservable, resultSelector?, concurrent?=Number.POSITIVE_INFINITY)`](#mergemaptoinnerobservable-resultselector-concurrentnumberpositive_infinity)
	* [`concatMap()` vs. `mergeMap()` vs. `exhaustMap()` vs. `switchMap()`](#concatmap-vs-mergemap-vs-exhaustmap-vs-switchmap)
* [`map(project, thisArg?)`](#mapproject-thisarg)
* [`mapTo(value)`](#maptovalue)
* [`mergeScan(accumulator, seed, concurrent=Number.POSITIVE_INFINITY)`](#mergescanaccumulator-seed-concurrentnumberpositive_infinity)
* [`scan(accumulator, seed?)`](#scanaccumulator-seed)
* [`expand(project, concurrent=Number.POSITIVE_INFINITY)`](#expandproject-concurrentnumberpositive_infinity)
* [`groupBy(keySelector, elementSelector?, durationSelector?, subjectSelector?)`](#groupbykeyselector-elementselector-durationselector-subjectselector)
	* [Boolean Expression as a Key Selector](#boolean-expression-as-a-key-selector)
	* [Map #1](#map-1)
	* [Map #2](#map-2)
* [`pairwise()`](#pairwise)
* [`partition(predicate, thisArg?)`](#partitionpredicate-thisarg)
* [`pluck(...properties)`](#pluckproperties)
* [`window(windowBoundaries)`](#windowwindowboundaries)
* [`windowCount(windowSize, startWindowEvery)`](#windowcountwindowsize-startwindowevery)
* [`windowTime(windowTimeSpan, windowCreationInterval?, maxWindowSize?)`](#windowtimewindowtimespan-windowcreationinterval-maxwindowsize)
	* [Limiting a Window Size by `take()`](#limiting-a-window-size-by-take)
* [`windowToggle(openings, closingSelector)`](#windowtoggleopenings-closingselector)
* [`windowWhen(closingSelector)`](#windowwhenclosingselector)

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

## `mergeScan(accumulator, seed, concurrent=Number.POSITIVE_INFINITY)`

* `accumulator: (acc, value, index)`

```
range(1, 5).pipe(
	mergeScan(
		(acc, one) => of(acc * one),
		1
	)
).subscribe(console.log);

// 1 2 6 24 120
```

```
const seed = 0;
fromEvent(document, 'click').pipe(
	mapTo(1)
).pipe(
	mergeScan(
		(acc, one) => of(acc + one),
		seed
	)
).subscribe(console.log);
```

| CLICK | | x | x | | | x | | x | | | | x | x | x | x | |
|-------|-|---|---|-|-|---|-|---|-|-|-|---|---|---|---|-|
| obs.  | | 1 | 2 | | | 3 | | 4 | | | | 5 | 6 | 7 | 8 | |

## `scan(accumulator, seed?)`

* `accumulator: (acc, value, index)`

```
const clicks = fromEvent(document, 'click');
const ones = clicks.pipe(mapTo(1));
const count = ones.pipe(
	scan(
		(acc, one) => acc + one,
		0
	)
).subscribe(console.log);
```

| CLICK | | x | | | x | | x | | | | x | |
|-------|-|---|-|-|---|-|---|-|-|-|---|-|
| obs.  | | 1 | | | 2 | | 3 | | | | 4 | |

```
const stats = {len: 0, sum: 0, curr: 0};
const nums = of(1, 3, 4, 2);

nums.pipe(
	scan(
		(acc, val) => {
			var obj = Object.assign({}, acc);
			obj.len += 1;
			obj.sum += val;
			obj.curr = val;
			return obj;
		},
		stats
	)
).subscribe(obj => {
	console.log(
		'current val is %d and average is %f',
		obj.curr,
		+(obj.sum / obj.len).toFixed(2)
	);
});

// current val is 1 and average is 1
// current val is 3 and average is 2
// current val is 4 and average is 2.67
// current val is 2 and average is 2.5
```

## `expand(project, concurrent=Number.POSITIVE_INFINITY)`

* `project: (value, index)`

```
fromEvent(document, 'click').pipe(
	mapTo(1),
	expand(
		x => of(2 * x).pipe(delay(1000))
	),
	take(10)
).subscribe(console.log);
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s | 11s | 12s | 13s | 14s |
|--------|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
| click | x | | | | | | | | | | | x | | |
| obs. | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | | | | |

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s | 11s | 12s | 13s | 14s |
|--------|--|--|--|--|--|--|--|--|--|--|--|--|--|--|
| click | x | | | | x | | | | | | | | | |
| obs. | 1 | 2 | 4 | 8 | 16 & 1 | 32 & 2 | 64 & 4 | | | | | | | |

```
of(5).pipe(
	expand(x => x > 1 ? of(x - 1) : EMPTY
).subscribe(console.log);

// 5 4 3 2 1
```

## `groupBy(keySelector, elementSelector?, durationSelector?, subjectSelector?)`

* `keySelector: (value)`
* `elementSelector: void | (value)`
* `durationSelector: (grouped)`
* `subjectSelector: ()`

```
of(1, 2, 3, 4, 5, 6 , 7, 8).pipe(
	groupBy(p => p % 2),
	mergeMap(group$ => group$.pipe(
		reduce(
			(acc, curr) => [...acc, curr],
			[]
		)
	))
).subscribe(console.log);

// [1, 3, 5, 7]
// [2, 4, 6, 8]
```

```
of(1, 2, 3, 4, 5, 6 , 7, 8).pipe(
	groupBy(p => p % 2),
	mergeMap(group$ => group$.pipe(
		reduce(
			(acc, curr) => [...acc, curr],
			[]
		),
		map(
			arr => ({
				nums: arr,
				count: arr.length
			})
		)
	))
).subscribe(console.log);

// {nums: [1, 3, 5, 7], count: 4}
// {nums: [2, 4, 6, 8], count: 4}
```

```
of(
	{id: 1, name: 'JavaScript'},
	{id: 2, name: 'Parcel'},
	{id: 2, name: 'Webpack'},
	{id: 1, name: 'TypeScript'},
	{id: 3, name: 'TSLint'}
).pipe(
	groupBy(
		p => p.id,
		p => p.name
	),
	mergeMap(group$ => group$.pipe(
		reduce(
			(acc, curr) => [...acc, curr],
			[`${group$.key}`]
		)
	)),
	map(arr => ({
		id: parseInt(arr[0], 10),
		values: arr.slice(1)
	}))
).subscribe(console.log);

// {id: 1, values: ['JavaScript', 'TypeScript']}
// {id: 2, values: ['Parcel', 'Webpack']}
// {id: 3, values: ['TSLint']}
```

### Boolean Expression as a Key Selector

```
of(...).pipe(
	groupBy(
		p => p.rate > 3,
		p => p.name
	)
).subscribe(console.log);

// Observable {key: true ...}
// Observable {key: false ...}
```

```
of(...).pipe(
	groupBy(
		p => p.rate > 3 ? 'A' : 'B',
		p => p.name
	)
).subscribe(console.log);

// Observable {key: "A" ...}
// Observable {key: "B" ...}
```

### Map #1

```
of(
	{name: 'John', rate: 4},
	{name: 'Adam', rate: 3},
	{name: 'Leo', rate: 2},
	{name: 'David', rate: 5}
).pipe(
	groupBy(
		p => p.rate > 3 ? 'A' : 'B',
		p => p.name
	),
	mergeMap(g => g.pipe(
		reduce(
			(acc, curr) => [...acc, curr],
			[`${g.key}`]
		)
	))
).subscribe(console.log);

// ['A', 'John', 'David']
// ['B', 'Adam', 'Leo']
```

### Map #2

```
of(
	{name: 'John', rate: 4},
	{name: 'Adam', rate: 3},
	{name: 'Leo', rate: 2},
	{name: 'David', rate: 5}
).pipe(
	groupBy(
		p => p.rate > 3 ? 'A' : 'B',
		p => p.name
	),
	mergeMap(g => g.pipe(
		reduce(
			(acc, curr) => [...acc, curr],
			[`${g.key}`]
		)
	)),
	map(arr => ({
		rate: arr[0],
		students: arr.slice(1)
	}))
).subscribe(console.log);

// {rate: 'A', students: ['John', 'David']}
// {rate: 'B', students: ['Adam', 'Leo']}
```

## `pairwise()`

```
// on every click (starting from 2nd)
// emit the relative distance to the previous click

fromEvent(document, 'click').pipe(
	pairwise()
).pipe(
	map(pair => {
		const x0 = pair[0].clientX, y0 = pair[0].clientY;
		const x1 = pair[1].clientX, y1 = pair[1].clientY;

		return Math.sqrt(
			Math.pow(x0 - x1, 2) +
			Math.pow(y0 - y1, 2)
		);
	})
).subscribe(console.log);
```

## `partition(predicate, thisArg?)`

* `predicate: (value, index)`

```
const clicks = fromEvent(document, 'click');
const parts = clicks.pipe(
	partition(
		e => e.target.tagName === 'DIV'
	)
);

const clicksOnDivs = parts[0];
const clicksElsewhere = parts[1];

clicksOnDivs.subscribe(x => {
	console.log('DIV clicked: ', x);
});

clicksElsewhere.subscribe(x => {
	console.log('Other clicked: ', x);
});
```

```
const int$ = interval(1000).pipe(take(8));
const [evens, odds] = int$.pipe(
	partition(x => x % 2 === 0)
);

evens.subscribe(x => console.log('EVEN: %d', x));
odds.subscribe(x => console.log('ODD: %d', x));
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s |
|-------|----|----|-----|----|----|----|----|-----|----|----|
| evens | `EVEN: 0` | | `EVEN: 2` | | `EVEN: 4` | | `EVEN: 6` | | | |
| odds | | `ODD: 1` | | `ODD: 3` | | `ODD: 5` | | `ODD: 7` | | |

## `pluck(...properties)`

```
fromEvent(document, 'click').pipe(
	pluck('target', 'tagName')
).subscribe(console.log);
```

```
of([
	['a', 'b'],
	['c', 'd']
]).pipe(
	pluck(0, 1)
).subscribe(console.log);
// b
```

## `window(windowBoundaries)`

```
var clicks = fromEvent(document, 'click');
var sec = interval(1000);

sec.pipe(
	window(clicks),
	map(win => win.pipe(take(4))),
	mergeAll()
).subscribe(console.log);
```

> Without the `map()` operator, we would get number after number (or all numbers) - switch of observable wouldn't be seen.

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s | 11s | 12s |
|------|-|-|-|-|-|-|-|-|-|-|-|-|
| click | | | | | | x | | x | | | | |
| obs. | 0 | 1 | 2 | 3 | | 5 | 6 | 7 | 8 | 9 | 10 | |

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s | 11s | 12s |
|------|-|-|-|-|-|-|-|-|-|-|-|-|
| click | | x | | | | | | x | | | | |
| obs. | 0 | 1 | 2 | 3 | 4 | | | 7 | 8 | 9 | 10 | |

## `windowCount(windowSize, startWindowEvery)`

```
// ignore every 3rd click
// starting from 1st one

fromEvent(document, 'click').pipe(
	windowCount(3),
	// skip 1st of every 3 click
	map(win => win.pipe(skip(1))),
	mergeAll()
).subscribe(console.log);
```

## `windowTime(windowTimeSpan, windowCreationInterval?, maxWindowSize?)`

```
fromEvent(document, 'click').pipe(
	windowTime(2000,  5000,  2),
	mergeAll()
).subscribe(console.log);
```

| TIME | `1s` | `2s` | 3s | 4s | 5s | `6s` | `7s` | 8s | 9s | 10s |
|--------|-|-|-|-|-|-|-|-|-|-|
| click | x | x | x | x | | | x | | | |
| obs. | Ev | Ev | | | | | Ev | | | |

### Limiting a Window Size by `take()`

```
fromEvent(document, 'click').pipe(
	windowTime(2000,  5000),
	map(win => win.pipe(take(2))),
	mergeAll()
).subscribe(console.log);
```

## `windowToggle(openings, closingSelector)`

* `closingSelector: (openValue)`

```
interval(500).pipe(
	take(15),
	windowToggle(
		interval(2000),
		i => interval(1000)
	),
	mergeAll()
).subscribe(console.log);
```

| TIME | 0.5s | 1s | 1.5s | `2s` | `2.5s` | `3s` | `3.5s` | 4s | 4.5s | 5s | 5.5s | `6s` | `6.5s` | `7s` |
|-------|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
| intv500 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
| obs. | | | | 3 | 4 | 5 | | 7 | 8 | 9 | | 11 | 12 | 13 |

```
interval(500).pipe(
	take(15),
	windowToggle(
		interval(2000),
		i => interval(500) // 1000 -> 500
	),
	mergeAll()
).subscribe(console.log);
```

| TIME | 0.5s | 1s | 1.5s | `2s` | `2.5s` | `3s` | `3.5s` | 4s | 4.5s | 5s | 5.5s | `6s` | `6.5s` | `7s` |
|-------|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
| intv500 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
| obs. | | | | 3 | 4 | | | 7 | 8 | | | 11 | 12 | |

# `windowWhen(closingSelector)`

* `closingSelector: ()`

```
// emit only 2 first clicks
// in every window of 5 seconds

fromEvent(document, 'click').pipe(
	windowWhen(() => interval(5000)),
	map(win => win.pipe(take(2))),
	mergeAll()
).subscribe(console.log);
```