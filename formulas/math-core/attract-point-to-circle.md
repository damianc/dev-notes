# Attract Point to Circle

* edge case: point on circle center

$$
x = a \ \cap\  y = b \implies
$$

$$
(x \pm r,y) \ \cup\  (x, y \pm r)
$$

* edge case: common X-axis or Y-axis

$$
x = a \ \cap\  y \neq b \implies
$$

$$
\left(x, b + r \cdot \frac{y-b}{|y-b|}\right)
$$

$$
y=b \cap x \neq a \implies
$$

$$
\left(a + r \cdot \frac{x-a}{|x-a|}, y\right)
$$

* edge case: point already on circle

$$
d = \sqrt{(x-a)^2 + (y-b)^2}
$$

$$
r = d \implies (x, y)
$$

* other cases

$$
m = \frac{y-b}{x-a}
$$

$$
i = \frac{xb - ay}{x-a}
$$

$$
||v|| = \sqrt{1 + m^2}
$$

$$
t = (r - d) \cdot \frac{x-a}{|x-a|}
$$

$$
\vec{t} = \frac{t}{||v||}
$$

$$
x' = x + \vec{t}
$$

$$
y' = m \cdot x' + i
$$

$$
\implies (x', y')
$$

![Attract point to circle](https://github.com/damianc/dev-notes/blob/master/_images/math/attract-point-to-circle.png "Attract point to circle")

## Implementation

```
function attractToCircle([a,b,r], [x,y]) {
  if (x === a && y === b) {
    return {
      RIGHT: [x + r, y],
      LEFT: [x - r, y],
      TOP: [x, y - r],
      BOTTOM: [x, y + r]
    }['RIGHT'];
  }
  
  if (x === a || y === b) {
    if (x === a && y !== b) {
      const edgeY = b + r * Math.sign(y - b);
      return [x, edgeY];
    }
    if (y === b && a !== x) {
      const edgeX = a + r * Math.sign(x - a);
      return [edgeX, y];
    }
  }
  
  const d = Math.sqrt((x-a)**2 + (y-b)**2);
  if (d === r) return [x, y];

  const m = (y-b) / (x-a);
  const i = (x*b - a*y) / (x-a);
  const vec = Math.sqrt(1 + m**2);
  const t = (r - d) * Math.sign(x - a);
  const tVec = t / vec;

  const _x = x + tVec;
  const _y = m * _x + i;
  return [_x, _y];
}
```