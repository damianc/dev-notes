# Normalization Algorithms

| Algorithm | Formula |
|--|--|
| min-max | $x' = \frac{x-min}{max-min}$ |
| z-score | $x' = \frac{x-mean}{std}$ |
| decimal scaling | $x' = \frac{x}{s} \iff s = 10^p \ \cap\ p = \lfloor \log_{10} max \rfloor + 1$ |
| unit vector/scaling | $x' = \frac{x}{\vert\vert x \vert\vert} \iff \vert\vert x \vert\vert = \sqrt{\Sigma x^2}$ |
