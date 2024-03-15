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

## Tetration

$$
^n a = a^{{a^{a^a}} {\large \\}} n} \neq \overset{{\ \ \ \ \ \ \ \ \small \dots \times n}}{((a^a)^a)^a}
$$

```
function tetration(a, n) {
  if (n === 0) return 1;

  let res = a;
  for (; --n; ) res = a**res;
  return res;
}
```

## Clamp value in a range

$$
x \mapsto
\begin{cases}
x \iff x \in \langle m^{-}; m^{+} \rangle
\\
m^{-} \iff x < m^{-}
\\
m^{+} \iff x > m^{+}
\end{cases}
$$

```
function clamp(x, min, max) {
  return Math.min(
    Math.max(min,x),
    max
  );
}
```
