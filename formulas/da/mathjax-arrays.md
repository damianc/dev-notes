# MathJax Arrays

- [Basic Array](#basic-array)
- [Surrounding](#surrounding)
- [Horizontal and Vertical Lines](#horizontal-and-vertical-lines)
- [Aligning](#aligning)
- [Nested Arrays](#nested-arrays)

## Basic Array

$$
\begin{array}{c}
1 & 2 & 3
\\
4 & 5 & 6
\end{array}
$$

```
$$
\begin{array}{c}
  1 & 2 & 3
  \\
  4 & 5 & 6
\end{array}
$$
```

## Surrounding

$$
\left[
\begin{array}{c}
1 & 2 & 3
\\
4 & 5 & 6
\end{array}
\right]
$$

```
$$
\left[
  \begin{array}{c}
    1 & 2 & 3
    \\
    4 & 5 & 6
  \end{array}
\right]
$$
```

Possible variants

`\left`$\boxed{\large\cdot}$  
`...`  
`\right`$\boxed{\large\cdot}$

include:

- `[` with `]`
- `(` with `)`
- `\\{` with `\\}`
- `\langle` with `\rangle` (or `<` with `>`)
- `\rangle` with `\langle` (or `>` with `<`)
- `\vert` with `\vert` (or `|` with `|`)
- `\Vert` with `\Vert`
- `\lfloor` with `\rceil`
- `[` (or other char) with `.` (left side only)
- `.` with `]` (or other char) (right side only)

## Horizontal and Vertical Lines

$$
\begin{array}{c|ccc}
x & 2 & 3 & 4
\\
y & 6 & 7 & 8
\\
\hline
& x_2 & x_3 & x_4
\end{array}
$$

```
$$
\begin{array}{c|ccc}
  x & 2 & 3 & 4
  \\
  y & 6 & 7 & 8
  \\
  \hline
  & x_2 & x_3 & x_4
\end{array}
$$
```

## Aligning

$$
f(x) =
\left\\{
\begin{array}{rl}
1 & \text{if $x \gt 0$}
\\
-1 & \text{if $x \lt 0$}
\\
0 & \text{otherwise}
\end{array}
\right.
$$

```
$$
f(x) =
\left\\{
  \begin{array}{rl}
    1 & \text{if $x \gt 0$}
    \\
    -1 & \text{if $x \lt 0$}
    \\
    0 & \text{otherwise}
  \end{array}
\right.
$$
```

$$
f(x) =
\left\\{
\begin{array}{rl}
x=0 \implies & 0
\\
x \neq 0 \implies & \left\\{
\begin{array}{lr}
x \gt 0 \implies & 1
\\
x \lt 0 \implies & -1
\end{array}
\right.
\end{array}
\right.
$$

```
$$
f(x) =
\left\\{
  \begin{array}{rl}
    x=0 \implies & 0
    \\
    x \neq 0 \implies & \left\\{
      \begin{array}{lr}
        x \gt 0 \implies & 1
        \\
        x \lt 0 \implies & -1
      \end{array}
    \right.
  \end{array}
\right.
$$
```

## Nested Arrays

$$
\left[\begin{array}{cc}
  \left(\begin{array}{cc}
    a&b
    \\
    c&d
  \end{array}\right)
  &
  \left\\{\begin{array}{cc}
    a&b
    \\
    c&d
  \end{array}\right\\}_2^n
  \\
  \left\|\begin{array}{c|c}
    1&2\\
    \hline
    3&4
  \end{array}\right\|
  &
  \left[\begin{array}{cc|c}
    a&b&+
    \\
    c&d&x
  \end{array}\right]
\end{array}\right]
$$

```
$$
\left[
  \begin{array}{cc}
    \left(
      \begin{array}{cc}
        a & b
        \\
        c & d
      \end{array}
    \right)
    &
    \left\\{
      \begin{array}{cc}
        a & b
        \\
        c & d
      \end{array}
    \right\\}_2^n
    \\
    \left\|
      \begin{array}{c|c}
        1 & 2
        \\
        \hline
        3 & 4
      \end{array}
    \right\|
    &
    \left[
      \begin{array}{cc|c}
        a & b& +
        \\
        c &d & x
      \end{array}
    \right]
  \end{array}
\right]
$$
```
