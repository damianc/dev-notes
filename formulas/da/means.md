# Means

| Type | Formula | Weighted variant |
|--|--|--|
| arithmetic | $$\overline{x} = \frac{\Sigma x}{n}$$ | $$\overline{x}_{WA} = \frac{\Sigma x \cdot w}{\Sigma w}$$ |
| geometric | $$\overline{x}_G = \sqrt[n]{\Pi x}$$ | $$\overline{x}_{WG} = \sqrt[\Sigma w]{\Pi x^w}$$ |
| harmonic | $$\overline{x}_H = \frac{n}{\Sigma \frac{1}{x}}$$ | $$\overline{x}_{WH} = \frac{\Sigma w}{\Sigma \frac{w}{x}}$$ |
| quadratic (_root mean square_) | $$\overline{x}_Q = \sqrt{\frac{\Sigma x^2}{n}} = \sqrt{\frac{1}{n} \Sigma x^2}$$ | $$\overline{x}_{WQ} = \sqrt{\frac{\Sigma x^2 \cdot w}{\Sigma w}}$$ |
| power (of $p$) | $$\overline{x}_P = \sqrt[p]{\frac{\Sigma x^p}{n}} = \sqrt[p]{\frac{1}{n} \Sigma x^p}$$ | $$\overline{x}_{WP} = \sqrt[p]{\frac{\Sigma x^p \cdot w}{\Sigma w}}$$ |
| root (with degree $d$) | $$\overline{x}_R = \left( \Sigma \frac{\sqrt[d]{x}}{n} \right)^d = \left(\frac{\Sigma \sqrt[d]{x}}{n}\right)^d$$ | $$\overline{x}_{WR} = \left(\Sigma \frac{\sqrt[d]{x} \cdot w}{\Sigma w}\right)^d = \left(\frac{\Sigma \sqrt[d]{x} \cdot w}{\Sigma w}\right)^d$$ |
| logarithmic | $$\overline{x}_L = e^{\ell} \iff \ell = \frac{\Sigma \ln x}{n}$$ | $$\overline{x}_{WL} = e^{\ell} \iff \ell = \frac{\Sigma \ln(x) \cdot w}{\Sigma w}$$ |
| logarithmic (with base $b$) | $$\overline{x}_{Ln} = e^{\ell} \iff \ell = \frac{\Sigma \log_b x}{n}$$ | $$\overline{x}_{WLn} = e^{\ell} \iff \ell = \frac{\Sigma \log_b(x) \cdot w}{\Sigma w}$$ |

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

## Non-standard/Experimental

| Type | Formula |
|--|--|
| delta ($\Delta$) | $$\sqrt{\vert b^2 - 4a \vert} \iff a = \overline{x}_Q \ \cap\ b = \overline{x}_G$$ |
| delta 3 ($\Delta^3$) | $$\sqrt[d]{b^2 - 4ac} \iff d=\frac{max-min}{2} \ \cap\ a = \overline{x}\_{P(3)} \ \cap\ b = \overline{x}\_{Q} \ \cap\ c = \overline{x}\_{H}$$ |
