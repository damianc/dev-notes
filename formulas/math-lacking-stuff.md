# Lacking Stuff of `Math`

## The n-th root

$$
\sqrt[n]{x} = x^{\frac{1}{n}}
$$

```
function root(x, n) {
  return x**(1/n);
}
```

## The n-base logarithm

$$
\log_n x = \frac{\ln x}{\ln n}
$$

```
function log(x, n) {
  return Math.log(x) / Math.log(n);
}
```
