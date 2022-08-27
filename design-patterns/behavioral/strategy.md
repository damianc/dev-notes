# Strategy

* use:

```
const CalcAlg = {
    math: new MathCalc(),
    plain: new PlainCalc()
};
let a,b;

const mathCalc = new Calc(CalcAlg.math);
const plainCalc = new Calc(CalcAlg.plain);


a = mathCalc.getAbs(-20);
// using Math.abs() on -20

b = mathCalc.getAbs(4);
// using Math.abs() on 4

console.log(a, b);
// 20 4


a = plainCalc.getAbs(-20);
// using custom implementation on -20

b = plainCalc.getAbs(4);
// using custom implementation on 4

console.log(a, b);
// 20 4
```

* Context - `Calc`:

```
class Calc {
    constructor(
        private readonly strategy: IAbs
    ) {}

    public getAbs(x: number): number {
        return this.strategy.abs(x);
    }
}
```

* Strategies - `MathCalc` and `PlainCalc`:

```
interface IAbs {
    abs(x: number): number;
}

class MathCalc implements IAbs {
    public abs(x: number): number {
        console.log('using Math.abs() on ' + x);
        return Math.abs(x);
    }
}

class PlainCalc implements IAbs {
    public abs(x: number): number {
        console.log('using custom implementation on ' + x);
        return x == 0 ? 0 : (x < 0 ? (x * -1) : x);
    }
}
```