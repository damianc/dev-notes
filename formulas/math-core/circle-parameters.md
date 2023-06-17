# Circle Parameters

| Parameter | Formula | Getting R from Parameter | Getting $\alpha$ from Parameter |
|--|:--:|:--:|:--:|
| circumference | $2{\pi}R$ | $\frac{x}{2\pi}$ | - |
| area | ${\pi}R^2$ | $\sqrt{\frac{x}{\pi}}$ | - |
| arc length | ${\alpha}R$ | $\frac{x}{\alpha}$ | $\frac{x}{R}$ |
| chord length | $2R \sin(\frac{\alpha}{2})$ | $\frac{x}{2 \sin(\frac{\alpha}{2})}$ | $2 \arcsin(\frac{x}{2R})$ |
| sector area | $\frac{\alpha}{2} R^2$ | $\sqrt{\frac{2x}{\alpha}}$ | $2 \frac{x}{R^2}$ |
| segment area | $\frac{R^2}{2}(\alpha - \sin(\alpha))$ | $\sqrt{2\frac{x}{\alpha - \sin(\alpha)}}$ | *brute force* method |
| perpendicular distance from circle center to chord | $R \cos(\frac{\alpha}{2})$ | $\frac{x}{\cos(\frac{\alpha}{2})}$ | $2 \arccos(\frac{x}{R})$ |

![Circle Parameters](https://github.com/damianc/dev-notes/blob/master/_images/math/circle-parameters.png "Circle Parameters")

## $\alpha - \sin(\alpha)$

Operation $\alpha - \sin(\alpha)$ cannot be simply reversed, some technique must be employeed.  
The function below uses the Newton-Raphson method:

$x = \alpha - \sin(\alpha) \implies \text{calcAlpha}(x) \approx \alpha$

```
function calcAlpha(x) {
  const f = alpha => alpha - Math.sin(alpha) - x;
  const df = alpha => 1 - Math.cos(alpha);
  
  const tolerance = 1e-10;
  let alpha = x;
  let error = Infinity;

  while (error > tolerance) {
    const nextAlpha = alpha - f(alpha) / df(alpha);
    error = Math.abs(nextAlpha - alpha);
    alpha = nextAlpha;
  }

  return alpha;
}
```