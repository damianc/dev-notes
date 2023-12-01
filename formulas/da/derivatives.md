# Derivatives

## Polynomial functions

| Function | Derivative |
|--|--|
| $y=a$ | $y'=0$ |
| $y=ax+b$ | $y'=a$ |
| $y=ax^2+bx+c$ | $y'=2ax+b$ |
| $y=ax^3+bx^2+cx+d$ | $y'=3ax^2+2bx+c$ |

> $a,b,c,d \in \mathbb{R}$

### General scheme

> $a_i \in \mathbb{R}$  
> $i \in \\{ 1,2,\dots,n\\}$  
> $n \in \mathbb{N}$

$$
\begin{cases}
y = a_nx^n + a_{n-1}x^{n-1} + \dots + a_2x^2 + a_1x + a_0
\\
y' = na_nx^{n-1} + (n-1)a_{n-1}x^{n-2} + \dots + 2a_2x + a_1
\end{cases}
$$

$$
\cup
$$

$$
\begin{cases}
y = \displaystyle\sum_{i=0}^n a_{n-i}x^{n-i}
\\
y' = \displaystyle\sum_{i=0}^{n-1} (n-i)a_{n-i}x^{n-(i+1)}
\end{cases}
$$

$$
\cup
$$

$$
\begin{cases}
y = ax^{10} + bx^9 + \dots + ix^2 + jx + k
\\
y' = 10ax^9 + 9bx^8 + \dots + 2ix + j
\\
ax^n \mapsto nax^{n-1}
\end{cases}
$$

## Power functions

| Function | Derivative |
|--|--|
| $$y = x^m$$ | $$y' = mx^{m-1}$$ |
| $$y = x^{-n} = \frac{1}{x^n}$$ | $$y' = -\frac{n}{x^{n+1}} = -nx^{-(n+1)}$$ |
| $$y = x^\frac{m}{n} = \sqrt[n]{x^m}$$ | $$y' = m(nx^\frac{n-m}{n})^{-1}$$ |
| $$y = x^{-\frac{m}{n}} = \frac{1}{\sqrt[n]{x^m}}$$ | $$y' = -m(nx^\frac{n+m}{n})^{-1}$$ |

> $m \in \mathbb{R}$  
> $n \in \mathbb{N}$

### Alternative forms (of last two)

$$
\begin{cases}
y' = m(nx^\frac{n-m}{n})^{-1}
\\\ \\
y' = \frac{m}{n\sqrt[n]{x^{n-m}}}
\\\ \\
y' = \frac{m}{n} x^{\frac{m}{n}-1}
\end{cases}
$$

$$
\begin{cases}
y' = -m(nx^\frac{n+m}{n})^{-1}
\\\ \\
y' = -\frac{m}{n\sqrt[n]{x^{n+m}}}
\\\ \\
y' = -\frac{m}{n} x^{-\frac{m}{n}-1}
\end{cases}
$$

## Rational functions

| Function | Derivative |
|--|--|
| $$y = \frac{ax+b}{cx+d}$$ | $$y' = \frac{ad-bc}{(cx+d)^2}$$ |
| $$y = \frac{W(x)}{V(x)}$$ | $$y' = \frac{W'(x)V(x)-W(x)V'(x)}{V^2(x)}$$ |

> $a,b,c,d \in \mathbb{R}$  
> $c \neq 0$  
> $W(x), V(x)$ - polynomials

## Exponential and logarithmic functions

| Function | Derivative |
|--|--|
| $$y = a^x$$ | $$y' = a^x \ln a$$ |
| $$y = \log_a x$$ | $$y' = \frac{1}{x \ln a}$$ |

> $0 < a \neq 1$

## Trigonometric and cyclometric functions

| Function | Derivative |
|--|--|
| $$y = \sin(x)/\cos(x)/\tan(\hat{x})$$ | $$y' = \cos(x)/-\sin(x)/\frac{1}{\cos^2 x}$$ |
| $$y = \arcsin/\arccos/\arctan x$$ | $$y' = \frac{1}{\sqrt{1-x^2}}/\frac{-1}{\sqrt{1-x^2}}/\frac{1}{x^2+1}$$ |

> $\hat{x} \neq \left(k+\frac{1}{2}\right)\pi$  
> $k \in \mathbb{Z}$

## Non-elementary functions

| Derivative |
|--|
| $$[f(x) \pm g(x)]' = f'(x) \pm g'(x)$$ |
| $$[f(x) \cdot g(x)]' = f'(x) \cdot g(x) + f(x) \cdot g'(x)$$ |
| $$\left[ \frac{f(x)}{g(x)} \right]' = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{g^2(x)}$$ |

### Examples

$$
\begin{cases}
y = 2x + \sin x
\\
y' = 2 + \cos x
\end{cases}
$$

$$
\begin{cases}
y = \sqrt{x} - \ln x
\\
y' = \frac{1}{2\sqrt{x}} - \frac{1}{x} = \frac{\sqrt{x}-2}{2x}
\end{cases}
$$
