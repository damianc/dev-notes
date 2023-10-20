# Interval Series

## Construction

* number of classes

$$
k = \begin{cases}
\lfloor \sqrt{n} \rfloor
\\
\cup
\\
[1+3.322 \cdot \ln n]
\\
\cup
\\
[5 \cdot \ln n]
\end{cases}
$$

* class interval range

$$
h = \frac{x_{max} - x_{min}}{k-1}
$$

## Points of an Interval

* lower limit of the first interval

$$
\begin{cases}
x_{01} = x_{min} - \frac{1}{2}h
\\
x_{11} = x_{01} + h
\end{cases}
$$

* limits of the remaining intervals

$$
\begin{cases}
x_{0i} = x_{01} + (i-1) \cdot h
\\
x_{1i} = x_{0i} + h
\end{cases}
\iff
i = 2,3, \dots ,k
$$

* midpoint of the interval

$$
\dot{x_i} = \frac{x_{0i} + x_{1i}}{2}
$$
