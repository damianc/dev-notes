# Linear Function by Integral

## by area

Find a linear function such that:

$$
\int_a^b f(x) dx = A
$$

----

- by zero-point $z \lt a$:

$$
f(x) = \frac{
 2A(x-z)
}{
 (b+a-2z)(b-a)
}
$$

- by zero-point $z = a$:

$$
f(x) = \frac{
 2A(x-a)
}{
 (b-a)^2
}
$$

- by slope $m$:

$$
f(x) = \left(
 x-\frac{b+a}{2}
\right)m + \frac{A}{b-a}
$$

- by intercept $i$:

$$
f(x) = \left(
 \frac{2A}{b^2-a^2} - \frac{2i}{b+a}
\right)x + i
$$

## by length

Find a linear function $f(x)$ such that:

$$
\int_a^b \sqrt{1+[f'(x)]^2} dx = L
$$

- passing by $(p,q)$ point:

$$
f(x) = {\large(x-p)}\sqrt{\left(\frac{L}{b-a}\right)^2 - 1}{\large\ +\ q}
$$
