# Attract Point to Line

$$
f(x) = ax + b
$$

$$
P = (x,y)
$$

$$
\implies
$$

$$
\Delta = f(x) - y
$$

$$
||v|| = \sqrt{1 + a^2}
$$

$$
dx = \frac{|\Delta|}{||v||}
$$

$$
d = \sqrt{\Delta^2 - dx^2}
$$

$$
\vec{d} =\frac{d}{||v||}
$$

$$
\vec{t} = \vec{d} \cdot \frac{\Delta}{|\Delta|} \cdot -\frac{a}{|a|}
$$

$$
x' = x + \vec{t}
$$

$$
y' = f(x')
$$

![Attract point to line](https://github.com/damianc/dev-notes/blob/master/_images/math/attract-point-to-line.png "Attract point to line")


## Implementation

```
function attractPointToLine([a,b], [x,y]) {
  const f = _x => _x * a + b;

  const delta = f(x) - y;
  const vec = Math.sqrt(1 + a**2);
  const dx = Math.abs(delta) / vec;
  const d = Math.sqrt(delta**2 - dx**2);
  const dVec = d / vec;
  const tVec = dVec * Math.sign(delta) * -Math.sign(a);
  
  const _x = x + tVec;
  const _y = f(_x);
  return [_x, _y];
}
```

## By X-axis

$$
x' = \frac{y-b}{a}
$$

$$
y' = y
$$

## By Y-axis

$$
x' = x
$$

$$
y' = f(x)
$$