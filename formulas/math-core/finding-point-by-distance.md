# Finding a Point by Distance

## When Linear Function is Given

Find point __B__ by distance __d__ from point __A__ along a line described with __f(x)__ function:

$f(x) = ab + x$  

$A = (x_1, y_1)$  
$B = (x_1 + x', f(x_1 + x'))$

* a horizontal translation __x'__:

$x' = d \cdot \cos(\arctan( a))$

![Finding a Point by Distance](https://github.com/damianc/dev-notes/blob/master/_images/math/point-by-distance.png "Finding a Point by Distance")

## When 2 Points are Given

Find point __C__ by distance __d__ from point __A__ along a line between __A__ and __B__ points:

$A = (x_1, y_1)$  
$B = (x_2, y_2)$  
$C = (x_1 + x', f(x_1 + x'))$

* a function __f(x)__ (passing through these points):

$f(x) = \frac{y_2 - y_1}{x_2 - x_1}x + \frac{x_2y_1 - x_1y_2}{x_2-x_1}$  
or:  
$f(x) = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1) + y_1$

* a horizontal translation __x'__:

$x' = d \cdot \cos(\arctan( \frac{y_2 - y_1}{x_2 - x_1}))$