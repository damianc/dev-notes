# Point Coordinates on Circle

## Point $(x,y)$ by Angle $\alpha$

$$
\Delta = 2\pi \cdot \frac{\alpha}{360}
$$

$$
x = r \cdot \cos(\Delta) + a
$$

$$
y = r \cdot \sin(\Delta) + b
$$

| $\Delta$ variant | circle start (0) point | example angle $\alpha$ | $(x,y)$ for given $\alpha$ |
|--|--|--|--|
| $\Delta$ | on the right | $30\degree$ | $(9.4641, 8)$ |
| $\Delta + \frac{1}{2}\pi$ | on the top | $30\degree$ | $(4, 9.4641)$ |
| $\Delta - \frac{1}{2}\pi$ | on the bottom | $30\degree$ | $(8, 2.5359)$ |
| $\Delta + \pi$ | on the right | $30\degree$ | $(2.5359, 4)$ |

## Angle $\alpha$ by Point $(x,y)$

$$
r\Delta = \arccos\left( \frac{x-a}{r} \right)
$$

| original $\Delta$ variant | formula for given $\Delta$ | example $(x,y)$ | $\alpha$ for given $x$ | conditions* |
|--|--|--|--|--|
| $\Delta$ | $$\frac{r\Delta}{2\pi} \cdot 360$$ | $(9.4641,8)$ | $30\degree$ | $\begin{cases}\alpha\iff y<b\\-\alpha\iff y>b\\0\degree\iff y=b \ \cap\ x=a+r\\180\degree\iff y=b \ \cap\ x=a-r\end{cases}$ |
| $\Delta + \frac{1}{2}\pi$ | $$\frac{r\Delta-\frac{1}{2}\pi}{2\pi} \cdot 360$$ | $(4, 9.4641)$ | $30\degree$ | $\begin{cases}\alpha\iff x<a\\-\alpha\iff x>a\\0\degree\iff x=a \ \cap\ y=b-r\\180\degree\iff x=a \ \cap\ y=b+r\end{cases}$ |
| $\Delta - \frac{1}{2}\pi$ | $$\frac{\frac{1}{2}\pi-r\Delta}{2\pi} \cdot 360$$ | $(8, 2.5359)$ | $30\degree$ | $\begin{cases}\alpha\iff x>a\\-\alpha\iff x<a\\0\degree\iff x=a \ \cap\ y=b+r\\180\degree\iff x=a \ \cap\ y=b-r\end{cases}$ |
| $\Delta + \pi$ | $$\frac{\pi-r\Delta}{2\pi} \cdot 360$$ | $(2.5359, 4))$ | $30\degree$ | $\begin{cases}\alpha\iff y>b\\-\alpha\iff y<b\\0\degree\iff y=b \ \cap\ x=a-r\\180\degree\iff y=b \ \cap\ x=a+r\end{cases}$ |

\* - the main condition for every point $(x,y)$ is $(x-a)^2 + (y-b)^2 = r^2$ for circle with center at $(a,b)$ and $r$ in radius

> $-\alpha = 360-\alpha$