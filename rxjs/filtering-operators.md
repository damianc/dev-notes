# Filtering Operators

* [`audit(durationSelector)`](#auditdurationselector)
* [`auditTime(durationMs)`](#audittimedurationms)
* [`debounce(durationSelector)`](#debouncedurationselector)
* [`debounceTime(dueTimeMs)`](#debouncetimeduetimems)
	* [`auditTime()` vs. `debounceTime()`](#audittime-vs-debouncetime)
* [`throttle(durationSelector)`](#throttledurationselector)
* [`throttleTime(durationMs)`](#throttletimedurationms)
* [`distinct(keySelector?, flushes?)`](#distinctkeyselector-flushes)
* [`distinctUntilChanged(compare? keySelector?)`](#distinctuntilchangedcompare-keyselector)
* [`distinctUntilKeyChanged(key, compare?)`](#distinctuntilkeychangedkey-compare)
* [`elementAt(index, defaultValue?)`](#elementatindex-defaultvalue)
* [`filter(predicate, thisArg?)`](#filterpredicate-thisarg)
* [`first(predicate?, defaultValue?)`](#firstpredicate-defaultvalue)
* [`last(predicate?, defaultValue?)`](#lastpredicate-defaultvalue)
* [`ignoreElements()`](#ignoreelements)
* [`single(predicate?)`](#singlepredicate)
* [`sampleTime(periodMs)`](#sampletimeperiodms)
* [`sample(notifier)`](#samplenotifier)
* [`skip(count)`](#skipcount)
* [`skipLast(count)`](#skiplastcount)
* [`skipUntil(notifier)`](#skipuntilnotifier)
* [`skipWhile(predicate)`](#skipwhilepredicate)
* [`take(count)`](#takecount)
* [`takeLast(count)`](#takelastcount)
* [`takeUntil(notifier)`](#takeuntilnotifier)
* [`takeWhile(predicate, inclusive?=false)`](#takewhilepredicate-inclusivefalse)

## `audit(durationSelector)`

* ignore source values for a duration determined by another Observable
* then emit the most recent value from the source Observable
* then repeat this process

```
var int$ = interval(1000);
var int_ = int$.pipe(
	audit(it => interval(2000))
);

int_.subscribe(console.log);
```

| TIME   | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s | 11s | 12s | 13s| 14s| 15s |
|--------|----|----|----|----|----|----|----|----|----|-----|-----|-----|----|----|-----|
| int_ |      |    | 2  |    |    | 5  |    |    | 8  |     |     | 11  |    |    | 14  |

```
// at most 1 click/second
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
	audit(ev => interval(1000))
);

result.subscribe(console.log);
```

## `auditTime(durationMs)`

```
// at most 1 click/second
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
	auditTime(1000)
);

result.subscribe(console.log);
```

> `auditTime` is similar to `throttleTime`, but emits the last value from the silenced time window, instead of the first value.

## `debounce(durationSelector)`

Emits a value from the source Observable only after a particular time span has passed without another source emission.

```
// emit the most recent click after a burst of clicks
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
	debounce(() => interval(1000))
);

result.subscribe(console.log);
```

## `debounceTime(dueTimeMs)`

```
// emit the most recent click after a burst of clicks
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
	debounceTime(1000)
);

result.subscribe(console.log);
```

### `auditTime()` vs. `debounceTime()`

```
var press = fromEvent(document, 'keyup');
press.pipe(
	map(e => e.keyCode),
	OPERATOR(2000)
);

press.subscribe(console.log);
```

#### `auditTime()`

| TIME   | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s |
|--------|----|----|----|----|----|----|----|----|----|
| press  | a  | b  | c  | d  | e  |    | f  |    |    |
| obs.   |    | b  |    | d  |    | e  |    | f  |    |

#### `debounceTime()`

| TIME   | Im. | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s |
|--------|-----|----|----|----|----|----|----|----|----|----|
| press  | a   |    |    |    | b  | c  | d  | e  |    |    |
| obs.   |     |    | a  |    |    |    |    |    |    | e  | 


## `throttle(durationSelector)`

* emit a value from the source Observable
* then ignore subsequent source values for a duration determined by another Observable
* then repeat the process

```
var int$ = interval(1000);
var int_ = int$.pipe(
	throttle(() => interval(2000))
);

int_.subscribe(console.log);
```

| TIME   | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s |
|--------|----|----|----|----|----|----|----|----|----|-----|
| int_   | 0  |    |    | 3  |    |    | 6  |    |    | 9   |

```
// at most 1 click/second
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
	throttle(ev => interval(1000))
);

result.subscribe(console.log);
```

## `throttleTime(durationMs)`

```
// at most 1 click/second
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
	throttleTime(1000)
);

result.subscribe(console.log);
```

## `distinct(keySelector?, flushes?)`

```
of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1).pipe(
	distinct()
).subscribe(console.log);
// 1 2 3 4
```

```
import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';

interface Person {
	age: number,
	name: string
}

of<Person>(
	{age: 4, name: 'Foo'},
	{age: 7, name: 'Bar'},
	{age: 5, name: 'Foo'}
).pipe(
	distinct((p: Person) => p.name)
).subscribe(console.log);
// {age: 4, name: 'Foo'} {age: 7, name: 'Bar'}
```

## `distinctUntilChanged(compare? keySelector?)`

```
of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4).pipe(
	distinctUntilChanged()
).subscribe(console.log);
// 1 2 1 2 3 4
```

```
of(
	{age: 4, name: 'Foo'},
	{age: 7, name: 'Bar'},
	{age: 5, name: 'Foo'},
	{age: 6, name: 'Foo'}
).pipe(
	distinctUntilChanged(
		(p, q) => p.name === q.name
	)
).subscribe(console.log);
// {age: 4, name: 'Foo'} {age: 7, name: 'Bar'} {age: 5, name: 'Foo'}
```

## `distinctUntilKeyChanged(key, compare?)`

```
of(
	{age: 4, name: 'Foo'},
	{age: 7, name: 'Bar'},
	{age: 5, name: 'Foo'},
	{age: 6, name: 'Foo'}
).pipe(
	distinctUntilKeyChanged('name')
).subscribe(console.log);
// {age: 4, name: 'Foo'} {age: 7, name: 'Bar'} {age: 5, name: 'Foo'}
```

```
// compare the first letters of the name
of(
	{age: 4, name: 'Foo1'},
	{age: 7, name: 'Bar'},
	{age: 5, name: 'Foo2'},
	{age: 6, name: 'Foo3'}
).pipe(
	distinctUntilKeyChanged(
		'name',
		(x, y) => x.substring(0, 3) === y.substring(0, 3)
	)
).subscribe(console.log);
// {age: 4, name: 'Foo'} {age: 7, name: 'Bar'} {age: 5, name: 'Foo'}
```

## `elementAt(index, defaultValue?)`

```
fromEvent(document, 'click').pipe(
	elementAt(2)
).subscribe(console.log);
```

| click | 1st | 2nd | 3rd |
|-------|-----|-----|-----|
| obs.  |     |     | Event |

```
fromEvent(document, 'click').pipe(
	take(2),
	elementAt(2, 'nothing')
).subscribe(console.log);
```

| click | 1st | 2nd | 3rd | 4th | 5th |
|-------|-----|-----|-----|-----|-----|
| obs.  |     | 'nothing' |     |     |     |

```
fromEvent(document, 'click').pipe(
	elementAt(2, 'nothing'),
	take(2)
	// take() is ignored even when reaching 5th element
).subscribe(console.log);
```

| click | 1st | 2nd | 3rd | 4th | 5th |
|-------|-----|-----|-----|-----|-----|
| obs.  |     |     | Event |     |     |

> If the default value is not passed and the `index` is out of range, an `ArgumentOutOfRangeError` error will be emitted.

## `filter(predicate, thisArg?)`

```
// emit only clicks on DIV elements
fromEvent(document, 'click')
.pipe(
	// fn(value, index)
	filter(e => e.target.tagName === 'DIV')
).subscribe(console.log);
```

## `first(predicate?, defaultValue?)`

```
// emit the first click that happens on a DIV
fromEvent(document, 'click')
.pipe(
	// fn(value, index, sourceObservable)
	first(e => e.target.tagName === 'DIV')
).subscribe(console.log);
```

## `last(predicate?, defaultValue?)`

```
of(1, 2, 3, 4).pipe(
	// fn(value, index, sourceObservable)
	last(n => n % 2 != 0)
).subscribe(console.log);
```

## `ignoreElements()`

Ignores all items emitted by the source Observable and only passes calls of complete or error.

```
of('you', 'talking', 'to', 'me')
.pipe(
	ignoreElements()
).subscribe(
	word => console.log(word),
	err => console.log('error: ', err),
	() => console.log('the end')
);
// 'the end'
```

## `single(predicate?)`

> `fn(value, index, sourceObservable)`

* return an Observable that emits the single item emitted by the source Observable that matches a specified predicate, if that Observable emits one such item
* if the source Observable emits more than one such item, notify of an `IllegalArgumentException`
* if the source Observable emits no items, notify of an `NoSuchElementException`
* if the source Observable emits items but none match the specified predicate then `undefined` is emitted

```
range(1, 5).pipe(single())
// error (sequence contains more than one element)

range(1, 5).pipe(single(x => x == 2))
// 2

range(1, 5).pipe(single(x => x == 10))
// undefined
```

```
of(1).pipe(single())
// 1

of().pipe(single())
// error [no elements in sequence]
```

## `sampleTime(periodMs)`

```
fromEvent(document, 'keyup').pipe(
	map(e => e.keyCode),
	sampleTime(2000)
).subscribe(console.log);
```

| TIME | 1s | 2s | **3s** | **4s** | 5s | 6s | **7s** | **8s** | 9s | 10s |
|------|----|----|----|----|----|----|----|----|----|-----|
| press |    |    | x  | x  | x  |    | x  | x  |    |     |
| obs. |    |    |    | 120 | 120 |   |    | 120 |    |     |

## `sample(notifier)`

```
const seconds = interval(1000);
const clicks = fromEvent(document, 'click');
const result = seconds.pipe(
	sample(clicks)
);

result.subscribe(console.log);
```

| TIME | Im. | 0.5s | 1s | 1.5s | 2s | 2.5s | 3s | 3.5s | 4s |
|------|-----|----|----|----|----|----|----|----|----|
| click | x   |    |    | x  |    |    | x  | x  |    |
| intv |     |    | 0  |    | 1  |    | 2  |    | 3  |
| obs. |     |    |    | 0  |    |    | 2  |    |    |

> If there's no last value emitted, nothing is cached (_the last click above_).

```
interval(1000).pipe(
	sample(interval(500))
).subscribe(console.log);
```

| TIME | 0.5s | 1s | 1.5s | 2s | 2.5s | 3s | 3.5s | 4s |
|------|------|----|------|----|------|----|------|----|
| int500 |      | 0  |      | 1  |      | 2  |      | 3  |
| int1000 | 0    | 1  | 2    | 3  | 4    | 5  | 6    | 7  |
| obs. |      | 0  |      | 1  |      | 2  |      | 3  |

```
interval(500).pipe(
	sample(interval(1000))
).subscribe(console.log);
```

| TIME | 0.5s | 1s | 1.5s | 2s | 2.5s | 3s | 3.5s | 4s |
|------|------|----|------|----|------|----|------|----|
|      |      | 0  |      | 1  |      | 2  |      | 3  |
|      | 0    | 1  | 2    | 3  | 4    | 5  | 6    | 7  |
| obs. |      | 1  |      | 3  |      | 5  |      | 7  |

## `skip(count)`

```
of(1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(
	skip(4)
).subscribe(console.log);
// 5 6 7 8 9
```

## `skipLast(count)`

```
range(1, 5).pipe(
	skipLast(2)
).subscribe(console.log);
// 1 2 3
```

* `interval(1000).pipe(take(5), skip(2))`

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s |
|------|----|----|----|----|----|----|----|----|
| obs. |    |    | 2  | 3  | 4  |    |    |    |

* `interval(1000).pipe(take(5), skipLast(2))`

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s |
|------|----|----|----|----|----|----|----|----|
| obs. |    |    | 0  | 1  | 2  |    |    |    |

* `interval(1000).pipe(skip(2), take(5))`

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s |
|------|----|----|----|----|----|----|----|----|
| obs. |    |    | 0  | 1  | 2  | 3  | 4  |    |

* `interval(1000).pipe(skipLast(2), take(5))`

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s |
|------|----|----|----|----|----|----|----|----|
| obs. |    |    | 0  | 1  | 2  | 3  | 4  |    |

## `skipUntil(notifier)`

| TIME     | 1s | 2s | 3s | 4s | 5s |
|----------|----|----|----|----|----|
| stream 1 | a  | b  |    | c  | d  |
| stream 2 |    |    | x  |    |    |
| final    |    |    |    | c  | d  |

```
interval(1000).pipe(
	take(10),
	skipUntil(
		of(1).pipe(delay(2500))
	)
).subscribe(console.log);
```

| TIME | 1s | **2s** | **2.5s** | **3s** | 4s | 5s |
|------|----|--------|----------|--------|----|----|
| intv | 0  | 1      |          | 2      | 3  | 4  |
| dely |    |        | 1        |        |    |    |
| final |   |        |          | 2      | 3  | 4  |

```
// skip values until the user clicks first time
interval(1000).pipe(
	skipUntil(
		fromEvent(document, 'click')
	)
).subscribe(console.log);
```

| TIME | 1s | 2s | **3s** | **3.5s** | **4s** | 5s | 6s | 7s | 8s |
|------|----|----|----|------|----|----|----|----|----|
| intv | 0  | 1  | 2  |      | 3  | 4  | 5  | 6  | 7  |
| click |   |    |    | x    | 3  | 4  | 5  | 6  | 7  |

* It will never let the source observable emit any values if the notifier completes or throws an error without emitting a value before.

```
interval(1000).pipe(
	take(10),
	skipUntil(empty())
).subscribe(console.log);
```

## `skipWhile(predicate)`

```
interval(1000).pipe(
	take(5),
	// fn(value, index)
	skipWhile(x => x < 3)
).subscribe(console.log);
```

| TIME | 1s | 2s | 3s | 4s | 5s |
|------|----|----|----|----|----|
| intv | 0  | 1  | 2  | 3  | 4  |
| final |   |    |    | 3  | 4  |

## `take(count)`

```
interval(1000).pipe(
	take(5)
).subscribe(console.log);
// 0-5 only
```

## `takeLast(count)`

```
interval(1000).pipe(
	take(5)
).pipe(
	takeLast(2)
).subscribe(console.log);
```

> Remembers the latest count values, then emits those only when the source completes.

| TIME | 1s | 2s | 3s | 4s | 5s |
|------|----|----|----|----|----|
| intv | 0  | 1  | 2  | 3  | 4  |
| final |   |    |    |    | 3 & 4 |

```
range(1, 10).pipe(
	takeLast(3)
).subscribe(console.log);
// 98 99 100
```

> If the source emits fewer than _n_ values then all of its values are emitted.

## `takeUntil(notifier)`

```
interval(1000).pipe(
	take(10),
	takeUntil(
		of(1).pipe(
			delay(5000)
		)
	)
).subscribe(console.log);
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s |
|------|----|----|----|----|----|----|----|----|----|-----|
| intv | 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9   |
| of 1 |    |    |    |    | 1  |    |    |    |    |     |
| final | 0  | 1  | 2  | 3  |    |    |    |    |    |     |

```
interval(1000).pipe(
	takeUntil(
		fromEvent(document, 'click')
	)
).subscribe(console.log);
```

| TIME | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s |
|------|----|----|----|----|----|----|----|----|
| intv | 0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  |
| click|    |    |    |    | x  |    |    |    |
| final | 0  | 1  | 2  | 3  |    |    |    |    |

## `takeWhile(predicate, inclusive?=false)`

```
of(1, 2, 3, 4, 5, 6, 7, 8).pipe(
	takeWhile(x => x < 4)
).subscribe(console.log);
// 1 2 3
```

```
of(1, 2, 3, 4, 5, 6, 7, 8).pipe(
	takeWhile(x => x < 4, true)
).subscribe(console.log);
// 1 2 3 4
```