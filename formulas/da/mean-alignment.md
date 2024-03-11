# Mean Alignment

## New value $\nabla$ to get mean $\hat{x}$

$$
\nabla_A = \hat{x}(n+1)-\Sigma x
$$

$$
\nabla_G = \hat{x}^{n+1}[\Pi x]^{-1}
$$

$$
\nabla_H = \left(\frac{n+1}{\hat{x}}-\sum \frac{1}{x}\right)^{-1}
$$

$$
\nabla_P = \sqrt[P]{\hat{x}^P(n+1)-\Sigma x^P}
$$

$$
\nabla_R = \left(\sqrt[d]{\hat{x}}(n+1)-\Sigma \sqrt[d]{x}\right)^d
$$

$$
\nabla_L = B^{\ln(\hat{x})(n+1)-\Sigma \log_B(x)}
$$

## New value $\nabla$ with weight $\lambda$ to get mean $\hat{x}$

$$
\nabla_A = \frac{1}{\lambda}\large(\hat{x}([\Sigma w]+\lambda)-[\Sigma xw])
$$

$$
\nabla_G = \large\sqrt[\lambda]{\hat{x}^{[\Sigma w]+\lambda} (\Pi x^w)^{-1}}
$$

$$
\nabla_H = \lambda\left(\frac{[\Sigma w]+\lambda}{\hat{x}}-\left[\sum \frac{w}{x}\right]\right)^{-1}
$$

$$
\nabla_P = \sqrt[P]{\frac{1}{\lambda}\large(\hat{x}^P([\Sigma w]+\lambda)-[\Sigma x^P \cdot w])}
$$
