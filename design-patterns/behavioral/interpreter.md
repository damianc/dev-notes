# Interpreter

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