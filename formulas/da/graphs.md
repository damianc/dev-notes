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
\begin{bmatrix}
0 && 1 && 0 && 0 && 0
\\
1 && 0 && 1 && 0 && 1
\\
0 && 1 && 0 && 0 && 1
\\
0 && 0 && 0 && 0 && 1
\\
0 && 1 && 1 && 1 && 0
\end{bmatrix}
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
\begin{bmatrix}
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
