# Lacking `Math` Angular Methods

| | sec | csc | cot |
|--|--|--|--|
| | $\frac{1}{\cos x}$ | $\frac{1}{\sin x}$ | $\frac{1}{\tan x}$ |
| hyperbolic | $\frac{1}{\cosh x}$ | $\frac{1}{\sinh x}$ | $\frac{1}{\tanh x}$ |
| arcus | $\arccos\left(\frac{1}{x}\right)$ | $\arcsin\left(\frac{1}{x}\right)$ | $\arctan\left(\frac{1}{x}\right)$ |
| arcus hyperbolic | $\text{arccosh}\left(\frac{1}{x}\right)$ | $\text{arcsinh}\left(\frac{1}{x}\right)$ | $\text{arctanh}\left(\frac{1}{x}\right)$

## Implementations

```
const sec = x => 1 / Math.cos(x);
const csc = x => 1 / Math.sin(x);
const cot = x => 1 / Math.tan(x);

const sech = x => 1 / Math.cosh(x);
const csch = x => 1 / Math.sinh(x);
const coth = x => 1 / Math.tanh(x);

const asec = x => Math.acos(1 / x);
const acsc = x => Math.asin(1 / x);
const acot = x => Math.atan(1 / x);

const asech = x => Math.acosh(1 / x);
const acsch = x => Math.asinh(1 / x);
const acoth = x => Math.atanh(1 / x);
```
