# Circles Intersection

- circle 1: $(x-a_1)^2 + (y-b_1)^2 = (r_1)^2$
- circle 2: $(x-a_2)^2 + (y-b_2)^2 = (r_2)^2$

## Edge Cases

$$
d_x = a_2 - a_1
$$

$$
d_y = b_2 - b_1
$$

$$
d = \sqrt{(d_x)^2 + (d_y)^2}
$$

$$
(d > r_1 + r_2) \ \cup\ (d < \vert r_1 - r_2 \vert) \implies \varnothing
$$

$$
(d = 0) \ \cap\ (r_1 = r_2) \implies \infin
$$

## Calculations

$$
A = \frac{(r_1)^2 - (r_2)^2 + d^2}{2d}
$$

$$
H = \sqrt{(r_1)^2 - A^2}
$$

$$
\theta_x = a_1 + \frac{A \cdot d_x}{d}
$$

$$
\theta_y = b_1 + \frac{A \cdot d_y}{d}
$$

$$
\vec{x} = \frac{H \cdot d_y}{d}
$$

$$
\vec{y} = \frac{H \cdot d_x}{d}
$$

## Common Points

$$
H = 0 \implies
\begin{cases}
x = \theta_x + \vec{x}
\\
y = \theta_y - \vec{y}
\end{cases}
$$

$$
H \neq 0 \implies
\begin{cases}
x_1 = \theta_x + \vec{x}
\\
y_1 = \theta_y - \vec{y}
\\\ \\
x_2 = \theta_x - \vec{x}
\\
y_2 = \theta_y + \vec{y}
\end{cases}
$$

## Implementation

```
function circlesIntersection(
  { a: a1, b: b1, r: r1 },
  { a: a2, b: b2, r: r2 }
) {
  const dx = a2 - a1;
  const dy = b2 - b1;
  const d = Math.sqrt(dx**2 + dy**2);

  if (d > r1+r2 || d < Math.abs(r1-r2)) return null;
  if (d === 0 && r1 === r2) return Infinity;

  const A = (r1**2 - r2**2 + d**2) / (2 * d);
  const H = Math.sqrt(r1**2 - A**2);

  const tx = a1 + (A*dx)/d;
  const ty = b1 + (A*dy)/d;
  const vx = (H*dy)/d;
  const vy = (H*dx)/d;

  const x1 = tx + vx;
  const y1 = ty - vy;

  if (H === 0) return [x1, y1];

  const x2 = tx - vx;
  const y2 = ty + vy;

  return [[x1,y1], [x2,y2]];
}
```

```
const baseCircle = { a: 8, b: 8, r: 4 };

circlesIntersection(baseCircle, { a: 8, b: 8, r: 2 })
// null

circlesIntersection(baseCircle, { a: 8, b: 8, r: 4 })
// Infinity

circlesIntersection(baseCircle, { a: 8, b: -8, r: 12 })
// [8,4]

circlesIntersection(baseCircle, { a: 8, b: -8, r: 16 })
// [[4.0314, 7.5], [11.9686, 7.5]]
```