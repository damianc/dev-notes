# Intersection Points of 2 Parabolas

For two functions:

- $f(x) = ax^2+bx+c$
- $g(x) = dx^2+ex+f$

There's third function whose zero-points are equal to x-coordinates of intersection points $f(x)$ with $g(x)$:

- $h(x) = (a-d)x^2+(b-e)x+(c-f)$

Therefore points of intersection can be calculated:

$$
\begin{cases}
A = a-d
\\
B = b-e
\\
C = c-f
\\\ \\
\Delta = (b-e)^2 - 4(a-d)(c-f)
\end{cases}
$$

If only $\Delta \geqslant 0$:

$$
\begin{array}{c|l}
\Delta = 0 & x_0 = \frac{-B}{2A}
\\
\hline
\Delta \gt 0 & x_1 = \frac{-B-\sqrt{\Delta}}{2A}
\\
& x_2 = \frac{-B+\sqrt{\Delta}}{2A}
\end{array}
$$
