# Find Circle by 2 Points and Radius

* edge cases

$$
crd = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}
$$

$$
crd > 2r \implies \varnothing
$$

$$
crd = 2r \implies \left[ \frac{x_1+x_2}{2}, \frac{y_1+y_2}{2} \right]
$$

* other cases

$$
\alpha = 2 \cdot \arcsin\left( \frac{crd}{2r} \right)
$$

$$
\perp = r \cdot \cos\left( \frac{\alpha}{2} \right)
$$

$$
x_3 = \frac{x_1+x_2}{2}
$$

$$
y_3 = \frac{y_1+y_2}{2}
$$

$$
slope = \frac{y_2-y_1}{x_2-x_1}
$$

$$
g_a = \frac{-1}{slope \ \cup\ 1}
$$

$$
g_b = y_3 - (x_3 \cdot g_a)
$$

$$
\vec{t} = \frac{\perp}{\sqrt{1+g_a^2}}
$$

$$
a_1 = x_3 + \vec{t}
$$

$$
b_1 = g_a \cdot a_1 + g_b
$$

$$
a_2 = x_3 - \vec{t}
$$

$$
b_2 = g_a \cdot a_2 + g_B
$$

$$
\left[ [a_1, b_1] , [a_2, b_2] \right]
$$

## Implementation

```
function findCircle([x1,y1], [x2,y2], r) {
  const crd = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
  const d = 2*r;

  if (crd > d) return null;

  const x3 = (x1+x2)/2;
  const y3 = (y1+y2)/2;
  
  if (crd === d) return [x3, y3];

  const alpha = 2 * Math.asin(crd/d);
  const perp = r * Math.cos(alpha/2);

  const slope = (y2-y1)/(x2-x1);
  const ga = -1 / (slope || 1);
  const gb = y3 - (x3 * ga);
  const tVec = perp / Math.sqrt(1 + ga**2);

  const a1 = x3 + tVec;
  const b1 = ga * a1 + gb;

  const a2 = x3 - tVec;
  const b2 = ga * a2 + gb;

  return [[a1,b1], [a2,b2]];
}
```

```
findCircle([5,3],[3,5],2)
// [[5,5],[3,3]]

findCircle([3,6],[9,6],3)
// [6,6]

findCircle([3,-2],[2,4],3)
// null
```