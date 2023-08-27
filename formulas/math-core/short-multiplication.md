# Short Multiplication

## 2 Words

$$
\color{#a2e} \lfloor H \rceil
\color{#000} = a^2 + b^2
$$

$$
\color{#000} a\ 
\color{#2ae} \lfloor op \rceil
\color{#000} \ b
\color{#000} \mapsto
\color{#a2e} \lfloor H \rceil
\color{#2ae} \lfloor op \rceil
\color{#000} 2ab
$$

| $(...)^2$ | | H ... |
|--|--|--|
| $\color{#ae2} \lfloor + \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#ae2} \lfloor + \rceil$ |
| $(a+b)^2$ | $\mapsto$ | $H + 2ab$ |
| $\color{#f00} \lfloor - \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#f00} \lfloor - \rceil$ |
| $(a-b)^2$ | $\mapsto$ | $H - 2ab$ |

## 3 Words

$$
\color{#a2e} \lfloor H \rceil
\color{#000} = a^2 + b^2 + c^2
$$

$$
\color{#000} a\ 
\color{#2ae} \lfloor op\ 1 \rceil
\color{#000} \ b\ 
\color{#fa0} \lfloor op\ 2 \rceil
\color{#000} \ c
\color{#000} \mapsto
\color{#a2e} \lfloor H \rceil
\color{#2ae} \lfloor op\ 1 \rceil
\color{#000} \ 2ab\ 
\color{#fa0} \lfloor op\ 2 \rceil
\color{#000} \ 2ac\ 
\color{#000}
\left[
\begin{cases}
op\ 1 = op\ 2 \implies \color{#ae2} \lfloor + \rceil
\\
op\ 1 \neq op\ 2 \implies \color{#f00} \lfloor - \rceil
\end{cases}
\right]
\color{#000} \ 2bc
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
\color{#a2e} \lfloor H \rceil
\color{#000} = a^2 + b^2 + c^2 + d^2
$$

### $3 \times \color{#ae2} \lfloor + \rceil \ \color{#000} \cup\ 3 \times \color{#f00} \lfloor - \rceil$

$a\ 
\color{#2ae} \lfloor op \rceil
\ \color{#000}b\ 
\color{#2ae} \lfloor op \rceil
\ \color{#000}c\ 
\color{#2ae} \lfloor op \rceil
\ \color{#000}d\ 
\color{#000} \mapsto
\color{#a2e} \lfloor H \rceil
\color{#2ae} \lfloor op \rceil
\ \color{#000}2ab\ 
\color{#2ae} \lfloor op \rceil
\ \color{#000}2ac\ 
\color{#2ae} \lfloor op \rceil
\ \color{#000}2ad\ 
\color{#ae2} \lfloor + \rceil
\ \color{#000}2bc\ 
\color{#ae2} \lfloor + \rceil
\ \color{#000}2bd\ 
\color{#ae2} \lfloor + \rceil
\ \color{#000}2cd\ $

| $(...)^2$ || H ... |
|-|-|-|
| $\color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil$ |
| $(a+b+c+d)^2$ | $\mapsto$ | $H + 2ab + 2ac + 2ad + 2bc + 2bd + 2cd$ |
| $\color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil$ |
| $(a-b-c-d)^2$ | $\mapsto$ | $H - 2ab - 2ac - 2ad + 2bc + 2bd + 2cd$ |

### $1 \times \color{#ae2} \lfloor + \rceil \ \color{#000} \cap\ 2 \times \color{#f00} \lfloor - \rceil$

$a\ 
\color{#2ae} \lfloor op\ 1 \rceil
\color{#000}\ b\ 
\color{#fa0} \lfloor op\ 2 \rceil
\color{#000}\ c\ 
\color{#a2e} \lfloor op\ 3 \rceil
\color{#000}\ d\ 
\color{#000} \mapsto
\color{#a2e} \lfloor H \rceil
\color{#2ae} \lfloor op\ 1 \rceil
\color{#000}\ 2ab\ 
\color{#fa0} \lfloor op\ 2 \rceil
\color{#000}\ 2ac\ 
\color{#a2e} \lfloor op\ 3 \rceil
\color{#000}\ 2ad\ 
\color{#a2e} \lfloor op\ 3 \rceil
\color{#000}\ 2bc\ 
\color{#fa0} \lfloor op\ 2 \rceil
\color{#000}\ 2bd\ 
\color{#2ae} \lfloor op\ 1 \rceil
\color{#000}\ 2cd$

| $(...)^2$ | | H ... |
|--|--|--|
| $\color{#ae2} \lfloor + \rceil\color{#f00} \lfloor - \rceil\color{#f00} \lfloor - \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil$ |
| $(a+b-c-d)^2$ | $\mapsto$ | $H+2ab-2ac-2ad-2bc-2bd+2cd$ |
| $\color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil$ |
| $(a-b+c-d)^2$ | $\mapsto$ | $H-2ab+2ac-2ad-2bc+2bd-2cd$ |
| $\color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil\color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil$ |
| $(a-b-c+d)^2$ | $\mapsto$ | $H-2ab-2ac+2ad+2bc-2bd-2cd$ |

### $2 \times \color{#ae2} \lfloor + \rceil \ \color{#000} \cap\ 1 \times \color{#f00} \lfloor - \rceil$

$a\ 
\color{#2ae} \lfloor op\ 1 \rceil
\color{#000} \ b\ 
\color{#fa0} \lfloor op\ 2 \rceil
\color{#000} \ c\ 
\color{#a2e} \lfloor op\ 3 \rceil
\color{#000} \ d\ 
\color{#000} \mapsto
\color{#a2e} \lfloor H \rceil 
\color{#2ae} \lfloor op\ 1 \rceil
\ \color{#000}2ab\ 
\color{#fa0} \lfloor op\ 2 \rceil
\ \color{#000}2ac\ 
\color{#a2e} \lfloor op\ 3 \rceil
\ \color{#000}2ad\ 
\color{#d4f} \lfloor -op\ 3 \rceil
\ \color{#000}2bc\ 
\color{#fc2} \lfloor -op\ 2 \rceil
\ \color{#000}2bd\ 
\color{#4cf} \lfloor -op\ 1 \rceil
\ \color{#000}2cd$

| $(...)^2$ | | H... |
|--|--|--|
| $\color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil$ | $\mapsto$| $\color{#a2e} \lfloor H \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil$ |
| $(a-b+c+d)^2$ | $\mapsto$ | $H-2ab+2ac+2ad-2bc-2bd+2cd$ |
| $\color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil$|
| $(a+b-c+d)^2$| $\mapsto$ | $H+2ab-2ac+2ad-2bc+2bd-2cd$ |
| $\color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil$ | $\mapsto$ | $\color{#a2e} \lfloor H \rceil \color{#ae2} \lfloor + \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#ae2} \lfloor + \rceil \color{#f00} \lfloor - \rceil \color{#f00} \lfloor - \rceil$ |
| $(a+b+c-d)^2$ | $\mapsto$ | $H+2ab+2ac-2ad+2bc-2bd-2cd$ |
