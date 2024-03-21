# MathJax Matrixes

- [Basic Matrix](#basic-matrix)
- [Types of Matrixes](#types-of-matrixes)
- [Horizontal Lines](#horizontal-lines)
- [Matrix with Dots](#matrix-with-dots)
- [Nested Matrixes](#nested-matrixes)
- [Labelled Matrix](#labelled-matrix)
- [Simulating Graphs](#simulating-graphs)

## Basic Matrix

$$
\begin{matrix}
a & b
\\
c & d
\end{matrix}
$$

```
$$
\begin{matrix}
  a & b
  \\
  c & d
\end{matrix}
$$
```

$$
\det
\begin{bmatrix}
a & b
\\
c & d
\end{bmatrix}
= ad-bc
$$

```
$$
\det
\begin{bmatrix}
  a & b
  \\
  c & d
\end{bmatrix}
= ad-bc
$$
```

## Types of Matrixes

| Type | Surrounding |
|--|--|
|`matrix`| |
|`pmatrix`|`(` with `)`|
|`bmatrix`|`[` with `]`|
|`Bmatrix`|`{` with `}`|
|`vmatrix`|`\|` with `\|`|
| `Vmatrix` | `\|\|` with `\|\|` |

### Custom Surrounding

$$
\left\langle
\begin{matrix}
a & b
\\
c & d
\end{matrix}
\right\rangle
$$

```
$$
\left\langle
  \begin{matrix}
    a & b
    \\
    c & d
  \end{matrix}
\right\rangle
$$
```

## Horizontal Lines

$$
\begin{matrix}
& 12
\\
\+ & 10
\\
\hline
& 22
\end{matrix}
$$

```
$$
\begin{matrix}
  & 12
  \\
  \+ & 10
  \\
  \hline
  & 22
\end{matrix}
$$
```

## Matrix with Dots

$$
\begin{bmatrix}
1_1 & \cdots & 1_n
\\
\vdots & \ddots & \vdots
\\
n_1 & \cdots & n_n
\end{bmatrix}
$$

```

$$
\begin{bmatrix}
  1_1 & \cdots & 1_n
  \\
  \vdots & \ddots & \vdots
  \\
  n_1 & \cdots & n_n
\end{bmatrix}
$$
```

## Nested Matrixes

$$
\begin{vmatrix}
\begin{bmatrix}
a_1 & a_2
\\
a_3 & a_4
\end{bmatrix}
&
\begin{bmatrix}
b_1 & b_2
\\
b_3 & c_4
\end{bmatrix}
\\
\begin{bmatrix}
c_1 & c_2
\\
c_3 & c_4
\end{bmatrix}
&
\begin{bmatrix}
d_1 & d_2
\\
d_3 & d_4
\end{bmatrix}
\end{vmatrix}
$$

```
$$
\begin{vmatrix}
  \begin{bmatrix}
    a_1 & a_2
    \\
    a_3 & a_4
  \end{bmatrix}
  &
  \begin{bmatrix}
    b_1 & b_2
    \\
    b_3 & c_4
  \end{bmatrix}
  \\
  \begin{bmatrix}
    c_1 & c_2
    \\
    c_3 & c_4
  \end{bmatrix}
  &
  \begin{bmatrix}
    d_1 & d_2
    \\
    d_3 & d_4
  \end{bmatrix}
\end{vmatrix}
$$
```

## Labelled Matrix

$$
\begin{array}{c|ccc}
& \color{#aaa}{A}
& \color{#aaa}{B}
& \color{#aaa}{C}
\\
\hline
\color{#aaa}{A} & 0 & 1 & 0
\\
\color{#aaa}{B} & 0 & 0 & 1
\\
\color{#aaa}{C} & 1 & 0 & 0
\end{array}
$$

```
$$
\begin{array}{c|ccc}
  & \color{#aaa}{A}
  & \color{#aaa}{B}
  & \color{#aaa}{C}
  \\
  \hline
  \color{#aaa}{A} & 0 & 1 & 0
  \\
  \color{#aaa}{B} & 0 & 0 & 1
  \\
  \color{#aaa}{C} & 1 & 0 & 0
\end{array}
$$
```

## Simulating Graphs

$$
\begin{matrix}
A & \rightarrow & B
\\
& \nwarrow & \downarrow & \searrow
\\
&& C & \leftarrow & D
\end{matrix}
$$

```
$$
\begin{matrix}
  A & \rightarrow & B
  \\
  & \nwarrow & \downarrow & \searrow
  \\
  && C & \leftarrow & D
\end{matrix}
$$
```

$$
\begin{matrix}
  A &&
  \overset{4}{\rightarrow} &&
  B &&
  \overset{6}{\rightarrow} &&
  C
  \\
  ^5 \uparrow &&
  &&
  \downarrow^8 &&
  \nearrow_{10} &&
  \downarrow
  \\
  D &&
  \underset{2}{\leftarrow} &&
  E &&
  \underset{3}{\leftarrow} &&
  \\_|
\end{matrix}
$$

```
$$
\begin{matrix}
  A &&
  \overset{4}{\rightarrow} &&
  B &&
  \overset{6}{\rightarrow} &&
  C
  \\
  ^5 \uparrow &&
  &&
  \downarrow^8 &&
  \nearrow_{10} &&
  \downarrow
  \\
  D &&
  \underset{2}{\leftarrow} &&
  E &&
  \underset{3}{\leftarrow} &&
  \\_|
\end{matrix}
$$
```
