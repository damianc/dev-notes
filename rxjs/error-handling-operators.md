# Error Handling Operators

* [`catchError(selector)`](#catcherrorselector)
* [`retry(count?=-1)`](#retrycount-1)
* [`retryWhen(notifier)`](#retrywhennotifier)

## `catchError(selector)`

* `selector: (err, caught)`

```
of(1, 2, 3, 4, 5).pipe(
	map(n => {
		if (n == 4) throw 'four';
		return n;
	}),
	catchError(
		err => of('I', 'II', 'III', 'IV', 'V')
	)
).subscribe(console.log);
// 1 2 3 I II III IV V
```

```
of(1, 2, 3, 4, 5).pipe(
	map(n => {
		if (n == 4) throw 'four';
		return n;
	}),
	catchError(
		err => {
			throw 'Error in source: ' + err;
		}
	)
).subscribe(console.log, console.error);

// 1 2 3
// Error in source: four
```

```
of(1, 2, 3, 4, 5).pipe(
	map(n => {
		if (n == 4) throw 'four';
		return n;
	}),
	catchError(
		(err, caught) => caught
	),
	take(10)
).subscribe(console.log);

// 1 2 3 1 2 3 1 2 3 1
```

## `retry(count?=-1)`

```
import { interval, of, throwError } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';

interval(1000).pipe(
	mergeMap(val => {
		if (val > 5) return throwError('Error');
		return of(val);
	}),
	retry(2)
).subscribe({
	next: val => console.log(val),
	error: val => console.error('%s: retried 2 times then quit', val)
});

// 0 1 2 3 4 5
// 0 1 2 3 4 5
// 0 1 2 3 4 5
// Error: retried 2 times then quit
```

## `retryWhen(notifier)`

* `notifier: (errors)`

```
interval(1000).pipe(
	mergeMap(val => {
		if (val > 2) return throwError('Error');
		return of(val);
	}),
	retryWhen(
		errs => interval(5000).pipe(take(4))
	)
).subscribe(console.log, console.error);
```

| TIME | 1s | 2s | 3s | `4s` | 5s | 6s | 7s | 8s | `9s` | 10s | 11s | 12s | 13s | `14s` | 15s | 16s | 17s | 18s | `19s` | 20s | 21s | 22s | 23s | 24s | 25s |
|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
| obs. | 0 | 1 | 2 | x | | | | | | 0 | 1 | 2 | x | | 0 | 1 | 2 | x | | 0 | 1 | 2 | x |

```
interval(1000).pipe(
	mergeMap(val => {
		if (val > 4) return throwError('Error');
		return of(val);
	}),
	retryWhen(
		errs => interval(3000).pipe(take(4))
	)
).subscribe(console.log, console.error);
```

| TIME | 1s | 2s | 3s | 4s | 5s | `6s` | 7s | 8s | `9s` | 10s | 11s | `12s` | 13s | 14s | `15s` | 16s | 17s | 18s | 19s | 20s |
|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
| obs. | 0 | 1 | 2 | 3| 4 | x | | | | 0 | 1 | | 0 | 1 | | 0 | 1 | |