# Mean Refactoring

- $\hat{x}$ - new mean
- $\nabla$ - a new value
- $\lambda$ - a weight of the new value

| Mean | Value to add | Weighted value to add |
|--|--|--|
| arithmetic | $$\nabla=\hat{x}(n+1)-\Sigma x$$ | $$\nabla=\frac{1}{\lambda}[\hat{x}(\lambda+\Sigma w)-\Sigma x \cdot w]$$ |
| geometric | $$\nabla=\frac{\hat{x}^{n+1}}{\Pi x}$$ | $$\nabla=\sqrt[\lambda]{\frac{\hat{x}^{\lambda+\Sigma w}}{\Pi x^w}}$$ |
| harmonic | $$\nabla=\left(\frac{n+1}{\hat{x}}-\sum \frac{1}{x}\right)^{-1}$$ | $$\nabla=\lambda\cdot\left(\frac{\lambda+\Sigma w}{\hat{x}}-\sum \frac{w}{x}\right)^{-1}$$ |
