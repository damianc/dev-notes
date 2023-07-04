# Centroid of Triangle Rendered with Lines $f(x)$, $g(x)$ and $h(x)$

$$
f(x) = ax + b
$$

$$
g(x) = cx + d
$$

$$
h(x) = ex + f
$$

$$
\implies
$$

$$
P = \xi([a,b], [e,f])
$$

$$
Q = \xi([a,b], [c,d])
$$

$$
R = \xi([c,d], [e,f])
$$

$$
p = \Xi(R, Q)
$$

$$
r = \Xi(P, Q)
$$

$$
i = \lambda(P, p)
$$

$$
j = \lambda(R, r)
$$

$$
C = \xi([i_a, i_b], [j_a, j_b])
$$

$$
\iff
$$

$$
\xi([A,B], [C,D]) = \left(
  \frac{D-B}{A-C},
  \frac{A \cdot (D-B)}{A-C} + B
\right)
$$

$$
\Xi([x_1,y_1], [x_2,y_2]) = \left(
  \frac{x_1+x_2}{2},
  \frac{y_1+y_2}{2}
\right)
$$

$$
\lambda([x_1,y_1], [x_2,y_2]) = \begin{cases}
  a = \frac{y_2-y_1}{x_2-x_1}
  \\
  b = \frac{x_2y_1 - x_1y_2}{x_2-x_1}
\end{cases}
$$

## Implementation

```
function triangleCentroid([a,b], [c,d], [e,f]) {
    const P = intersection([a,b], [e,f]);
    const Q = intersection([a,b], [c,d]);
    const R = intersection([c,d], [e,f]);

    const p = half(R,Q);
    const r = half(P,Q);

    const i = functionByPoints(P, p);
    const j = functionByPoints(R, r);

    const C = intersection(i, j);
    return C;

    function intersection([A,B], [C,D]) {
        return [
            (D-B)/(A-C),
            (A*(D-B))/(A-C)+B
        ];
    }
    function half([x1,y1], [x2,y2]) {
        return [
            (x1+x2)/2,
            (y1+y2)/2
        ];
    }
    function functionByPoints([x1,y1], [x2,y2]) {
        const A = (y2-y1)/(x2-x1);
        const B = (x2*y1 - x1*y2)/(x2-x1);
        return [A, B];
    }
}
```