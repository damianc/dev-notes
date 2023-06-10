# Bump Arc Length

![Bump arc length](https://github.com/damianc/dev-notes/blob/master/_images/math/bump-arc-length.png "Bump arc length")

## Calculations

$$
w, h
\\\ \\
\implies
\\\ \\
\overline{h} = \sqrt{h^2 + \left[\frac{1}{2}w\right]^2}
\\\ \\
p = \frac{w + 2\overline{h}}{2}
\\\ \\
r = \sqrt{\frac{(p-w)\cdot(p-\overline{h})^2}{p}}
\\\ \\
R = \frac{w \cdot \overline{h}^2}{4rp}
\\\ \\
\alpha = 2 \arcsin\left( \frac{w}{2R} \right)
\\\ \\
\overset{\frown}{a} = R \cdot \alpha
$$

## Implementation

```
function arcLength(w, h) {
  const _h = Math.sqrt(h**2 + (0.5*w)**2);
  const p = (w + 2 * _h) / 2;
 
  const r = Math.sqrt(
    ( (p - w) * (p - _h)**2 )
    / p 
  );
  const R = (w * _h**2) / (4* r * p);
  const alpha = 2 * Math.asin(w / (2 * R));
  
  return R * alpha;
}

arcLength(12,4)  
// 15.288067692236766
```