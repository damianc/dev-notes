# Diagrams

<!--
$$
\begin{CD}
A @>a_1>a_2> B @= X
\\
@A d_1 A d_2 A = @VVbV @|
\\
D @<< c < C @. Y
\end{CD}
$$
-->

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
