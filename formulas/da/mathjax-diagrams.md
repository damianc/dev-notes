# Diagrams

## Horizontal Direction

$$
\begin{CD}
p @> T >> q
\\\ \\
p' @<<< q'
\end{CD}
$$

```
$$
\begin{CD}
  p @> T >> q
  \\\ \\
  p' @<<< q'
\end{CD}
$$
```

- arrow right:

```
@> [top] > [bottom] >
```

- arrow left:

```
@< [top] < [bottom] <
```

<!--
| Direction | Label position | Expression |
|--|--|--|
| left | none | `p @<<< q` |
| left | top | `p @< T << q` |
| left | bottom | `p @<< B < q` |
| left | top and bottom | `p @< T < B < q` |
| right | none | `p @>>> q` |
| right | top | `p @> T >> q` |
| right | bottom | `p @>> B > q` |
| right | top and bottom| `p @> T > B > q` |
-->

## Vertical Direction

$$
\begin{CD}
8
\\
@AA {\times 2} A
\\
4
\\
@V {\div 2} VV
\\
2
\end{CD}
$$

```
$$
  \begin{CD}
  8
  \\
  @AA {\times 2} A
  \\
  4
  \\
  @V {\div 2} VV
  \\
  2
\end{CD}
$$
```

- arrow up:

```
@A [left] A [right] A
```

- arrow down:

```
@V [left] V [right] V
```

## Double Edges

| Expression | Meaning |
|--|--|
| `@=` | double horizontal edge |
| `@\|` | double vertical edge |

$$
\begin{CD}
A @= A_1
\\
@|
\\
A_2
\end{CD}
$$

```
$$
\begin{CD}
  A @= A_1
  \\
  @|
  \\
  A_2
\end{CD}
$$
```

$$
\begin{CD}
A @= A_1
\\
@. @|
\\
@. A_1^2
\end{CD}
$$

```
$$
  \begin{CD}
  A @= A_1
  \\
  @. @|
  \\
  @. A_1^2
\end{CD}
$$
```

## Complex Diagrams

| Expression | Meaning |
|--|--|
| `\\` | break line |
| `@.` | skip column |

$$
\begin{CD}
A @>>> B @>>> C
\\
@. @. @VVV
\\
H @<<< G @. D
\\
@. @AAA @VVV
\\
@. F @<<< E
\end{CD}
$$

```
$$
\begin{CD}
  A @>>> B @>>> C
  \\
  @. @. @VVV
  \\
  H @<<< G @. D
  \\
  @. @AAA @VVV
  \\
  @. F @<<< E
\end{CD}
$$
```

$$
\begin{CD}
A @>ab>> B @= X
\\
@A da AA = @VVbcV @|
\\
D @<< cd < C @. Z
\end{CD}
$$

```
$$
\begin{CD}
  A @>ab>> B @= X
  \\
  @A da AA = @VVbcV @|
  \\
  D @<< cd < C @. Z
\end{CD}
$$
```

$$
\begin{CD}
A @>ab>> B @= X @>>> Y
\\
@A da AA = @VVbcV  @. @VVV
\\
D @<< cd < C  @.  @. Z
\end{CD}
$$

```
$$
\begin{CD}
  A @>ab>> B @= X @>>> Y
  \\
  @A da AA = @VVbcV  @. @VVV
  \\
  D @<< cd < C  @.  @. Z
\end{CD}
$$
```
