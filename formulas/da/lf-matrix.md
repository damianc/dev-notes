# Linear Function as Matrix

Linear function $f(x) = ax + b$ may be represented by matrix:

$$
F = \begin{bmatrix}
a && b
\\
0 && 1
\end{bmatrix}
$$

## Function Composition

If function $f(x)=ax+b$ is represented by matrix $F$, and function $g(x)=cx+d$ is represented by matrix $G$, then $F \cdot G = f \circ g$.

$$
\begin{bmatrix}
a && b
\\
0 && 1
\end{bmatrix}
\cdot
\begin{bmatrix}
c && d
\\
0 && 1
\end{bmatrix}=
\begin{bmatrix}
ac && ad+b
\\
0 && 1
\end{bmatrix}
$$

$$
(f: x \mapsto ax+b)
\circ
(g: x \mapsto cx+d)
$$

$$=$$

$$
(x \mapsto (ac)x+ad+b)
$$

## Altering Matrix

$$
f(x) = ax+b
$$

$$
(f \mapsto F)^T \mapsto f
\implies f(x) = ax
$$

$$
(f \mapsto F)_d \mapsto f
\implies f(x) = x
$$

$$
(f \mapsto F)^{-1} \mapsto f
\implies f(x) = \frac{1}{a}x+\frac{b}{a} = \frac{x+b}{a}
$$

$$
[\det (f \mapsto F)] \mapsto f
\implies f(x) = a
$$
