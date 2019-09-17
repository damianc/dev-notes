# Generator

```
function getNum() {
	for ($i = 0; $i < 5; $i++) {
		yield $i;
	}
}

foreach(getNum() as $v) echo $v;
// 0 1 2 3 4
```

## Delegating with `yield from`

```
function countToThree() {
	yield 1;
	yield 2;
	yield 3;
}

function countToFive() {
	yield from countToThree();
	yield from [4, 5];
}

foreach(countToFive() as $v) echo $v;
// 1 2 3 4 5
```
