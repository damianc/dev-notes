# Normalization Algorithms

| Algorithm | Formula |
|--|--|
| min-max | $x' = \frac{x-min}{max-min}$ |
| z-score | $x' = \frac{x-mean}{std}$ |
| decimal scaling | $x' = \frac{x}{s} \iff s = 10^p \ \cap\ p = \lfloor \log_{10} max \rfloor + 1$ |
| unit vector/scaling | $x' = \frac{x}{\vert\vert x \vert\vert} \iff \vert\vert x \vert\vert = \sqrt{\Sigma x^2}$ |
| max scaling | $x' = 2 \frac{x}{max}-1$ |
| log scaling | $x' = \ln x$ |
| median | $x' = \frac{x-median}{interquartileRange \cdot (max-min)}$ |
| mean median | $x' = \frac{x-median}{mean-median}$ |
| sum scaling | $x' = \frac{x}{s} \iff s = \Sigma x$ |
| mean scaling | $x' = x-mean$ |
| softmax | $x' = \frac{e^x}{s} \iff s = \Sigma e^x$ |
| range scaling | $x' = \frac{x-min}{max-min} \cdot (R^+ - R^-) + R^-$ |
| mean | $x' = \frac{x-mean}{max-min}$ |
| mode | $x' = x - mode$ |
| midrange | $x' = \frac{x-\overset{\frown}{x}}{max-min} \iff \overset{\frown}{x} = \frac{min+max}{2}$ |
| unit scaling (L1) | $x' = \frac{x}{s} \iff s = \Sigma \vert x \vert$ |
| RMS (Root Mean Square) | $x' = \frac{x}{\overline{x}} \iff \overline{x} = \sqrt{\frac{\Sigma x^2}{A}}$ |
| sigmoid (function) | $x' = \frac{1}{1+e^{-x}}$ |
| Decibel scale | $x' = 20 \cdot \log_{10} x$ |
