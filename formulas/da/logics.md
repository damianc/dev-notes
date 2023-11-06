# Logics

| | | | | | | |
|--|--|--|--|--|--|--|
|| $p$ || 0 | 0 | 1 | 1 |
|| $q$ || 0 | 1 | 0 | 1 |
| AND | $p \land q$ | `p && q` | 0 | 0 | 0 | 1 |
| OR | $p \lor q$ | `p \|\| q` | 0 | 1 | 1 | 1 |
| XOR | $p \otimes q$ | `(p \|\| q) && !(p && q)` | 0 | 1 | 1 | 0 |
| NAND | $p \cancel{\land} q$ | `! (p && q)` | 1 | 1 | 1 | 0 |
| NOR | $p \cancel{\lor} q$ | `!(p \|\| q) ` | 1 | 0 | 0 | 0 |
| XNOR | $p \cancel{\otimes} q$ | `(p && q) \|\| !(p \|\| q)` | 1 | 0 | 0 | 1 |
| NOT | $\lnot p$ | `!p` | 1 | 1 | 0 | 0 |
|| $\lnot q$ | `!q` | 1 | 0 | 1 | 0 |
| $\implies$ | $p \implies q$ | `!p \|\| q` | 1 | 1 | 0 | 1 |
|| $q \implies p$ | `p \|\| !q` | 1 | 0 | 1 | 1 |
