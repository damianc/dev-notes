# Average Deviations

## Arithmetic Seq. Dev.

$$
\hat{d}_A =
{\large \frac{1}{n-2}}
\left[
 \sum\_{i=2}^{n-1}
 (x_i - x_1) +
 \frac{(i-1)(x_n-x_1)}{n-1}
\right]
$$

## Geometric Seq. Dev.

$$
\hat{d}_G =
\sqrt[n-2]{
 \prod\_{i=2}^{n-1}
 x_i - \left[
  x_1 \cdot
  \left(
   \frac{x_n}{x_1}
  \right)^{\frac{i-1}{n-1}}
 \right]
}
$$

## Arithmetic-Geometric Seq. Span Dev.

$$
\hat{d}^A_G = {\large \frac{1}{n}}
\left[
 \sum_{i=1}^{n}
 \overleftarrow{g}(x_i) -
 \overleftarrow{f}(x_i)
\right]
$$

$$
\iff
$$

$$
\overleftarrow{f}(x) = \frac{(x-x_1)(n-1)}{x_n-1}+1
$$

$$
\overleftarrow{g}(x) = (n-1) \cdot log_{\frac{max}{min}}\left(\frac{x}{x_1}\right)+1
$$

## Arithmetic Seq. Mean Dev.

$$
\tilde{d}_A = \left\| \overline{d}_A - \hat{d}_A \right\|
$$

$$
\iff
$$

$$
\overline{d}\_A = \frac
{\displaystyle\sum_{i=2}^{n-1} x_i}
{n-2}
$$

$$
\hat{d}\_A = \frac{
 \displaystyle\sum_{i=2}^{n-1}
 x_1 + \frac{(i-1)(x_n-x_1)}{n-1}
}{n-2}
$$

## Geometric Seq. Mean Dev.

$$
\tilde{d}_G = \left\| \overline{d}_G - \hat{d}_G \right\|
$$

$$
\iff
$$

$$
\overline{d}\_G = \sqrt[n-2]{
 \prod_{i=2}^{n-1} x_i
}
$$

$$
\hat{d}\_G = \sqrt[n-2]{
 \prod_{i=2}^{n-1}
 x_1 \cdot \left(
  \frac{x_n}{x_1}
 \right)^{\frac{i-1}{n-1}}
}
$$

## Perp. Dist. Dev.

$$
\hat{d}_{\perp} =
{\large \frac{1}{n-2}}
\left[
 \sum\_{i=2}^{n-1}
 \frac{\|f(i)-x_i\|}{\|\|v\|\|}
\right]
$$

$$
\iff
$$

$$
m = \frac{x_n-x_1}{n-1}
$$

$$
f(x) = (x-1)m + x_1
$$

$$
\|\|v\|\| = \sqrt{1+m^2}
$$

## Segmented Length Dev.

$$
\overline{d}_L = \left\| \overline{L}-\hat{L} \right\|
$$

$$
\iff
$$

$$
\overline{L} = \sqrt{
 (n-1)^2 + (x_n-x_1)^2
}
$$

$$
\hat{L} = \sum_{i=1}^{n-1}
\sqrt{1 + (x_{i+1} + x_i)^2}
$$

## Segmented Area Dev.

$$
\overline{d}_A = \left\| \overline{A}-\hat{A} \right\|
$$

$$
\iff
$$

$$
\overline{A} = \frac{(n-1)(x_n-x_1)}{2}
$$

$$
\hat{A} = \sum_{i=1}^{n-1}
\frac{x_i+x_{i+1}-2x_1}{2}
$$

## Circular Dev.

$$
\mathring{d} = \frac
{
 4n \cdot \sin\left(
  \frac{(x_n-x_1)\pi}{\Sigma x}
 \right)
}
{(x_2-x_1)+(x_n-x_{n-1})}
$$
