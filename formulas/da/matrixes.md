# Matrixes

$$
A = \begin{bmatrix}
a_{11} && a_{12} && \cdots && a_{1j} && \cdots && a_{1n} \\
a_{21} && a_{22} && \cdots && a_{2j} && \cdots && a_{2n} \\
\vdots && \vdots && \ddots && \vdots && \ddots && \vdots \\
a_{i1} && a_{i2} && \cdots && a_{ij} && \cdots && a_{in} \\
\vdots && \vdots && \ddots && \vdots && \ddots && \vdots \\
a_{m1} && a_{m2} && \cdots && a_{mj} && \cdots && a_{mn} 
\end{bmatrix}
$$

- **square matrix**: $m = n$, i.e., a number of rows equals a number of columns
- **identity matrix**: a square matrix in which:

$$
a_{ij} = \begin{cases}
1 \iff i = j
\\
0 \iff i \neq j
\end{cases}
$$

> in other words, this is the n×n square matrix with ones on the main diagonal and zeros elsewhere

$$
\begin{bmatrix}
1 && 0 && 0
\\
0 && 1 && 0
\\
0 && 0 && 1
\end{bmatrix}
$$

## Addition and subtraction

||
|-|
| $$[a_{ij}]\_{mn} \pm [b_{ij}]\_{mn} = [c_{ij}]\_{mn}$$ |
| $$c_{ij} = a_{ij} \pm b_{ij}$$ |

$$
\begin{bmatrix}
1 && -2 && 0 \\
3 && 4 && -1
\end{bmatrix}
+
\begin{bmatrix}
2 && 1 && -3 \\
0 && -2 && 5
\end{bmatrix} =
$$

$$
\begin{bmatrix}
3 && -1 && -3
\\
3 && 2 && 4
\end{bmatrix}
$$

$$
\begin{bmatrix}
1 && -2 && 0 \\
3 && 4 && -1
\end{bmatrix}-
\begin{bmatrix}
2 && 1 && -3
\\
0 && -2 && 5
\end{bmatrix} =
$$

$$
\begin{bmatrix}
-1 && -3 && 3
\\
3 && 6 && -6
\end{bmatrix}
$$

## Multiplication by a number

||
|-|
| $$\alpha \cdot [a_{ij}]\_{mn} = [b_{ij}]\_{mn}$$ |
| $$b_{ij} = \alpha \cdot a_{ij}; \alpha \in \mathbb{R}$$ |

$$
2 \cdot
\begin{bmatrix}
1 && -2 && 0
\\
3 && 4 && -1
\end{bmatrix} =
\begin{bmatrix}
2 && -4 && 0
\\
6 && 8 && -2
\end{bmatrix}
$$

## Multiplication by another matrix

||
|--|
| $$[a_{ij}]\_{mn} \cdot [b_{ij}]\_{np} = [c_{ij}]\_{mp}$$ |
| $$c_{ij} = \sum_{k=1}^{n} a_{ik}b_{kj}$$ |

$$
\begin{bmatrix}
1 && -2 && 0
\\
3 && 4 && -1
\end{bmatrix}
\cdot
\begin{bmatrix}
-1 && 0
\\
0 && 3
\\
2 && -4
\end{bmatrix}
\=
$$

$$
\begin{bmatrix}
1 \cdot (-1) - 2 \cdot 0 + 0 \cdot 2
&&
1 \cdot 0 - 2 \cdot 3 + 0 \cdot (-4)
\\
3 \cdot (-1) + 4 \cdot 0 - 1 \cdot 2
&&
3 \cdot 0 + 4 \cdot 3 - 1 \cdot (-4)
\end{bmatrix}
\=
$$

$$
\begin{bmatrix}
-1 && -6
\\
-5 && 16
\end{bmatrix}
$$

## Determinant

* matrix $1 \times 1$:

$$
\det
\begin{bmatrix}
a
\end{bmatrix} =
a
$$

* matrix $2 \times 2$:

$$
\det
\begin{bmatrix}
a && b
\\
c && d
\end{bmatrix} =
ad-bc
$$

