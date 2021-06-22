# Basic Shapes

## Rectangle

```
<rect x="10" y="10" width="100" height="100" />
```

> rectangle can be assigned corner radius with `rx` and `ry` attributes (`rx` = `ry` if only `rx` set, and `ry` = `rx` if only `ry` set)

## Circle

```
<circle cx="80" cy="80" r="30" />
```

## Ellipse

```
<ellipse cx="80" cy="80" rx="50" ry="30" />
```

## Attributes as CSS Properties

Starting with SVG2, some attributes are _Geometry Properties_ and can also be used in CSS:

* for `rect`: `x`, `y`, `width`, `height`, `rx` and `ry`
* for `circle`: `cx`, `cy` and `r`
* for `ellipse`: `cx`, `cy`, `rx` and `ry`

```
#rect {
  width: 100;
  height: 100;
  x: 10;
  y: 10;
}
```