# Short Multiplication

## 2 Words

$$
\textcolor{#a2e}{\lfloor H \rceil}
= a^2 + b^2
$$

$$
a\ 
\textcolor{#2ae}{\lfloor op \rceil}
\ b
\mapsto
\textcolor{#a2e}{\lfloor H \rceil}
\textcolor{#2ae}{\lfloor op \rceil}
2ab
$$

| $(...)^2$ | | H ... |
|--|--|--|
| $\color{#ae2} \lfloor + \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#ae2} \lfloor + \rceil$ |
| $(a+b)^2$ | $\mapsto$ | $H + 2ab$ |
| $\color{#f00} \lfloor - \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#f00} \lfloor - \rceil$ |
| $(a-b)^2$ | $\mapsto$ | $H - 2ab$ |

## 3 Words

$$
\textcolor{#a2e}{\lfloor H \rceil}
= a^2 + b^2 + c^2
$$

$$
a\ 
\textcolor{#2ae}{\lfloor op\ 1 \rceil}
\ b\ 
\textcolor{#fa0}{\lfloor op\ 2 \rceil}
\ c
\mapsto
\textcolor{#a2e}{\lfloor H \rceil}
\textcolor{#2ae}{\lfloor op\ 1 \rceil}
\ 2ab\ 
\textcolor{#fa0}{\lfloor op\ 2 \rceil}
\ 2ac\ 
\left[
\begin{cases}
op\ 1 = op\ 2 \implies \color{#ae2} \lfloor + \rceil
\\
op\ 1 \neq op\ 2 \implies \color{#f00} \lfloor - \rceil
\end{cases}
\right]
\ 2bc
$$

| $(...)^2$ | | H ... |
|--|--|--|
| $\color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil$ |
| $(a+b+c)^2$ | $\mapsto$ | $H + 2ab + 2ac + 2bc$ |
| $\color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil$ |
| $(a-b-c)^2$ | $\mapsto$ | $H - 2ab - 2ac + 2bc$ |
| $\color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil$ |
| $(a+b-c)^2$ | $\mapsto$ | $H + 2ab - 2ac - 2bc$ |
| $\color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil$ |
| $(a-b+c)^2$ | $\mapsto$ | $H - 2ab + 2ac - 2bc$ |

## 4 Words

$$
\textcolor{#a2e}{\lfloor H \rceil}
= a^2 + b^2 + c^2 + d^2
$$

### $3 \times \textcolor{#ae2}{\lfloor + \rceil} \ \cup\ 3 \times \textcolor{#f00}{\lfloor - \rceil}$

$a\ 
\textcolor{#2ae}{\lfloor op \rceil}
\ b\ 
\textcolor{#2ae}{\lfloor op \rceil}
\ c\ 
\textcolor{#2ae}{\lfloor op \rceil}
\ d\ 
\mapsto
\textcolor{#a2e}{\lfloor H \rceil}
\textcolor{#2ae}{\lfloor op \rceil}
\ 2ab\ 
\textcolor{#2ae}{\lfloor op \rceil}
\ 2ac\ 
\textcolor{#2ae}{\lfloor op \rceil}
\ 2ad\ 
\textcolor{#ae2}{\lfloor + \rceil}
\ 2bc\ 
\textcolor{#ae2}{\lfloor + \rceil}
\ 2bd\ 
\textcolor{#ae2}{\lfloor + \rceil}
\ 2cd\ $

| $(...)^2$ || H ... |
|-|-|-|
| $\color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil$ |
| $(a+b+c+d)^2$ | $\mapsto$ | $H + 2ab + 2ac + 2ad + 2bc + 2bd + 2cd$ |
| $\color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil$ |
| $(a-b-c-d)^2$ | $\mapsto$ | $H - 2ab - 2ac - 2ad + 2bc + 2bd + 2cd$ |

### $1 \times \textcolor{#ae2}{\lfloor + \rceil} \ \cap\ 2 \times \textcolor{#f00}{\lfloor - \rceil}$

$a\ 
\textcolor{#2ae}{\lfloor op\ 1 \rceil}
\ b\ 
\textcolor{#fa0}{\lfloor op\ 2 \rceil}
\ c\ 
\textcolor{#a2e}{\lfloor op\ 3 \rceil}
\ d\ 
\mapsto
\textcolor{#a2e}{\lfloor H \rceil}
\textcolor{#2ae}{\lfloor op\ 1 \rceil}
\ 2ab\ 
\textcolor{#fa0}{\lfloor op\ 2 \rceil}
\ 2ac\ 
\textcolor{#a2e}{\lfloor op\ 3 \rceil}
\ 2ad\ 
\textcolor{#a2e}{\lfloor op\ 3 \rceil}
\ 2bc\ 
\textcolor{#fa0}{\lfloor op\ 2 \rceil}
\ 2bd\ 
\textcolor{#2ae}{\lfloor op\ 1 \rceil}
\ 2cd$

| $(...)^2$ | | H ... |
|--|--|--|
| $\color{#ae2} \lfloor + \rceil\color{#f00} \lfloor - \rceil\color{#f00} \lfloor - \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil$ |
| $(a+b-c-d)^2$ | $\mapsto$ | $H+2ab-2ac-2ad-2bc-2bd+2cd$ |
| $\color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil$ |
| $(a-b+c-d)^2$ | $\mapsto$ | $H-2ab+2ac-2ad-2bc+2bd-2cd$ |
| $\color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil\color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil$ |
| $(a-b-c+d)^2$ | $\mapsto$ | $H-2ab-2ac+2ad+2bc-2bd-2cd$ |

### $2 \times \textcolor{#ae2}{\lfloor + \rceil} \ \cap\ 1 \times \textcolor{#f00}{\lfloor - \rceil}$

$a\ 
\textcolor{#2ae}{\lfloor op\ 1 \rceil}
\ b\ 
\textcolor{#fa0}{\lfloor op\ 2 \rceil}
\ c\ 
\textcolor{#a2e}{\lfloor op\ 3 \rceil}
\ d\ 
\mapsto
\textcolor{#a2e}{\lfloor H \rceil}
\textcolor{#2ae}{\lfloor op\ 1 \rceil}
\ 2ab\ 
\textcolor{#fa0}{\lfloor op\ 2 \rceil}
\ 2ac\ 
\textcolor{#a2e}{\lfloor op\ 3 \rceil}
\ 2ad\ 
\textcolor{#d4f}{\lfloor -op\ 3 \rceil}
\ 2bc\ 
\textcolor{#fc2}{\lfloor -op\ 2 \rceil}
\ 2bd\ 
\textcolor{#4cf}{\lfloor -op\ 1 \rceil}
\ 2cd$

| $(...)^2$ | | H... |
|--|--|--|
| $\color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil$ | $\mapsto$| $\color{#a2e} \lfloor H \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil$ |
| $(a-b+c+d)^2$ | $\mapsto$ | $H-2ab+2ac+2ad-2bc-2bd+2cd$ |
| $\color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil$|
| $(a+b-c+d)^2$| $\mapsto$ | $H+2ab-2ac+2ad-2bc+2bd-2cd$ |
| $\color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil$ |
| $(a+b+c-d)^2$ | $\mapsto$ | $H+2ab+2ac-2ad+2bc-2bd-2cd$ |
