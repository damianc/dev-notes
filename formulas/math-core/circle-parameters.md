# Circle Parameters

| Parameter | Formula | Getting R from Parameter | Getting $\alpha$ from Parameter |
|--|--|--|--|
| circumference | $2{\pi}R$ | $\frac{x}{2\pi}$ | - |
| area | ${\pi}R^2$ | $\sqrt{\frac{x}{\pi}}$ | - |
| arc length | ${\alpha}R$ | $\frac{x}{\alpha}$ | $\frac{x}{R}$ |
| chord length | $2R \sin(\frac{\alpha}{2})$ | $\frac{x}{2 \sin(\frac{\alpha}{2})}$ | $2 \arcsin(\frac{x}{2R})$ |
| sector area | $\frac{\alpha}{2} R^2$ | $\sqrt{\frac{x}{\frac{1}{2}\alpha}}$ | $2 \frac{x}{R^2}$ |
| segment area | $\frac{R^2}{2}(\alpha - \sin(\alpha))$ | $\sqrt{2\frac{x}{\alpha - \sin(\alpha)}}$ | *brute force* method |
| perpendicular distance from circle center to chord | $R \cos(\frac{\alpha}{2})$ | $\frac{x}{\cos(\frac{\alpha}{2})}$ | $2 \arccos(\frac{x}{R})$ |

![Circle Parameters](https://github.com/damianc/dev-notes/blob/master/_images/math/circle-parameters.png "Circle Parameters")