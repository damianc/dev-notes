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

### Multiplication (AND conditions)

We are constructing a speedway team for a round. We need to select 2 out of 4 riders **AND** 2 motorcycles out of 6 available. How many ways can we make the selection?

- **part 1:** players

$$
C^2_4 = \binom{4}{2} = 6
$$

- **part 2:** motorcycles

$$
C^2_6 = \binom{6}{2} = 15
$$

- **result**

$$
C^2_4 \times C^2_6 = 90
$$

----

What is the number of codes with the pattern _DIGIT-DIGIT-DIGIT-DIGIT-LETTER-LETTER_ (i.e., codes consisting of 4 digits **AND** 2 letters)?

- **part 1:** 4 digits

$$
W^4_{10} = 10^4 = 10\ 000
$$

- **part 2:** 2 letters

$$
W^2_{26} = 26^2 = 676
$$

- **result**

$$
W^4_{10} \times W^2_{26} = 6\ 760\ 000
$$

## More complex example

How many ways can the results list of a speedway round be presented, considering that not all riders may reach the finish line?

|  |  |  |
|--|--|--|
| **case 1:** all riders reach the finish line | | |
|  | number of ways to select 4 riders | $C^4_4 = \binom{4}{4} = 1$ |
|  | number of ways to order 4 riders | $P_4 = 4! = 24$ |
|  | result for the case | $\Omega_1 = C^4_4 \times P_4 = 24$ |
| **case 2:** three riders reach the finish line | | |
|  | number of ways to select 3 riders | $C^3_4 = \binom{4}{3} = 4$ |
|  | number of ways to order 3 riders | $P_3 = 3! = 6$ |
|  | result for the case | $\Omega_2 = C^3_4 \times P_3 = 24$ |
| **case 3:** two riders reach the finish line | | |
|  | number of ways to select 2 riders | $C^2_4 = \binom{4}{2} = 6$ |
|  | number of ways to order 2 riders | $P_2 = 2! = 2$ |
|  | result for the case | $\Omega_3 = C^2_4 \times P_2 = 12$ |
| **case 4:** one rider reaches the finish line | | |
|  | number of ways to select 1 rider | $C^1_4 = \binom{4}{1} = 4$ |
|  | number of ways to order 1 rider | $P_1 = 1! = 1$ |
|  | result for the case | $\Omega_4 = C^1_4 \times P_1 = 4$ |
| **case 5:** no rider reaches the finish line | | |
|  | number of ways to order 0 riders | $P_0 = 0! = 1$ |
|  | result for the case | $\Omega_5 = 1 \times P_0 = 1$ |
| **RESULT** |  | $$\sum_{i=1}^5 \Omega_i = 65$$ |
