# Chain of Responsibility

Examples:
- [Buying Stuff - from Shop through Warehouse to Factory](#example-1-buying-stuff---from-shop-through-warehouse-to-factory)
- [Wizard Creating a User](#example-2-wizard-creating-a-user)

## Example 1: Buying Stuff - from Shop through Warehouse to Factory

* use:

```
const shop: Store = new Shop(20);
const warehouse: Store = new Warehouse(500);
const factory: Store = new Factory(2000);

shop.setSupplier(warehouse);
warehouse.setSupplier(factory);


shop.fetch('ketchup bottle', 2);
// Welcome to our shop!
// 2x ketchup bottle fetched from Shop


shop.fetch('ketchup bottle', 30);
// Welcome to our shop!
// 30 ketchup bottles are not available in Shop
// going to Warehouse...
// Welcome to our warehouse!
// 30x ketchup bottle fetched from Warehouse


warehouse.fetch('ketchup bottle', 50);
// Welcome to our warehouse!
// 50x ketchup bottle fetched from Warehouse


shop.fetch('ketchup bottle', 1000);
// Welcome to our shop!
// 1000 ketchup bottles are not available in Shop
// going to Warehouse...
// Welcome to our warehouse!
// 1000 ketchup bottles are not available in Warehouse
// going to Factory...
// Welcome to our factory!
// 1000x ketchup bottle fetched from Factory


shop.fetch('ketchup bottle', 2500);
// Welcome to our shop!
// 2500 ketchup bottles are not available in Shop
// going to Warehouse...
// Welcome to our warehouse!
// 2500 ketchup bottles are not available in Warehouse
// going to Factory...
// Welcome to our factory!
// 2500 ketchup bottles are not available in Factory
// You can get up to 2000 items.
```

* Base Service - `Store`:

```
class Store {
    protected supplier!: Store;

    constructor(protected limit: number) {}

    public setSupplier(supplier: Store): void {
        this.supplier = supplier;
    }

    public fetch(product: string, numberOfItems: number): void {
        const currentPlace = this.constructor.name;

        if (numberOfItems <= this.limit) {
            console.log(
                `${numberOfItems}x ${product} fetched from ${currentPlace}`
            );
        } else {
            console.log(
                `${numberOfItems} ${product}s are not available in ${currentPlace}`
            );
            if (this.supplier) {
                const nextPlace = this.supplier.constructor.name;
                console.log(`going to ${nextPlace}...`);
                this.supplier.fetch(product, numberOfItems);
            }
        }
    }
}
```

* Specific Service Implementations - `Shop`, `Warehouse` and `Factory`:

```
class Shop extends Store {
    public override fetch(product: string, numberOfItems: number): void {
        console.log('Welcome to our shop!');
        super.fetch(product, numberOfItems);
    }
}

class Warehouse extends Store {
    public override fetch(product: string, numberOfItems: number): void {
        console.log('Welcome to our warehouse!');
        super.fetch(product, numberOfItems);
    }
}

class Factory extends Store {
    public override fetch(product: string, numberOfItems: number): void {
        console.log('Welcome to our factory!');
        super.fetch(product, numberOfItems);

        if (numberOfItems > this.limit) {
            console.log(`You can get up to ${this.limit} items.`);
        }
    }
}
```

## Example 2: Wizard Creating a User

* use:

```
const step1: WizardStep = new NameStep('Mark');
const step2: WizardStep = new AgeStep(24);
const step3: WizardStep = new CityStep('LA');

process([step1, step2, step3], new User());
// User has been created: { name: 'Mark', age: 24, city: 'LA' }


// function does the following:
// step1.setNextStep(step2); step2.setNextStep(step3); step1.handle(user);

function process(stepsSequence: WizardStep[], user: User): void {
    stepsSequence.forEach((step, idx) => {
        const isLast = idx === stepsSequence.length - 1;

        if (!isLast) {
            step.setNextStep(stepsSequence[idx + 1]);
        } else {
            const [firstStep] = stepsSequence;
            firstStep.handle(user);
        }
    });
}
```

* Abstract Service - `WizardStep`:

```
abstract class WizardStep {
    protected nextStep!: WizardStep;

    public setNextStep(step: WizardStep): void {
        this.nextStep = step;
    }

    public abstract handle(user: User): void;
}
```

* Specific Service Implementations - `NameStep`, `AgeStep` and `CityStep`:

```
class NameStep extends WizardStep {
    constructor(private name: string) {
        super();
    }

    public handle(user: User): void {
        user.name = this.name;
        this.nextStep.handle(user);
    }
}

class AgeStep extends WizardStep {
    constructor(private age: number) {
        super();
    }

    public handle(user: User): void {
        user.age = this.age;
        this.nextStep.handle(user);
    }
}

class CityStep extends WizardStep {
    constructor(private city: string) {
        super();
    }

    public handle(user: User): void {
        user.city = this.city;
        console.log('User has been created:', user);
    }
}
```

* Item Being Handled - `User`:

```
class User {
    name!: string;
    age!: number;
    city!: string;
}
```