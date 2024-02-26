# Circle Tangents by Control Point

- for circle $(x-a)^2+(y-b)^2=r^2$
- and control point $(p,q)$
- points of tangency are $(x_1,y_1)$ and $(x_2,y_2)$ obtained from $\lambda(a,b,r,p,q)$

$$
\lambda(a,b,r,p,q) =
\begin{cases}
\begin{cases}
x_1 = r \cdot \cos(\gamma_1) + a
\\
y_1 = r \cdot \sin(\gamma_1) + b
\end{cases}
\\
\begin{cases}
x_2 = r \cdot \cos(\gamma_2) + a
\\
y_2 = r \cdot \sin(\gamma_2) + b
\end{cases}
\end{cases}
\iff
\begin{cases}
D = \sqrt{(p-a)^2 + (q-b)^2}
\\
d = D - r
\\
\alpha = 2 \arccos\left(\frac{r-d}{r}\right)
\\
\beta = \text{atan2}(q-b, p-a)
\\
\gamma_1 = \beta - \frac{1}{2}\alpha
\\
\gamma_2 = \beta + \frac{1}{2}\alpha
\end{cases}
$$
