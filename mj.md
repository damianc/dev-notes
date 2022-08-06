# Math in Markdown



$\begin{aligned}
A &= B + C \\
&= D
\end{aligned}$

$_==^=$

Average:

$\frac{\sum^k_{i=1}n_i}{k}$

Weighted average:

$\frac{\sum_{i=1}^k n_i * w_i}{}$


## Syntax

* formula is surrounded with `$`: `$expr...$`
* macros start with `\`; for example `\times` gives $\times$
* multi-digit numbers must be placed in `{}`:
  - `n^{12}` gives $n^{12}$
  - `n^12` gives $n^12$

## Matrixes

```
$\begin{bmatrix}
  MATRIX_EXPR
\end{bmatrix}$
```
`MATRIX_EXPR`:

* `a &  c & e \\ b & d & f`

$\begin{bmatrix}
a &  c & e
\\
b & d & f
\end{bmatrix}$

* `a &  c \\ b & d`

$\begin{bmatrix}
a &  c
\\
b & d
\end{bmatrix}$

* `a & c`

$\begin{bmatrix}
a &  c
\end{bmatrix}$

* `a \\ b`

$\begin{bmatrix}
a
\\
b
\end{bmatrix}$

* `a \\ b \\ c`

$\begin{bmatrix}
a
\\
b
\\
c
\end{bmatrix}$



$\begin{bmatrix}
a\\b
\end{bmatrix}\times\begin{bmatrix}
c\\d
\end{bmatrix}$

## Basic Stuff

| Op | Expr |
|--|--|
| $n^{10}$ | `n^{10}` |
| $n^2$ | `n^2` |
| $\sqrt{16}$ | `\sqrt{16}` |
| $\sqrt[3]{27}$ | `\sqrt[3]{27}` |
| $a_2$ | `a_2` |
| $n_k$ | `n_k` |
| $n_k^2$, $n^2_k$ | `n_k^2`, `n^2_k` |
| $_{10}X$ | `_{10}X` |
| $^{10}X$ | `^{10}X` |
| $^k_n{10}$, $_n^k{10}$ | `^k_n{10}`, `_n^k{10}` |
| $3!$ | `3!` |
| $\log_{n}{x}$ | `\log_{n}{x}`


$\log_{a}c^i \bigcup k$

$\displaystyle n_{k_4}$
$n_{k_4}$

### Combined

| Op | Expr |
|--|--|
| $n^{2^2}$, ${n^2}^2$ | `n^{2^2}`, `{n^2}^2` |
| $\log_2x$ | `\log_2x` |
| $log_{10} \space n^2$ | `log_{10} \space n^2` |
| $(^n_k)$, $(_k^n)$ | `(^n_k)`, `(_k^n)` |
| $^2X^k$ | `^2X^k` |
| $_2X_k$ | `_2X_k` |
| $^p_q{X^2}$ | `^p_q{X^2}` |
| $^p_q{X_2}$ | `^p_q{X_2}` |
| $^2{X^p_q}$ | `^2{X^p_q}` |
| $_2{X^p_q}$ | `_2{X^p_q}` |

## Equality Operators

| Operator | Expr |
|--|--|
| $=$ | `=` |
| $\not=$ | `\not=` |
| $\approx$ | `\approx` |
| $\cong$ | `\cong` |
| $\bumpeq$ | `\bumpeq` |


## Relation Operators

| Operator | Expr | Negated | Expr
|--|--|--|--|
| $\gt$ | `\gt` | $\not\gt$ | `\not\gt` |
| $\ge$ | `\ge`, `\geq` | $\not\ge$ | `\not\ge`, `\not\geq` |
| $\lt$ | `\lt` | $\not\lt$ | `\not\lt` |
| $\le$ | `\le`, `\leq` | $\not\le$ | `\not\le`, `\not\leq` |


## Formatting

| Output | Expr |
|--|--|
| $23$, $2\!3$, $2\!\!3$ | `23`, `2\!3`, `2\!\!3` | 
| $a\\b$ | `a\\b` |
| $a b$ vs. $a\ b$ | `a b` vs. `a\ b` |

$\not\lt$ $\cancel\lt \neg4$

## Symbols

| Symbol | Expr |
|--|--|
| $\times$ | `\times` |
| $\bull$ | `\bull` |
| $\circ$ | `\circ` |

## Greek

| Lowercase | Symbol | Uppercase | Symbol
|--|--|--|--|
| $\alpha$ | `\alpha` | $\Alpha$ | `\Alpha` |
| $\beta$ | `\beta` | $\Beta$ | `\Beta` |
|$\gamma$|`\gamma`|$\Gamma$|`\Gamma`|
|$\delta$|`\delta`|$\Delta$|`\Delta`|
|$\epsilon$|`\epsilon`|$\Epsilon$|`\Epsilon`|
|$\zeta$|`\zeta`|$\Zeta$|`\Zeta`|
|$\eta$|`\eta`|$\Eta$|`\Eta`|
|$\theta$|`\theta`|$\Theta$|`\Theta`|
|$\iota$|`\iota`|$\Iota$|`\Iota`|
|$\kappa$|`\kappa`|$\Kappa$|`\Kappa`|
|$\lambda$|`\lambda`|$\Lambda$|`\Lambda`|
|$\mu$|`\mu`|$\Mu$|`\Mu`|
|$\nu$|`\nu`|$\Nu$|`\Nu`|
|$\xi$|`\xi`|$\Xi$|`\Xi`|
|$\omicron$|`\omicron`|$\Omicron$|`\Omicron`|
|$\pi$|`\pi`|$\Pi$|`\Pi`|
|$\rho$|`\rho`|$\Rho$|`\Rho`|
|$\sigma$|`\sigma`|$\Sigma$|`\sigma`|
|$\tau$|`\tau`|$\Tau$|`\Tau`|
|$\upsilon$|`\upsilon`|$\Upsilon$|`\Upsilon`|
|$\phi$|`\phi`|$\Phi$|`\Phi`|
|$\chi$|`\chi`|$\Chi$|`\Chi`|
|$\psi$|`\psi`|$\Psi$|`\Psi`|
|$\omega$|`\omega`|$\Omega$|`\Omega`|




$\aleph$
$\beth$
$\gimel$
$\daleth$
$\he$
$\waw$
$\zayin$
$\heth$
$\teth$
$\yodh$
$\kaph$
$\lamedh$
$\mem$
$\nun$

$\samekh{2}$
$\ayin4$
$\pe4$
$\sade4$
$\qoph4$
$\res4$
$\sin4$
$\taw{3}$
$\(waw4)4$

$\backepsilon$
$\barwedge$
$\because$
$\cancel{x}$
$\bar{2}$
$\circ$
$\sqrt3$
$f$
$a b c d e f g h i j k l m n o p q r s t u v w x y z$
$A B C D E F G H I J K L M N O P Q R S T U V W X Y Z$
$\bowtie$
$\brace{4}\braket r \bra r$
$\bra 4$
$\braket {4,3}$
$\brack{4}\bullet$
$\bumpeq$
$\lt$ $\gt$
$\le \ge$
$\cancel=$
$\cancel\lt$ $\cancel\gt$
$\cancel\bumpeq$

$4^{\cancel{4}}$
$a_{\cancel{8}}$

$\approx$
$\cong$
$\sub \sube \sup \supe \supset \subset \cancel\sube \cancel\sqsubseteq$
$x \in r$ $x \cancel\in r$
$\sqsubset \sqsupset \sqsubseteq \sqsupseteq$
$\hat{x} \bull{3} \circ{3} \to  \to \leftarrow \rightarrow \top \uparrow \downarrow 3$

$\ne \neq \not{12} 34$
$a\cancel\perp{b} \cancel\parallel c \not\perp \not\parallel \not\le \cancel\le$

$\in \notin \not\in \not\notin$

$\searrow \swarrow \nearrow \nwarrow$

$\mathbb{AQ} \mathfrak{AaDd38}38$


$\eth$


$\flushleft \newenvironment{vardesc}[1]{% \settowidth{\parindent}{#1:\ } \makebox[0pt][r]{#1:\ }}{} \begin{displaymath} a^2+b^2=c^2 \end{displaymath} \begin{vardesc}{Where}$a$, $b$ -- are adjacent to the right angle of a right-angled triangle. $c$ -- is the hypotenuse of the triangle and feels lonely. $d$ -- finally does not show up here at all. Isn't that puzzling? \end{vardesc}$

Wzór __Kutafona__ na średnią grubość kutasa w punkcie $\hat{G}^2$ to:

$\varpi^6_2 \space\space\log_2\sin^2\subset\Delta\space\space\newline {x \bull y} \perp a^3$



$\begin{bmatrix}
x_a^2 & x^2_b & c^4
\\\\
y_{a^2} & y^{b_2} & \frac{\Theta_n}{{3}^{-10\times{k}}}
\end{bmatrix}^2 \bull
\hat{k}\aleph\times{R}\in(1,4)\because4^R > \square^{2+}$


Dla pizdy o głębkokości $p_\gamma$ i szerokości dennej $p_\omega$, punkt tarcia o największej czułości znajduje się na pozycji ${\aleph}^\pi$.


$\aleph^\pi = \frac{p_\gamma}{2\pi}\times\log_n{p_\omega}$

gdzie $n \in \braket{0,arccos^2{\frac{p_\gamma}{p_\omega}}\times \int_\bullet^{\Delta^4}}$ 

dla macierzy $\Delta$:

$\Delta = \sqrt[3]{\begin{bmatrix}
\gamma^2 & x^2_b & \cancel\empty_{4^2}
\\\\
\omega^2 & y^{b_2} & \frac{\Theta_n}{{3}^{-10\times{k}}}
\end{bmatrix}}, k = \tanh(90 - [\pi^{\omega-\gamma}]\degree)$