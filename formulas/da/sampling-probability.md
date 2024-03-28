# Sampling Probability

A mean of values $a$ and $b$ picked from $S$ at random is $\gtreqless$ than/to a mean of $S$:

$$
\frac{a+b}{2}
\quad
\big(
\eqslantgtr \cup \gt \cup
= \cup \neq \cup
\lt \cup \eqslantless
\big)
\quad
\overline{x}
$$

## Options Matrix

$$
M = \begin{array}{c|ccc}
& x_1 & \cdots & x_{n-1}
\\
\hline
x_2 & \frac{x_1+x_2}{2} & \cdots & \frac{x_{n-1}+x_2}{2}
\\
\vdots & \vdots & \ddots & \vdots
\\
x_n & \frac{x_1+x_n}{2} & \cdots & \frac{x_{n-1}+x_n}{2}
\\
\end{array}
$$

> $\because (x_i,x_j) \equiv (x_j,x_i)$
> $\therefore M_{nn} \to M_{mm \iff m=n-1}$

## Probability Function

$$
\text{P}(\omega) = \frac
{\displaystyle\sum_{i=1}^{n-2} \nu(\omega,i)}
{\overline{\overline{\Omega}}}
$$

$$
\iff
$$

$$
\nu(\omega,i) = \left\\{\begin{array}{lll}
{\LARGE 1} & & \text{if } \bigg[S\setminus\\{a,b\\}\bigg]\_i \quad \omega_{op} \quad {\Large\frac{a+b}{2}}
\\
{\Large 0} & & \text{otherwise}
\end{array}\right.
$$

$$\iff$$

$$\omega_{op} \quad = \quad \gtreqless$$

$$a \in S$$

$$b \in S\setminus\\{a\\}$$

$$\overline{\overline{\Omega}} = C_n^2 = \binom{n}{2} = \frac{n!}{2 \cdot (n-2)!}$$

## Example

- $S = \\{2,3,5,7,8\\}$
- $\overline{x} = 5$
- $\overline{\overline{\Omega}} = C_5^2 = \binom{5}{2} = 10$

- matrix of possibilities:

$$
M = \ \ \begin{array}{|c|c|c|c|c|c|}
\hline
& \color{grey}{2} & \color{grey}{3}  & \color{grey}{5} & \color{grey}{7}
\\
\hline
\color{grey}{3} & 2.5 & \varnothing
\\
\hline
\color{grey}{5} & 3.5 & 4 & \varnothing
\\
\hline
\color{grey}{7} & 4.5 & 5 & 6 & \varnothing
\\
\hline
\color{grey}{8} & 5 & 5.5 & 6.5 & 7.5
\\
\hline
\end{array}
$$

### Probability

| Event | | $\overline{\overline{\square}}$ | $P(\square)$ |
|--|--|--|--|
| $A$ | $\hat{x} \eqslantgtr \overline{x}$ | 6 | 60% |
| $B$ | $\hat{x} \gt \overline{x}$ | 4 | 40% |
| $\color{red}C$ | $\color{red}\hat{x} = \overline{x}$ | 2 | 20% |
| $\color{green}D$ | $\color{green}\hat{x} \neq \overline{x}$ | 8 | 80% |
| $E$ | $\hat{x} \lt \overline{x}$ | 4 | 40% |
| $F$ | $\hat{x} \eqslantless \overline{x}$ | 6 | 60% |


