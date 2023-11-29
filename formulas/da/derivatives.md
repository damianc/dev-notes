# Derivatives

## Polynomial functions

| Function | Derivative |
|--|--|
| $y=a$ | $y'=0$ |
| $y=ax+b$ | $y'=a$ |
| $y=ax^2+bx+c$ | $y'=2ax+b$ |
| $y=ax^3+bx^2+cx+d$ | $y'=3ax^2+2bx+c$ |

### General scheme

$$
\begin{cases}
y = a_nx^n + a_{n-1}x^{n-1} + \dots + a_2x^2 + a_1x + a_0
\\
y' = na_nx^{n-1} + (n-1)a_{n-1}x^{n-2} + \dots + 2a_2x + a_1
\end{cases}
$$

$$
\cup
$$

$$
\begin{cases}
y = \displaystyle\sum_{i=0}^n a_{n-i}x^{n-i}
\\
y' = \displaystyle\sum_{i=0}^{n-1} (n-i)a_{n-i}x^{n-(i+1)}
\end{cases}
$$

$$
\cup
$$

$$
\begin{cases}
y = ax^{10} + bx^9 + \dots + ix^2 + jx + k
\\
y' = 10ax^9 + 9bx^8 + \dots + 2ix + j
\end{cases}
$$
