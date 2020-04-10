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