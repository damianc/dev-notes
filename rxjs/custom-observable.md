# Custom Observable

```
const obs$ = new Observable(sub => {
	sub.next(1);

	setTimeout(() => {
		sub.next(2);
	}, 2000);

	setTimeout(() => {
		sub.next(3);
	}, 2000);

	setTimeout(() => {
		sub.next(4);
		sub.complete();
	}, 4000);
});

obs$.subscribe(
	function next(value) { console.log('got %d', value); },
	function error(err) { console.error('error %s', err); },
	function complete() { console.warn('done'); }
);
```

| TIME | Im | 1s | 2s | 3s | 4s |
|------|----|----|----|----|----|
| `obs$` | `1`  |    | `2` & `3` | | `4` & `done` |


## `sub.complete()` Stops Queued Values

```
var obs$ = new Observable(sub => {
	sub.next(1);

	setTimeout(() => {
		sub.next(2);
		sub.complete();
	}, 4000);

	setTimeout(() => {
		sub.next(3);
	}, 2000);

	setTimeout(() => {
		sub.next(4);
		sub.complete();
	}, 5000);
});

obs$.subscribe(
	function next(value) { console.log('got %d', value); },
	function error(err) { console.error('error %s', err); },
	function complete() { console.warn('done'); }
);
```

| TIME | Im | 1s | 2s | 3s | 4s | 5s | 6s |
|------|----|----|----|----|----|----|----|
| `obs$` | `1` | | `3` | | `2` & `done` | | |
