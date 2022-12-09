# Reducing Number of Colors

```
const newImageData = ctx.createImageData(imageData.width, imageData.height);
const COLORS_NUMBER = 3;

for (let i = 0, p = 0; i < imageData.data.length; i+=4) {
  const [r,g,b] = imageData.data.slice(i, i + 3);
  const avg = Math.round((r + g + b) / 3);
  const nc = colorize(avg, COLORS_NUMBER);

  newImageData.data[i] = nc[0];
  newImageData.data[i+1] = nc[1];
  newImageData.data[i+2] = nc[2];
  newImageData.data[i+3] = 255;
}

function colorize(avg, colors) {
  const alloc = Math.floor(255 / colors);
  const step = Math.ceil(255 / colors);

  for (let i = step, p = 1; i <= 255; i += step, p++) {
    const a = Math.round(alloc * p);
    if (avg < i) return [a, a, a];
  }

  return [255,255,255];
}
```

![Reducing Colors](https://github.com/damianc/dev-notes/blob/master/canvas/_images/id-reducing-colors.png)