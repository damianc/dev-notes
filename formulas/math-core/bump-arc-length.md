# Bump Arc Length

![Bump arc length](https://github.com/damianc/dev-notes/blob/master/_images/math/bump-arc-length.png "Bump arc length")

## Calculations

$$
w, h
$$


$$
\implies
$$

$$
\overset{\frown}{h} = \sqrt{h^2 + \left[\frac{1}{2}w\right]^2}
$$

$$
p = \frac{w + 2\overset{\frown}{h}}{2}
$$

$$
r = \sqrt{\frac{(p-w)\cdot(p-\overset{\frown}{h})^2}{p}}
$$

$$
R = \frac{w \cdot \overset{\frown}{h^2}}{4rp}
$$

$$
\alpha = 2 \arcsin\left( \frac{w}{2R} \right)
$$

$$
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

## Example

## Example

### Given

$$
w = 12
$$

$$
h = 4
$$

### Getting $\overset{\frown}{h}$

$$
\overset{\frown}{h} = \sqrt{h^2 + \left[\frac{1}{2}w\right]^2}
$$

$$
= \sqrt{4^2 + 6^2}
$$

$$
= \sqrt{16 + 36}
$$

$$
= \sqrt{52}
$$

$$
\approx 7.211103
$$

### Getting $p$

$$
p = \frac{w + 2\overset{\frown}{h}}{2}
$$

$$
= \frac{12 + 2\cdot7.211103}{2}
$$

$$
= \frac{26.422206}{2}
$$

$$
= 13.211103
$$

### Getting $r$

$$
r = \sqrt{\frac{(p-w)\cdot(p-\overset{\frown}{h})^2}{p}}
$$

$$
= \sqrt{\frac{(13.211103-12)\cdot(13.211103-7.211103)^2}{13.211103}}
$$

$$
= \sqrt{\frac{1.211103\cdot36}{13.211103}}
$$

$$
= \sqrt{\frac{43.599708}{13.211103}}
$$

$$
\approx \sqrt{3.300232}
$$

$$
\approx 1.816654
$$

### Getting $R$

$$
R = \frac{w \cdot \overset{\frown}{h^2}}{4rp}
$$

$$
= \frac{12\cdot7.211103^2}{4\cdot1.816654\cdot13.211103}
$$

$$
= \frac{624.000078}{96.000012}
$$

$$
= 6.5
$$

### Getting $\alpha$

$$
\alpha = 2 \arcsin\left( \frac{w}{2R} \right)
$$

$$
= 2 \arcsin\left( \frac{12}{13} \right)
$$

$$
= 2 \arcsin(0.923077)
$$

$$
= 2\cdot1.176005
$$

$$
= 2.35201 \ \ [\approx134.76\degree]
$$

### Results

$$
\overset{\frown}{a} = R \cdot \alpha = 6.5 \cdot 2.35201 \approx 15.288065
$$