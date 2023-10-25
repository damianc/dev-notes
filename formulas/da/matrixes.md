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
