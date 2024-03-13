# Combinatorial Analysis

| Subset | Formula | Example problem | Solution to the example |
|--|--|--|--|
| permutation | $P_n = n!$ | In how many ways we can arrange 4 books? | $P_4 = 4! = 24$ |
| combination | $C {k \atop n} = \binom{n}{k}$ | In how many ways we can pick 2 books from a box containing 10 books? | $C {2 \atop 10} = \binom{10}{2} = \frac{10!}{2! \cdot (10-2)!} = 45$ | 
| variation without repetition | $V {k \atop n} = \frac{n!}{(n-k)!} = \displaystyle\prod_{i=0}^{k-1} n-i$ | Number of 4-digit codes that contain 4 different digits | $V {4 \atop 10} = \frac{10!}{(10-4)!} = 10 \cdot 9 \cdot 8 \cdot 7 = 5040$ |
| variation with repetition | $W {k \atop n} = n^k = \displaystyle\prod_{i=1}^{k} n$ | Number of 4-digit codes in which digits can be repeated | $W {4 \atop 10} = 10^4 = 10000$ |

> `n` - size of entire set  
> `k` - size of a subset

## Binomial coefficient

> read as _n choose k_

$$
\binom{n}{k} = \frac{n!}{k! \cdot (n-k)!}
$$

$$
k,n \in \mathbb{N} \ \cup\ \\{0\\};
k \leq n
$$

### Properties

- $\binom{n}{0} = \binom{n}{n} = 1$
- $\binom{n}{1} = \binom{n}{n-1} = n$

## What to pick

- All elements required?
  - **YES**: _permutation_
  - **NO**:
    - Elements order matters?
      - **YES**:
        - Repetition allowed?
          - **YES**: _variation with repetition_
          - **NO**: _variation without repetition_
      - **NO**: _combination_

> `(a,b)` and `(b,a)` in a combination are considered equal, in a variation - not.

## Complex examples

### Addition (OR conditions)

How many ways can you construct a team from 10 volunteers, assuming the team consists of **2 OR 3** players?

- **case 1:** the team consists of 2 players

$$
C_{10}^2 = \binom{10}{2} = 45
$$

- **case 2:** the team consists of 3 players

$$
C_{10}^3 = \binom{10}{3} = 120
$$

- **result**

$$
C^2_{10} + C^3_{10} = 165
$$

----

How many codes of length 4-6 are there (i.e., codes whose length is **4 OR 5 OR 6**)?

- **case 1:** 4-digit codes

$$
W^4_{10} = 10^4 = 10\ 000
$$

- **case 2:** 5-digit codes


$$
W^5_{10} = 10^5 = 100\ 000
$$

- **case 3:** 6-digit codes

$$
W^6_{10} = 10^6 = 1\ 000\ 000
$$

- **result**

$$
W^4_{10} + W^5_{10} + W^6_{10} = 1\ 110\ 000
$$

<!--
### Multiplication (AND conditions)
-->
