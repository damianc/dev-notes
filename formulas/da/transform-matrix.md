# Transform Matrix

$$
\begin{bmatrix}
sx && rx && tx
\\
ry && sy && ty
\\
0 && 0 && 1
\end{bmatrix}
\times
\begin{bmatrix}
x
\\
y
\\
1
\end{bmatrix}=
\begin{bmatrix}
x \cdot sx + y \cdot rx + tx
\\
x \cdot ry + y \cdot sy + ty
\\
1
\end{bmatrix}
$$

> In short, new coordinates are calculated as follows:  
> $x' = x \cdot sx + y \cdot rx + tx$  
> $y' = x \cdot ry + y \cdot sy + ty$

## Example

- translation $\vec{[2,4]}$
- point $(10,10)$

$$
\begin{bmatrix}
1 && 0 && 2
\\
0 && 1 && 4
\\
0 && 0 && 1
\end{bmatrix}
\times
\begin{bmatrix}
10
\\
10
\\
1
\end{bmatrix}=
\begin{bmatrix}
1 \cdot 10 + 0 \cdot 10 + 2 \cdot 1
\\
0 \cdot 10 + 1 \cdot 10 + 4 \cdot 1
\\
0 \cdot 10 + 0 \cdot 10 + 1 \cdot 1
\end{bmatrix}=
\begin{bmatrix}
12
\\
14
\\
1
\end{bmatrix}
$$
