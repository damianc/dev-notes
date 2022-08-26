# Mediator

Examples:
- [Task Board Columns and Moving Tasks](#example-1-task-board-columns-and-moving-tasks)
- [Bank Accounts and Transfer of Money](#example-2-bank-accounts-and-transfer-of-money)

## Example 1: Task Board Columns and Moving Tasks

* use:

```
const board = new Board();

const todo: BoardColumn = new PlainColumn('TO DO', ['Task A', 'Task B']);
const inProgress: BoardColumn = new HighlightedColumn('IN PROGRESS', ['Task C', 'Task D']);
const done: BoardColumn = new PlainColumn('DONE', ['Task E', 'Task F']);

board.addColumn(todo);
board.addColumn(inProgress);
board.addColumn(done);


// move "Task A" from "TO DO" to "IN PROGRESS"
todo.moveTo(inProgress, 'Task A');

// move "Task C" from "IN PROGRESS" to "DONE"
inProgress.moveTo(done, 'Task C');


todo.listTasks();
/*
Column TODO
-> Task B
*/


inProgress.listTasks();
/*
HIGHLIGHTED COLUMN IN PROGRESS
-> Task D
-> Task A
*/


done.listTasks();
/*
Column DONE
-> Task E
-> Task F
-> Task C
*/
```

* Mediator - `Board`:

```
abstract class AbstractBoard {
    public abstract addColumn(column: BoardColumn): void;
    public abstract moveTask(
        sourceColumn: BoardColumn,
        targetColumn: BoardColumn,
        task: string
    ): void;
}

class Board extends AbstractBoard {
    private readonly columns: Record<string, BoardColumn> = {};

    public addColumn(column: BoardColumn): void {
        this.columns[column.name] = column;
        column.board = this;
    }

    public moveTask(
        sourceColumn: BoardColumn,
        targetColumn: BoardColumn,
        task: string
    ): void {
        const taskIdx = sourceColumn.tasks.indexOf(task);
        if (taskIdx === -1) {
            console.warn('No such task in the column.');
            return;
        }

        const [pulled] = sourceColumn.tasks.splice(taskIdx, 1);
        targetColumn.tasks.push(pulled);
    }
}
```

* `BoardColumn` - `PlainColumn` and `HighlightedColumn`:

```
class BoardColumn {
    public board!: Board;

    constructor(
        public name: string,
        public tasks: string[]
    ) {}

    public moveTo(column: BoardColumn, task: string): void {
        this.board.moveTask(this, column, task);
    }

    public listTasks(): void {
        const tasksList = this.tasks.map(t => '-> ' + t);
        console.log(tasksList.join('\n'));
    }
}

class PlainColumn extends BoardColumn {
    public listTasks(): void {
        console.log('Column ' + this.name);
        super.listTasks();
    }
}
class HighlightedColumn extends BoardColumn {
    public listTasks(): void {
        console.log('HIGHLIGHTED COLUMN ' + this.name);
        super.listTasks();
    }
}
```

## Example 2: Bank Accounts and Transfer of Money

* use:

```
const bank = new Bank();

const john: Customer = new PersonalAccount('John', 500);
const mark: Customer = new PersonalAccount('Mark', 500);
const fooBar: Customer = new CompanyAccount('FooBar', 12000);

bank.addCustomer(john);
bank.addCustomer(mark);
bank.addCustomer(fooBar);

fooBar.send(mark, 2500);
mark.send(john, 250);

mark.report();
/*
Customer: Mark 
Saldo: $2750 
History:
-> Money received from company FooBar: $2500 [ $500 => $3000 ]
-> Money sent to person John: $250 [ $3000 => $2750 ]
*/


john.report();
/*
Customer: John 
Saldo: $750 
History:
-> Money received from person Mark: $250 [ $500 => $750 ]
*/

fooBar.report();
/*
Customer: FooBar 
Saldo: $9500 
History:
-> Money sent to person Mark: $2500 [ $12000 => $9500 ]
*/
```

* Mediator - `Bank`:

```
abstract class AbstractBank {
    public abstract addCustomer(customer: Customer): void;
    public abstract transferMoney(
        sourceAccount: string,
        targetAccount: string,
        amount: number
    ): void;
}

class Bank extends AbstractBank {
    private readonly customers: Record<string, Customer> = {};
    private customersCounter = 0;

    public addCustomer(customer: Customer): void {
        const accountNumber = Math.ceil(
            Math.random() * 9999
        ) + '' + (++this.customersCounter);

        customer.accountNumber = accountNumber;
        customer.bank = this;

        this.customers[accountNumber] = customer;
    }

    public transferMoney(
        sourceAccount: string,
        targetAccount: string,
        amount: number
    ): void {
        const sender = this.customers[sourceAccount];
        if (sender.saldo >= amount) {
            const receiver = this.customers[targetAccount];
            receiver.receive(sender, amount);
            sender.saldo -= amount;
        }
    }
}
```

* `Customer` - `PersonalAccount` and `CompanyAccount`:

```
class Customer {
    public bank!: Bank;
    public accountNumber!: string;
    private history: string[] = [];

    constructor(
        public name: string,
        public saldo: number,
        private type: string
    ) {}

    public receive(sender: Customer, amount: number): void {
        let log = `Money received from ${sender.type} ${sender.name}: \$${amount}`;
        const prevSaldo = this.saldo;
        this.saldo += amount;
        log += ` [ \$${prevSaldo} => \$${this.saldo} ]`
        this.history.push(log);
    }

    public send(receiver: Customer, amount: number): void {
        if (this.saldo >= amount) {
            let log = `Money sent to ${receiver.type} ${receiver.name}: \$${amount}`;
            const prevSaldo = this.saldo;
            this.bank.transferMoney(this.accountNumber, receiver.accountNumber, amount);
            log += ` [ \$${prevSaldo} => \$${this.saldo} ]`;
            this.history.push(log);
        }
    }

    public report(): void {
        const listEntries = this.history.map(entry => '-> ' + entry);
        console.log(
            `Customer: ${this.name}`,
            `\nSaldo: \$${this.saldo}`,
            `\nHistory:\n${listEntries.join('\n')}`
        );
    }
}

class PersonalAccount extends Customer {
    constructor(name: string, saldo: number) {
        super(name, saldo, 'person');
    }
}

class CompanyAccount extends Customer {
    constructor(name: string, saldo: number) {
        super(name, saldo, 'company');
    }
}
```