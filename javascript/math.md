# `Math`

## Constants

| Constant | Value | $\approx$ |
|--|--|--|
| `PI` | $\pi$ | 3.1416 |
| `E` | $e$ | 2.7183 |
| `LN10` | $\ln(10)$ | 2.3026 |
| `LN2` | $\ln(2)$ | 0.6932 |
| `LOG10E` | $\log_{10} e$ | 0.4343 |
| `LOG2E` | $\log_2 e$ | 1.4427 |
| `SQRT1_2` | $\sqrt{\frac{1}{2}}$ | 0.7071 |
| `SQRT2` | $\sqrt{2}$ | 1.4142 |

## Methods

| Method | Operation |
|--|--|
| `pow(x,n)` | $x^n$ |
| `sqrt(x)` | $\sqrt{x}$ |
| `cbrt(x)` | $\sqrt[3]{x}$ |
| `pow(x,1/n)` | $\sqrt[n]{x}$ |
| `hypot(a,b,...)` | $\sqrt{a^2+b^2+...}$ |
| `log(x)` | $\ln x$ |
| `log2(x)` | $\log_2 x$ |
| `log10(x)` | $\log_{10} x$ |
| `log(x)/log(n)` | $\log_n x$ |
| `log1p(x)` | $\ln(1+x)$ |
| `exp(x)` | $e^x$ |
| `expm1(x)` | $e^x - 1$ |
| `round(x)` | $\lfloor x \rceil$ |
| `ceil(x)` | $\lceil x \rceil$ |
| `floor(x)` | $\lfloor x \rfloor$ |
| `abs(x)` | $\vert x \vert$ |
| `sign(x)` | $\frac{x}{\vert x \vert\ \cup\ 1}$ |
| `min(a,b,...)` | $\min(a,b,...)$ |
| `max(a,b,...)` | $\max(a,b,...)$ |

## Extra Methods

```
function root(x,n) {
  return x**(1/n);
}
```

```
function logn(x,n) {
  return Math.log(x)/Math.log(n);
}
```

```
function _round(x,digits,method) {
  const m = 10**digits;
  return method(x*m)/m;
}

function fround(x,digits=2) {
  return _round(
    x, digits, Math.round
  );
}
function fceil(x,digits=2) {
  return _round(
    x, digits, Math.ceil
  );
}
function ffloor(x,digits=2) {
  return _round(
    x, digits, Math.floor
  );
}
```
