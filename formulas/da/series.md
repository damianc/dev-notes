# Series

| Data | Arithmetic | Geometric |
|--|--|--|
| n-th word | $a_n=a_1+(n-1)r$ | $a_n=a_1 \cdot q^{n-1}$ |
| n-th word by k-th word | $a_n=a_k+(n-k)r$ | $a_n=a_k \cdot q^{n-k}$ |


## Sum of $n$ first words

- **arithmetic series**

$S_n = \frac{a_1+a_n}{2} \cdot n$

$S_n = \left[a_1 + \frac{(n-1)r}{2}\right] \cdot n$

- words $\langle k;n \rangle$

$S_n^k = \frac{a_k+a_n}{2} + (n-k+1)$

- **geometric series**

$$
S_n = \left\\{\begin{array}{ll}
 a_1 \cdot \frac{1-q^n}{1-q} & \iff q \neq 1
 \\
 a_1 \cdot n & \iff q = 1
\end{array}\right.
$$
