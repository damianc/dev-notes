# Line and Circle Intersection

For function $f(x) = mx + i$ and circle with center at $(x,y)$ and $r$ in radius:

$$
a = 1 + m^2
$$


$$
b = -2x + 2mi - 2ym
$$

$$
c = x^2 + (i-y)^2 - r^2
$$

$$
\Delta = b^2 - 4ac
$$

$$
\Delta < 0 \implies \varnothing
$$

$$
\Delta = 0 \implies
\begin{cases}
x_1 = \frac{-b}{2a}
\\
y_1 = f(x_1)
\end{cases}
$$

$$
\Delta > 0 \implies
\begin{cases}
x_1 = \frac{-b - \sqrt{\Delta}}{2a}
\\
y_1 = f(x_1)
\\\ \\
x_2 = \frac{-b + \sqrt{\Delta}}{2a}
\\
y_2 = f(x_2)
\end{cases}
$$

## Implementation

```
function circleLineIntersection({m,i}, {x,y,r}) {
  const A = 1 + m**2;
  const B = -2*x + 2*m*i - 2*y*m;
  const C = x**2 + (i-y)**2 - r**2;
  const delta = B**2 - 4*A*C;
  
  if (delta < 0) return null;
  const f = x => m * x + i;

  if (delta === 0) {
    const x = -B / (2*A);
    const y = f(x);
    return [x,y];
  } else {
    const x1 = (-B-Math.sqrt(delta)) / (2*A);
    const y1 = f(x1);
    const x2 = (-B+Math.sqrt(delta)) / (2*A);
    const y2 = f(x2);
    return [[x1,y1], [x2,y2]];
  }
}
```

```
// -0.5x + 2 <-> (3,3,r=5)
circleLineIntersection(
  {m:-0.5,i:2},
  {x:3,y:3,r:5}
)
// [[-2,3], [6,-1]]

// 0x + 2 <-> (3,-3,r=5)
circleLineIntersection(
  {m:0,i:2},
  {x:3,y:-3,r:5}
)
// [3,2]

// 0.5x - 2 <-> (-3,3,r=5)
circleLineIntersection(
  {m:0.5,i:-2},
  {x:-3,y:3,r:5}
)
// null
```