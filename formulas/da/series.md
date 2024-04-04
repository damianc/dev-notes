# Series

## Getting words

| Word | Arithmetic | Geometric |
|--|--|--|
| _n-th_ | $a_n=a_1+(n-1)r$ | $a_n=a_1 \cdot q^{n-1}$ |
| _n-th_ by _k-th_ | $a_n=a_k+(n-k)r$ | $a_n=a_k \cdot q^{n-k}$ |
| position of word $x$ | $n=1+\frac{x-a_1}{r}$ | $n=1+\log_q\left(\frac{x}{a_1}\right)$ |


## Sum of $n$ first words

### Arithmetic series

$S_n = \displaystyle\frac{a_1+a_n}{2} \cdot n$

$S_n = \displaystyle\left[a_1 + \frac{(n-1)r}{2}\right] \cdot n$

- words $\langle k;n \rangle$

$S_n^k = \displaystyle\frac{a_k+a_n}{2} + (n-k+1)$

### Geometric series

$$
S_n = \left\\{\begin{array}{ll}
 a_1 \cdot \frac{1-q^n}{1-q} & \iff q \neq 1
 \\
 a_1 \cdot n & \iff q = 1
\end{array}\right.
$$

## Constructing series

### Arithmetic

- $h$ - first word
- $t$ - last word
- $n$ - number of words (including $h$ and $t$)

$$
r = \frac{t-h}{n-1}
$$

**EXAMPLE**  

- $h=4$
- $t=24$
- $n=6$

$$
r = \frac{24-4}{5} = 4
$$

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
{\boldsymbol{4}} &
8 & 12 & 16 & 20 &
{\boldsymbol{24}}
\\
\hline
\end{array}
$$

### Geometric

- $h$ - first word
- $t$ - last word
- $n$ - number of words (including $h$ and $t$)

$$
q = \sqrt[n-1]{\frac{t}{h}}
$$

**EXAMPLE**  

- $h=2$
- $t=16$
- $n=4$

$$
q = \sqrt[3]{\frac{16}{2}} = \sqrt[3]{8} = 2
$$

$$
\begin{array}{|c|c|c|c|}
\hline
{\boldsymbol{2}} &
4 & 8 &
{\boldsymbol{16}}
\\
\hline
\end{array}
$$
