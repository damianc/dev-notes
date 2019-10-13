# `Subject`

Subject is both `Observable` and `Observer`.

```
const subject = new Subject<number>();

subject.next(1);

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});

subject.next(2);
subject.next(3);

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

subject.next(4);
subject.complete();
```

```
observerA: 2
observerA: 3
observerA: 4
observerB: 4
```

## `BehaviorSubject(initialValue)`

 It stores the latest value emitted to its consumers, and whenever a new Observer subscribes, it will immediately receive this value from the `BehaviorSubject`.

```
const subject = new BehaviorSubject<number>(0);
 
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});

setTimeout(() => {
	subject.next(1);
}, 1000);

setTimeout(() => {
	subject.next(2);
	subject.subscribe({
		next: (v) => console.log(`observerB: ${v}`)
	});
}, 2000);

setTimeout(() => {
	subject.next(3);
}, 3000);

setTimeout(() => {
	subject.next(4);
	subject.complete();
}, 4000);
```

| TIME | `subject` | Notes |
|------|-----------|-------|
| Im   | `observerA: 0` | |
| 1s | `observerA: 1` | |
| 2s | `observerA: 2` and `observerB: 2` | `observerB` receive the latest value emitted by `subject` (`2`) |
| 3s | `observerA: 3` and `observerB: 3` | |
| 4s | | `2s` | `observerA: 4` and `observerB: 4` | |

## `ReplaySubject(bufferSize)`

 It stores the `bufferSize` latest value emitted to its consumers, and whenever a new Observer subscribes, it will immediately receive these values from the `ReplaySubject`.

```
const subject = new ReplaySubject<number>(2);
 
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

subject.next(5);
subject.next(6);
```

```
observerA: 1
observerA: 2
observerA: 3
observerA: 4

observerB: 3
observerB: 4

observerA: 5

observerB: 5

observerA: 6

observerB: 6
```

## `ReplaySubject(bufferSize, windowTime)`

```
const subject = new ReplaySubject<number>(10, 1200);
// replay up to 10 items not older than 1200 ms

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});

setTimeout(() => { subject.next(1); }, 500);
setTimeout(() => { subject.next(2); }, 1000);
setTimeout(() => { subject.next(3); }, 1500);

setTimeout(() => {
	subject.subscribe({
	  next: (v) => console.log(`observerB: ${v}`)
	});
	subject.next(4);
}, 2000);

setTimeout(() => { subject.next(5); }, 2500);
setTimeout(() => { subject.next(6); }, 3000);
setTimeout(() => { subject.next(7); }, 3500);
setTimeout(() => { subject.next(8); }, 4000);
```

| TIME | `subject` |
|------|-----------|
| Im   |           |
| 0.5s | `observerA: 1` |
| 1s   | `observerA: 2` |
| 1.5s | `observerA: 3` |
| 2s   | `observerB: 2`, `observerB: 3`, `observerA: 4` and `observerB: 4` |
| 2.5s | `observerA: 5` and `observerB: 5` |
| 3s   | `observerA: 6` and `observerB: 6` |
| 3.5s | `observerA: 7` and `observerB: 7` |
| 4s   | `observerA: 8` and `observerB: 8` |

## `AsyncSubject`

Sends only the last value of the Observable execution to its observers, and only when the execution completes.

```
const subject = new AsyncSubject<number>();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
 
subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
 
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});
 
subject.next(5);

subject.subscribe({
  next: (v) => console.log(`observerC: ${v}`)
});

subject.complete();
```

```
observerA: 5
observerB: 5
observerC: 5
```
