# Generics

## Generic Class

```
class Stack<T> {
	private stack: Array<T> = [];

	push(item: T): void {
		this.stack.push(item);
	}

	pop(): T {
		return this.stack.pop();
	}

	get size() {
		return this.stack.length;
	}
}
```

```
var s = new Stack<number>();

s.push(1);
s.push(2);
```

## Generic Function

```
function firstItem<T>(collection: Array<T>): T {
	return collection[0];
}
```

```
firstItem<number>([1, 2, 3, 4]);

// auto-detection of the type
firstItem(['a', 'b', 'c', 'd']);
```

## More Generic Types

```
function extend<First, Second>(first: First, second: Second): First & Second {
    const result: Partial<First & Second> = {};

    for (const prop in first) {
        if (first.hasOwnProperty(prop)) {
            (result as First)[prop] = first[prop];
        }
    }

    for (const prop in second) {
        if (second.hasOwnProperty(prop)) {
            (result as Second)[prop] = second[prop];
        }
    }
    
    return result as First & Second;
}
```
