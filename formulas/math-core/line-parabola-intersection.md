# Line and Parabola Intersection

- line $f(x) = mx + i$
- parabola $g(x) = ax^2 + bx + c$

## Getting $\Delta$

$$
A = a
$$

$$
B = b - m
$$

$$
C = c - i
$$

$$
\Delta = B^2 - 4AC
$$

## Getting Common Points

$$
\Delta < 0 \implies \varnothing
$$

$$
\Delta = 0 \implies
\begin{cases}
x = \frac{-B}{2A}
\\
y = f(x) = mx + i
\end{cases}
$$

$$
\Delta > 0 \implies
\begin{cases}
x_1 = \frac{-B - \sqrt{\Delta}}{2A}
\\
y_1 = f(x_1) = mx_1 + i
\\\ \\
x_2 = \frac{-B + \sqrt{\Delta}}{2A}
\\
y_2 = f(x_2) = mx_2 + i
\end{cases}
$$

## Implementation

```
function parabolaLineIntersection({m,i}, {a,b,c}) {
  const A = a;
  const B = b - m;
  const C = c - i;
  const delta = B**2 - 4*A*C;

  if (delta < 0) return null;
  const f = x => m * x + i;

  if (delta === 0) {
    const x = -B / (2*a);
    const y = f(x);
    return [x,y];
  } else {
    const x1 = (-B-Math.sqrt(delta)) / (2*a);
    const y1 = f(x1);
    const x2 = (-B+Math.sqrt(delta)) / (2*a);
    const y2 = f(x2);
    return [[x1,y1], [x2,y2]];
  }
}
```

```
// -0.5x + 2 <-> 0.5x^2 + 2x + 4
parabolaLineIntersection(
  { m: -0.5, i: 2 },
  { a: 0.5, b: 2, c: 4 } 
)
// [[-4,4], [-1,2.5]]

// 0x + 2 <-> 0.5x^2 - 2 + 4
parabolaLineIntersection(
  { m: 0, i: 2 },
  { a: 0.5, b: -2, c: 4 } 
)
// [2,2]

// 0.5x + 2 <-> -0.5x^2 - 2x - 4
parabolaLineIntersection(
  { m: 0.5, i: 2 },
  { a: -0.5, b: -2, c: -4 }
)
// null
```