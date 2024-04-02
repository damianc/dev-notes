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
