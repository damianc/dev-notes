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
>   
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

## Transformation Matrixes

- translation by $\vec{[tx,ty]}$

$$
\begin{bmatrix}
1 && 0 && tx
\\
0 && 1 && ty
\\
0 && 0 && 1
\end{bmatrix}
$$

- scale by $[sx,sy]$

$$
\begin{bmatrix}
sx&&0&&0
\\
0&&sy&&0
\\
0&&0&&1
\end{bmatrix}
$$

- rotation by $\alpha$ at $(0,0)$

$$
\begin{bmatrix}
\cos(\alpha)&&-\sin(\alpha)&&0
\\
\sin(\alpha)&&\cos(\alpha)&&0
\\
0&&0&&1
\end{bmatrix}
$$

- rotation by $\alpha$ at $(x,y)$

$$
\begin{bmatrix}
\cos(\alpha)&&-\sin(\alpha)&&x(1-\cos(\alpha))+y\cdot\sin(\alpha)
\\
\sin(\alpha)&&\cos(\alpha)&&y(1-\cos(\alpha))-x\cdot\sin(\alpha)
\\
0&&0&&1
\end{bmatrix}
$$

- homothety/similarity (scale by point) by $[sx,sy]$ at $(x,y)$

$$
\begin{bmatrix}
sx&&0&&x(1-sx)
\\
0&&sy&&y(1-sy)
\\
0&&0&&1
\end{bmatrix}
$$

- skew-x by $\alpha$

$$
\begin{bmatrix}
1&&\tan(\alpha)&&0
\\
0&&1&&0
\\
0&&0&&1
\end{bmatrix}
$$

- skew-y by $\beta$

$$
\begin{bmatrix}
1&&0&&0
\\
\tan(\beta)&&1&&0
\\
0&&0&&1
\end{bmatrix}
$$

- skew-xy by $\alpha$ and $\beta$

$$
\begin{bmatrix}
1&&\tan(\beta)&&0
\\
\tan(\alpha)&&1&&0
\\
0&&0&&1
\end{bmatrix}
$$
 
