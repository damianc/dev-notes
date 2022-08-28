# Decorator

* use:

```
const stack = new Stack();

stack.push(1);
console.log(stack.view(), stack.logs);
// [1]
// undefined

// start logging additions
StackDecorator.LogAdditionsDecorator(stack);

stack.push(2);
stack.push(3);

console.log(stack.view(), stack.logs);
// [1, 2, 3]
// ['added 2', 'added 3']


// start logging removals
StackDecorator.LogRemovalsDecorator(stack);

stack.pop();
console.log(stack.view(), stack.logs);
// [1, 2]
// ['added 2', 'added 3', 'removed 3']

stack.push(100);
stack.push(200);
stack.pop();
stack.push(150);

console.log(stack.view(), stack.logs);
// [1, 2, 100, 150]
// [
//     'added 2', 'added 3', 'removed 3',
//     'added 100', 'added 200', 'removed 200', 'added 150'
// ]
```

* Decorator Subject - `Stack`:

```
interface IStack {
    push(item: any): void;
    pop(): any;
}

class Stack implements IStack {
    private readonly stack: Array<any> = [];

    push(item: any): void {
        this.stack.push(item);
    }

    pop(): any {
        return this.stack.pop();
    }

    view(): any[] {
        return [...this.stack];
    }
}
```

* Decorators - `StackDecorator` with `LogAdditionsDecorator` and `LogRemovalsDecorator`:

```
class StackDecorator {
    constructor(protected decorator: Stack) {
        if (!('logs' in decorator)) {
            decorator.logs = [];
        }
        this.decorate(decorator);
    }

    decorate(dec: Stack): void {}

    static LogAdditionsDecorator(decorator: Stack): void {
        new StackLoggingAdditions(decorator);
    }

    static LogRemovalsDecorator(decorator: Stack): void {
        new StackLoggingRemovals(decorator);
    }
}

class StackLoggingAdditions extends StackDecorator {  
  decorate(dec: Stack): void {
        const currImpl = dec.push.bind(dec);
        function push(item: any) {
            dec.logs.push('added ' + item);
            currImpl(item);
        }
        dec.push = push;
    }
}

class StackLoggingRemovals extends StackDecorator {
    decorate(dec: Stack): void {
        const currImpl = dec.pop.bind(dec);
        function pop() {
            const removed = currImpl();
            dec.logs.push('removed ' + removed);
            return removed;
        }
        dec.pop = pop;
    }
}


interface Stack {
    logs: string[];
}
```