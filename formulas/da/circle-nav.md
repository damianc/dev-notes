# Point on a Circle

## Point by Angle

A circle $r$ in radius and with center at $(a,b)$:

$$
\begin{array}{l}
 x_p = r \cdot \cos(\alpha) + a
 \\
 y_p = r \cdot \sin(\alpha) + b
\end{array}
$$

### Direction and Origin

| | counter-clockwise | clockwise |
|--|--|--|
| right | $\alpha$ (default) | $2\pi-\alpha$ |
| top | $\alpha+\frac{1}{2}\pi$ | $\frac{1}{2}\pi-\alpha$ |
| left | $\alpha-\pi$ | $\pi-\alpha$ |
| bottom | $\alpha-\frac{1}{2}\pi$ | $1.5\pi-\alpha$ |

### Distribute Items Equally on a Circle

When $s$ items are to be distributed and each is $\overline{w}$ in width and $\overline{h}$ in height:

$$
\begin{array}{l}
\Delta_i = \frac{2\pi(i-1)}{s}
\\
\displaystyle\sum_{i=1}^s \begin{cases}
 x_i = r \cdot \cos(\Delta_i) + a - \frac{1}{2}\overline{w}
 \\
 y_i = r \cdot \sin(\Delta_i) + b - \frac{1}{2}\overline{h}
\end{cases}
\end{array}
$$

## Angle by Point

$$
\begin{array}{l}
\phi_x = \arccos\left(\frac{x_p-a}{r}\right)
\\
\phi_y = \arcsin\left(\frac{y_p-b}{r}\right)
\\
\alpha = \left\\{\begin{array}{ll}
 \phi_x & \iff \phi_y \geqslant 0
 \\
 2\pi-\phi_x & \iff \phi_y \lt 0
\end{array}\right.
\end{array}
$$

## Getting a Circle's Center

$$
\begin{array}{l}
 a = x_p - r \cdot \cos(\alpha)
 \\
 b = y_p - r \cdot \sin(\alpha)
\end{array}
$$

## Getting a Circle's Radius

$$
r = \left\|\frac{x_p-a}{\cos(\alpha)}\right\| = \left\|\frac{y_p-b}{\sin(\alpha)}\right\|
$$
