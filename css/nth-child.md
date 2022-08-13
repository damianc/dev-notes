# `nth-child()`

## Common Recipes

| Elements to Match | Selector | Preview |
|--|--|--|
| even | `div:nth-child(even)` | $\square\blacksquare\square\blacksquare\square\blacksquare\square\blacksquare$ |
| odd | `div:nth-child(odd)` | $\blacksquare\square\blacksquare\square\blacksquare\square\blacksquare\square$ |
| every 4th | `div:nth-child(4n)` | $\square\square\square\blacksquare\square\square\square\blacksquare$ | 
| without every 4th | `div:not(:nth-child(4n))` | $\blacksquare\blacksquare\blacksquare\square\blacksquare\blacksquare\blacksquare\square$ |
| 4th | `div:nth-child(4)` | $\square\square\square\blacksquare\square\square\square\square$ |
| 4th and 5th | `div:nth-child(4), div:nth-child(5)` | $\square\square\square\blacksquare\blacksquare\square\square\square$ |
| 4th-6th | `div:nth-child(n+4):nth-child(-n+6)` | $\square\square\square\blacksquare\blacksquare\blacksquare\square\square$ |
| all but 4th-6th | `div:not(:nth-child(n+4):nth-child(-n+6))` | $\blacksquare\blacksquare\blacksquare\square\square\square\blacksquare\blacksquare$ |
| 3rd-10th except for 6th-8th | `div:nth-child(n+3):nth-child(-n+10):not(:nth-child(n+6):nth-child(-n+8))` | $\square\square\blacksquare\blacksquare\blacksquare\square\square\square\blacksquare\blacksquare$ |

## Heads and Tails

