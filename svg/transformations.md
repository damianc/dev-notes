# Transformations

## Examples

* Circle with Shadow Cast by the Noon Sun

```
<svg width="200" height="200">  
  <g
    fill="white" stroke="grey" stroke-width="4"
    transform="rotate(-10 50 100)
                translate(-55 45.5)
                skewX(40)
                scale(1 0.5)"
  >
    <circle cx="100" cy="40" r="30" id="circ" />
  </g>

  <use xlink:href="#circ" fill="none" stroke="orange" stroke-width="4"/>
</svg>
```

* Corner Walls

```
<svg width="200" height="400">
  <rect x="10" y="10" width="120" height="120" fill="#ccc" transform="skewX(5) skewY(10)" />
  <rect x="120" y="10" width="120" height="120" fill="#aaa" transform="translate(10 42.5) skewY(350)" />
</svg>
```

## Functions

| Function | Description | Signature | Example |
|----|----|----|----|
| `translate` | moves the object by `x` and `y` | `translate(x [y=0])` | `translate(20 20)` |
| `scale` | scales the object by `x` and `y` | `scale(x [y=0])` | `scale(2)` |
| `rotate` | rotates the object by `a` degress about the point `(x, y)` or about the origin of the current user coordinate system if not supplied | `rotate(a [x y])` | `rotate(45)` |
| `skewX` | applies a skew transformation along the _x_ axis by `a` degress | `skewX(a)` | `skewX(20)` |
| `skewY` | applies a skew transformation along the _y_ axis by `a` degress | `skewY(a)` | `skewY(50)` |

### Rotating

To rotate an object relative to its center, use such `(x, y)` that:
* `x` = object's `x` + 1/2 object's `width`
* `y` = object's `y` + 1/2 object's `height`

```
<svg width="200" height="400">
  <rect
    x="100"
    y="10"
    width="40"
    height="40"
    transform="rotate(45 120 30)"
    fill="red"
  />
</svg>
```

### The `matrix()` Function

* `matrix(a b c d e f)`

```
a  c  e
b  d  f
0  0  1
```

* matrix for translate by `tx` and `ty`

```
1  0  tx
0  1  ty
0  0  1
```

> `matrix(1 0 0 1 tx ty)`

* matrix for scale by `sx` and `sy`

```
sx  0   0
0   sy  0
0   0   1
```

> `scale(sx 0 0 sy 0 0)`

* matrix for rotate by `a`

```
cos(a)  -sin(a)  0
sin(a)  cos(a)   0
0       0        1
```

> `rotate(cos(a) sin(a) -sin(a) cos(a) 0 0)`

* matrix for rotate by `a` about the point `(x, y)`

> `rotate(a, cx, cy)` is the combination of a translation by `(-cx, cy)`, a rotation of `a` degrees and a translation back to `(cx, cy)`, which gives

```
cos(a)  -sin(a)  -cx × cos(a) + cy × sin(a) + cx
sin(a)  cos(a)   -cx × sin(a) - cy × cos(a) + cy
```

> `rotate(cos(a) sin(a) -sin(a) cos(a) (-cx × cos(a) + cy × sin(a) + cx) (-cx × sin(a) - cy × cos(a) + cy))`

[Detailed Description on Stack Overflow](https://stackoverflow.com/a/15134993/10371305)