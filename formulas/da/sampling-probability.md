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
\begin{array}{c|ccc}
& x_1 & \cdots & x_{n-1}
\\
\hline
x_2 & \vdots
\\
\vdots & \vdots & \ddots
\\
x_n & \vdots & \cdots & \cdots
\\
\end{array}
$$

$$
\color{grey}
\because
(x_i,x_j) \equiv (x_j,x_i)
$$

$$
\color{grey}
\therefore
M_{nn} \to M_{mm \iff m=n-1}
$$

### Probability Function

$$
\text{P}(\omega) = \frac
{\displaystyle\sum_{i=1}^{n-2} f(\omega,i)}
{\overline{\overline{\Omega}}}
$$

$$
\iff
$$

$$
f(\omega,i) = \left\\{\begin{array}{lll}
{\LARGE 1} & & \text{if } \bigg[S\setminus\\{a,b\\}\bigg]\_i \quad \omega_{op} \quad {\Large\frac{a+b}{2}}
\\
{\Large 0} & & \text{otherwise}
\end{array}\right.
$$

$$\iff$$

$$\omega_{op} \quad = \quad \gtreqless$$

$$a \in S$$

$$b \in S\setminus\{a\}$$

$$\overline{\overline{\Omega}} = C_n^2 = \binom{n}{2} = \frac{n!}{2 \cdot (n-2)!}$$