* matrix $3 \times 3$ (Sarrus's expansion):

$$
\det
\begin{bmatrix}
a && b && c
\\
d && e && f
\\
g && h && i
\end{bmatrix} =
aei+bfg+cdh-ceg-bdi-afh
$$

----

**Sarrus's method/rule:**

$$
A = \begin{bmatrix}
a_{11} && a_{12} && a_{13}
\\
a_{21} && a_{22} && a_{23}
\\
a_{31} && a_{32} && a_{33}
\end{bmatrix}
$$

$$
\det A =
a_{11}a_{22}a_{33} +
a_{12}a_{23}a_{31} +
a_{13}a_{21}a_{32} -
a_{13}a_{22}a_{31} -
a_{11}a_{23}a_{32} -
a_{12}a_{21}a_{33}
$$

$$
\det A = \left(
\sum_{i=1}^n \prod_{j=1}^n
a_{[j][\alpha(i+j-1)]}
\right) +
\sum_{i=1}^n - \left(
\prod_{j=1}^n a_{[j][\alpha(
2n-(i+j-1)
)]}
\right)
$$

$$
\iff
$$

$$
\alpha(x) = \begin{cases}
x = 3 \implies 3
\\
x \neq 3 \implies x \\% 3
\end{cases}
$$

----

* matrix $n \times n$ (Laplace's expansion):

$$
A = \begin{bmatrix}
a && b && c && d
\\
e && f && g && h
\\
i && j && k && l
\\
m && n && o && p
\end{bmatrix}
$$

$$
\det A = a \cdot M_{11} - b \cdot M_{12} + c \cdot M_{13} - d \cdot M_{14}
$$

----

**Laplace's expansion:**

$$
\det A = \sum_{i=1}^n (
a_{1i} \cdot M_{1i}
) \cdot (-1)^{i+1}
$$

> **M** stands for a *minor* of the matrix

----

## Transpose Matrix

$$
A = [a_{ij}]\_{nn} \mapsto
A^T = [a_{ji}]\_{nn}
$$

----

$$
A = \begin{bmatrix}
1 && 0 && 2
\\
3 && -1 && 5
\\
-2 && 4 && 0
\end{bmatrix}
$$

$$
A^T = \begin{bmatrix}
1 && 3 && -2
\\
0 && -1 && 4
\\
2 && 5 && 0
\end{bmatrix}
$$

## Cofactor Matrix

$$
A = [a_{ij}]\_{nn} \mapsto
A_d = [d_{ij}]\_{nn}
$$

$$
\iff
$$

$$
d_{ij} = (-1)^{i+j} \det A_{ij}
$$

----

$$
A = \begin{bmatrix}
1 && 0 && 2
\\
3 && -1 && 5
\\
-2 && 4 && -3
\end{bmatrix}
$$

$$
d_{11} = (-1)^{1+1}
\begin{bmatrix}
-1 && 5
\\
4 && -3
\end{bmatrix} = -17
$$

$$
\vdots
$$

$$
d_{33} = (-1)^{3+3}
\begin{bmatrix}
1 && 0
\\
3 && -1
\end{bmatrix} = -1
$$

$$
A_d = \begin{bmatrix}
-17 && -1 && 10
\\
8 && 1 && -4
\\
2 && 1 && -1
\end{bmatrix}
$$

## Inverse Matrix

$$
A = [a_{ij}]_{nn} \mapsto
A^{-1} = \frac{1}{\det A} A_d^T
$$

$$
\iff
$$

$$
\det A \neq 0
$$

----

$$
\det A = 3
$$

$$
A^{-1} = \frac{1}{3}
\begin{bmatrix}
-17 && 8 && 2
\\
-1 && 1 && 1
\\
10 && -4 && -1
\end{bmatrix} =
\begin{bmatrix}
\frac{-17}{3} && \frac{8}{3} && \frac{2}{3}
\\
\frac{-1}{3} && \frac{1}{3} && \frac{1}{3}
\\
\frac{10}{3} && \frac{-4}{3} && \frac{-1}{3}
\end{bmatrix}
$$
