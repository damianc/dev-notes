# Interpreter

Examples:
- [Permissions Interpreter](#example-1-permissions-interpreter)
- [AST Interpreter](#example-2-ast-interpreter)

## Example 1: Permissions Interpreter

* use:

```
const perms = '0111';
const permsScheme = [
    new Removal(), new Update(), new Addition(), new View()
];

const permsSummary = PermWord.interpret(perms, permsScheme);
console.log(
    permsSummary.reverse().map(p => '- ' + p).join('\n')
);

/*
- can view
- can create
- can update
- cannot delete
*/
```

* Context - `Perms`:

```
class Perms {
    constructor(public binString: string) {}

    public permissions: string[] = [];

    public pickHead(): string {
        const words = [...this.binString];
        const head = words.shift();
        this.binString = words.join('');

        return head || '';
    }
}
```

* Implementation - `PermWord`:

```
abstract class PermWord {
    public interpret(ctx: Perms): void {
        const ctxHead = ctx.pickHead();
        if (!ctxHead) return;

        if (ctxHead === '1') ctx.permissions.push(this.one());
        else ctx.permissions.push(this.zero());
    }

    protected abstract zero(): string;
    protected abstract one(): string;

    static interpret(permsStr: string, permsWords: PermWord[]): string[] {
        const ctx = new Perms(permsStr);
        permsWords.forEach(p => p.interpret(ctx));

        return ctx.permissions;
    }
}

class View extends PermWord {
    zero(): string {
        return 'cannot view';
    }
    one(): string {
        return 'can view';
    }
}

class Addition extends PermWord {
    zero(): string {
        return 'cannot create';
    }
    one(): string {
        return 'can create';
    }
}

class Update extends PermWord {
    zero(): string {
        return 'cannot update';
    }
    one(): string {
        return 'can update';
    }
}

class Removal extends PermWord {
    zero(): string {
        return 'cannot delete';
    }
    one(): string {
        return 'can delete';
    }
}
```

## Example 2: AST Interpreter

* use:

```
const expr = [
    new NumberValue(10),
    new ArithmeticOperator('+'),
    new NumberValue(20),
    new ArithmeticOperator('-'),
    new NumberValue(5)
];

// 10 + 20 - 5
const res = ExpressionNode.interpret(expr);

console.log(res);
// 25
```

* Context - `Expression`:

```
class Expression {
    constructor(public nodes: ExpressionNode[]) {}

    public result = 0;
    public cache: Operator | string = '';
}

type Operator = '+' | '-';
```

* Implementation - `ExpressionNode`:

```
abstract class ExpressionNode {
    abstract process(ctx: Expression, expr: ExpressionNode): void;

    constructor(public content: number | string) {}

    public interpret(ctx: Expression, expr: ExpressionNode): void {
        expr.process(ctx, expr);
    }

    static interpret(nodes: ExpressionNode[]): number {
        const ctx = new Expression(nodes);
        ctx.nodes.forEach(n => n.interpret(ctx, n));

        return ctx.result;
    }
}

class ArithmeticOperator extends ExpressionNode {
    process(ctx: Expression, expr: ExpressionNode): void {
        ctx.cache = expr.content as Operator;
    }
}

class NumberValue extends ExpressionNode {
    process(ctx: Expression, expr: ExpressionNode): void {
        if (ctx.cache !== '') {
            const op = ctx.cache;
            ctx.cache = '';
            ctx.result = this.performOperation(
                ctx.result,
                expr.content as number,
                op as Operator
            );
        } else {
            ctx.result = expr.content as number;
        }
    }

    private performOperation(a: number, b: number, op: Operator): number {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
        }
    }
}
```