# Utility Operators

* `[tap(nextOrObserver?, error(e)?, complete()?)`](#tapnextorobserver-errore-complete)
* [`delay(msOrDate)`](#delaymsordate)
* [`delayWhen(delaySelectorObs(value, index), subscriptionDelayObs?)`](#delaywhendelayselectorobsvalue-index-subscriptiondelayobs)
* [`timeInterval(scheduler?)`](#timeintervalscheduler)
* [`timestamp(scheduler?)`](#timestampscheduler)
* [`timeout(due)`](#timeoutdue)
* [`timeoutWith(due, fallbackObservable)`](#timeoutwithdue-fallbackobservable)
* [`observeOn(scheduler, delay?)`](#observeonscheduler-delay)
* [`subscribeOn(scheduler, delay?)`](#subscribeonscheduler-delay)
* [`toArray()`](#toarray)
* [`materialize()`](#materialize)
* [`dematerialize()`](#dematerialize)

## `tap(nextOrObserver?, error(e)?, complete()?)`

```
import { fromEvent } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const xPos = [];
const click$ = fromEvent(document, 'click');

click$.pipe(
	map(e => e.clientX),
	tap(e => xPos.push(e))
).subscribe(console.log);
```

## `delay(msOrDate)`

```
import { fromEvent } from 'rxjs';
import { delay } from 'rxjs/operators';

fromEvent(document, 'click').pipe(
	delay(4000)
).subscribe(console.log);
```

| TIME   | Im | 1s | 2s | 3s | `4s` | 5s | 6s | 7s | `8s` | 9s | 10s | 11s | `12s` |
|--------|----|----|----|----|------|----|----|----|------|----|-----|-----|-------|
| click  |    | C  |    | C  |      |    | C  |    |      |    |     |     |       |
| FINAL  |    |    |    |    |      | Ev |    | Ev |      |    | Ev  |     |       |

### `Date` as a Delay

```
import { fromEvent } from 'rxjs';
import { delay } from 'rxjs/operators';

fromEvent(document, 'click').pipe(
	delay(new Date(Date.now() + (1000 * 8))) // 8 seconds
).subscribe(console.log);
```

| TIME   | Im | 1s | 2s | 3s | 4s | 5s | 6s | 7s | `8s` | 9s | 10s | 11s | 12s | 13s | 14s | 15s | `16s` | 17s | 18s |
|--------|----|----|----|----|----|----|----|----|------|----|-----|-----|-----|-----|-----|-----|-------|-----|-----|
| click  |    | C  |    | C  |    |    | C  |    |      |    | C   |     |     |     |     |     |       |     |     |
| FINAL  |    |    |    |    |    |    |    |    |      | Ev |     | Ev  |     |     | Ev  |     |       |     | Ev  |

* let **X** be a number of milliseconds between _now_ and the date
* the _delay_ equals **X**


## `delayWhen(delaySelectorObs(value, index), subscriptionDelayObs?)`

```
import { fromEvent, interval } from 'rxjs';
import { delayWhen } from 'rxjs/operators';

fromEvent(document, 'click').pipe(
	delayWhen(
		e => interval(2000),
		interval(5000)
	)
).subscribe(console.log);
```

| TIME        | Im | 1s | 2s   | 3s   | 4s | 5s     | 6s | 7s | 8s | 9s | 10s | 11s | 12s |
|-------------|----|----|------|------|----|--------|----|----|----|----|-----|-----|-----|
| click       |    |    | ~C~  | ~C~  |    |        | C  |    |    | C  | C   |     |     |
| sub. delay  |    |    |      |      |    | **X**  |    |    |    |    |     |     |     |
| FINAL       |    |    |      |      |    |        |    |    | Ev |    |     | Ev  | Ev  |

## `timeInterval(scheduler?)`

```
import { interval } from 'rxjs';
import { timeInterval, take, map } from 'rxjs/operators';

const second$ = interval(1000).pipe(take(5));

second$.pipe(
	timeInterval(),
	map(obj => obj.value + ' after ' + obj.interval + 'ms')
).subscribe(console.log);
```

| TIME  | Im | 1s | 2s | 3s | 4s | 5s | 6s |
|-------|----|----|----|----|----|----|----|
| FINAL |    | "0 after 1000ms" | "1 after 999ms" | "2 after 999ms" | "3 after 1000ms" | "4 after 1000ms" | |

> The values will never be this precise: intervals created with `interval` or `setInterval` are non-deterministic.


## `timestamp(scheduler?)`

```
import { fromEvent } from 'rxjs';
import { timestamp, map } from 'rxjs/operators';

interface ClickWithTimestamp {
	value: MouseEvent;
	timestamp: number;
}

const click$ = fromEvent(document, 'click').pipe(
	timestamp(),
	map((obj: ClickWithTimestamp) => {
		return obj.timestamp + ': click at ' + obj.value.clientX + 'x' + obj.value.clientY;
	})
);

click$.subscribe(console.log);
```

| TIME      | Im | 1s | 2s | 3s | 4s |
|----------|-----|----|----|----|----|
| FINAL    |     | C  |    | C  |    |
|          |     | "1569437744456: click at 629x477" |    | "1569437745305: click at 797x579"   |    |

## `timeout(due)`

`due`:
* number specifying period within which Observable must emit values
* `Date` specifying before when Observable should complete

```
import { fromEvent } from 'rxjs';
import { timeout } from 'rxjs/oeprators';

fromEvent(document, 'click').pipe(
	timeout(2100)
	// a bit bigger timespan
	// as interval created with `interval` is non-deterministic
	// and might fire a bit later than scheduled
).subscribe(console.log);
```

| TIME    | Im | 1s | 2s | 3s |
|---------|----|----|----|----|
| FINAL   |    |    |    | *TimeoutError* |

| TIME    | Im | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s |
|---------|----|----|----|----|----|----|----|----|----|
| FINAL   |    | C  |    | C  | C  | C  |    |    | *TimeoutError* |

## `timeoutWith(due, fallbackObservable)`

```
import { fromEvent, interval } from 'rxjs';
import { timeoutWith, take } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const intv$ = interval(1000).pipe(take(5));

click$.pipe(
	timeoutWith(2000, intv$)
).subscribe(console.log);
```

| TIME      | Im | 1s | 2s | 3s | 4s | 5s | `6s` | 7s | 8s | 9s | 10s | 11s | 12s |
|-----------|----|----|----|----|----|----|------|----|----|----|-----|-----|-----|
| click     |    | C  |    | C  |    |    |      |    |    |    |     |     |     |
| FINAL     |    | Ev |    | Ev |    |    |      | 0  | 1  | 2  | 3   | 4   |     |

## `observeOn(scheduler, delay?)`

```
import { interval, animationFrameScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';

const interval$ = interval(10);
// interval is scheduled with async scheduler by default

interval$.pipe(
	observeOn(animationFrameScheduler)
).subscribe(val => {
	someDiv.style.marginLeft = val + 'px';
});
```

## `subscribeOn(scheduler, delay?)`

```
import { of, merge, asyncScheduler } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';

const a = of(1, 2, 3, 4).pipe(
	subscribeOn(asyncScheduler)
);
const b = of(5, 6, 7, 8);

merge(a, b).subscribe(console.log);
```

| OPERATION | obs. b      | other ops in the event loop | obs. a     |
|-----------|-------------|-----------------------------|------------|
| FINAL     | 5, 6, 7, 8  |                             | 1, 2, 3, 4 |

## `toArray()`

```
import { interval } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

interval(1000).pipe(
	take(4),
	toArray()
).subscribe(console.log);
```

| TIME    | Im | 1s | 2s | 3s | 4s |
|---------|----|----|----|----|----|
| FINAL   |    |    |    |    | [0, 1, 2, 3] |

> When the source Observable throws error, no array will be emitted.  
> If `take(4)` would be placed after `toArray()`, we would get infinite Observable and no results.

## `materialize()`

```
import { of } from 'rxjs';
import { materialize, map} from 'rxjs/operators';

const letter$ = of('a', 'b', 10, 'c');
const ucLetter$ = letter$.pipe(
	map(l => l.toUpperCase())
);

const materialized = ucLetter$.pipe(materialize());
materialized.subscribe(console.log);
```

```
Notification {kind: "N", value: "A", error: undefined, hasValue: true}
Notification {kind: "N", value: "B", error: undefined, hasValue: true}
Notification {kind: "E", value: undefined, error: TypeError, hasValue: false}
```

### `Notification`

```
Notification(kind, value?, error?)
```

* **kind**: `N` for _next_, `C` for _complete_ or `E` for _error_
* **value**: a value for _next_
* **error**: an error for _error_
* **hasValue**: `true` for _next_

[`Notification` in RxJS docs](https://rxjs-dev.firebaseapp.com/api/index/class/Notification)

## `dematerialize()`

```
import { of, Notification, NotificationKind } from 'rxjs';
import { dematerialize } from 'rxjs/operators';
 
const notifA = new Notification(NotificationKind.NEXT, 'A');
const notifB = new Notification(NotificationKind.NEXT, 'B');
const notifC = new Notification(NotificationKind.NEXT, 'C');
const notifD = new Notification(NotificationKind.NEXT, 'D');
const notifE = new Notification(NotificationKind.COMPLETE);

const materialized = of(notifA, notifB, notifC, notifD, notifE);
const dematerialized = materialized.pipe(
	dematerialize()
);

dematerialized.subscribe(console.log);
```

```
A
B
C
D
```
