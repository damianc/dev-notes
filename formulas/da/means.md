# Means

| Type | Formula |
|--|--|
| arithmetic | $$\overline{x} = \frac{\Sigma x}{n}$$ |
| geometric | $$\overline{x}_G = \sqrt[n]{\Pi x}$$ |
| harmonic | $$\overline{x}_H = \frac{n}{\Sigma \frac{1}{x}}$$ |
| quadratic (_root mean square_) | $$\overline{x}_Q = \sqrt{\frac{\Sigma x^2}{n}} = \sqrt{\frac{1}{n} \Sigma x^2}$$ |
| power (of $p$) | $$\overline{x}_P = \sqrt[p]{\frac{\Sigma x^p}{n}} = \sqrt[p]{\frac{1}{n} \Sigma x^p}$$ |
| root (with degree $d$) | $$\overline{x}_R = \left( \Sigma \frac{\sqrt[d]{x}}{n} \right)^d$$ |
| logarithmic | $$\overline{x}_L = e^{\ell} \iff \ell = \frac{\Sigma \ln x}{n}$$ |
| logarithmic (with base $b$) | $$\overline{x}_{Ln} = e^{\ell} \iff \ell = \frac{\Sigma \log_b x}{n}$$ |

### Relations

- $max > \overline{x}_Q > \overline{x}_A > \overline{x}_G > \overline{x}_H > min$ (for positive numbers)
- $\overline{x}_P(x,p) = \overline{x}_R\left(x,\frac{1}{p}\right)$
- $\overline{x}_R(x,p) = \overline{x}_P\left(x,\frac{1}{p}\right)$
- $\overline{x}_{Ln}(x,e) = \overline{x}_L(x)$

## Contraharmonic Means

| Type | Formula |
|--|--|
| contraharmonic mean | $$CM_p = \frac{\Sigma x^{p+1}}{\Sigma x^p}$$ |
| contraharmonic geometric mean | $$CGM_p = \frac{\sqrt[n]{\Pi x^{p+1}}}{\sqrt[n]{\Pi x^p}}$$ |
| contraharmonic harmonic mean | $$CHM_p = \frac{\Sigma x^p}{\Sigma \frac{1}{x^p}}$$ |

## Non-standard

| Type | Formula |
|--|--|
| delta ($\Delta$) | $$\sqrt{\vert b^2 - 4a \vert} \iff a = \overline{x}_Q \ \cap\ b = \overline{x}_G$$ |
