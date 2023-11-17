# Mean Refactoring

- $\hat{x}$ - new mean
- $\nabla$ - a new value
- $\lambda$ - a weight of the new value

## New value by expected mean

| Mean | Value to add | Weighted value to add |
|--|--|--|
| arithmetic | $$\nabla=\hat{x}(n+1)-\Sigma x$$ | $$\nabla=\frac{1}{\lambda}[\hat{x}(\lambda+\Sigma w)-\Sigma x \cdot w]$$ |
| geometric | $$\nabla=\frac{\hat{x}^{n+1}}{\Pi x}$$ | $$\nabla=\sqrt[\lambda]{\frac{\hat{x}^{\lambda+\Sigma w}}{\Pi x^w}}$$ |
| harmonic | $$\nabla=\left(\frac{n+1}{\hat{x}}-\sum \frac{1}{x}\right)^{-1}$$ | $$\nabla=\lambda\cdot\left(\frac{\lambda+\Sigma w}{\hat{x}}-\sum \frac{w}{x}\right)^{-1}$$ |
| power (of $p$) | $$\nabla=\sqrt[p]{\hat{x}^p(n+1)-\Sigma x^p}$$ | $$\nabla=\sqrt[p]{\frac{1}{\lambda}[\hat{x}^p(\lambda+\Sigma w)-\Sigma x^p \cdot w]}$$ |
| root (with degree $d$) | $$\nabla=(\sqrt[d]{\hat{x}}(n+1)-\Sigma\sqrt[d]{x})^d$$ | $$\nabla=\left(\frac{1}{\lambda}[\sqrt[d]{\hat{x}}(\lambda+\Sigma w)-\Sigma \sqrt[d]{x} \cdot w]\right)^d$$ |
| logarithmic (with base $b$) | $$\nabla=b^{\ell} \iff \ell = \ln(\hat{x})(n+1)-\Sigma \log_b x$$ | $$\nabla=b^{\ell} \iff \ell = \frac{1}{\lambda}[\ln(\hat{x})(\lambda+\Sigma w)-\Sigma \log_b(x) \cdot w]$$ |

## Weight of new value by expected mean

| Mean | Weight of new value |
|--|--|
| arithmetic | $$\lambda=\frac{(\Sigma xw)-\hat{x}\Sigma w}{\hat{x}-\nabla}$$ |
| harmonic | $$\lambda=\frac{\Sigma w-\hat{x}\left(\sum \frac{w}{x}\right)}{\frac{1}{\nabla}\hat{x}-1}$$ |
| power (of $p$) | $$\lambda=\frac{(\Sigma x^p \cdot w)-\hat{x}\Sigma w}{\hat{x}^p-\nabla^p}$$ |
| root (with degree $d$) | $$\lambda=\frac{(\Sigma \sqrt[d]{x} \cdot w)-\sqrt[d]{\hat{x}} \cdot \Sigma w}{\sqrt[d]{\hat{x}}-\sqrt[d]{\nabla}}$$ |
