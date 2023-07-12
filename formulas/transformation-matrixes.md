# Transformation Matrixes


## Unit[y]/Identity Matrix (Defaults)

$$
\begin{vmatrix}
1 & 0 & 0
\\
0 & 1 & 0
\\
0 & 0 & 1
\end{vmatrix}
$$

## Meaning of Components

$$
\begin{vmatrix}
\text{scaleX} & \text{rotateX}^* & \text{translateX}
\\
\text{rotateY}^* & \text{scaleY} & \text{translateY}
\\
0 & 0 & 1
\end{vmatrix}
$$

\* counterclockwise (CCW) if $\alpha$ is positive, clockwise otherwise

## Matrixes

### Translation Matrix [by $tx$ / $ty$]

$$
\begin{vmatrix}
1 & 0 & tx
\\
0 & 1 & ty
\\
0 & 0 & 1
\end{vmatrix}
$$

### Scale Matrix [by $sx$ / $sy$]

$$
\begin{vmatrix}
sx & 0 & 0
\\
0 & sy & 0
\\
0 & 0 & 1
\end{vmatrix}
$$

### Homothety/Similarity Matrix (Scale by Point) [by $sx$ / $sy$ at $(p_x,p_y)$]

$$
\begin{vmatrix}
sx & 0 & (1-sx) \cdot p_x
\\
0 & sy & (1-sy) \cdot p_y
\\
0 & 0 & 1
\end{vmatrix}
$$

### Rotation Matrix [by $\alpha$ at $(0,0)$]

$$
\begin{vmatrix}
\cos(\alpha) & -\sin(\alpha) & 0
\\
\sin(\alpha) & \cos(\alpha) & 0
\\
0 & 0 & 1
\end{vmatrix}
$$

### Rotation Matrix [by $\alpha$ at $(p_x,p_y)$]

$$
\begin{vmatrix}
\cos(\alpha) & -\sin(\alpha) & p_x \cdot (1 - \cos(\alpha)) + p_y \cdot \sin(\alpha)
\\
\sin(\alpha) & \cos(\alpha) & p_y \cdot (1 - \cos(\alpha)) - p_x \cdot \sin(\alpha)
\\
0 & 0 & 1
\end{vmatrix}
$$

### Skew-X Matrix [by $\alpha$]

$$
\begin{vmatrix}
1 & \tan(\alpha) & 0
\\
0 & 1 & 0
\\
0 & 0 & 1
\end{vmatrix}
$$

### Skew-Y Matrix [by $\beta$]

$$
\begin{vmatrix}
1 & 0 & 0
\\
\tan(\beta) & 1 & 0
\\
0 & 0 & 1
\end{vmatrix}
$$

### Skew-XY Matrix [by $\alpha_x$ and $\beta_y$]

$$
\begin{vmatrix}
1 & \tan(\beta) & 0
\\
\tan(\alpha) & 1 & 0
\\
0 & 0 & 1
\end{vmatrix}
$$

## Transform Function Implementation

```
function transformPoints(points, transformationMatrix) {
  return points.map(({x,y}) => {
    const pointMatrix = [ [x], [y], [1] ];
    const transformedPointMatrix = getMatrix(
      transformationMatrix,
      pointMatrix
    );
    return {
      x: transformedPointMatrix[0][0],
      y: transformedPointMatrix[1][0]
    };
  });
}

function getMatrix(transformationMatrix, pointMatrix) {
  const matrix = [];
  
  for (var i = 0; i < transformationMatrix.length; i++) {
    matrix[i] = [];
    
    for (var j = 0; j < pointMatrix[0].length; j++) {
      let sum = 0;
      
      for (var k = 0; k < transformationMatrix[0].length; k++) {
        sum += transformationMatrix[i][k] * pointMatrix[k][j];
      }
      
      matrix[i][j] = sum;
    }
  }
  
  return matrix;
}
```

use example:

```
const points = [
  { x: 100, y: 20 },
  { x: 150, y: 120 },
  { x: 50, y: 120 }
];

const translateX100Matrix = [
  [ 1, 0, 100 ],
  [ 0, 1, 0 ],
  [ 0, 0, 1 ]
];

const newCoords = transformPoints(points, translateX100Matrix);
/*
[
  { x: 200, y: 20 },
  { x: 250, y: 120 },
  { x: 150, y: 120 }
]
*/
```

----

$$
\sum_{i=0}^{M_1} \sum_{j=0}^{M_2[0]}
\implies
r[i][j] =
\sum_{k=0}^{M_1[0]} M_1[i][k] \cdot M_2[k][j]
$$