# MathJax Arrays

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

## Horizontal and vertical lines

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
