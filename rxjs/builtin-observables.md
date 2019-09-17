# Built-in Observables

* [`interval(periodMs)`](#intervalperiodms)
* [`timer(delayMs, nextsPeriodMs?)`](#timerdelayms-nextsperiodms)
* [`of(item1, ..., itemN)`](#ofitem1--itemn)
* [`range(start, count?)`](#rangestart-count)
* [`generate(initState, conditionFn?, iterationFn?, selectorFn?)`](#generateinitstate-conditionfn-iterationfn-selectorfn)
* [`from(iterableOrPromiseOrObservableLike)`](#fromiterableorpromiseorobservablelike)
* [`empty()` [_DEPRECATED_]](#empty-deprecated)
* [`iif(condition, trueResult, falseResult?)`](#iifcondition-trueresult-falseresult)
* [`defer(observableFactory)`](#deferobservablefactory)
* [`throwError(error)`](#throwerrorerror)
* [`fromEvent(target, eventName, useCaptureOrOptions?, selectorFn?)`](#fromeventtarget-eventname-usecaptureoroptions-selectorfn)
* [`fromEventPattern(addHandler, removeHandler?, selectorFn?)`](#fromeventpatternaddhandler-removehandler-selectorfn)
* [`bindCallback(callback, selectorFn?)`](#bindcallbackcallback-selectorfn)
* [`bindNodeCallback(nodeStyleCallback, selectorFn?)`](#bindnodecallbacknodestylecallback-selectorfn)
* [`ajax(urlOrOptionsObject)`](#ajaxurloroptionsobject)

## `interval(periodMs)`

```
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const nums = interval(1000).pipe(take(4));
nums.subscribe(console.log);
```

| Im | 1s | 2s | 3s | 4s | 5s |
|----|----|----|----|----|----|
|    | 0  | 1  | 2  | 3  |    |

## `timer(delayMs, nextsPeriodMs?)`

```
import { timer } from 'rxjs';

const nums = timer(3000, 1000);
nums.subscribe(console.log);
```

| Im | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s |
|----|----|----|----|----|----|----|----|----|
|    |    |    | 0  | 1  | 2  | 3  | 4  |    |

```
import { timer } from 'rxjs';

const nums = timer(5000);
nums.subscribe(console.log);
```

| Im | 1s | 2s | 3s | 4s | 5s | 6s |
|----|----|----|----|----|----|----|
|    |    |    |    |    | 0  |    |

## `of(item1, ..., itemN)`

```
import { of } from 'rxjs';

of(10, 20, 30).subscribe(console.log);
// 10 20 30
```

## `range(start, count?)`

```
import { range } from 'rxjs';

const nums = range(1, 10);
nums.subscribe(console.log);
// 1 2 3 4 5 6 7 8 9 10
```

## `generate(initState, conditionFn?, iterationFn?, selectorFn?)`

```
import { generate } from 'rxjs';

generate(
	1,
	i => i <= 5,
	i => i + 1
).subscribe(console.log);
// 1 2 3 4 5
```

```
import { generate } from 'rxjs';

generate(
	1,
	i => i <= 5,
	i => i + 1,
	i => i * 2
).subscribe(console.log);
// 2 4 6 8 10
```

## `from(iterableOrPromiseOrObservableLike)`

```
import { from } from 'rxjs';
import { take } from 'rxjs/operators';

function* doubles(seed) {
	let i = seed;

	while (true) {
		yield i;
		i = 2 * i;
	}
}

const iterator = doubles(3);
const result = from(iterator).pipe(take(10));

result.subscribe(console.log);
// 3 6 12 24 48 96 192 384 768 1536
```

## `empty()` [_DEPRECATED_]

```
import { empty, interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const interval$ = interval(1000);
const result = interval$.pipe(
	mergeMap(x => x % 2 == 1 ? of('X') : empty())
);

result.subscribe(console.log);
```

| Im | 1s | 2s | 3s | 4s | 5s | 6s | 7s | 8s | 9s | 10s | ... |
|----|----|----|----|----|----|----|----|----|----|-----|-----|
|    |    | X  |    | X  |    | X  |    | X  |    | X   | ... |

## `iif(condition, trueResult, falseResult?)`

```
import { iif, of } from 'rxjs';

let accessGranted;
const resource = iif(
	() => accessGranted,
	of('You have access...'),
	of('You do not have access!')
);

accessGranted = true;
resource.subscribe(console.log);
// "You have access..."

accessGranted = false;
resource.subscribe(console.log);
// "You do not have access!"
```

## `defer(observableFactory)`

```
import { defer, fromEvent, interval } from 'rxjs';

const clickOrInterval = defer(() => {
	return Math.random() > 0.5
			? fromEvent(document, 'click')
			: interval(1000);
});

clickOrInterval.subscribe(console.log);
// given: random was 0.25
// 0 1 2 3 4 ... every 1 second

clickOrInterval.subscribe(console.log);
// given: random was 0.75
// event object per every click
```

## `throwError(error)`

```
import { throwError, interval, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

interval(1000).pipe(
	mergeMap(x => x == 2 ? throwError('2 is bad') : of('X'))
).subscribe(console.log);
```

| Im | 1s | 2s | 3s  | 4s |
|----|----|----|-----|----|
|    | X  | X  | ERR |    |

## `fromEvent(target, eventName, useCaptureOrOptions?, selectorFn?)`

```
import { fromEvent } from 'rxjs';

fromEvent(
	document,
	'click',
	true,
	e => [e.clientX, e.clientY]
).subscribe(
	([x, y]) => console.log('Click at %dx%d', x, y)
);

// Given: click at 120x60
// "Click at 120x60"
```

## `fromEventPattern(addHandler, removeHandler?, selectorFn?)`

```
import { fromEventPattern } from 'rxjs';

const Event$ = {
	listen: function (eventType) {
		return {
			on: function (handler) {
				document.addEventListener(eventType, handler);
			}
		};
	},
	unlisten: function (eventType) {
		return {
			on: function (handler) {
				document.removeEventListener(eventType, handler);
			}
		};
	}
};

fromEventPattern(
	Event$.listen('click').on,
	Event$.unlisten('click').on,
	e => [e.clientX, e.clientY]
).subscribe(
	([x, y]) => console.log('Click at %dx%d', x, y)
);

// Given: click at 120x60
// "Click at 120x60"
```

## `bindCallback(callback, selectorFn?)`

```
import { bindCallback } from 'rxjs';

function fetchImage(path, done) {
	var img = new Image;

	img.onload = function () {
		done(this);
	};

	img.src = path;
}

var imgObs = bindCallback(
	fetchImage,
	img => [img.width, img.height]
);

imgObs('src/photo.jpg').subscribe(
	([width, height]) => console.log(
		'Image size is %d x %d',
		width, height
	)
);
```

```
import { bindCallback } from 'rxjs';
import * as jQuery from 'jquery';

const getJSONObs = bindCallback(jQuery.getJSON);
const result = getJSONObs('/my/url');

result.subscribe(
	console.log,
	console.error
);
```

```
import { bindCallback } from 'rxjs';

var obj = {
	a: 50,
	printA: function () {
		console.log(this.a);
	}
};

const boundObjMethod = bindCallback(obj.printA);
boundObjMethod.call(obj).subscribe(console.log);
// 50
```

## `bindNodeCallback(nodeStyleCallback, selectorFn?)`

```
import { bindNodeCallback } from 'rxjs';

// Node.js-style callback: (error, result)
function fetchEven(value, cb) {
	if (value % 2 == 0) cb(null, value);
	else cb(new Error('Not even number!'));
}

var bound = bindNodeCallback(fetchEven);

bound(2).subscribe(
	console.log,
	console.error
);
// 2

bound(5).subscribe(
	console.log,
	console.error
);
// Error: Not even number!
```

## `ajax(urlOrOptionsObject)`

```
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

const obs$ = ajax('https://api.github.com/users?per_page=5').pipe(
	map(res => res.response),
	catchError(error => {
		console.error(error);
		return of(error);
	})
);

obs$.subscribe(console.log);
```

Properties of the response object:
* `originalEvent`: _ProgressEvent_
* `request`: `{headers, method, ...}`
* `response`: _Object_
* `responseType`: _string_, e.g., `"json"`
* `status`: _number_, e.g., `200`
* `xhr`: _XMLHttpRequest_

### Static Methods of `ajax`

* `delete(t, e)`
* `get(t, e)`
* `getJSON(t, e)`
* `patch(t, e, r)`
* `post(t, e, r)`
* `put(t, e, r)`

```
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

const obs$ = ajax.getJSON(
	'https://randomuser.me/api/?format=json&results=4'
).pipe(
	map(json => json.results),
	catchError(error => {
		console.error(error);
		return of(error);
	})
);

obs$.subscribe(res => console.log(res));
```

### Handling Errors

```
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

const obs$ = ajax('https://api.github.com/404').pipe(
	map(res => res.response),
	catchError(err => of(err))
);

obs$.subscribe(
	console.log,
	console.error
);
```
