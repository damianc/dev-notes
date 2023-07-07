# Find Circle by Point Coords/Angle and Radius

$$
\Delta = \frac{1}{2}\pi - 2\pi \cdot \frac{\alpha}{360}
$$

$$
a = -(r \cdot \cos(\Delta)) + x
$$

$$
b = -(r \cdot \sin(\Delta)) + y
$$

![Find circle by point coords and angle](https://github.com/damianc/dev-notes/blob/master/_images/math/circle-by-two-point-angle.png "Find circle by point coords and angle")

## Implementation

```
function findCircle([x,y], angle, r) {
  const delta = 0.5*Math.PI - 2*Math.PI * (angle/360);
  const a = -(r * Math.cos(delta)) + x;
  const b = -(r * Math.sin(delta)) + y;
  return [a,b];
}
```

```
findCircle([3,3], 45, 4)
// [0.1715728752538097, 0.17157287525381015]

findCircle([3,3], -45, 4)
// [5.82842712474619, 0.1715728752538097]
```