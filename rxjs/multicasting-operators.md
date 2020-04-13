# Multicasting Operators

* [`multicast(subjectOrSubjectFactory, selector?)`](#multicastsubjectorsubjectfactory-selector)
	* [Without Multicasting](#without-multicasting)
* [`share()`](#share)
* [`publish(selector?)`](#publishselector)
* [`publishLast()`](#publishlast)
* [`publishBehavior(value)`](#publishbehaviorvalue)
* [`publishReplay(bufferSize?, windowTime?, selectorOrScheduler?, scheduler?)`](#publishreplaybuffersize-windowtime-selectororscheduler-scheduler)
	* [`publishReplay()` with `windowTime`](#publishreplay-with-windowtime)

## `multicast(subjectOrSubjectFactory, selector?)`

* `subjectOrSubjectFactory: Subject | () => Subject`
* `selector: (sourceObservable)`

```
var intv = interval(1000).pipe(take(4));
var subject = new Subject();
var multicasted$ = intv.pipe(
	multicast(subject)
);

multicasted$.connect();

multicasted$.subscribe(x => {
	console.log('A: ' + x);
});

setTimeout(function () {
	multicasted$.subscribe(x => {
		console.log('B: ' + x);
	}, 2000);
})
```

| TIME | 1s | 2s | 3s | 4s | 5s |
|------|----|----|----|----|----|
| intv | 0  | 1  | 2  | 3  |    |
| obs. | `'A: 0'` | `'A: 1'` | `'A: 2'` & `'B: 2'` | `'A: 3'` & `'B: 3'` | |

## Without Multicasting

```
var intv = interval(1000).pipe(take(4));

intv.subscribe(x => {
	console.log('A: ' + x);
});

setTimeout(function () {
	intv.subscribe(x => {
		console.log('B: ' + x);
	}, 2000);
})
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s |
|------|----|----|----|----|----|----|----|----|
| intv | 0  | 1  | 2  | 3  |    |    |    |    |
| obs. | `'A: 0'` | `'A: 1'` | `'A: 2'` & `'B: 0'` | `'A: 3'` & `'B: 1'` | `'B: 2'` | `'B: 3'` | | |

## `share()`

```
var ints = interval(1000).pipe(
	take(5),
	share()
);

ints.subscribe(x => {
	console.log('A: ' + x);
});

setTimeout(() => {
	ints.subscribe(x => {
		console.log('B: ' + x);
	});
}, 2000);
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s |
|------|----|----|----|----|----|----|
| intv | 0  | 1  | 2  | 3  | 4  |    |
| obs. | `'A: 0'` | `'A: 1'` | `'A: 2'` & `'B: 2'` | `'A: 3'` & `'B: 3'` | `'A: 4'` & `'B: 4'` | |

```
var ints = interval(1000).pipe(
	take(3),
	share()
);

ints.subscribe(x => {
	console.log('A: ' + x);
});

setTimeout(() => {
	ints.subscribe(x => {
		console.log('B: ' + x);
	});
}, 5000);
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s |
|------|----|----|----|----|----|----|----|----|
| intv | 0  | 1  | 2  |    |    |    |    |    |
| obs. | `A: 0` | `A: 1` | `A: 2` | | | `B: 0` | `B: 1` | `B: 2` |

> the same result is achieved without `share()` here

## `publish(selector?)`

```
import { of, zip, interval, merge } from 'rxjs';
import { map, publish, tap } from 'rxjs/operators';

const source$ = zip(
	interval(2000),
	of(1, 2, 3, 4)
).pipe(
	map(values => values[1])
);

source$.pipe(
	publish(
		multicasted$ => merge(
			multicasted$.pipe(tap(x => console.log('Stream A:', x))),
			multicasted$.pipe(tap(x => console.log('Stream B:', x))),
		)
	)
)
.subscribe(console.log);
```

| TIME | obs. | LOGGED |
|------|------|--------|
| 1s   |      |        |
| 2s   | 1    | `'Stream A: 1'` & `1` & `'Stream B: 1'` & `1` |
| 3s   |      |        |
| 4s   | 2    | `'Stream A: 2'` & `2` & `'Stream B: 2'` & `2` |
| 5s   |      |        |
| 6s   | 3    | `'Stream A: 3'` & `3` & `'Stream B: 3'` & `3` |
| 7s   |      |        |
| 8s   | 4    | `'Stream A: 4'` & `4` & `'Stream B: 4'` & `4` |

## `publishLast()`

```
import { interval } from 'rxjs';
import { publishLast, tap, take } from 'rxjs/operators';

const connectable = interval(1000).pipe(
	tap(x => console.log("side effect", x)),
	take(3),
	publishLast()
);

connectable.subscribe(
	x => console.log('A: ', x),
	err => console.log('A: Error', err),
	() => console.log('A: Complete')
);

connectable.subscribe(
	x => console.log('B: ', x),
	err => console.log('B: Error', err),
	() => console.log('B: Complete')
);

connectable.connect();
```

<table>
	<tr>
		<th>TIME</th><th>obs.</th><th>LOGGED</th>
	</tr>
	<tr>
		<td>1s</td><td>0</td><td><code>side effect 0</code></td>
	</tr>
	<tr>
		<td>2s</td><td>1</td><td><code>side effect 1</code></td>
	</tr>
	<tr>
		<td>3s</td>
		<td>2</td>
		<td>
			<code>side effect 2</code> <br/>
			<code>A: 2</code> <br/>
			<code>B: 2</code> <br/>
			<code>A: Complete</code> <br/>
			<code>B: Complete</code>
		</td>
	</tr>
</table>

```
import { interval } from 'rxjs';
import { publishLast, tap, take } from 'rxjs/operators';

const connectable = interval(1000).pipe(
	tap(x => console.log("side effect", x)),
	take(3),
	publishLast()
);

connectable.subscribe(
	x => console.log('A: ', x),
	err => console.log('A: Error', err),
	() => console.log('A: Complete')
);

setTimeout(() => {
	connectable.subscribe(
		x => console.log('B: ', x),
		err => console.log('B: Error', err),
		() => console.log('B: Complete')
	);
}, 5000);

connectable.connect();
```

<table>
	<tr>
		<th>TIME</th><th>obs.</th><th>LOGGED</th>
	</tr>
	<tr>
		<td>1s</td><td>0</td><td><code>side effect 0</code></td>
	</tr>
	<tr>
		<td>2s</td><td>1</td><td><code>side effect 1</code></td>
	</tr>
	<tr>
		<td>3s</td>
		<td>2</td>
		<td>
			<code>side effect 2</code> <br/>
			<code>A: 2</code> <br/>
			<code>A: Complete</code>
		</td>
	</tr>
	<tr>
		<td>4s</td><td></td><td></td>
	</tr>
	<tr>
		<td>5s</td>
		<td></td>
		<td>
			<code>B: 2</code> <br/>
			<code>B: Complete</code>
		</td>
</table>

## `publishBehavior(value)`

```
import { interval } from 'rxjs';
import { publishBehavior, tap, take } from 'rxjs/operators';

const connectable = interval(1000).pipe(
	tap(x => console.log("side effect", x)),
	take(3),
	publishBehavior(-1)
);

connectable.subscribe(
	x => console.log('A: ', x),
	err => console.log('A: Error', err),
	() => console.log('A: Complete')
);

connectable.subscribe(
	x => console.log('B: ', x),
	err => console.log('B: Error', err),
	() => console.log('B: Complete')
);

connectable.connect();
```

<table>
	<tr>
		<th>TIME</th><th>obs.</th><th>LOGGED</th>
	</tr>
	<tr>
		<td>Im.</td>
		<td></td>
		<td>
			<code>A: -1</code> <br/>
			<code>B: -1</code>
		</td>
	</tr>
	<tr>
		<td>1s</td>
		<td>0</td>
		<td>
			<code>side effect 0</code> <br/>
			<code>A: 0</code> <br/>
			<code>B: 0</code>
		</td>
	</tr>
	<tr>
		<td>2s</td>
		<td>1</td>
		<td>
			<code>side effect 1</code> <br/>
			<code>A: 1</code> <br/>
			<code>B: 1</code>
		</td>
	</tr>
	<tr>
		<td>3s</td>
		<td>2</td>
		<td>
			<code>side effect 2</code> <br/>
			<code>A: 2</code> <br/>
			<code>B: 2</code> <br/>
			<code>A: Complete</code> <br/>
			<code>B: Complete</code>
		</td>
	</tr>
</table>

```
import { interval } from 'rxjs';
import { publishBehavior, tap, take } from 'rxjs/operators';

const connectable = interval(1000).pipe(
	tap(x => console.log("side effect", x)),
	take(3),
	publishBehavior(-1)
);

connectable.subscribe(
	x => console.log('A: ', x),
	err => console.log('A: Error', err),
	() => console.log('A: Complete')
);

setTimeout(() => {
	connectable.subscribe(
		x => console.log('B: ', x),
		err => console.log('B: Error', err),
		() => console.log('B: Complete')
	);
}, 3000);

connectable.connect();
```

<table>
	<tr>
		<th>TIME</th><th>obs.</th><th>LOGGED</th>
	</tr>
	<tr>
		<td>Im.</td>
		<td></td>
		<td>
			<code>A: -1</code>
		</td>
	</tr>
	<tr>
		<td>1s</td>
		<td>0</td>
		<td>
			<code>side effect 0</code> <br/>
			<code>A: 0</code>
		</td>
	</tr>
	<tr>
		<td>2s</td>
		<td>1</td>
		<td>
			<code>side effect 1</code> <br/>
			<code>A: 1</code> <br/>
			<code>B: 1</code>
		</td>
	</tr>
	<tr>
		<td>3s</td>
		<td>2</td>
		<td>
			<code>side effect 2</code> <br/>
			<code>A: 2</code> <br/>
			<code>B: 2</code> <br/>
			<code>A: Complete</code> <br/>
			<code>B: Complete</code>
		</td>
	</tr>
</table>

```
import { interval } from 'rxjs';
import { publishBehavior, tap, take } from 'rxjs/operators';

const connectable = interval(1000).pipe(
	tap(x => console.log("side effect", x)),
	take(3),
	publishBehavior(-1)
);

connectable.subscribe(
	x => console.log('A: ', x),
	err => console.log('A: Error', err),
	() => console.log('A: Complete')
);

setTimeout(() => {
	connectable.subscribe(
		x => console.log('B: ', x),
		err => console.log('B: Error', err),
		() => console.log('B: Complete')
	);
}, 5000);

connectable.connect();
```

<table>
	<tr>
		<th>TIME</th><th>obs.</th><th>LOGGED</th>
	</tr>
	<tr>
		<td>Im.</td>
		<td></td>
		<td>
			<code>A: -1</code>
		</td>
	</tr>
	<tr>
		<td>1s</td>
		<td>0</td>
		<td>
			<code>side effect 0</code> <br/>
			<code>A: 0</code>
		</td>
	</tr>
	<tr>
		<td>2s</td>
		<td>1</td>
		<td>
			<code>side effect 1</code> <br/>
			<code>A: 1</code>
		</td>
	</tr>
	<tr>
		<td>3s</td>
		<td>2</td>
		<td>
			<code>side effect 2</code> <br/>
			<code>A: 2</code> <br/>
			<code>A: Complete</code>
		</td>
	</tr>
	<tr>
		<td>4s</td><td></td><td></td>
	</tr>
	<tr>
		<td>5s</td>
		<td></td>
		<td>
			<code>B: Complete</code>
		</td>
	</tr>
</table>

## `publishReplay(bufferSize?, windowTime?, selectorOrScheduler?, scheduler?)`

```
import { interval } from 'rxjs';
import { publishReplay, tap, take } from 'rxjs/operators';

const connectable = interval(1000).pipe(
	tap(x => console.log("side effect", x)),
	take(5),
	publishReplay(2)
);

connectable.subscribe(
	x => console.log('A: ', x),
	err => console.log('A: Error', err),
	() => console.log('A: Complete')
);


connectable.subscribe(
	x => console.log('B: ', x),
	err => console.log('B: Error', err),
	() => console.log('B: Complete')
);

connectable.connect();
```

<table>
	<tr>
		<th>TIME</th><th>obs.</th><th>LOGGED</th>
	</tr>
	<tr>
		<td>1s</td>
		<td>0</td>
		<td>
			<code>side effect 0</code> <br/>
			<code>A: 0</code> <br/>
			<code>B: 0</code>
		</td>
	</tr>
	<tr>
		<td>2s</td>
		<td>1</td>
		<td>
			<code>side effect 1</code> <br/>
			<code>A: 1</code> <br/>
			<code>B: 1</code> <br/>
		</td>
	</tr>
	<tr>
		<td>3s</td>
		<td>2</td>
		<td>
			<code>side effect 2</code> <br/>
			<code>A: 2</code> <br/>
			<code>B: 2</code>
		</td>
	</tr>
	<tr>
		<td>4s</td>
		<td>3</td>
		<td>
			<code>side effect 3</code> <br/>
			<code>A: 3</code> <br/>
			<code>B: 3</code>
		</td>
	</tr>
	<tr>
		<td>5s</td>
		<td>4</td>
		<td>
			<code>side effect 4</code> <br/>
			<code>A: 4</code> <br/>
			<code>B: 4</code> <br/>
			<code>A: Complete</code> <br/>
			<code>B: Complete</code>
		</td>
	</tr>
</table>

```
import { interval } from 'rxjs';
import { publishReplay, tap, take } from 'rxjs/operators';

const connectable = interval(1000).pipe(
	tap(x => console.log("side effect", x)),
	take(5),
	publishReplay(2)
);

connectable.subscribe(
	x => console.log('A: ', x),
	err => console.log('A: Error', err),
	() => console.log('A: Complete')
);

setTimeout(() => {
	connectable.subscribe(
		x => console.log('B: ', x),
		err => console.log('B: Error', err),
		() => console.log('B: Complete')
	);
}, 4000);

connectable.connect();
```

<table>
	<tr>
		<th>TIME</th><th>obs.</th><th>LOGGED</th>
	</tr>
	<tr>
		<td>1s</td>
		<td>0</td>
		<td>
			<code>side effect 0</code> <br/>
			<code>A: 0</code>
		</td>
	</tr>
	<tr>
		<td>2s</td>
		<td>1</td>
		<td>
			<code>side effect 1</code> <br/>
			<code>A: 1</code>
		</td>
	</tr>
	<tr>
		<td>3s</td>
		<td>2</td>
		<td>
			<code>side effect 2</code> <br/>
			<code>A: 2</code>
		</td>
	</tr>
	<tr>
		<td>4s</td>
		<td>3</td>
		<td>
			<code>B: 1</code> <br/>
			<code>B: 2</code> <br/>
			<code>side effect 3</code> <br/>
			<code>A: 3</code> <br/>
			<code>B: 3</code>
		</td>
	</tr>
	<tr>
		<td>5s</td>
		<td>4</td>
		<td>
			<code>side effect 4</code> <br/>
			<code>A: 4</code> <br/>
			<code>B: 4</code> <br/>
			<code>A: Complete</code> <br/>
			<code>B: Complete</code>
		</td>
	</tr>
</table>

```
import { interval } from 'rxjs';
import { publishReplay, tap, take } from 'rxjs/operators';

const connectable = interval(1000).pipe(
	tap(x => console.log("side effect", x)),
	take(4),
	publishReplay()
);

connectable.subscribe(
	x => console.log('A: ', x),
	err => console.log('A: Error', err),
	() => console.log('A: Complete')
);

setTimeout(() => {
	connectable.subscribe(
		x => console.log('B: ', x),
		err => console.log('B: Error', err),
		() => console.log('B: Complete')
	);
}, 5000);

connectable.connect();
```

<table>
	<tr>
		<th>TIME</th><th>obs.</th><th>LOGGED</th>
	</tr>
	<tr>
		<td>1s</td>
		<td>0</td>
		<td>
			<code>side effect 0</code> <br/>
			<code>A: 0</code>
		</td>
	</tr>
	<tr>
		<td>2s</td>
		<td>1</td>
		<td>
			<code>side effect 1</code> <br/>
			<code>A: 1</code>
		</td>
	</tr>
	<tr>
		<td>3s</td>
		<td>2</td>
		<td>
			<code>side effect 2</code> <br/>
			<code>A: 2</code> <br/>
		</td>
	</tr>
	<tr>
		<td>4s</td>
		<td>3</td>
		<td>
			<code>side effect 3</code> <br/>
			<code>A: 3</code>
			<code>A: Complete</code>
		</td>
	</tr>
	<tr>
		<td>5s</td>
		<td>4</td>
		<td>
			<code>B: 0</code> <br/>
			<code>B: 1</code> <br/>
			<code>B: 2</code> <br/>
			<code>B: 3</code> <br/>
			<code>B: Complete</code>
		</td>
	</tr>
</table>

### `publishReplay()` with `windowTime`

```
import { interval } from 'rxjs';
import { publishReplay, tap, take } from 'rxjs/operators';

const connectable = interval(1000).pipe(
	tap(x => console.log("side effect", x)),
	take(4),
	// replay up to 100 items not older than 2200ms
	publishReplay(100, 2200)
);

connectable.subscribe(
	x => console.log('A: ', x),
	err => console.log('A: Error', err),
	() => console.log('A: Complete')
);

setTimeout(() => {
	connectable.subscribe(
		x => console.log('B: ', x),
		err => console.log('B: Error', err),
		() => console.log('B: Complete')
	);
}, 5000);

connectable.connect();
```

<table>
	<tr>
		<th>TIME</th><th>obs.</th><th>LOGGED</th>
	</tr>
	<tr>
		<td>1s</td>
		<td>0</td>
		<td>
			<code>side effect 0</code> <br/>
			<code>A: 0</code>
		</td>
	</tr>
	<tr>
		<td>2s</td>
		<td>1</td>
		<td>
			<code>side effect 1</code> <br/>
			<code>A: 1</code>
		</td>
	</tr>
	<tr>
		<td>3s</td>
		<td>2</td>
		<td>
			<code>side effect 2</code> <br/>
			<code>A: 2</code> <br/>
		</td>
	</tr>
	<tr>
		<td>4s</td>
		<td>3</td>
		<td>
			<code>side effect 3</code> <br/>
			<code>A: 3</code>
			<code>A: Complete</code>
		</td>
	</tr>
	<tr>
		<td>5s</td>
		<td>4</td>
		<td>
			<code>B: 2</code> <br/>
			<code>B: 3</code> <br/>
			<code>B: Complete</code>
		</td>
	</tr>
</table>