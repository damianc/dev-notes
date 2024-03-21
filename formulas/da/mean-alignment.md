# Mean Alignment

## New value $\nabla$ to get mean $\hat{x}$

| Type | Formula | Formula by mean $\overline{x}$ |
|--|--|--|
| $\nabla_A$ | $$\hat{x}(n+1)-\Sigma x$$ | $$\hat{x}(n+1)-n\cdot\overline{x}$$ |
| $\nabla_G$ | $$\frac{\hat{x}^{n+1}}{\Pi x}$$ | $$\frac{\hat{x}^{n+1}}{\overline{x}^n}$$ |
| $\nabla_H$ | $$\left(\frac{n+1}{\hat{x}}-\sum \frac{1}{x}\right)^{-1}$$ | $$\left(\frac{n+1}{\hat{x}}-\frac{n}{\overline{x}}\right)^{-1}$$ |
| $\nabla_P$ | $$\sqrt[P]{\hat{x}^P(n+1)-\Sigma x^P}$$ | $$\sqrt[P]{\hat{x}^P (n+1) - n \cdot \overline{x}^P}$$ |
| $\nabla_R$ | $$\left(\sqrt[d]{\hat{x}}(n+1)-\Sigma \sqrt[d]{x}\right)^d$$ | $$\left(\sqrt[d]{\hat{x}} (n+1) - n \cdot \sqrt[d]{\overline{x}}\right)^d$$ |
| $\nabla_L$ | $$B^{(n+1)\ln(\hat{x})-\Sigma \log_B(x)}$$ | $$B^{(n+1)\ln(\hat{x})-n \cdot \ln(\overline{x})}$$ |

### New value $\nabla$ to get mean bigger/smaller $m$ times

| Type | Mean $\times m$ bigger | Mean $\times m$ smaller |
|--|--|--|
| $\nabla_A$ | $$(m(n+1)-n)\overline{x}$$ | $$\left(\frac{n+1}{m}-n\right)\overline{x}$$ |
| $\nabla_G$ | $$\overline{x}m^{n+1}$$ | $$\frac{\overline{x}}{m^{n+1}}$$ |
| $\nabla_H$ | $$\frac{m\overline{x}}{(1-m)n+1}$$ | $$\frac{\overline{x}}{(n+1)m-n}$$ |
| $\nabla_P$ | $$[(n+1)m^P-n]\overline{x}^P$$ | $$\left(\frac{n+1}{m^P}-n\right)\overline{x}^P$$ |
| $\nabla_R$ | $$\overline{x} \cdot [(n+1)\sqrt[d]{m}-n]^d$$ | $$\overline{x} \cdot \left(\frac{n+1}{\sqrt[d]{m}}-n\right)^d$$ |
| $\nabla_L$ | $$\large B^{\ln(\overline{x}m^{n+1})}$$ | $$\large B^{\ln\left(\frac{\overline{x}}{m^{n+1}}\right)}$$ |

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

$$
\nabla_R = \left[
 \frac{1}{\lambda}
 \left(
  \sqrt[d]{\hat{x}}
  \left(\left[\sum w\right]+\lambda\right) -
   \left[\sum \sqrt[d]{x} \cdot w\right]
 \right)
\right]^d
$$

$$
\nabla_L = \large\sqrt[\lambda]{B^{
 \ln(\hat{x})([\Sigma w]+\lambda)-
 [\Sigma \log_B(x) \cdot w]
}}
$$

## Weight $\lambda$ of new value $\nabla$ to get mean $\hat{x}$

$$
\lambda_A = (\hat{x}[\Sigma w]+[\Sigma xw])(\nabla-\hat{x})^{-1}
$$

$$
\lambda_G = \left(\ln\left(\prod x^w\right)-\ln(\hat{x})\left[\sum w\right]\right)\ln^{-1}\left(\frac{\hat{x}}{\nabla}\right)
$$

$$
\lambda_H = \left(
 \hat{x}\left[\sum \frac{w}{x}\right]-
 \sum w
\right)\left(
 1-\frac{\hat{x}}{\nabla}
\right)^{-1}
$$

$$
\lambda_P = (\hat{x}^P[\Sigma w]-[\Sigma x^P \cdot w])(\nabla^P - \hat{x}^P)^{-1}
$$

$$
\lambda_R = \left(\sqrt[d]{\hat{x}}\Sigma w-\left[
 \Sigma \sqrt[d]{x} \cdot w
\right]\right)\left(
 \sqrt[d]{\nabla} - \sqrt[d]{\hat{x}}
\right)^{-1}
$$

$$
\lambda_L = (\ln(\hat{x})\Sigma w-[
 \Sigma \log_B(x^w)
])(\log_B(\nabla)-\ln(\hat{x}))^{-1}
$$
