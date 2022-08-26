# Chain of Responsibility

## Example 1: Wizard Creating a User

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