# Paintlet

## Paintlet Parts

### 1. Pattern Class

```
class Pattern {
  // static get contextOptions() {
  //   return {alpha: true};
  // }

  static get inputProperties() {
    return ['--xcolor'];
  }

  paint(ctx, geom, properties) {
    const [xColor] = properties.get('--xcolor');
    const defaultColor = 'red';

    // ...
  }
}

registerPaint('somePattern', Pattern);
```

### 2. Pattern Registration

```
CSS.paintWorklet.addModule('./paintlet.js');
```

### 3. Pattern Use

```
div {
  --xcolor: #fa0;
  background: #000 paint(somePattern);
}
```

## Inline Script

```
CSS.paintWorklet.addModule(
  URL.createObjectURL(
    new Blob([`
      class Shape {
        // ...
      }

      registerPaint('awesomePattern', Shape);
    `], {
      type: 'application/javascript'
    })
  )
);
```

## Example: Dotted Pattern

![CSS Paintlet: Dotted Pattern](https://github.com/damianc/dev-notes/blob/master/_images/css/paintlet-example.png "Dotted Pattern")

```
class DottedPattern {
  static get inputProperties() {
    return ['--xcolor'];
  }

  paint(ctx, geom, properties) {
    const [xColor] = properties.get('--xcolor');
    const defaultColor = 'red';

    const r = 30;
    const w = geom.width;
    const h = geom.height;

    for (let i = -1.5 * r; i <= w + 2 * r; i += r * 1.5) {
      for (let j = -1.5 * r; j <= h + 2 * r; j += r * 1.5) {
        ctx.fillStyle = xColor || defaultColor;

        if (
          (j % 2 === 0 && i % 2 !== 0) ||
          (i % 2 === 0 && j % 2 !== 0)
        ) {
          ctx.filter = 'opacity(.5) blur(5px)'
        } else {
          ctx.filter = 'none';
        }

        ctx.beginPath();
        ctx.arc(i, j, r / 2, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
      }
    }
  }
}

registerPaint('dotted', DottedPattern);
```