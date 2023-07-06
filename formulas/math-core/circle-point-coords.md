# Point Coordinates on Circle

## Point $(x,y)$ by Angle $\alpha$

$$
\Delta = 2\pi \cdot \frac{\alpha}{360}
$$

$$
x = r \cdot \cos(\Delta) + a
$$

$$
y = r \cdot \sin(\Delta) + b
$$

| $\Delta$ variant | circle start (0) point | example angle $\alpha$ | $(x,y)$ for given $\alpha$ |
|--|--|--|--|
| $\Delta$ | on the right | $30\degree$ | $(9.4641, 8)$ |
| $\Delta + \frac{1}{2}\pi$ | on the top | $30\degree$ | $(4, 9.4641)$ |
| $\Delta - \frac{1}{2}\pi$ | on the bottom | $30\degree$ | $(8, 2.5359)$ |
| $\Delta + \pi$ | on the right | $30\degree$ | $(2.5359, 4)$ |

## Angle $\alpha$ by Point $(x,y)$

$$
r\Delta = \arccos\left( \frac{x-a}{r} \right)
$$

| original $\Delta$ variant | formula for given $\Delta$ | example $(x,y)$ | $\alpha$ for given $x$ |
|--|--|--|--|
| $\Delta$ | $$\frac{r\Delta}{2\pi} \cdot 360$$ | $(9.4641,8)$ | $30\degree$ |
| $\Delta + \frac{1}{2}\pi$ | $$\frac{r\Delta-\frac{1}{2}\pi}{2\pi} \cdot 360$$ | $(4, 9.4641)$ | $30\degree$ |
| $\Delta - \frac{1}{2}\pi$ | $$\frac{\frac{1}{2}\pi-r\Delta}{2\pi} \cdot 360$$ | $(8, 2.5359)$ | $30\degree$ |
| $\Delta + \pi$ | $$\frac{\pi-r\Delta}{2\pi} \cdot 360$$ | $(2.5359, 4))$ | $30\degree$ |

> $-\alpha = 360-\alpha$

> $\frac{r\Delta}{2\pi} \cdot 360$ = $\frac{r\Delta}{\pi} \cdot 180$ = $\frac{2 \cdot r\Delta}{\pi} \cdot 90$

### Conditions

* the main condition for every point $(x,y)$ is $(x-a)^2 + (y-b)^2 = r^2$ for circle with center at $(a,b)$ and $r$ in radius

futhermore

- for $\Delta$:

$$
\begin{cases}
\alpha \iff y \lt b
\\
-\alpha \iff y \gt b
\\
0\degree \iff y=b \ \cap\ x=a+r
\\
180\degree \iff y=b \ \cap\ x=a-r
\end{cases}
$$

- for $\Delta + \frac{1}{2}\pi$:
  
$$
\begin{cases}
\alpha \iff x \lt a
\\
-\alpha \iff x \gt a
\\
0\degree \iff x=a \ \cap\ y=b-r
\\
180\degree \iff x=a \ \cap\ y=b+r
\end{cases}
$$

- for $\Delta - \frac{1}{2}\pi$:

$$
\begin{cases}
\alpha \iff x \gt a
\\
-\alpha \iff x \lt a
\\
0\degree \iff x=a \ \cap\ y=b+r
\\
180\degree \iff x=a \ \cap\ y=b-r
\end{cases}
$$

- for $\Delta + \pi$:

$$
\begin{cases}
\alpha \iff y \gt b
\\
-\alpha \iff y \lt b
\\
0\degree \iff y=b \ \cap\ x=a-r
\\
180\degree \iff y=b \ \cap\ x=a+r
\end{cases}
$$

### Custom `Math.atan2()` Implementation

```
function atan2([x1,y1],[x2,y2]) {
  const r = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
  const rd = Math.acos((x2-x1)/r);
  const a = (rd/(2*Math.PI))*360;

  const rad = deg => deg/180*Math.PI;

  if (y2 < y1) return rad(-a);
  if (y2 > y1) return rad(a);
  if (y2 === y1) {
    if (x2 === x1 + r) return rad(0);
    if (x2 === x1 - r) return rad(180);
  }
  return null;
}
```

```
const p1 = {x:2,y:2};
const p2 = {x:4,y:4};

atan2([p1.x,p1.y], [p2.x,p2.y])
// 0.7853981633974485
Math.atan2(p2.y-p1.y, p2.x-p1.x)
// 0.7853981633974483

const p3 = {x:-2,y:2};
const p4 = {x:4,y:-8};

atan2([p3.x,p3.y], [p4.x,p4.y])
// -1.0303768265243125
Math.atan2(p4.y-p3.y, p4.x-p3.x)
// -1.0303768265243125
```

#### Calculations

$$
r = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}
$$

$$
r\Delta = \arccos\left( \frac{x_2-x_1}{r} \right)
$$

$$
\alpha' = \frac{r\Delta}{2\pi} \cdot 360
$$

$$
\alpha = \frac{\alpha'}{180} \cdot \pi
$$

$$
\begin{cases}
y_2 \gt y_1 \implies \alpha
\\
y_2 \lt y_1 \implies -\alpha
\\
y_2 = y_1 \implies
\begin{cases}
x_2 = x_1 + r \implies 0
\\
x_2 = x_1 - r \implies \pi
\end{cases}
\end{cases}
$$