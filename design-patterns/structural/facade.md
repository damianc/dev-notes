# Facade

* use:

```
const calc = new CalcFacade();

const five = calc.sum(2,3);
// "ArchaicCalc is used in guts 👻"

const eight = calc.diff(12,4);
// "ArchaicCalc is used in guts 👻"

console.log(five, eight);
// 5, 8
```

* Inconvenient Tool - `ArchaicCalc`:

```
class ArchaicCalc {
    private numberA!: number;
    private numberB!: number;
    private op!: (a: number, b: number) => number;

    public setNumberA(a: number): void {
        this.numberA = a;
    }

    public setNumberB(b: number): void {
        this.numberB = b;
    }

    public setOperation(op: (a: number, b: number) => number): void {
        this.op = op;
    }

    public calc(): number {
        console.log('ArchaicCalc is used in guts 👻');

        if (this.numberA && this.numberB && this.op) {
            return this.op(this.numberA, this.numberB);
        }

        return NaN;
    }
}
```

* Facade - `CalcFacade`:

```
class CalcFacade {
    private archaic = new ArchaicCalc();

    public sum(a: number, b: number): number {
        this.archaic.setOperation((a, b) => a + b);
        return this.calc(a, b);
    }

    public diff(a: number, b: number): number {
        this.archaic.setOperation((a, b) => a - b);
        return this.calc(a, b);
    }

    private calc(a: number, b: number): number {
        this.archaic.setNumberA(a);
        this.archaic.setNumberB(b);
        return this.archaic.calc();
    }
}
```