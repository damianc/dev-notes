# Trigonometric Formulas

## Evenness of functions

 - $cos$ is an **even function**:
   - $\cos(-\alpha) = \cos(\alpha)$
   - therefore: $\cos(\alpha-\beta) = \cos(\beta-\alpha)$
- $sin$ and $tan$ are **odd functions**:
  - $\sin(-\alpha) = -\sin(\alpha)$
  - therefore: $\sin(\alpha-\beta) = -\sin(\beta-\alpha)$
  - $\tan(-\alpha) = -\tan(\alpha)$
  - therefore: $\tan(\alpha-\beta) = -\tan(\beta-\alpha)$

## Relations between functions

$$
\begin{cases}
\tan(\alpha) = \frac{\sin(\alpha)}{\cos(\alpha)}
\\\ \\
\sin(\alpha) = \tan(\alpha) \cdot \cos(\alpha)
\\\ \\
\cos(\alpha) = \frac{\sin(\alpha)}{\tan(\alpha)}
\end{cases}
$$

## Reducing

| | f=sin | f=cos | f=tan |
|--|--|--|--|
| $f(90\degree + \alpha)$ | $\boldsymbol{\cos\alpha}$ | $-\sin\alpha$ | $\frac{-1}{\tan(\alpha)}$ |
| $f(90\degree - \alpha)$ | $\boldsymbol{\cos\alpha}$ | $\sin\alpha$ | $\frac{1}{\tan(\alpha)}$ |
| $f(180\degree + \alpha)$ | $-\sin\alpha$ | $\boldsymbol{-\cos\alpha}$ | $\tan\alpha$ |
| $f(180\degree - \alpha)$ | $\sin\alpha$ | $\boldsymbol{-\cos\alpha}$ | $-\tan\alpha$ |
| $f(270\degree + \alpha)$ | $\boldsymbol{-\cos\alpha}$ | $\sin\alpha$ | $\frac{-1}{\tan(\alpha)}$ |
| $f(270\degree - \alpha)$ | $\boldsymbol{-\cos\alpha}$ | $-\sin\alpha$ | $\frac{1}{\tan(\alpha)}$ |
| $f(360\degree + \alpha)$ | $\sin\alpha$ | $\boldsymbol{\cos\alpha}$ | $\tan\alpha$ |
| $f(360\degree - \alpha)$ | $-\sin\alpha$ | $\boldsymbol{\cos\alpha}$ | $-\tan\alpha$ |

## Functions with angles addition/subtraction

| | $\boldsymbol{\alpha+\beta}$ | $\boldsymbol{\alpha-\beta}$ |
|--|--|--|
| $\sin$ | $\sin\alpha\cos\beta+\sin\beta\cos\alpha$ | $\sin\alpha\cos\beta-\sin\beta\cos\alpha$ |
| $\cos$ | $\cos\alpha\cos\beta-\sin\alpha\sin\beta$ | $\cos\alpha\cos\beta+\sin\alpha\sin\beta$ |
| $\tan$ | $\frac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta}$ | $\frac{\tan\alpha-\tan\beta}{1+\tan\alpha\tan\beta}$ |

## Sum and difference of functions

### The same angle

|||
|--|--|
| $\boldsymbol{\cos\alpha+\sin\alpha}$ | $\sqrt{2}\sin(45\degree+\alpha) = \sqrt{2}\cos(45\degree-\alpha)$ |
| $\boldsymbol{\cos\alpha-\sin\alpha}$ | $\sqrt{2}\cos(45\degree+\alpha) = \sqrt{2}\sin(45\degree-\alpha)$ |
| $\boldsymbol{\sin\alpha-\cos\alpha}$ | $-(\cos\alpha-\sin\alpha) = \sqrt{2}\sin(\alpha-45\degree)$ |

### The same function

