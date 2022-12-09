# Repeat Image in Grid

```
const img = new Image();
img.src = 'mopa.jpg';
img.onload = () => {
  canvas.width = img.width;
  canvas.height = img.height;

  const [gridCols, gridRows] = [4,4];
  const tileWidth = img.width / gridCols;
  const tileHeight = img.height / gridRows;

  for (let h = 1; h <= gridCols; h++) {
    for (let v = 1; v <= gridRows; v++) {
      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        (h-1)*tileWidth, (v-1)*tileHeight, tileWidth, tileHeight
      );
    }
  }
};
```

![Repeated Image](https://github.com/damianc/dev-notes/blob/master/canvas/_images/repeated-image-grid.png)