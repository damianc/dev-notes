# Circle Area in X-Range

![Circle area in x-range](https://github.com/damianc/dev-notes/blob/master/_images/math/circle-area-in-x-range.png "Circle area in x-range")

## Calculations

- circle: $(x-a)^2 + (y-b)^2 = r^2$
- range: $\langle x_1; x_2 \rangle$

### Init Variables

$$
A = \pi r^2
$$

$$
x^{-} = \min(x_1, x_2)
$$

$$
x^{+} = \max(x_1, x_2)
$$

$$
xL = \max( \min(x^{-}, a+r), a-r )
$$

$$
xR = \min( \max(x^{+}, a-r), a+r )
$$

### Edge Cases

$$
diff = | xL - xR |
$$

$$
diff = 0 \implies 0
$$

$$
diff = 2r \implies A
$$

$$
(diff = r) \ \cap\ (xL = a \ \cup\ xR = a) \implies \frac{A}{2}
$$

### Range Start or End Beyond Circle

$$
(xL = a-r) \ \cup\ (xR = a+r) \implies
\begin{cases}
x_0 = \begin{cases}
xR \iff xL = a-r
\\
xL \iff xR = a+r
\end{cases}
\\
d = \begin{cases}
a-xR \iff xL = a-r
\\
xL-a \iff xR = a+r
\end{cases}
\\\ \\
S = \Sigma(x_0)
\\
\vec{t} = \frac{d}{|d|\ \cup\ 1}
\\\ \\
| A \cdot \frac{\vec{t}-1}{2} + S |
\end{cases}
$$

### Range Within Circle

$$
S_1 = \Sigma(xL)
$$

$$
S_2 = \Sigma(xR)
$$

$$
\vec{t_L} = \frac{a-xL}{|a-xL|\ \cup\ 1}
$$

$$
\vec{t_R} = \frac{xR-a}{|xR-a|\ \cup\ 1}
$$

$$
\vec{t_L} = 0 \implies \vec{t_L} = 1
$$

$$
\vec{t_R} = 0 \implies \vec{t_R} = 1
$$

$$
S_L = | A \cdot \frac{\vec{t_L}-1}{2} + S_1 |
$$

$$
S_R = | A \cdot \frac{\vec{t_R}-1}{2} + S_2 |
$$

$$
A - (S_L + S_R)
$$

### $\Sigma(x)$ Function

$$
\Sigma(x) =
\begin{cases}
\Delta = r^2 - (x-a)^2
\\
y_1 = b + \sqrt{\Delta}
\\
y_2 = b - \sqrt{\Delta}
\\
crd = | y_1 - y_2 |
\\
\alpha = 2 \cdot \arcsin\left( \frac{crd}{2r} \right)
\\
\implies
\\
\frac{r^2}{2} \cdot (\alpha - \sin(\alpha))
\end{cases}
$$

## Implementation

```
function caix([a,b,r],x1,x2) {
  const area = Math.PI * r**2;
  const xMin = Math.min(x1,x2);
  const xMax = Math.max(x1,x2);
  const xL = Math.max(Math.min(xMin,a+r),a-r);
  const xR = Math.min(Math.max(xMax,a-r),a+r); //console.log({xL,xR});

  const diff = Math.abs(xL-xR);
  if (diff === 0) return 0;
  if (diff === 2*r) return area;
  if (diff === r && ( xL === a || xR === a )) return area/2;

  if (xL === a-r || xR === a+r) {
    const x = xL === a-r ? xR : xL;
    const S = segmentArea([a,b,r],x);
    const d = xL === a-r ? (a-xR) : (xL-a);
    const t = d/(Math.abs(d)||1);
    return Math.abs( area * ((t-1)/2) + S );
  }

  const S1 = segmentArea([a,b,r],xL);
  let tL = (a-xL)/(Math.abs(a-xL)||1);
  if (tL === 0) tL = 1;
  const SL = Math.abs( area*((tL-1)/2)+S1 );
  
  const S2 = segmentArea([a,b,r],xR);
  let tR = (xR-a)/(Math.abs(xR-a)||1);
  if (tR === 0) tR = 1;
  const SR = Math.abs( area*((tR-1)/2)+S2 );
  
  return area - (SL+SR);
}

function segmentArea([a,b,r], x) {
  const D = r**2 - (x-a)**2;
  const y1 = b + Math.sqrt(D);
  const y2 = b - Math.sqrt(D);
  const crd = Math.abs(y1 - y2);
  const alpha = 2*Math.asin(crd/(2*r));
  return (r**2/2)*(alpha-Math.sin(alpha));
}
```


```
const circle = [6,6,4];

console.log({

  whole: caix(circle, 2, 10),
  // 50.26548245743669
  
  leftHalf: caix(circle, 2, 6),
  // 25.132741228718345
  
  rightHalf: caix(circle, 6, 10),
  // 25.132741228718345
  
  leftQuarter: caix(circle, 2, 4),
  // 9.826957588870048
  
  leftXQuarter: caix(circle, 4, 10),
  // 40.438524868566645
  
  rightQuarter: caix(circle, 8, 10),
  // 9.826957588870048
  
  rightXQuarter: caix(circle, 2, 8),
  // 40.438524868566645
  
  centerHalf: caix(circle, 4, 8),
  // 30.611567279696594
  
  leftCH: caix(circle, 4, 6),
  // 15.3057836398483
  
  rightCH: caix(circle, 6, 8),
  // 15.3057836398483
  
  test2Parts1: caix(circle, 2, 5),
  // 17.216873800237664
  
  test2Parts2: caix(circle, 5, 10),
  // 33.048608657199026
  
  test3Parts1: caix(circle, 2, 3),
  // 3.6264940318208776
  
  test3Parts2: caix(circle, 3, 7),
  // 29.42211462537815
  
  test3Parts3: caix(circle, 7, 10),
  // 17.216873800237664
  
  insideNothing: caix(circle, 5, 5),
  // 0
  
  centerNothing: caix(circle, 6, 6),
  // 0
  
  leftNothing: caix(circle, 2, 2),
  // 0
  
  rightNothing: caix(circle, 10, 10),
  // 0
  
  leftOutsideNothing: caix(circle, -4, -4),
  // 0
  
  rightOutsideNothing: caix(circle, 14, 14),
  // 0
  
  leftVoid: caix(circle, -1, 1),
  // 0
  
  rightVoid: caix(circle, 12, 16),
  // 0
  
  leftCloseVoid: caix(circle, -2, 2),
  // 0
  
  rightCloseVoid: caix(circle, 10, 14),
  // 0

  leftSmPartFromBeyond: caix(circle, -2, 4),
  // 9.826957588870048
  
  leftLgPartFromBeyond: caix(circle, 0, 8),
  // 40.438524868566645
  
  rightSmPartToBeyond: caix(circle, 8, 20),
  // 9.826957588870048
  
  rightLgPartToBeyond: caix(circle, 4, 18),
  // 40.438524868566645
  
  leftHalfFromBeyond: caix(circle, 1, 6),
  // 25.132741228718345
  
  rightHalfToBeyond: caix(circle, 6, 14)
  // 25.132741228718345
  
});
```