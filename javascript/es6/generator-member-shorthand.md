# Generator Member Shorthand

* returned a call of the generator function:

```
class OneToThree {
	[Symbol.iterator]() {
		return (function* () {
			yield* [1, 2, 3];
		})();
	}
}

const ott = new OneToThree();
[...ott];
// [1, 2, 3]
```

* shorthand:

```
class OneToThree {
	*[Symbol.iterator]() {
		yield* [1, 2, 3];
	}
}

const ott = new OneToThree();
[...ott];
// [1, 2, 3]
```