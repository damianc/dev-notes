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