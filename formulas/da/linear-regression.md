# Linear Regression

## The Equation

$$
y = ax + b
$$

$$
\iff
$$

$$
a = \frac{
 \displaystyle\sum_{i=1}^n
 (x_i - \overline{x}) \cdot
 (y_i - \overline{y})
}{
 \displaystyle\sum_{j=1}^n
 (x_j - \overline{x})^2
}
$$

$$
b = \overline{y} - a \cdot \overline{x}
$$

## Implementation

```
const x = [1,2,3,4];
const y = [2,3,4,1];

console.log(
  linearRegression(x, y)
);
// { a: - 0.20, b: 3 }


function linearRegression(x, y) {
  const n = x.length;
	
  const xMean = sum(x) / n;
  const yMean = sum(y) / n;
	
  const xDiff = x.map(val => val - xMean);
  const yDiff = y.map(val => val - yMean);
	
  const xyDiffSum = sum(
    xDiff,
    (val, idx) => val * yDiff[idx]
  );
  const xDiffSquaredSum = sum(
    xDiff,
    val => val**2
  );
	
  const a = xyDiffSum / xDiffSquaredSum;
  const b = yMean - a * xMean;
	
  return { a, b };
}

function sum(arr, mapper = x => x) {
  return arr.reduce((acc, curr, idx) => {
    const currValue = mapper(curr, idx);
    return acc + currValue;
  }, 0);
}
```
