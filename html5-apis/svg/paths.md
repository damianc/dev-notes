# Paths

```
<path d="M 10 10 L 20 20 l 20 20 h 100 V 10 Z" />
```

## Commands

| Command | Description | Example |
|----|----|----|
| `M` | move to | `M 20 20` |
| `Z` | close path | `Z` |
| `L` | line to | `L 50 40` |
| `l` | line by | `l 30 30` |
| `H` | horizontal line to | `H 50` |
| `h` | horizontal line by | `h 40` |
| `V` | vertical line to | `V 40` |
| `v` | vertical line by | `v 50` |

### Curves

| Command | Description | Syntax | Example |
|----|----|----|----|
| `C` | curve to | `C controlPoint1X controlPoint1Y, controlPoint2X controlPoint2Y, lineEndX lineEndY` | `C 80 20, 120 30, 120 120` |
| `c` | curve by | `c cp1DX cp1DY, cp2DX cp2DY, endDX endDY` | `c 80 20, 120 30, 120 120` |
| `S` | smooth curve to | `S controlPoint2X controlPoint2Y, lineEndX lineEndY` | `S 0 50, 100 180` |
| `s` | smooth curve by | `s cp2DX cp2DY, endDX endDY` | `s 0 50, 100 180` |
| `Q` | quadratic Bézier curve to | `Q controlPointX controlPointY, lineEndX lineEndY` | `Q 100 20, 150 100` |
| `q` | quadratic Bézier curve by | `q cpDX cpDY, endDX endDY` | `q 100 20, 150 100` |
| `T` | smooth quadratic Bézier curve to | `T x y` | `T 100 50` |
| `t` | smooth quadratic Bézier curve to | `t x y` | `t 100 50` |

Details: [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#curve_commands)

### Arcs

```
A rx ry x-axis-rotation large-arc-flag sweep-flag x y
a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
```

Details: [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#arcs)