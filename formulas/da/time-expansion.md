# Seconds to Y D H:M:S

$$
\begin{cases}
M=60
\\
H=60M
\\
D=24H
\\
Y=365D
\\\ \\
y = \left\lfloor \frac{S}{Y} \right\rfloor
\\
S = S - yY
\\\ \\
d = \left\lfloor \frac{S}{D} \right\rfloor
\\
S = S - dD
\\\ \\
h = \left\lfloor \frac{S}{H} \right\rfloor
\\
S = S - hH
\\\ \\
m = \left\lfloor \frac{S}{M} \right\rfloor
\\
S = S - mM
\\\ \\
s = \lfloor S \rceil
\end{cases}
$$
