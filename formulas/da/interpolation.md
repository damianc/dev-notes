# Interpolation Algorithms

## Linear

$$
\Psi(x,x_0,y_0,x_1,y_1) = y_0 + \frac{(y_1-y_0)(x-x_0)}{x_1-x_0}
$$

## Lagrange (polymonial)

$$
\Psi(x, P) = \sum_{i=0}^{P} P_{[i][1]} \cdot \left( \prod_{j=0}^{P} \frac{x-P_{[j][0]}}{P_{[i][0]} - P_{[j][0]}} \iff j \neq i \right)
$$

## Newton

$$
\Psi(x,P) = \sum_{i=1}^{P} \lambda(x,P,i) \cdot \left( \sum_{t=1}^{i} x-P_{[i-1][0]} \right)
$$

$$
\iff
$$

$$
\lambda(x,p,k) = \begin{cases}
k = 0 \implies p_{[0][1]}
\\
k \neq 0 \implies \frac{
\lambda(x,t,k-1)-\lambda(x,h,k-1)
}{
p_{[p-1][0]} - p_{[0][0]}
}
\iff
\begin{cases}
t = p \setminus p_0
\\
h = p \setminus p_{p-1}
\end{cases}
\end{cases}
$$
