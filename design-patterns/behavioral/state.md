# State

Examples:
- [Open/Closed Bottle](#example-1-openclosed-bottle)
- [Database Table Lock](#example-2-database-table-lock)

## Example 1: Open/Closed Bottle

* use:

```
const bottle = new Bottle();

bottle.open();
// opening...
// bottle open

bottle.close();
// closing...
// bottle closed


bottle.open();
// opening...
// bottle open

bottle.open();
// bottle already open


bottle.close();
// closing...
// bottle closed

bottle.close();
// bottle already closed
```

* `Bottle`:

```
class Bottle {
    public states: {[k:string]: BottleState} = {
        open: new BottleOpen(),
        closed: new BottleClosed()
    };
    public state: BottleState = this.states.closed;

    public handleCork(state: BottleState): void {
        this.state = state;
    }

    public open(): void {
        this.state.open(this)
    }

    public close(): void {
        this.state.close(this);
    }
}
```

* States - `BottleOpen` and `BottleClosed`:

```
class BottleState {
    public open(b: Bottle): void {
        console.log('bottle already open');
    }

    public close(b: Bottle): void {
        console.log('bottle already closed');
    }
}

class BottleOpen extends BottleState {
    public close(b: Bottle): void {
        console.log('closing...');
        b.handleCork(b.states.closed);
        console.log('bottle closed');
    }
}

class BottleClosed extends BottleState {
    public open(b: Bottle): void {
        console.log('opening...');
        b.handleCork(b.states.open);
        console.log('bottle open');
    }
}
```

## Example 2: Database Table Lock

* use:

```
const table = new Table();

table.insertData({ name: 'John' });
// Table is locked!
// Cannot insert data: {name: 'John'}

table.setState(table.TableUnlocked);

table.insertData({ name: 'Mark' });
// Added new data: {name: 'Mark'}
// Current table size: 1

table.insertData({ name: 'Adam' });
// Added new data: {name: 'Adam'}
// Current table size: 2


table.setState(table.TableLocked);

table.insertData({ name: 'Will' });
// Table is locked!
// Cannot insert data: {name: 'Will'}


console.log(table.data);
// [{name: 'Mark'}, {name: 'Adam'}]
```

* `Table`:

```
class Table {
    public TableLocked = new TableStateLocked(this);
    public TableUnlocked = new TableStateUnlocked(this);
    public tableLock: TableState = this.TableLocked;
    public data: IData[] = [];

    public setState(state: TableState): void {
        this.tableLock = state;
    }

    public insertData(data: IData): void {
        this.tableLock.write(data);
    }
}

interface IData {
    name: string;
}
```

* States - `TableStateLocked` and `TableStateUnlocked`:

```
abstract class TableState {
    constructor(protected readonly table: Table) {}

    public abstract write(data: IData): void;
}

class TableStateLocked extends TableState {
    public write(data: IData): void {
        console.log('Table is locked!');
        console.log('Cannot insert data:', data);
    }
}

class TableStateUnlocked extends TableState {
    public write(data: IData): void {
        this.table.data.push(data);
        console.log('Added new data:', data);
        console.log('Current table size:', this.table.data.length);
    }
}
```




