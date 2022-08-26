# Mediator

## Example 1: Bank Accounts and Transfer of Money

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