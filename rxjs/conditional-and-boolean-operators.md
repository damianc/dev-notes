# Conditional and Boolean Operators

* [`defaultIfEmpty(defaultValue)`](#defaultifemptydefaultvalue)
* [`every(predicate, thisArg?)`](#everypredicate-thisarg)
* [`find(predicate, thisArg?)`](#findpredicate-thisarg)
* [`findIndex(predicate, thisArg?)`](#findindexpredicate-thisarg)
* [`isEmpty()`](#isempty)

## `defaultIfEmpty(defaultValue)`

```
const clicks = fromEvent(document, 'click');
const clicksBeforeFive = clicks.pipe(
	takeUntil(interval(5000))
);

const result = clicksBeforeFive.pipe(
	defaultIfEmpty('no clicks')
);
result.subscribe(console.log);
```

## `every(predicate, thisArg?)`

* `predicate: (value, index, sourceObservable)`

```
of(1, 2, 3, 4, 5, 6).pipe(
	every(x => x < 5)
).subscribe(console.log);
// false
```

## `find(predicate, thisArg?)`

* `predicate: (value, index, sourceObservable)`

```
// find and emit the 1st click
// that happens on a DIV element

fromEvent(document, 'click').pipe(
	find(e => e.target.tagName == 'DIV')
).subscribe(console.log);
```

```
of(3, 9, 15, 20).pipe(
	find(v => v % 5 === 0)
).subscribe(console.log);
// 15
```

## `findIndex(predicate, thisArg?)`

* `predicate: (value, index, sourceObservable)`

```
of(3, 9, 15, 20).pipe(
	findIndex(v => v % 5 === 0)
).subscribe(console.log);
// 2
```

## `isEmpty()`

```
import { EMPTY } from 'rxjs';
import { isEmpty } from 'rxjs/operators';

EMPTY.pipe(
	isEmpty()
).subscribe(console.log);
// true
```

```
fromEvent(document, 'click').pipe(
	takeUntil(interval(3000)),
	isEmpty()
).subscribe(console.log);

// true if no click happened in 3 seconds
// false otherwise
```

```
import { Subject } from 'rxjs';
import { isEmpty } from 'rxjs/operators';

const source = new Subject<string>();
const result = source.pipe(isEmpty());

source.subscribe(console.log);
result.subscribe(console.log);

source.next('a');
source.next('b');
source.next('c');
source.complete();

// a
// false (no longer empty)
// b
// c
```