# Iteration Types

| Interface | Description |
|----|----|
| `Generator<T>` | an iterable generator that contains `next()`, `return()` and `throw()` methods |
| `Iterator<T>` | an iterator that contains `next()` method (optionally, `return()` and/or `throw()`) |
| `IteratorResult<T>` | an object returned by an iterator with `done` and `value` properties |
| `IteratorYieldResult<T>` | such `IteratorResult` whose `done` property equals `false` |
| `IteratorReturnResult<T>` | such `IteratorResult` whose `done` property equals `true` |
| `Iterable<T>` | an object that contains `Symbol.iterator` property and supports iteration |
| `IterableIterator<T>` | a fusion of `Iterable` and `Iterator`: an iterable object that contains `next()` method |

## `IteratorResult<T>`

```
class Pool<T> {
	private items: Set<T>;
	
	constructor(items: T[] = []) {
		this.items = new Set<T>(items);
	}
	
	values(): Iterator<T> {
		return  this.items.values();
	}
}


const numPool: Pool<number> = new Pool([1, 2, 3, 4]);
const numIterator: Iterator<number> = numPool.values();

let result: IteratorResult<number>;
while ((result = numIterator.next()) && !result.done) {
	console.log(result.value);
}
```

## `IteratorYieldResult<T>` and `IteratorReturnResult<T>`

```
function* nums(): Iterator<number> {  
    yield* [1, 2, 3, 4];  
    return 'the end it is';  
}

const Log = {  
    message<T>(yielded: IteratorYieldResult<T>) {  
        console.log(yielded.value);  
    },  
    goodbyeMessage<T>(returned: IteratorReturnResult<T>) {  
        console.log(returned.value);  
    }  
};

let gen: Iterator<number> = nums();  
let receivedVal: IteratorResult<number | string>;

while ((receivedVal = gen.next()) && !receivedVal.done) {  
    Log.message<number>(receivedVal as IteratorYieldResult<number>);  
}

Log.goodbyeMessage<string>(receivedVal);
```

## `Iterable<T>`

```
class Pool<T> implements Iterable<T> {  
    private pool: T[];
    
    constructor(collection: T[]) {  
        this.pool = collection;  
    }
    
    *[Symbol.iterator](): Iterator<T> {  
        yield* this.pool;  
    }  
}

const pool: Pool<number> = new Pool<number>([1, 2, 3, 4]);  
console.log([...pool]);
```

## Specs

### `Iterator`

```
interface Iterator<T, TReturn = any, TNext = undefined> {
	// Takes either 0 or 1 arguments - doesn't accept 'undefined'
	next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
	return?(value?: TReturn): IteratorResult<T, TReturn>;
	throw?(e?: any): IteratorResult<T, TReturn>;
}
```

### `Generator`

```
interface Generator<T = unknown, TReturn = any, TNext = unknown>
extends Iterator<T, TReturn, TNext> {
	next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
	return(value: TReturn): IteratorResult<T, TReturn>;
	throw(e: any): IteratorResult<T, TReturn>;
	[Symbol.iterator](): Generator<T, TReturn, TNext>;
}
```

### `IteratorResult`

```
type IteratorResult<T, TReturn = any> =
	| IteratorYieldResult<T>
	| IteratorReturnResult<TReturn>;

interface IteratorYieldResult<TYield> {
	done?: false;
	value: TYield;
}

interface IteratorReturnResult<TReturn> {
	done: true;
	value: TReturn;
}
```