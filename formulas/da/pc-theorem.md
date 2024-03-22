# Pseudocode Theorem

| Operation | Notation G | Notation A |
|--|--|--|
| filter | $$\underset{i \in S}{{\large\Rsh}} \quad i \gt 10$$ | $$\underset{i \in S}{{\large\forall}} i \dashrightarrow i \gt 10$$ |
| exclude | $$\underset{i \in S}{{\large\Lsh}} \quad i \gt 10$$ | $$\underset{i \in S}{{\large\forall}} i \dashleftarrow i \gt 10$$ |
| reduce | $$\underset{i \in S}{{\large\pitchfork}} \quad \partial + i $$ | $$\underset{i \in S}{{\large\forall}} i \looparrowright \partial + i$$ |
| map | $$\underset{i \in S}{{\large\triangleright}} \quad i^2$$ | $$\underset{i \in S}{{\large\forall}} i \mapsto i^2$$ |
| flat map | $$\underset{i \in S}{{\large\triangleright\triangleright}} \quad [i,i^2]$$ | $$\underset{i \in S}{{\large\forall}} i \twoheadrightarrow [i,i^2]$$ |
| check _some_ | $$\underset{i \in S}{{\large\cup}} \quad i \gt 10$$ | |
| check _every_ | $$\underset{i \in S}{{\large\cap}} \quad i \gt 10$$ | |

## Pipe

| Expression | Piped expression |
|--|--|
| $\sqrt{ax}$ | $\sqrt{\partial} \leftarrowtail ax$ |
| $\frac{1}{ax}$ | $\frac{1}{\partial} \leftarrowtail ax$ |
| $\sqrt{\frac{1}{ax}}$ | $\sqrt{\partial} \leftarrowtail \left(\frac{1}{\partial} \leftarrowtail ax\right)$ |

> Counting items:
>
> $$n = \left\lgroup \overline{\overline{\partial}} \leftarrowtail \left[\underset{i \in S}{\large \Rsh} \quad i \gt 10\right] \right\rgroup$$

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