| Elements to Match | Selector | Preview |
|--|--|--|
| first 4 items | `div:nth-child(-n+4)` | $\blacksquare\blacksquare\blacksquare\blacksquare\square\square\square\square\square\square$ |
| last 4 items | `div:nth-last-child(-n+4)` | $\square\square\square\square\square\square\blacksquare\blacksquare\blacksquare\blacksquare$ |
| first 4 and last 4 items | `div:nth-child(-n+4), div:nth-last-child(-n+4)` | $\blacksquare\blacksquare\blacksquare\blacksquare\square\square\blacksquare\blacksquare\blacksquare\blacksquare$ |
| all but first 4 items | `div:nth-child(n+5)` | $\color{#bbb}{\cancel{\square\square\square\square}}\color{#000}{\blacksquare\blacksquare\blacksquare\blacksquare\blacksquare\blacksquare}$ |
| all but last 4 items | `div:nth-last-child(n+5)` | $\blacksquare\blacksquare\blacksquare\blacksquare\blacksquare\blacksquare\color{#bbb}{\cancel{\square\square\square\square}}$ |
| all but first 4 and last 4 items | `div:nth-child(n+5):nth-last-child(n+5)` | $\color{#bbb}{\cancel{\square\square\square\square}}\color{#000}{\blacksquare\blacksquare}\color{#bbb}{\cancel{\square\square\square\square}}$ |

## Patterns

**m matched**, n not:

|||
|--|--|
| $li:nth-child(\ [m+n]\mathrm{n}+i\ ),\ \ \ \ i \in \lbrack1...n\rbrack$ | $$\sum_{i=1}^{m} \mathrm{li\colon{nth-child}} ([m+n]\mathrm{n} + i)$$ |

- **`[2 matched, 2 not] ...`**

$\blacksquare\blacksquare\square\square\blacksquare\blacksquare\square\square\blacksquare\blacksquare\square\square\blacksquare\blacksquare\square$

```
li:nth-child(4n+1),
li:nth-child(4n+2) { ... }
```

- **`[2 matched, 1 not] ...`**

$\blacksquare\blacksquare\square\blacksquare\blacksquare\square\blacksquare\blacksquare\square\blacksquare\blacksquare\square\blacksquare\blacksquare\square$

```
li:nth-child(3n+1),
li:nth-child(3n+2) { ... }
```

- **`[3 matched, 2 not] ...`**

$\blacksquare\blacksquare\blacksquare\square\square\blacksquare\blacksquare\blacksquare\square\square\blacksquare\blacksquare\blacksquare\square\square$

```
li:nth-child(5n+1),
li:nth-child(5n+2),
li:nth-child(5n+3) { ... }
```

----

n omitted, **m matched**:

|||
|--|--|
| $li:nth-child(\ [m+n]\mathrm{n}-i\ ),\ \ \ \ i \in \lbrack0...n\rbrack$ **or** $li:nth-child(\ [m+n]\mathrm{n}-[i-1]\ ),\ \ \ \ i \in \lbrack1...n\rbrack$ | $$\sum_{i=0}^{m} \mathrm{li\colon{nth-child}} ([m+n]\mathrm{n} - i)$$ |

- **`[2 omitted, 2 matched] ...`**

$\square\square\blacksquare\blacksquare\square\square\blacksquare\blacksquare\square\square\blacksquare\blacksquare\square\square\blacksquare$

```
li:nth-child(4n),
li:nth-child(4n-1) { ... }
```

- **`[1 omitted, 2 matched] ...`**

$\square\blacksquare\blacksquare\square\blacksquare\blacksquare\square\blacksquare\blacksquare\square\blacksquare\blacksquare\square\blacksquare\blacksquare$

```
li:nth-child(3n),
li:nth-child(3n-1) { ... }
```

- **`[2 omitted, 3 matched] ...`**

$\square\square\blacksquare\blacksquare\blacksquare\square\square\blacksquare\blacksquare\blacksquare\square\square\blacksquare\blacksquare\blacksquare$

```
li:nth-child(5n),
li:nth-child(5n-1),
li:nth-child(5n-2) { ... }
```

## `:nth-child(...), :nth-child(...)` vs. `:nth-child(...):nth-child(...)`

* `div:nth-child(X), div:nth-child(Y)` - every item that matches either `X` or `Y` expression
* `div:nth-child(-n+4), div:nth-last-child(-n+4)` matches every item that is a part of group of first 4 and/or of last 4 items

```
div:nth-child(-n+4),
div:nth-last-child(-n+4) { ... }
```

| Example for... | Picture | Notes |
|--|--|--|
| 10 items (more than 8) | $\blacksquare\blacksquare\blacksquare\blacksquare\square\square\blacksquare\blacksquare\blacksquare\blacksquare$ | |
| 6 items (less than or 8) | $\blacksquare\blacksquare\blacksquare\blacksquare\blacksquare\blacksquare$ | every item belongs to at least one of two groups: first 4 items and/or last 4 items (here, middle 2 items belong to both groups) |


* `div:nth-child(X):nth-child(Y)` - every item that matches both `X` and `Y` expression
* `div:nth-child(-n+4):nth-last-child(-n+4)` matches every item that is a part of both groups: group of first 4 and group of last 4 items

```
div:nth-child(-n+4):nth-last-child(-n+4) { ... }
```

| Example for... | Picture | Notes |
|--|--|--|
| 10 items (more than or 8) | $\square\square\square\square\square\square\square\square\square\square$ | there is no item that belongs to a group of 4 first items and meanwhile to a group of 4 last items |
| 6 items (less than 8) | $\square\square\blacksquare\blacksquare\square\square$ | middle 2 items (8 - 6 -> 2); for 7 items it would be middle one (8 - 7 -> 1), for 5 items - middle 3 items (8 - 5 -> 3) |

## Readability: Complex Selector vs. Additional Selector with `unset`

$\square\square\square\square\blacksquare\square\blacksquare\square\blacksquare\square\square\square\square\square$

If we want to style every 2nd item, but omit first 4 ones and last 4 ones, we may use:

* a one complex selector

```
li:nth-child(odd):not(
  li:nth-child(-n+4)
):not(
  li:nth-last-child(-n+4)
) {
  color: red;
}
```

* a simple selector + additional resetting selector

```
li:nth-child(n+5):nth-last-child(n+5) {
  color: red;
}

li:nth-child(even) {
  color: unset !important;
}
```

> `!important` keyword not always is needed: it depends on a specificity of selectors

## Variants Overview

| Form | Meaning | Example | Example Meaning |
|--|--|--|--|
| `X` | X-th item | `2` | 2nd item |
| `Xn` | every X-th item | `2n` | every 2nd item (`[2,4,6,8,10 ...]`) |
| `n+X` | from X-th on | `n+4` | from 4th on; all but 1st, 2nd and 3rd (`[4,5,6,7,8 ...]`) |
| `Xn+Y` | every X-th starting from Y-th | `2n+4` | every 2nd starting from 4th (`[4,6,8,10,12 ...]`) |
| `Xn-Y` | every X-th starting from (X-Y)-th (1) | `4n-1` | every 4th starting from 3rd (4 - 1) (`[3,7,11,15,19 ...]`) |
| `-n+X` | only first X items | `-n+4` | only first 4 items (`[1,2,3,4]`) |
| `-Xn+Y` | every X-th item from first Y items | `-2n+6` | every 2nd item from first 6 items (`[2,4,6]`) |

Selecting all: `n`, `n-X`  
Selecting nothing: `-n`, `0`, `-X`, `-Xn`, `-n-X`, `-Xn-Y`

> (1): subtraction is cyclic and reduced to a group of X items: `4n-6` means _every 2nd starting from 2nd_, not _from -2nd_; the example's path of a pointer is  as follows: 1st _"minus"_: 4-1=3; 2nd _"minus"_: 3-1=2; 3rd _"minus"_: 2-1=1; then 4th _"minus"_ 1-1=0 (it starts another turn, we have 4 here); 5th _"minus"_: 4-1=3; and finally 6th _"minus"_: 3-1=2; (simply put: `3 -> 2 -> 1 -> 4 -> 3 -> 2`)