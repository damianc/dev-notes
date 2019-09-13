# `async` Pipe

## Example 1: _Bomb_ Observable

```
bomb: Observable<number|string> = zip(
	of(4, 3, 2, 1, 'BOOOOM'),
	interval(1000)
)
.pipe(
	map(([n, i]) => n),
	startWith(5)
);
```

```
{{ bomb | async }}
```

## Example 2: Loader Message

```
private loader: Promise<string> = new Promise(res => {
	setTimeout(() => {
		res('DOWNLOADED');
	}, 4000);
});

loader$ = merge(
	of('Downloading...'),
	from(this.loader)
);
```

```
{{ loader$ | pipe }}
```
