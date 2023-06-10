# Bump Arc Length

- [By _Law of Sines_](#By-Law-of-Sines)
- [By Circles](#By-Circles)

## By _Law of Sines_

![Law of sines](https://github.com/damianc/dev-notes/blob/master/_images/math/law-of-sines.png "Law of sines")

![Bump arc length by law of sines](https://github.com/damianc/dev-notes/blob/master/_images/math/bump-arc-length-2.png "Bump arc length by law of sines")

### Calculations

$$
w, h
$$

$$
\implies
$$

$$
\overset{\frown}{h} = \sqrt{h^2 + \left[\frac{1}{2}w\right]^2} = \sqrt{16 + 36} = \sqrt{52} = 7.211103
$$

$$
\beta = \arctan\left( \frac{2h}{w} \right)
$$

$$
D = \frac{\overset{\frown}{h}}{\sin \beta}
$$

$$
R = \frac{1}{2}D
$$

$$
\alpha = 2 \arcsin\left( \frac{w}{2R} \right)
$$

$$
\overset{\frown}{a} = R \cdot \alpha
$$

### Implementation

```
function arcLength(w, h) {
  const _h = Math.sqrt(h**2 + (0.5 * w)**2);
  const beta = Math.atan((2 * h) / w);
  const D = _h / Math.sin(beta);
  const R = 0.5 * D;
  const alpha = 2 * Math.asin(w / (2 * R));

  return R * alpha;
}

arcLength(12,4)
// 15.288067692236755
```

### Example

$$
w = 12
$$

$$
h = 4
$$

$$
\implies
$$

$$
\overset{\frown}{h} = \sqrt{h^2 + \left[\frac{1}{2}w\right]^2} = \sqrt{16 + 36} = \sqrt{52} = 7.211103
$$

$$
\beta = \arctan\left( \frac{2h}{w} \right) = \arctan\left( \frac{8}{12} \right) = \arctan(0.666667) = 0.588003
$$

$$
D = \frac{\overset{\frown}{h}}{\sin \beta} = \frac{7.211103}{0.554701} \approx 13
$$

$$
R = \frac{1}{2}D = 6.5
$$

$$
\alpha = 2 \arcsin\left( \frac{w}{2R} \right) = 2 \arcsin\left( \frac{12}{13} \right) = 2 \cdot 1.176005 = 2.35201
$$

$$
\overset{\frown}{a} = R \cdot \alpha = 6.5 \cdot 2.35201 = 15.288065
$$

## By Circles

![Bump arc length by circles](https://github.com/damianc/dev-notes/blob/master/_images/math/bump-arc-length.png "Bump arc length by circles")

### Calculations

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

### Implementation

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

### Example

- given:

$$
w = 12
$$

$$
h = 4
$$

- getting $\overset{\frown}{h}$:

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

- getting $p$:

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

- getting $r$:

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

- getting $R$:

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

- getting $\alpha$:

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

- result

$$
\overset{\frown}{a} = R \cdot \alpha = 6.5 \cdot 2.35201 \approx 15.288065
$$