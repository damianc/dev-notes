# Lines and Points Formulas

![Lines and points formulas](https://github.com/damianc/dev-notes/blob/master/_images/math/lines-and-points-formulas.png "Lines and points formulas")

| Parameter | Formula |
|--|--|
| zero point | $\frac{-b}{a}$ |
| y-intercept | $b$ |
| value _x_ for given _y_ | $\frac{y-b}{a}$ |
| angle between line and X-axis | $\arctan(a)$ |
| angle between line and Y-axis | $\frac{1}{2}\pi - \arctan(a)$ or $\arctan(\frac{1}{a})$ |
| angle between two lines | $\arctan\left(\left\vert \frac{a_2-a_1}{1 + a_1a_2} \right\vert\right)$ |
| two lines intersection point | $$\left( \frac{b_2-b_1}{a_1-a_2}, \frac{a_1\cdot[b_2-b_1]}{a_1-a_2} + b_1 \right)$$ |
| line segment center | $$\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)$$ |
| distance between two parallel lines | $$\frac{\vert b_2-b_1 \vert}{\sqrt{1+a^2}}$$ |
| distance between line and point | $$\frac{\vert ax_p-y_p+b \vert}{\sqrt{1+a^2}}$$ |
| distance between two points | $\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ |

## Lengths

![Lines lengths formulas](https://github.com/damianc/dev-notes/blob/master/_images/math/lines-lengths-formulas.png "Lines lengths formulas")

> for line $f(x) = mx + i$

| Length | Formula |
|--|--|
| line length in range $\langle x; x \pm r \rangle$ in X-axis | $$\sqrt{r^2 + (rm)^2}$$ |
| line length in range $\langle y; y \pm r \rangle$ in Y-axis | $$\sqrt{\left(\frac{r}{m}\right)^2 + r^2}$$ |
| length of X-axis range in which line is $\ell$ in length | $$\frac{\ell}{\sqrt{1+m^2}}$$ |
| length of Y-axis range in which line is $\ell$ in length | $$\frac{\ell}{\sqrt{1+\frac{1}{m^2}}}$$ |

or:

| Length | Formula | Formula with angle |
|--|--|--|
| $r_x$ by $L$ | $$\frac{L}{\|\|v\|\|}$$ | $$L \cdot \cos(\alpha)$$ |
| $r_y$ by $L$ | $$\frac{Lm}{\|\|v\|\|}$$ | $$L \cdot \sin(\alpha)$$ |
| $L$ by $r_x$ | $$r_x \cdot \|\|v\|\|$$ | $$\frac{r_x}{\cos(\alpha)}$$ |
| $L$ by $r_y$ | $$\frac{r_y}{m} \cdot \|\|v\|\|$$ | $$\frac{r_y}{\sin(\alpha)}$$ |
| $r_x$ by $r_y$ | $$\frac{r_y}{m}$$ | $$\frac{r_y}{\tan(\alpha)}$$ |
| $r_y$ by $r_x$ | $$mr_x$$ | $$r_x \cdot \tan(\alpha)$$ |

> $\|\|v\|\| = \sqrt{1+m^2}$
