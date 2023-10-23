# Combinatorial Analysis

| Subset | Formula |
|--|--|
| permutation | $P_n = n!$ |
| combination | $C {k \atop n} = \binom{n}{k}$ |
| variation without repetition | $V {k \atop n} = \frac{n!}{(n-k)!} = \displaystyle\prod_{i=0}^{k-1} n-i$ |
| variation with repetition | $W {k \atop n} = n^k$ |

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
  - **YES**: permutation
  - **NO**:
    - Elements order matters?
      - **YES**:
        - Repetition allowed?
          - **YES**: variation with repetition
          - **NO**: variation without repetition
      - **NO**: combination
