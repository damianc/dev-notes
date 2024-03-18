# Graphs

## Edges

| | Weighted | Unweighted |
|--|--|--|
| Directed | $$\overset{n}{-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!\rightarrow}$$ | $$-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!\rightarrow$$ |
| Undirected | $$\overset{n}{-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!\-}$$ | $$-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-$$ |

### Multi-edged

| | Weighted | Unweighted |
|--|--|--|
| One-Way Directed |  $$\overset{m}{-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!\rightarrow}\atop\underset{n}{\- \- \- \- \rightarrow}$$ | $$\overset{}{-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!\rightarrow}\atop\underset{}{\- \- \- \- \rightarrow}$$ |
| Two-Way Directed |  $$\overset{m}{-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!\rightarrow}\atop\underset{n}{\leftarrow\- \- \- \-}$$ | $$\overset{}{-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!\rightarrow}\atop\underset{}{\leftarrow\- \- \- \-}$$ |
| Undirected |  $$\overset{m}{-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!\-}\atop\underset{n}{\- \- \- \- \-}$$ | $$\overset{}{-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-\\!\\!\\!-}\atop\underset{}{\- \- \- \- \-}$$ |

## Adjacency Matrix

### Undirected Graph

The following graph:

$$
\begin{array}{ccccr}
A && - && B && - && C
\\
| && && | && && |
\\
D && - && E && - && \\_|
\end{array}
$$

may be represented by the following matrix:

$$
\left[
\begin{array}{c|ccccc}
&& \color{#aaa}{A} && \color{#aaa}{B} && \color{#aaa}{C} && \color{#aaa}{D} && \color{#aaa}{E}
\\
\hline
\color{#aaa}{A} && 0 && 1 && 0 && 0 && 0
\\
\color{#aaa}{B} && 1 && 0 && 1 && 0 && 1
\\
\color{#aaa}{C} && 0 && 1 && 0 && 0 && 1
\\
\color{#aaa}{D} && 0 && 0 && 0 && 0 && 1
\\
\color{#aaa}{E} && 0 && 1 && 1 && 1 && 0
\end{array}
\right]
$$

### Directed Graph

The following graph:

$$
\begin{array}{ccccr}
A && \rightarrow && B && \rightarrow && C
\\
\uparrow && && \downarrow && \nearrow && \downarrow
\\
D && \leftarrow && E && \leftarrow && \\_|
\end{array}
$$

may be represented by the following matrix:

$$
A = \begin{bmatrix}
0 && 1 && 0 && 0 && 0
\\
0 && 0 && 1 && 0 && 1
\\
0 && 0 && 0 && 0 && 1
\\
1 && 0 && 0 && 0 && 0
\\
0 && 0 && 1 && 1 && 0
\end{bmatrix}
$$

#### Transpose Matrix

$$
A^T = \begin{bmatrix}
0 && 0 && 0 && 1 && 0
\\
1 && 0 && 0 && 0 && 0
\\
0 && 1 && 0 && 0 && 1
\\
0 && 0 && 0 && 0 && 1
\\
0 && 1 && 1 && 0 && 0
\end{bmatrix}
$$

represents the original matrix with all edges having reversed direction:

$$
\begin{array}{ccccr}
A && \leftarrow && B && \leftarrow && C
\\
\downarrow && && \uparrow && \swarrow && \uparrow
\\
D && \rightarrow && E && \rightarrow && \\_|
\end{array}
$$

> Undirected graphs are not changed.
> 
> Weights in a weighted graph are not changed, only directions are reversed.
>
> If multiple edges connect one vertex to other, all are reversed in direction.

## Weights

$$
\begin{array}{ccccr}
A && \overset{4}{\rightarrow} && B && \overset{6}{\rightarrow} && C
\\
^5 \uparrow && && \downarrow^8 && \nearrow_{10} && \downarrow
\\
D && \underset{2}{\leftarrow} && E && \underset{3}{\leftarrow} && \\_|
\end{array}
$$
