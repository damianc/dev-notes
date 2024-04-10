# Integrals: Area and Length

## Area

- function: $f(x) = 2x-4$
- range: $\langle 4;6 \rangle$

$$
F \gets \int f(x)\ dx = x^2 - 4x + C
$$

$$
\int_4^6 f(x)\ dx = F(6)-F(4) = 12-0 = 12
$$

### Check

- trapezoid parallel sides:
  - $f(4)=4$
  - $f(6)=8$
- trapezoid _height_: $6-4=2$

$$
\frac{4+8}{2} \cdot 2 = 12
$$

## Length

- function: $f(x) = 2x-4$
- range: $\langle 1;4 \rangle$

$$
\begin{array}{ll}
F \gets &
\int \sqrt{1+[f'(x)]^2}\ dx
\\
&
\int \sqrt{1+2^2}\ dx
\\
&
\int \sqrt{5}\ dx
\\
&
\int 2.2361\ dx
\\
&
2.2361x + C
\end{array}
$$

$$
\int_1^4 f(x)\ dx = F(4)-F(1) \approx 6.71
$$

### Check

- points:
  - $(1,f(1)) = (1,-2)$
  - $(4,f(4)) = (4,4)$

$$
\sqrt{(4-1)^2+(4-(-2))^2} = \sqrt{45} \approx 6.71
$$
