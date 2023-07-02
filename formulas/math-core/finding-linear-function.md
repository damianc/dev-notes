# Finding Linear Function

- [By two points _A_ and _B_](#by-two-points-a-and-b)
- [By two points _A_ and _B_ [#2]](#by-two-points-a-and-b-2)
- [By ║ parallel function _f(x)_ and point _P_](#by-parallel-parallel-function-fx-and-point-p)
- [By ┴ perpendicular function _f(x)_ and point _P_](#by-perp-perpendicular-function-fx-and-point-p)
- [By angle α towards X-axis →](#by-measuredangle-angle-alpha-towards-x-axis-rarr)
- [By angle β towards Y-axis ↑](#by-measuredangle-angle-beta-towards-y-axis-uarr)
- [By angle γ towards _f(x)_ function line](#by-measuredangle-angle-gamma-towards-fx-function-line)
- [By distance _d_ from _f(x)_ parallel function line ║](#by-distance-d-from-fx-parallel-function-line-parallel)
- [By length _l_ in range of size _d_](#by-length-ell-in-range-of-size-d-implies-leftx_nx_ndright)
- [By distance _y_ from parallel function _f(x)_](#by-distance-vecy-from-parallel-function-fx)
- [By distance _x_ from parallel function _f(x)_](#by-distance-vecx-from-parallel-function-fx)
- [By Circle Tangent](#by-circle-tangent)
- [By Circle Chord](#by-circle-chord)
- [By Chord Length](#by-chord-length)
- [By Arc Length](#by-arc-length)
- [By Parabola _f(x)_ Tangent at _x_](#by-parabola-fx-tangent-at-x)
- [By Parabola _f(x)_ Intersection at _x1_ and _x2_](#by-parabola-fx-intersection-at-x_1-and-x_2)
- [By Circumference _l_ of Triangle Rendered with Lines _f(x)_ and _g(x)_](#by-circumference-ell-of-triangle-rendered-with-lines-fx-and-gx)

## By two points $A$ and $B$

$$
A = (x_1, y_1)
$$

$$
B = (x_2, y_2)
$$

$$
\implies
$$

$$
a = \frac{y_2 -y_1}{x_2 - x_1}
$$

$$
b = \frac{x_2y_1 - x_1y_2}{x_2 - x_1}
$$

$$
f(x) = ax + b
$$

### Example

$$
A = (1,2)
$$

$$
B = (8,4)
$$

$$
\implies
$$

$$
a = \frac{y_2 -y_1}{x_2 - x_1} = \frac{4-2}{8-1} = \frac{2}{7} \approx 0.2857
$$

$$
b = \frac{x_2y_1 - x_1y_2}{x_2 - x_1} = \frac{8\cdot2 - 1\cdot4}{8-1} = \frac{12}{7} \approx 1.7143
$$

$$
f(x) = ax + b = 0.2857x + 1.7143 \approx 0.29x + 1.71
$$

### Implementation

```
function find([x1,y1], [x2,y2]) {
  const a = (y2 - y1) / (x2 - x1);
  const b = ((x2 * y1) - (x1 * y2)) / (x2 - x1);
  return x => a * x + b;
}

find([1,2], [8,4])
// x => 0.285714 * x + 1.714286
```

## By two points $A$ and $B$ [#2]

$$
A = (x_1, y_1)
$$

$$
B = (x_2, y_2)
$$

$$
\implies
$$

$$
m = \frac{y_2-y_1}{x_2-x_1}
$$

$$
f(x) = m(x - x_1) + y_1
$$

$$
\cup
$$

$$
f(x) = m(x - x_2) + y_2
$$

### Example

$$
A = (1,2)
$$

$$
B = (8,4)
$$

$$
\implies
$$

$$
m = \frac{y_2 -y_1}{x_2 - x_1} = \frac{4-2}{8-1} = \frac{2}{7} \approx 0.2857
$$

$$
f(x) = 0.2857(x - 1) + 2 \approx 0.29(x - 1) + 2
$$

$$
\cup
$$

$$
f(x) = 0.2857(x - 8) + 4 \approx 0.29(x - 8) + 4
$$

### Implementation

```
function find([x1,y1], [x2,y2]) {
  const m = (y2 - y1) / (x2 - x1);
  return x => m * (x - x1) + y1;
}

find([1,2], [8,4])
// x => 0.285714 * (x - 1) + 2
```

## By $\parallel$ parallel function $f(x)$ and point $P$

$$
f(x) = a_fx + b_f
$$

$$
P = (x_p, y_p)
$$

$$
\implies
$$

$$
a_g = a_f
$$

$$
b_g = y_p - [x_p \cdot a_g]
$$

$$
g(x) = a_gx + b_g
$$

### Example

$$
f(x) = 2x + 1
$$

$$
P = (4,2)
$$

$$
\implies
$$

$$
a_g = a_f = 2
$$

$$
b_g = y_p - [x_p \cdot a_g] = 2 - [4 \cdot 2] = -6
$$

$$
g(x) = a_gx + b_x = 2x - 6
$$

### Implementation

```
function find([fa,fb], [x,y]) {
  const gb = y - (x * fa);
  return x => fa * x + gb;
}

find([2,1], [4,2])
// x => 2 * x - 6
```

## By $\perp$ perpendicular function $f(x)$ and point $P$

$$
f(x) = a_fx + b_f
$$

$$
P = (x_p, y_p)
$$

$$
\implies
$$

$$
a_g = \frac{-1}{a_f}
$$

$$
b_g = y_p - [x_p \cdot a_g]
$$

$$
g(x) = a_gx + b_g
$$

### Example

$$
f(x) = 2x + 1
$$

$$
P = (4,2)
$$

$$
\implies
$$

$$
a_g = \frac{-1}{a_f} = \frac{-1}{2} = -\frac{1}{2}
$$

$$
b_g = y_p - [x_p \cdot a_g] = 2 - [4 \cdot (-\frac{1}{2})] = 4
$$

$$
g(x) = a_gx + b_g = -\frac{1}{2}x + 4
$$

### Implementation

```
function find([fa,fb], [x,y]) {
  const ga = -1 / fa;
  const gb = y - (x * ga);
  return x => ga * x + gb;
}

find([2,1], [4,2])
// x => -0.5 * x + 4
```

## By $\measuredangle$ angle $\alpha$ towards X-axis $\rArr$

$$
P = (x_p, y_p)
$$

$$
\implies
$$

$$
a_f = \tan \alpha
$$

$$
b_f = y_p - [x_p \cdot a_f]
$$

$$
f(x) = a_fx + b_f
$$

### Example

$$
\alpha = 30\degree = \frac{1}{6}\pi = 0.5236
$$

$$
P = (4,2)
$$

$$
\implies
$$

$$
a_f = \tan \alpha = \tan 0.5236 \approx 0.5774
$$

$$
b_f = y_p - [x_p \cdot a_f] = 2 - [4 \cdot 0.5774] \approx -0.3096
$$

$$
f(x) = a_fx + b_f = 0.5774x - 0.3096 \approx 0.58x - 0.31
$$

### Implementation

```
function find(alpha, [x,y]) {
  const fa = Math.tan(alpha / 180 * Math.PI);
  const fb = y - (x * fa);
  return x => fa * x + fb;
}

find(30, [4,2])
// x => 0.577350 * x - 0.309401
```

## By $\measuredangle$ angle $\beta$ towards Y-axis $\uArr$

$$
P = (x_p, y_p)
$$

$$
\implies
$$

$$
a_f = \tan (\alpha)
$$

$$
b_f = y_p - [x_p \cdot a_f]
$$

$$
\alpha = \beta - 90\degree
$$

$$
f(x) = a_fx + b_f
$$

### Example

$$
\beta = 30\degree = \frac{1}{6}\pi = 0.5236
\$$

$$
P = (2,1)
$$

$$
\implies
$$

$$
\alpha = \beta - 90\degree = \beta - \frac{1}{2}\pi = 0.5236 - \frac{1}{2}\pi \approx -1.0472
$$

$$
a_f = \tan \alpha = \tan -1.0472 \approx -1.7321
$$

$$
b_f = y_p - [x_p \cdot a_f] = 1 - [2 \cdot (-1.7321)] = 4.4642
$$

$$
f(x) = a_fx + b_f = -1.7321x + 4.4642 \approx -1.73x + 4.46
$$

### Implementation

```
function find(beta, [x,y]) {
  const alpha = (beta / 180 * Math.PI) - (0.5 * Math.PI);
  const fa = Math.tan(alpha);
  const fb = y - (x * fa);
  
  return x => fa * x + fb;
}

find(30, [2,1])
// x => -1.732051 * x + 4.464102
```

## By $\measuredangle$ angle $\gamma$ towards $f(x)$ function line

> Point $P$ may lay on $f(x)$, but it does not have to.

$$
f(x) = a_fx + b_f
$$

$$
P = (x_p, y_p)
$$

$$
\gamma \in \left< 0; 2\pi \right>
$$

$$
\implies
$$

$$
\alpha = \arctan a_f
$$

$$
\beta = \alpha - \gamma
$$

$$
a_g = \tan \beta
$$

$$
b_g = y_p - [x_p \cdot a_g]
$$

$$
g(x) = a_gx + b_g
$$

### Example

$$
f(x) = 2x + 1
$$

$$
P = (2,4)
$$

$$
\gamma = 30\degree = \frac{1}{6}\pi \approx 0.5236
$$

$$
\implies
$$

$$
\alpha = \arctan a_f = \arctan 2 \approx 1.1072
$$

$$
\beta= \alpha - \gamma = 0.5836
$$

$$
a_g = \tan \beta = \tan 0.5836 \approx 0.6603
$$

$$
b_g = y_p - [x_p \cdot a_g] = 4 - [2\cdot 0.6603] \approx 2.6794
$$

$$
g(x) = a_gx + b_g = 0.6603x + 2.6794 \approx 0.66x + 2.68
$$

### Implementation

```
function find([fa,fb], [x,y], gamma) {
  const alpha = Math.atan(fa);
  const beta = alpha - (gamma / 180 * Math.PI);
  
  const ga = Math.tan(beta);
  const gb = y - (x * ga);
  
  return x => ga * x + gb;
}

find([2,1], [2,4], 30)
// x => 0.660254 * x +  2.679492
```

## By distance $d$ from $f(x)$ parallel function line $\parallel$

$$
f(x) = a_fx + b_f
$$

$$
\implies
$$

$$
a_{f'} = \frac{-1}{a_f}
$$

$$
f'(x) = a_{f'}x + f(0)
$$

$$
\vec{x} = d \cdot \cos(\arctan(a_{f'}))
$$

$$
Q = (\vec{x}, f'(\vec{x}))
$$

$$
a_g = a_f
$$

$$
b_g = y_Q - [x_Q \cdot a_g]
$$

$$
g(x) = a_gx + b_g
$$

### Example

$$
f(x) = \frac{1}{4}x + 4
$$

$$
d = 2
$$

$$
\implies
$$

$$
a_{f'} = \frac{-1}{a_f} = \frac{-1}{0.25} = -4
$$

$$
f'(x) = a_{f'}x + f(0) = -4x + 4
$$

$$
\vec{x} = d \cdot \cos(\arctan(a_{f'})) = 2 \cdot \cos(\arctan(-4)) = 2 \cdot 0.2425 = 0.485
$$

$$
Q = (\vec{x}, f'(\vec{x})) = (0.485, 2.06)
$$

$$
a_g = a_f = \frac{1}{4}
$$

$$
b_g = y_Q - [x_Q \cdot a_g] = 2.06 - \left[0.485 \cdot \frac{1}{4}\right] = 1.93875
$$

$$
g(x) = a_gx + b_g = \frac{1}{4}x + 1.93875 \approx \frac{1}{4}x + 1.94
$$

### Implementation

```
function find([fa,fb], d) {
  const _fa = -1 / fa;
  const _f = x => _fa * x + fb;
  
  const xVector = d * Math.cos(Math.atan(_fa));
  const [qx,qy] = [xVector, _f(xVector)];
  const gb = qy - (qx * fa);
  
  return x => fa * x + gb;
}

find([0.25, 4], 2)
// x => 0.25 * x + 1.938447
```

## By length $\ell$ in range of size $d$ $\implies \left[x_n;x_{n+d}\right]$

> $\ell \geq d$  
> $\beta = -\beta$ if function values are to be decreasing

$$
P = (x_p, y_p)
$$

$$
\implies
$$

$$
\alpha = \arccos\left(\frac{d}{\ell}\right)
$$

$$
\beta = \alpha - \pi
$$

$$
a_f = \tan \beta
$$

$$
b_f = y_p - (x_p \cdot a_f)
$$

$$
f(x) = a_fx + b_f 
$$

### Example

$$
P = (4,3)
$$

$$
\ell = 6
$$

$$
d = 2
$$

$$
\implies
$$

$$
\alpha = \arccos\left(\frac{d}{\ell}\right) = \arccos \left( \frac{2}{6} \right) \approx 1.230959
$$

$$
\beta = \alpha - \pi \approx -1.910634
$$

$$
a_f = \tan \beta = 2.828420
$$

$$
b_f = y_p - (x_p \cdot a_f) = 3 - (4 \cdot 2.828420) = -8.31368
$$

$$
f(x) = a_fx + b_f = 2.828420x - 8.31368 \approx 2.83x - 8.31
$$

### Implementation

```
function find(length, xRange, [x,y]) {
  const alpha = Math.acos(xRange / length);
  const beta = alpha - Math.PI;

  const fa = Math.tan(beta);
  const fb = y - (x * fa);
  
  return x => fa * x + fb;
}

find(6, 2, [4,3])
// x => 2.828427 * x - 8.313708
```

## By distance $\vec{y}$ from parallel function $f(x)$

$$
f(x) = a_fx + b_f
$$

$$
\implies
$$

$$
b_g = b_f + \vec{y}
$$

$$
g(x) = a_fx + b_g
$$

### Examples

$$
f(x) = 2x - 2
$$

$$
\vec{y} = 4
$$

$$
\implies
$$

$$
b_g = b_f + \vec{y} = -2 + 4 = 2
$$

$$
g(x) =  a_fx + b_g = 2x + 2
$$

### Implementation

```
function find([fa,fb], dy) {
  const gb = fb + dy;
  return x => fa * x + gb;
}

find([2,-2], 4)
// x => 2 * x + 2
```

## By distance $\vec{x}$ from parallel function $f(x)$

$$
f(x) = a_fx + b_f
$$

$$
\implies
$$

$$
b_g = b_f + [f(0)- f(\vec{x})]
$$

$$
g(x) = a_fx + b_g
$$

### Examples

$$
f(x) = 2x - 2
$$

$$
\vec{x} = 4
$$

$$
\implies
$$

$$
b_g = b_f + [f(0)- f(\vec{x})] = -2 + [f(0) - f(4)] = -2 + [-2 - 6] = -2 - 8 = -10
$$

$$
g(x) = a_fx + b_g = 2x - 10
$$

### Implementation

```
function find([fa,fb], dx) {
  const f = x => fa * x + fb;
  const gb = fb + (f(0) - f(dx));
  return x => fa * x + gb;
}

find([2,-2], 4)
// x => 2 * x - 10
```

## By Circle Tangent

- circle: $(x-a)^2 + (y-b)^2 = r^2$
- point angle: $\alpha$

$$
\Delta = \frac{1}{2}\pi - 2\pi \cdot \left( \frac{\alpha}{360} \right)
$$

$$
x = r \cdot \cos(\Delta) + a
$$

$$
y = r \cdot \sin(\Delta) + b
$$

$$
a' = \frac{y-b}{x-a}
$$

$$
A = \frac{-1}{a'}
$$

$$
B = y - xA
$$

$$
f(x) = Ax + B
$$

### Example

$$
(x-6)^2 + (y-6)^2 = 3^2
$$

$$
\alpha = 45\degree
$$

$$
\implies
$$

$$
\Delta = \frac{1}{2}\pi - 2\pi \cdot \left( \frac{45}{360} \right) = \frac{1}{2}\pi - \frac{1}{4}\pi \approx 0.7854
$$

$$
x = r \cdot \cos(\Delta) + a = 3 \cdot 0.7071 + 6 = 8.1213
$$

$$
y = r \cdot \sin(\Delta) + b = 3 \cdot 0.7071 + 6 = 8.1213
$$

$$
a' = \frac{y-b}{x-a} = \frac{8.1213-6}{8.1213-6} = 1
$$

$$
A = \frac{-1}{a'} = \frac{-1}{1} = -1
$$

$$
B = y - xA = 8.1213 - (8.1213 \cdot -1) = 16.2426
$$

$$
f(x) = Ax + B = -x + 16.2426
$$

### Implementation

```
function find([a,b,r], alpha) {
  const delta = 0.5*Math.PI - 2*Math.PI*(alpha/360);
  const x = r * Math.cos(delta) + a;
  const y = r * Math.sin(delta) + b;

  const _a = (y-b) / (x-a);

  const A = (-1) / _a;
  const B = y - (x * A);
  return _x => A * _x + B;
}

find([6,6,3], 45)
// x => -1 * x + 16.242641
```

## By Circle Chord

- circle: $(x-a)^2 + (y-b)^2 = r^2$
- point 1 angle: $\alpha$
- point 2 angle: $\beta$

$$
\Delta(\gamma) = \frac{1}{2}\pi - 2\pi \cdot \left( \frac{\gamma}{360} \right)
$$

$$
\Delta_1 = \Delta(\alpha)
$$

$$
\Delta_2 = \Delta(\beta)
$$

$$
x_1 = r \cdot \cos(\Delta_1) + a
$$

$$
y_1 = r \cdot \sin(\Delta_1) + b
$$

$$
x_2 = r \cdot \cos(\Delta_2) + a
$$

$$
y_2 = r \cdot \sin(\Delta_2) + b
$$

$$
A = \frac{y_2-y_1}{x_2-x_1}
$$

$$
B = \frac{x_2y_1 - x_1y_2}{x_2-x_1}
$$

$$
f(x) = Ax + B
$$

### Example

$$
(x-6)^2 + (y-6)^2 = 3^2
$$

$$
\alpha = -45\degree
$$

$$
\beta = 30\degree
$$

$$
\implies
$$

$$
\Delta(\gamma) = \frac{1}{2}\pi - 2\pi \cdot \left( \frac{\gamma}{360} \right)
$$

$$
\Delta_1 = \Delta(\alpha) \approx 2.3562
$$

$$
\Delta_2 = \Delta(\beta) \approx 1.0472
$$

$$
x_1 = r \cdot \cos(\Delta_1) + a = 3 \cdot (-0.7071) + 6 = 3.8787
$$

$$
y_1 = r \cdot \sin(\Delta_1) + b = 3 \cdot 0.7071 + 6 = 8.1213
$$

$$
x_2 = r \cdot \cos(\Delta_2) + a = 3 \cdot 0.4999 + 6 = 7.5
$$

$$
y_2 = r \cdot \sin(\Delta_2) + b = 3 \cdot 0.9645 + 6 = 8.5981
$$

$$
A = \frac{y_2-y_1}{x_2-x_1} = \frac{8.5981 - 8.1213}{7.5 - 3.8787} = \frac{0.4768}{3.6213} = 0.1317
$$

$$
B = \frac{x_2y_1 - x_1y_2}{x_2-x_1} = \frac{(7.5\cdot8.1213)-(3.8787\cdot8.5981)}{7.5-3.8787} = \frac{60.9098 - 33.3495}{3.6213} = \frac{27.5603}{3.6213} = 7.6106
$$

$$
f(x) = Ax + B = 0.1317 \cdot x + 7.6106
$$

### Implementation

```
function find([a,b,r], alpha, beta) {
  const delta = angle => 0.5*Math.PI - 2*Math.PI*(angle/360);

  const delta1 = delta(alpha);
  const delta2 = delta(beta);

  const x1 = r * Math.cos(delta1) + a;
  const y1 = r * Math.sin(delta1) + b;

  const x2 = r * Math.cos(delta2) + a;
  const y2 = r * Math.sin(delta2) + b;

  const A = (y2-y1) / (x2-x1);
  const B = (x2*y1 - x1*y2) / (x2-x1);
  return _x => A * _x + B;
}

find([6,6,3], -45, 30)
// x => 0.131653 *x +  7.610683
```

## By Chord Length

- circle: $(x-a)^2 + (y-b)^2 = r^2$
- angular point: $\sigma$
- chord length: $\ell$
- clockwise direction: $c$

### Getting Point $P$ on Circle

$$
\Delta = \frac{1}{2}\pi - 2\pi \cdot \left( \frac{\sigma}{360} \right)
$$

$$
x = r \cdot \cos(\Delta) + a
$$

$$
y = r \cdot \sin(\Delta) + b
$$

### Line $f(x)$ Going Through $P$ and $(a,b)$

$$
a = \frac{b-P_y}{a-P_x}
$$

$$
b = \frac{a \cdot P_y - P_x \cdot b}{a - P_x}
$$

$$
f(x) = ax + b
$$

### Getting Angle $\alpha$ Subtended by Chord

$$
\alpha = 2 \cdot \arcsin\left( \frac{\ell}{2r} \right)
$$

### Getting $g(x)$ Line Being $f(x)$ Rotated by $\alpha$ at $(a,b)$

$$
\beta = \arctan(a_f)
$$

$$
\gamma =
\begin{cases}
\alpha \iff c = 0
\\
\pi - \alpha \iff c = 1
\end{cases}
$$

$$
\theta = \beta + \gamma
$$

$$
a' = \tan(\theta)
$$

$$
b' = f(c_x) - (c_x \cdot a')
$$

$$
g(x) = a' \cdot x + b'
$$

### Getting Point $Q$ on Other End of Chord

$$
\vec{x} = \frac{r}{\sqrt{1+(a_g)^2}}
$$

$$
\eta =
\begin{cases}
-1 \iff c = 0
\\
1 \iff c = 1
\end{cases}
$$

$$
x' = c_x + \vec{x} \cdot \eta
$$

$$
y' = g(x')
$$

$$
Q = (x', y')
$$

### Line $h(x)$ Going Through Points $P$ and $Q$

$$
x_1 = P_x
$$

$$
y_1 = P_y
$$

$$
x_2 = Q_x
$$

$$
y_2 = Q_y
$$

$$
a = \frac{y_2 - y_1}{x_2 - x_1} = \frac{Q_y - P_y}{Q_x - P_x}
$$

$$
b = \frac{x_2y_1 - x_1y_2}{x_2-x_1} = \frac{Q_xP_y - P_xQ_y}{Q_x - P_x}
$$

$$
h(x) = ax + b
$$

### Example

- circle: $(x-6)^2 + (y-6)^2 = 3^2$
- angular point: $\sigma = -45\degree$
- chord length: $\ell = 4$
- clockwise direction: $c = 1$

> Getting Point $P$ on Circle

$$
\Delta = \frac{1}{2}\pi - 2\pi \cdot \left( \frac{\sigma}{360} \right) = \frac{1}{2}\pi - 2\pi \cdot \left( \frac{-45}{360} \right) = 2.356195
$$

$$
x = r \cdot \cos(\Delta) + a = 3 \cdot \cos(2.356195) + 6 = 3.878679
$$

$$
y = r \cdot \sin(\Delta) + b = 3 \cdot \sin(2.356195) + 6 = 8.121319
$$

> Line $f(x)$ Going Through $P$ and $(a,b)$

$$
a = \frac{b-P_y}{a-P_x} = \frac{6-8.121319}{6-3.878679} \approx -1
$$

$$
b = \frac{a \cdot P_y - P_x \cdot b}{a - P_x} = \frac{6 \cdot 8.121319 - 3.878679 \cdot 6}{6-3.878679} \approx 12
$$

$$
f(x) = ax + b = -x + 12
$$

> Getting Angle $\alpha$ Subtended by Chord

$$
\alpha = 2 \cdot \arcsin\left( \frac{\ell}{2r} \right) = 2 \cdot \arcsin\left( \frac{4}{6} \right) = 1.459455
$$

> Getting $g(x)$ Line Being $f(x)$ Rotated by $\alpha$ at $(a,b)$

$$
\beta = \arctan(a_f) = \arctan(-1) = -0.785398
$$

$$
(c = 1) \implies \gamma = \pi - \alpha = 1.682138
$$

$$
\theta = \beta + \gamma = -0.785398 + 1.682138 = 0.896739
$$

$$
a' = \tan(\theta) = \tan(0.896739) = 1.251753
$$

$$
b' = f(c_x) - (c_x \cdot a') = f(6) - (6 \cdot 1.251753) = 6 - 7.510518 = -1.510518
$$

$$
g(x) = a' \cdot x + b' = 1.251753x - 1.510518 
$$

> Getting Point $Q$ on Other End of Chord

$$
\vec{x} = \frac{r}{\sqrt{1+(a_g)^2}} = \frac{3}{\sqrt{1+1.251753^2}} = 1.872484
$$

$$
(c = 1) \implies \eta = 1
$$

$$
x' = c_x + \vec{x} \cdot \eta = 6 + 1.872484 \cdot 1 = 7.872484
$$

$$
y' = g(x') = g(7.872484) = 8.343888
$$

$$
Q = (x', y') = (7.872484, 8.343888)
$$

> Line $h(x)$ Going Through Points $P$ and $Q$

$$
x_1 = P_x = 3.878679
$$

$$
y_1 = P_y = 8.121319
$$

$$
x_2 = Q_x = 7.872484
$$

$$
y_2 = Q_y = 8.343888
$$

$$
a = \frac{Q_y - P_y}{Q_x - P_x} = 0.055729
$$

$$
b = \frac{Q_xP_y - P_xQ_y}{Q_x - P_x} = 7.905166
$$

$$
h(x) = ax + b = 0.055729x + 7.905166
$$

### Implementation

```
function find([a,b,r], aPoint, chordLen, cw = true) {
  const delta = 0.5*Math.PI - 2*Math.PI*(aPoint/360);
  const P = {
    x: r * Math.cos(delta) + a,
    y: r * Math.sin(delta) + b
  };

  const a_f = (b-P.y) / (a-P.x);
  const b_f = (a*P.y-P.x*b) / (a-P.x);
  const f = x => a_f * x + b_f;

  const alpha = 2 * Math.asin(chordLen / (2*r));
  const beta = Math.atan(a_f);
  const gamma = cw ? (Math.PI-alpha) : alpha;
  const theta = beta + gamma;

  const a_g = Math.tan(theta);
  const b_g = f(a) - (a*a_g);
  const g = x => a_g * x + b_g;

  const vecX = r/Math.sqrt(1+a_g**2);
  const _x = a + vecX * (cw ? 1 : -1);
  const _y = g(_x);
  const Q = {
    x: _x,
    y: _y
  };

  const a_h = (Q.y-P.y) / (Q.x-P.x);
  const b_h = (Q.x*P.y - P.x*Q.y) / (Q.x-P.x);
  return x => a_h * x + b_h;
}

find([6,6,3], -45, 4)
// x => 0.055728 * x + 7.905169

find([6,6,3], -45, 4, false)
// x => 17.944272 * x - 61.478762
```

## By Arc Length

Like in **By Chord Length** with one exception - getting angle $\alpha$ subtended by arc:

$$
\alpha = \frac{\ell}{r}
$$

> here $\ell$ is length of arc

## By Parabola $f(x)$ Tangent at $x$

$$
f(x) = ax^2 + bx + c
$$

$$
P = (x, f(x))
$$

$$
\implies
$$

$$
m = b + (P_x \cdot 2a)
$$

$$
i = P_y - (P_x \cdot m)
$$

$$
g(x) = mx + i
$$

### Example

$$
f(x) = 2x^2 + 3x - 4
$$

$$
P = (-1.5, f(-1.5)) = (-1.5, -4)
$$

$$
\implies
$$

$$
m = b + (P_x \cdot 2a) = 3 + (-1.5 \cdot 4) = 3 - 6 = -3
$$

$$
i = P_y - (P_x \cdot m) = -4 - (-1.5 \cdot -3) = -4 - 4.5 = -8.5
$$

$$
g(x) = mx + i = -3x - 8.5
$$

### Implementation

```
function find([a,b,c], x) {
  const P = {
    x,
    y: a*x**2 + b*x + c
  };

  const m = b + (P.x * 2*a);
  const i = P.y - (P.x * m);
  return _x => m * _x + i;
}

find([2,3,-4], -1.5)
// x => -3 *x - 8.5
```

## By Parabola $f(x)$ Intersection at $x_1$ and $x_2$

$$
f(x) = ax^2 + bx + c
$$

$$
P = (x_1, f(x_1))
$$

$$
Q = (x_2, f(x_2))
$$

$$
\implies
$$

$$
m = \frac{Q_y-P_y}{Q_x-P_x}
$$

$$
i = \frac{Q_xP_y - P_xQ_y}{Q_x-P_x}
$$

$$
g(x) = mx + i
$$

### Example

$$
f(x) = 2x^2 + 3x - 4
$$

$$
P = (-3, f(-3)) = (-3, 5)
$$

$$
Q = (1, f(1)) = (1, 1)
$$

$$
\implies
$$

$$
m = \frac{Q_y-P_y}{Q_x-P_x} = \frac{1-5}{1+3} = \frac{-4}{4} = -1
$$

$$
i = \frac{Q_xP_y - P_xQ_y}{Q_x-P_x} = \frac{1\cdot5 - (-3)\cdot1}{1+3} = \frac{5+3}{4} = \frac{8}{4} = 2
$$

$$
g(x) = mx + i = -x + 2
$$

### Implementation

```
function find([a,b,c], x1, x2) {
  const f = x => a*x**2 + b*x + c;
  const P = {
    x: x1,
    y: f(x1)
  };
  const Q = {
    x: x2,
    y: f(x2)
  };

  const m = (Q.y-P.y) / (Q.x-P.x);
  const i = (Q.x*P.y - P.x*Q.y) / (Q.x - P.x);
  return x => m * x + i;
}

find([2,3,-4], -3, 1)
// x => -x + 2
```

## By Circumference $\ell$ of Triangle Rendered with Lines $f(x)$ and $g(x)$

### Line Location (1 of 4)

$$
\vec{p} = 1 \ \cup\ -1
$$

$$
\vec{q} = 1 \ \cup\ -1
$$

### Given Functions $f(x)$ and $g(x)$

$$
f(x) = ax + b
$$

$$
g(x) = cx + d
$$

### Lines $f(x)$ and $g(x)$ Intersection

$$
I_x = \left( \frac{d-b}{a-c} \right)
$$

$$
I = (I_x, f(I_x))
$$

### Init Rays

#### Lengths

$$
\theta_f = \frac{1}{\sqrt{1 + a^2}}
$$

$$
\theta_g = \frac{1}{\sqrt{1 + c^2}}
$$

#### Rays Ends

$$
P_x = I_x + \theta_f \cdot \vec{p}
$$

$$
P = (P_x, f(P_x))
$$

$$
Q_x = I_x + \theta_g \cdot \vec{q}
$$

$$
Q = (Q_x, g(Q_x))
$$

### Enlonged Rays

#### Existing Lengths

$$
|IP| = \sqrt{(P_x-I_x)^2 + (P_y-I_y)^2}
$$

$$
|IQ| = \sqrt{(Q_x-I_x)^2 + (Q_y - I_y)^2}
$$

$$
|PQ| = \sqrt{(Q_x-P_x)^2 + (Q_y-P_y)^2}
$$

#### Lacking Length of Rays

$$
s = |IP| + |IQ| + |PQ|
$$

$$
\ell' = \ell - s
$$

$$
R = \frac{s}{|IP| + |IQ|}
$$

$$
\vec{R} = \frac{\ell'}{R}
$$

$$
\vec{r} = \frac{\vec{R}}{2}
$$

#### Rays New Ends

$$
P'_x = P_x + \vec{p} \cdot \frac{\vec{r}}{\sqrt{1+a^2}}
$$

$$
P' = (P'_x, f(P'_x))
$$

$$
Q'_x = Q_x + \vec{q} \cdot \frac{\vec{r}}{\sqrt{1+c^2}}
$$

$$
Q' = (Q'_x, g(Q'_x))
$$

### Final Function

$$
a_h = \frac{Q'_y - P'_y}{Q'_x - P'_x}
$$

$$
b_h = \frac{Q'_xP'_y - P'_xQ'_y}{Q'x - P'_x}
$$

$$
h(x) = a_hx + b_h
$$

### Implementation

```
function find([a,b], [c,d], l, [p,q]) {
  // JS and its precision
  const _t = x => +x.toFixed(4);
  
  const f = x => a*x + b;
  const g = x => c*x + d;

  const intersectionX = (d-b)/(a-c);
  const intersectionY = f(intersectionX);
  const I = {x: intersectionX, y: intersectionY};

  const df = _t(1/Math.sqrt(1 + a**2));
  const dg = _t(1/Math.sqrt(1 + c**2));

  const Px = I.x + df * p;
  const P = {x: Px, y: f(Px)};

  const Qx = I.x + dg * q;
  const Q = {x: Qx, y: g(Qx)};

  const _IP_ = Math.sqrt((P.x-I.x)**2 + (P.y-I.y)**2);
  const _IQ_ = Math.sqrt((Q.x-I.x)**2 + (Q.y-I.y)**2);
  const _PQ_ = Math.sqrt((Q.x-P.x)**2 + (Q.y-P.y)**2);

  const s = _IP_ + _IQ_ + _PQ_;
  const _l = l - _t(s);

  const _rays = s/(_IP_ + _IQ_);
  const raysAVec = _l / _rays;
  const rayAVec = _t(raysAVec / 2);

  const nPx = P.x + p * _t(rayAVec/Math.sqrt(1+a**2));
  const nPy = f(nPx);
  const nP = {x:nPx, y:nPy};

  const nQx = Q.x + q * _t(rayAVec/Math.sqrt(1+c**2));
  const nQy = g(nQx);
  const nQ = {x:nQx, y:nQy};

  const ha = (nQ.y - nP.y) / (nQ.x - nP.x);
  const hb = (nQ.x*nP.y - nP.x*nQ.y) / (nQ.x - nP.x);
  return x => ha * x + hb;
}

find(
  [-0.5, 3],
  [4, -2],
  12,
  [1, -1]
)
// x => 0.459927 * x - 1.235305
```