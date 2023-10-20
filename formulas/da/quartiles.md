# Quartiles

## 1st Quartile

$$
Q_{1,4} = \begin{cases}
n\\%4 = 0 \implies
\frac{x_{\frac{n}{4}} + x_{\frac{n}{4}+1}}{2}
\\
n\\%4 = 1 \implies
\frac{x_{\frac{n+1}{4}-0.5} + x_{\frac{n+1}{4}+0.5}}{2}
\\
n\\%4 = 2 \implies
x_{\frac{n}{4}+0.5}
\\
n\\%4 = 3 \implies
x_{\frac{n+1}{4}}
\end{cases}
$$

## 3rd Quartile

$$
Q_{3,4} = \begin{cases}
n\\%4 = 0 \implies
\frac{x_{\frac{3n}{4}} + x_{\frac{3n}{4}+1}}{2}
\\
n\\%4 = 1 \implies
\frac{x_{\frac{3(n+1)}{4}-0.5} + x_{\frac{3(n+1)}{4}+0.5}}{2}
\\
n\\%4 = 2 \implies
x_{\frac{3n}{4}+0.5}
\\
n\\%4 = 3 \implies
x_{\frac{3(n+1)}{4}}
\end{cases}
$$

## 2nd Quartile (Median)

$$
M = \begin{cases}
n\\%2 = 0 \implies
\frac{x_{\frac{n}{2}}+x_{\frac{n}{2}+1}}{2}
\\
n\\%2 \neq 0 \implies
x_{\frac{n+1}{2}}
\end{cases}
$$
