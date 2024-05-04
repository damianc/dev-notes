# Quantiles

- _n-th_ quantile of data split into $\Delta$ pieces
- data is $L$ in length
- data is sorted in ascending order

$$
\begin{array}{l}
p = \frac{(L-1)n}{\Delta}
\\
b = \lfloor p \rfloor
\\
R = d_b
\\
L \geqslant b \implies
R = R + (p-b)(d_{b+1} - d_b)
\end{array}
$$

## Common Quantiles

| Quantile | $\Delta$ |
|--|--|
| quartile | 4 |
| quintile | 5 |
| decile | 10 |
| percentile | 100 |
