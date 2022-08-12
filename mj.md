# MathJax

* [MathJax Formatting](#mathjax-formatting)
  - [Special Chars](#special-chars)
  - [Display Mode](#display-mode)
* [Operators](#operators)
* [Basic Stuff](#basic-stuff)
  - [Combined](#combined)
* [Fractions](#fractions)
* [Equality Operators](#equality-operators)
* [Relation Operators](#relation-operators)
* [Sets](#sets)
* [Matrixes](#matrixes)
* [Greek](#greek)

## MathJax Formatting

### Special Chars

| Char | Meaning | Example |
|--|--|--|
| `\_` | space (`_` means _space_ here) | `x\ n` -> $x\ n$ |
| `\\` | new line | `x\\n` -> $\\x\\n$
| `\!` | move char to the left | `x\!2` -> $x\!2$ |
| `\!\!` | move char to the left x2 [...] | `x\!\!2` -> $x\!\!2$ |

### Sizing

```
\large P \normalsize P \small P
```

$\large P \normalsize P \small P$

### Decoration

$\bold{x^2}$
$\underline{x^2}$
$\overline{x^2}$
$\over x^2$
$n_{\color{red}{i-1}} + 4$
$\boxed{x^4 + 2} \div 2$

$^a_b\boxed{X^1_2}^c_d$

$\boxed{\circ}$ $\boxed{}$ $\boxed{\ \ \ \ }$
$\boxed{\ \ \circ\ \ }$
$\boxed{\ \ \circ\ \ \ \ }$
$\boxed{\ \ \ \ \circ\ \ }$

$\boxed{x^{n+\bold{2}}}$
$\boxed{x^{n+\color{red}{2}}}$

### Display Mode

| `$...$` | `$$...$$` |
|--|--|
| $\sum_{i=1}^{n}{i^2}$ | $$\sum_{i=1}^{n}{i^2}$$ |
| $\frac{x}{\frac{1}{x^2}}$ | $$\frac{x}{\frac{1}{x^2}}$$ |
| $\lim_{x \to 0}$ | $$\lim_{x \to 0}$$ |
| $\lim^{6x}_{x \to 0}$ | $$\lim^{6x}_{x \to 0}$$ |

## Brackets

$\langle$x;2$\rangle$
$[2]$
$<2>$
$(2)$
$\{2\}$
$\lbrack2\rbrack$
$\lgroup2\rgroup$

$\lceil2\rceil$
$\lfloor2\rfloor$

$\lceil2\rfloor$
$\lfloor2\rceil$

## Combinatorics

| Symbol | Expr |
|--|--|
| $\binom{n}{k}$ | `\binom{n}{k}` |
| $3!$ | `3!` |
| $\over\overline\varOmega$ | `\over\overline\varOmega` |

## Operators

| Operator | Expr |
|--|--|
| $\cdot$ | `\cdot` |
| $\times$ | `\times` |
| $\div$ | `\div` |
| $\pm$ | `\pm` |
| $\mp$ | `\mp` |

### Logical

| Operator | Expr |
|--|--|
| $\neg$ | `\neg`, `\lnot` |
| $\land$ | `\land` |
| $\lor$ | `\lor` |
| $\wedge$, $\bigwedge$ | `\wedge`, `\bigwedge` |
| $\vee$, $\bigvee$ | `\vee`, `\bigvee` |
| $\because$ | `\because` |
| $\therefore$ | `\therefore` |
| $\exists$ | `\exists`, `\exist` |
| $\nexists$ | `\nexists` |
| $\forall$ | `\forall` |
| $\not\forall$ | `\not\forall` |
| $\implies$ | `\implies` |
| $\impliedby$ | `\impliedby` |
| $\iff$ | `\iff` |

### Circled

| Operator | Expr |
|--|--|
| $\bull$ | `\bull`, `\bullet` |
| $\circ$ | `\circ` |
| $\oplus$ | `\oplus` |
| $\ominus$ | `\ominus` |
| $\otimes$ | `\otimes` |
| $\oslash$ | `\oslash` |
| $\odot$ | `\odot` |
| $\bigcirc$ | `\bigcirc` |
| $\bigoplus$ | `\bigoplus` |
| $\bigotimes$ | `\bigotimes` |
| $\bigodot$ | `\bigodot` |

## Basic Stuff

| Op | Expr |
|--|--|
| $n^{10}$ | `n^{10}` |
| $n^2$ | `n^2` |
| $\sqrt{16}$ | `\sqrt{16}` |
| $\sqrt[3]{27}$ | `\sqrt[3]{27}` |
| $a_2$ | `a_2` |
| $n_k$ | `n_k` |
| $\sin^2{x}$ | `\sin^2{x}` |
| $\log_{n}{x}$ | `\log_{n}{x}`

### Combined

| Op | Expr |
|--|--|
| $n_k^2$ | `n_k^2`, `n^2_k` |
| $2^{x^4}$ | `2^{x^4}` |
| $x_{i_n}$ | `x_{i_n}` |
| $2^{x_n}$ | `2^{x_n}` |
| $x_{n^2}$ | `x_{n^2}` |
| $_{10}X$ | `_{10}X` |
| $^{10}X$ | `^{10}X` |
| $^k_n{10}$ | `^k_n{10}`, `_n^k{10}` |
| $\sqrt[n^2]{x_{n}+10}$ | `\sqrt[n^2]{x_{n}+10}` |

## Fractions

| Op | Expr |
|--|--|
| $\frac{1}{2}$ | `\frac{1}{2}` |
| $\frac{x}{\frac{n^2}{4}}$ | `\frac{x}{\frac{n^2}{4}}` |
| $\large\frac{x}{\frac{n^2}{4}}$ | `\large\frac{x}{\frac{n^2}{4}}` |
| $^1/_2$ | `^1/_2` |
| $_1\backslash^2$ | `\_1\backslash^2`

$a\|b \nparallel \perp$

## Equality Operators

| Operator | Expr |
|--|--|
| $=$ | `=` |
| $\not=$ | `\not=`, `\ne`, `\neq` |
| $\approx$ | `\approx` |
| $\cong$ | `\cong` |
| $\ncong$ | `\ncong` |
| $\bumpeq$ | `\bumpeq` |
| $\Bumpeq$ | `\Bumpeq` |
| $\equiv$ | `\equiv` |


## Relation Operators

| Operator | Expr | Negated | Expr
|--|--|--|--|
| $\gt$ | `\gt` | $\not\gt$ | `\not\gt`, `\ngtr` |
| $\lt$ | `\lt` | $\not\lt$ | `\not\lt`, `\nless` |
| $\ge$ | `\ge`, `\geq` | $\not\ge$ | `\not\ge`, `\not\geq`, `\ngeq` |
||| $\gneq$ | `\gneq` |
| $\le$ | `\le`, `\leq` | $\not\le$ | `\not\le`, `\not\leq`, `\nleq` |
||| $\lneq$ | `\lneq` |
| $\geqslant$ | `\geqslant` | $\ngeqslant$ | `\ngeqslant` |
| $\leqslant$ | `\leqslant` | $\nleqslant$ | `\nleqslant` |
| $\geqq$ | `\geqq` | $\ngeqq$ | `\ngeqq` |
||| $\gneqq$ | `\gneqq` |
| $\leqq$ | `\leqq` | $\nleqq$ | `\nleqq` |
||| $\lneqq$ | `\lneqq` |
| $\gtrsim$ | `\gtrsim` | $\gnsim$ | `\gnsim` |
| $\lesssim$ | `\lesssim` | $\lnsim$ | `\lnsim` |
| $\gtrapprox$ | `\gtrapprox` | $\gnapprox$ | `\gnapprox` |
| $\lessapprox$  | `\lessapprox` | $\lnapprox$ | `\lnapprox` |

$\lessdot$ $\gtrdot$


$\lessgtr$

$\lesseqgtr$ $\lesseqqgtr$

$\gtrless$

$\gtreqless$ $\gtreqqless$

$\backsim$
 $\sim$ $\approx$
 $\nsim$ $\not\approx$

$\gg$ $\ll$
$\ggg$ $\lll$

## Geometry

$\measuredangle$
$\angle$
$\perp$
$\parallel$ $\nparallel$

## Sets

| Symbol | Expr |
|--|--|
| $\emptyset$ | `\empty`, `\emptyset` |
| $\varnothing$ | `\varnothing` |
| $\supset$ | `\supset` |
| $\subset$ | `\subset` |
| $\supe$ | `\supe`, `\supseteq` |
| $\sube$ | `\sube`, `\subseteq` |
| $\sqsupset$ | `\sqsupset` |
| $\sqsubset$ | `\sqsubset` |
| $\sqsupseteq$ | `\sqsupseteq` |
| $\sqsubseteq$ | `\sqsubseteq` |
| $\setminus$ | `\setminus` |
| $\supseteqq$ | `\supseteqq` |
| $\nsupseteqq$ | `\nsupseteqq` |
| $\subseteqq$ | `\subseteqq` |
| $\nsubseteqq$ | `\nsubseteqq` |

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

---

```
$\begin{bmatrix}
a \\ b
\end{bmatrix}
\times
\begin{bmatrix}
c \\ d
\end{bmatrix}$
```

$\begin{bmatrix}
a \\ b
\end{bmatrix}
\times
\begin{bmatrix}
c \\ d
\end{bmatrix}$

----

```
$$
\begin{bmatrix}
\begin{bmatrix}1_a&2_a\\3_a&4_a\end{bmatrix}
&
\begin{bmatrix}1_b&2_b\\3_b&4_b\end{bmatrix}
\\\\
\begin{bmatrix}1_c&2_c\\3_c&4_c\end{bmatrix}
&
\begin{bmatrix}1_d&2_d\\3_d&4_d\end{bmatrix}
\end{bmatrix}
$$
```

$$
\begin{bmatrix}
\begin{bmatrix}1_a&2_a\\3_a&4_a\end{bmatrix}
&
\begin{bmatrix}1_b&2_b\\3_b&4_b\end{bmatrix}
\\\\
\begin{bmatrix}1_c&2_c\\3_c&4_c\end{bmatrix}
&
\begin{bmatrix}1_d&2_d\\3_d&4_d\end{bmatrix}
\end{bmatrix}
$$

----

```
$$
\begin{bmatrix}
1_1 & \cdots & 1_n
\\
\vdots & \ddots & \vdots
\\
n_1 & \cdots & n_n
\end{bmatrix}
$$
```

$$
\begin{bmatrix}
1_1 & \cdots & 1_n
\\
\vdots & \ddots & \vdots
\\
n_1 & \cdots & n_n
\end{bmatrix}
$$

### Other Matrixes

$\begin{bmatrix}
a &  c & e
\\
b & d & f
\end{bmatrix}$

$\begin{matrix}
a &  c & e
\\
b & d & f
\end{matrix}$

$\begin{pmatrix}
a &  c & e
\\
b & d & f
\end{pmatrix}$

$\begin{Bmatrix}
a &  c & e
\\
b & d & f
\end{Bmatrix}$

$\begin{vmatrix}
a &  c & e
\\
b & d & f
\end{vmatrix}$

$\begin{Vmatrix}
a &  c & e
\\
b & d & f
\end{Vmatrix}$

## Arrays

$\left(\begin{array}{cc|c}
1&2&3
\\
4&5&6
\end{array}\right)$

$\left\{\begin{array}{cc|c}
1&2&3
\\
4&5&6
\end{array}\right\}$

$\left|\begin{array}{cc|c}
1&2&3
\\
4&5&6
\end{array}\right|$

$\left\|\begin{array}{cc|c}
1&2&3
\\
4&5&6
\end{array}\right\|$

$\begin{array}{cc|c}
1&2&3
\\
4&5&6
\end{array}$

----

* with array:

$\left\{\begin{array}{c}
a_1x + b_1y + c_1z = d_1
\\
a_2x + b_2y + c_2z = d_2
\\
a_3x + b_3y + c_3z = d_3
\end{array}\right.$

* with cases:

$\begin{cases}
a_1x + b_1y + c_1z = d_1
\\
a_2x + b_2y + c_2z = d_2
\\
a_3x + b_3y + c_3z = d_3
\end{cases}$


----

$\left[\begin{array}{c||cc|c}
1&2&3&4
\\
5&6&7&8
\end{array}\right]$

$\left[\begin{array}{c||cc|c}
1&2&3&4
\\\hline
5&6&7&8
\end{array}\right]$

$\left[\begin{array}{cccc}
1&2&3&4
\\
5&6&7&8
\\\hline
x_1&x_2&x_3&x_4
\end{array}\right]$

$\begin{array}{c|ccc}
x&2&3&4
\\
y&6&7&8
\\\hline
&x_2&x_3&x_4
\end{array}$

----

$$
\left[\begin{array}{cc}
\left(\begin{array}{cc}
a&b\\c&d
\end{array}\right)
&
\left\{\begin{array}{cc}
a&b\\c&d
\end{array}\right\}_2^n
\\\\
\left\|\begin{array}{c|c}
1&2\\\hline 3&4
\end{array}\right\|
&
\left[\begin{array}{cc|c}
a&b&+\\c&d&x
\end{array}\right]
\end{array}\right]
$$

## Cases

$$
f(n) = \begin{cases}
n/2, & \text{if $n$ is even}
\\
3n+1, & \text{if $n$ is odd}
\end{cases}
$$

$$
f(n) = \begin{cases}
n/2, & \text{if $n$ is even}
\\\hline
3n+1, & \text{if $n$ is odd}
\\
3n+2, & \text{if $n$ is odd and $\gt$ 100}
\end{cases}
$$

----

$$
f(n) = \begin{cases}
n/2, & \text{if $n$ is even}
\\
3n+
\begin{cases}
1 & \text{if $n$ is odd}
\\
2 & \text{if $n$ is odd and $\gt 100$}
\end{cases}
\end{cases}
$$

----

$$
\left.\begin{array}{l}
\text{if $n$ is even:} & n/2
\\
\text{if $n$ is odd:} & 3n+1
\end{array}\right\}
=f(n)
$$

## Crossing Out

$$
y+\cancel{x} \\
\cancel{y+x} \\
y+\bcancel{x} \\
\bcancel{y+x} \\
y+\xcancel{x} \\
\xcancel{y+x} 
\\
\frac{1\cancel9}{\cancel95} = \frac15
$$

$$
.\\+\\.\\-\\.
$$

$$
\begin{CD}
A @>a_1>a_2> B @= X
\\
@A d_1 A d_2 A = @VVbV @|
\\
D @<< c< C @. Y
\end{CD}
$$

----

$$
\begin{CD}
arbuz @>\bold{siek}iera>> \Bbb{SKORUPA} + \rm{miąższ}
\end{CD}
$$

$$
\begin{CD}
RCOHR'SO_3Na
@>{\text{Hydrolysis,$\Delta, Dil.HCl$}}>>
(RCOR')+NaCl+SO_2+ H_2O
\end{CD}
$$

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

### Variables

| Var | Expr |
|--|--|
| $\varGamma$ | `\varGamma` |
| $\varDelta$ | `\varDelta` |
| $\varepsilon$ | `\varepsilon` |
| $\vartheta$, $\varTheta$ | `\vartheta`, `\varTheta` |
| $\varkappa$ | `\varkappa` |
| $\varLambda$ | `\varLambda` |
| $\varXi$ | `\varXi` |
| $\varpi$, $\varPi$ | `\varpi`, `\varPi` |
| $\varrho$ | `\varrho` |
| $\varsigma$, $\varSigma$ | `\varsigma`, `\varSigma` |
| $\varUpsilon$ | `\varUpsilon` |
| $\varphi$, $\varPhi$ | `\varphi`, `\varPhi` |
| $\varPsi$ | `\varPsi` |
| $\varOmega$ | `\varOmega` |

### Others

$\ell$
$\eth$
$\daleth$

----

# `nth-[last-]child()`

## Common Recipes

| Elements to Match | Selector | Preview |
|--|--|--|
| 4th | `div:nth-child(4)` | $\square\square\square\blacksquare\square\square\square\square$ |
| 4th and 5th | `div:nth-child(4), div:nth-child(5)` | $\square\square\square\blacksquare\blacksquare\square\square\square$ |
| 4th-6th | `div:nth-child(n+4):nth-child(-n+6)` | $\square\square\square\blacksquare\blacksquare\blacksquare\square\square$ |
| even | `div:nth-child(even)` | $\square\blacksquare\square\blacksquare\square\blacksquare\square\blacksquare$ |
| odd | `div:nth-child(odd)` | $\blacksquare\square\blacksquare\square\blacksquare\square\blacksquare\square$ |

## Heads and Tails

| Elements to Match | Selector | Preview |
|--|--|--|
| first 4 items | `:nth-child(-n+4)` | $\blacksquare\blacksquare\blacksquare\blacksquare\square\square\square\square\square\square$ |
| last 4 items | `:nth-last-child(-n+4)` | $\square\square\square\square\square\square\blacksquare\blacksquare\blacksquare\blacksquare$ |
| first 4 and last 4 items | `:nth-child(-n+4), :nth-last-child(-n+4)` | $\blacksquare\blacksquare\blacksquare\blacksquare\square\square\blacksquare\blacksquare\blacksquare\blacksquare$ |
| all but first 4 items | `:nth-child(n+5)` | $\color{#bbb}{\cancel{\square\square\square\square}}\color{#000}{\blacksquare\blacksquare\blacksquare\blacksquare\blacksquare\blacksquare}$ |
| all but last 4 items | `:nth-last-child(n+5)` | $\blacksquare\blacksquare\blacksquare\blacksquare\blacksquare\blacksquare\color{#bbb}{\cancel{\square\square\square\square}}$ |
| all but first 4 and last 4 items | `:nth-child(n+5):nth-last-child(n+5)` | $\color{#bbb}{\cancel{\square\square\square\square}}\color{#000}{\blacksquare\blacksquare}\color{#bbb}{\cancel{\square\square\square\square}}$ |

### 'Every 2nd' Variants

| Elements to Match | Selector | Preview |
|--|--|--|
| every 2nd from first 4 items | a) `:nth-child(-2n+4)` $$\ $$ b) `:nth-child(-n+4):nth-child(even)` | $\square\blacksquare\square\blacksquare\color{#bbb}{\square\square\square\square\square\square}$ |
| as above but starting from 1st | a) `:nth-child(-2n+3)` $$\ $$ b) `:nth-child(-n+4):nth-child(odd)` | $\blacksquare\square\blacksquare\square\color{#bbb}{\square\square\square\square\square\square}$ |
| every 2nd from last 4 items | a) `:nth-last-child(-2n+4)` $$\ $$ b) `:nth-last-child(-n+4):nth-child(even)` | $\color{#bbb}{\square\square\square\square\square\square}\color{#000}{\blacksquare\square\blacksquare\square}$ |
| as above but starting from "1st" | a) `:nth-last-child(-2n+3)` $$\ $$ b) `:nth-last-child(-n+4):nth-child(odd)` | $\color{#bbb}{\square\square\square\square\square\square}\color{#000}{\square\blacksquare\square\blacksquare}$ |
| every 2nd but starting from 5th | `:nth-child(n+5)` | $\cancel{\square\square\square\square}\blacksquare\blacksquare\blacksquare\blacksquare\blacksquare\blacksquare$ |
| every 2nd but without 4 last items | `:nth-last-child(n+5)` | $\blacksquare\blacksquare\blacksquare\blacksquare\blacksquare\blacksquare\square\square\square\square$ |

n+6
from 6th on
= omit first 5

 Value | Matched Elements | Preview |
|--|--|--|
| `3` | **3rd** item | $\square \square \blacksquare \square \square \square \square \square \square \square$ |
| `3n` | **every 3rd** item [3rd, 6th, 9th, 12th ...] | $\square \square \blacksquare \square \square \blacksquare \square \square \blacksquare \square$ |
| `3n+1` | **every 3rd** but starting **from 1st** [1st, 4th, 7th, 10th ...] | $\blacksquare \square \square \blacksquare \square \square \blacksquare \square \square \blacksquare$ |
| `3n+6` | **every 3rd** but starting **from 6th** [6th, 9th, 12th, 15th ...] | $\square \square \square \square \square \blacksquare \square \square \blacksquare \square$ |
| `-3n+6` | **every 3rd** from **6th to 1st** [3rd and 6th] | $\square \square \blacksquare \square \square \overleftarrow{\blacksquare} \square \square \square \square$ |
| `-4n+6` | **every 4th** from **6th to 1st** [2nd and 6th] | $\square \blacksquare \square \square \square \mathring\blacksquare \square \square \square \square$ |
| `5n-2` | match ***every 5th*** and ***back by 2*** [5th, 10th, 15th, 20th ... $\Rightarrow$ 3rd, 8th, 13th, 18th ...] | $\square \square \blacksquare \square _{\leftarrow 2} \check\square \square \square \blacksquare \square _{\leftarrow 2} \check\square$ |

$\square\square\check\blacksquare\overleftarrow{\square}\hat\square\square\square...$

$\boxed{1} \boxed{2} \boxed{3} \boxed{4} \cancel{\boxed{5}} \boxed{6}$

$\boxed{\leftarrow\cancel5}$
$\boxed{\ll^2\cancel5}$

$\boxed{\bold3}\boxed{4} _{\ \color{red}{\leftarrow\ 2}\ }\boxed{\cancel5}$

$\boxed{\bold3}\boxed{4}\boxed{\ll^2}\boxed{\cancel5}$

## Order

```
li:nth-child(-n+4),li:nth-last-child(-n+4)
// first 4 and last 4

li:nth-child(-n+4):nth-last-child(-n+4)
// nothing
```

$\square \square \color{red}\blacksquare\color{#000} \square \color{red}_{\ \ \leftarrow\ 2\ \ }\color{#000}\color{#888} \cancel{\check\square} \color{#000}\square \square \blacksquare \square _{\leftarrow 2} \check\square \frac{\Leftarrow}{4}$

$\Leftarrow_2$