| $\boldsymbol{f}$ | $\boldsymbol{f(\alpha)+f(\beta})$ | $\boldsymbol{f(\alpha)-f(\beta)}$ |
|--|--|--|
| $\boldsymbol{\sin}$ | $2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}$ | $2\cos\frac{\alpha+\beta}{2}\sin\frac{\alpha-\beta}{2}$ |
| $\boldsymbol{\cos}$ | $2\cos\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}$ | $-2\sin\frac{\alpha+\beta}{2}\sin\frac{\alpha-\beta}{2}$ |
| $\boldsymbol{\tan}$ | $\frac{\sin(\alpha+\beta)}{\cos\alpha\cos\beta}$ | $\frac{\sin(\alpha-\beta)}{\cos\alpha\cos\beta}$ |

## Product of functions

| | $\boldsymbol{...\times\sin(\beta)}$ | $\boldsymbol{...\times\cos(\beta)}$ |
|--|--|--|
| $\boldsymbol{\sin(\alpha)\times...}$ | $\frac{1}{2}[\cos(\alpha-\beta)-\cos(\alpha+\beta)]$ | $\frac{1}{2}[\sin(\alpha-\beta)+\sin(\alpha+\beta)]$ |
| $\boldsymbol{\cos(\alpha)\times...}$ | $\frac{1}{2}[\sin(\alpha+\beta)-\sin(\alpha-\beta)]$ | $\frac{1}{2}[\cos(\alpha-\beta)+\cos(\alpha+\beta)]$ |

### Angle with altered angle

| | $\boldsymbol{\alpha+n}$ | $\boldsymbol{\alpha-n}$ | $\boldsymbol{n-\alpha}$ |
|--|--|--|--|
| $\sin(\alpha)\cdot\sin(...)$ | $\frac{1}{2}[\cos(n)-\cos(2\alpha+n)]$ | $\frac{1}{2}[\cos(n)-\cos(2\alpha-n)]$ | $\frac{1}{2}[\cos(2\alpha-n)-\cos(n)]$ |
| $\cos(\alpha)\cdot\cos(...)$ | $\frac{1}{2}[\cos(n)+\cos(2\alpha+n)]$ | $\frac{1}{2}[\cos(n)+\cos(2\alpha-n)]$ | $\frac{1}{2}[\cos(2\alpha-n)+\cos(n)]$ |
| $\sin(\alpha)\cdot\cos(...)$ | $\frac{1}{2}[\sin(2\alpha+n)-\sin(n)]$ | $\frac{1}{2}[\sin(n)+\sin(2\alpha-n)]$ | $\frac{1}{2}[\sin(2\alpha-n)+\sin(n)]$ |
| $\cos(\alpha)\cdot\sin(...)$ | $\frac{1}{2}[\sin(2\alpha+n)+\sin(n)]$ | $\frac{1}{2}[\sin(2\alpha-n)-\sin(n)]$ | $\frac{1}{2}[\sin(n)-\sin(2\alpha-n)]$ |

### Powers

> $\sin^2(\alpha) = [\sin(\alpha)]^2 = \sin(\alpha)\sin(\alpha)$  
> $\cos^2(\alpha) = [\cos(\alpha)]^2 = \cos(\alpha)\cos(\alpha)$  
> $\tan^2(\alpha) = [\tan(\alpha)]^2 = \tan(\alpha)\tan(\alpha)$

#### Cyclometric functions

> $\sin^{-1}(\alpha) = \arcsin(\alpha) \cup \left([\sin(\alpha)]^{-1} = \frac{1}{\sin(\alpha)}\right)$  
> $\cos^{-1}(\alpha) = \arccos(\alpha) \cup \left([\cos(\alpha)]^{-1} = \frac{1}{\cos(\alpha)}\right)$  
> $\tan^{-1}(\alpha) = \arctan(\alpha) \cup \left([\tan(\alpha)]^{-1} = \frac{1}{\tan(\alpha)}\right)$

> $\alpha = \arcsin(x) \iff x = \sin(\alpha)$  
> $[\sin(\arcsin(x)) = x] \cap [\arcsin(\sin(x)) = x]$  
> etc. for $cos$ and $tan$
