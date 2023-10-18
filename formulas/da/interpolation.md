# Interpolation Algorithms

## Linear

$$
i(x,x_0,y_0,x_1,y_1) = y_0 + \frac{(y_1-y_0)(x-x_0)}{x_1-x_0}
$$

## Lagrange (polymonial)

$$
i(x, P) = \sum_{i=0}^{P} P_{[i][1]} \cdot \left( \prod_{j=0}^{P} \frac{x-P_{[j][0]}}{P_{[i][0]} - P_{[j][0]}} \iff j \neq i \right)
$$
