# Pseudocode Theorem

| Operation | Notation G | Notation A |
|--|--|--|
| filter | $$\underset{i \in S}{{\large\Rsh}} i \gt 10$$ | $$\underset{i \in S}{{\large\forall}} i \dashrightarrow i \gt 10$$ |

## Conditions

| Symbol | Meaning |
|--|--|
| $p \Rightarrow q$ | if `p` then `q` |
| $p \nRightarrow q$ | if not `p` then `q` |
| $p \Leftarrow q$ | `p` if `q` |
| $p \nLeftarrow q$ | `p` if not `q` |
| $p \Leftrightarrow q$ | `p` if `q` |
| $p \nLeftrightarrow q$ | `p` if not `q` |

## Loops

| Symbol | Meaning |
|--|--|
| $$\sum_{i=1}^{\overline{\overline{A}}} \\!\\!\\!\\! \varnothing \quad \\{ \ldots \\}$$ | iteration |
| $$^{\text{iter:}} \sum_{i=1}^{\overline{\overline{A}}} \\!\\!\\!\\! \varnothing \quad \\{ \ldots \\}$$ | named iteration |
| $$\circlearrowright$$ | skip this iteration and continue |
| $$\dashv$$ | stop and exit from loop |
| $$\curvearrowright$$ | _continue_ parent loop |
| $$\overset{\text{iter}}{\curvearrowright}$$ | _continue_ given loop |
| $$\curvearrowleft$$ | _break_ parent loop |
| $$\overset{\text{iter}}{\curvearrowleft}$$ | _break_ given loop |
