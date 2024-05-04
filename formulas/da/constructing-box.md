# Constructing a Box

$$
\begin{array}{ll}
V(x) & = (a-2x)^2x
\\
& = (a^2 + 4x^2 - 4ax)x
\\
& = a^2x + 4x^3 - 4ax^2
\\
& = 4x^3 - 4ax^2 + a^2x
\\\ \\
V'(x) & = 12x^2 - 8ax + a^2
\end{array}
$$

$$
\begin{array}{l}
A = 12
\ 
B = -8a
\ 
C = a^2
\\
\Delta = B^2 - 4AC & = 64a^2 - 4 \cdot 12 \cdot a^2
\\
& = 64a^2 - 48a^2
\\
& = 16a^2
\\
\sqrt{\Delta} = \sqrt{16a^2}
& =
\sqrt{16} \cdot \sqrt{a^2} = 4a
\\\ \\
x_{1,2} = \frac{-B \pm \sqrt{\Delta}}{2A}
\\
x_1 = \frac{8a+4a}{24}
& = \frac{12a}{24} = \frac{1}{2}a
\\
x_2 = \frac{8a-4a}{24}
& = \frac{4a}{24} = \frac{1}{6}a
\\\ \\
\because
a-\left(\frac{1}{2}a+\frac{1}{2}a\right)
& = 0
\\
\therefore
x \neq \frac{1}{2}a
\\\ \\
\because
a-\left(\frac{1}{6}a+\frac{1}{6}a\right)
& \gt 0
\\
\therefore
x = \frac{1}{6}a
\end{array}
$$

----

$$
\begin{array}{ll}
V(x) & =
(a-2x)(b-2x)x
\\
& =
[(a-2x)b-(a-2x)2x]x
\\
& =
([ab-2bx]-[2ax-4x^2])x
\\
& =
(ab-2bx-2ax+4x^2)x
\\
& =
abx-2bx^2-2ax^2+4x^3
\\
& =
4x^3-2bx^2-2ax^2+abx
\\
& =
4x^3-(2b+2a)x^2+abx
\\
& =
4x^3-2(b+a)x^2+abx
\\\ \\
V'(x)
& =
12x^2-4(b+a)x+ab
\end{array}
$$

$$
\begin{array}{ll}
A = 12
\\
B = -4(b+a)
\\
C = ab
\\
\Delta & = B^2-4AC
\\
& = 16(a+b)^2-4 \cdot 12 \cdot ab
\\
& = 16(a+b)^2-48ab
\\
& = 16[(a+b)^2-3ab]
\\
\sqrt{\Delta}
& = \sqrt{16[(a+b)^2-3ab]}
\\
& = \sqrt{16} \sqrt{(a+b)^2-3ab}
\\
& = 4 \sqrt{(a+b)^2-3ab}
\\\ \\
x_{1,2} & = \frac{-B \pm \sqrt{\Delta}}{2A}
\\
x_1 & =
\frac{4(a+b)+4\sqrt{(a+b)^2-3ab}}{24}
\\
& =
\frac{4(a+b+\sqrt{(a+b)^2-3ab})}{24}
\\
& =
\frac{1}{6}\left[
 a+b+\sqrt{(a+b)^2-3ab}
\right]
\\
x_2 & =
\frac{4(a+b)-4\sqrt{(a+b)^2-3ab}}{24}
\\
& =
\frac{4(a+b-\sqrt{(a+b)^2-3ab})}{24}
\\
& =
\frac{1}{6}\left[
 a+b-\sqrt{(a+b)^2-3ab}
\right]
\end{array}
$$
