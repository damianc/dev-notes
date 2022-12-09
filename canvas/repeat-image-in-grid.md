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

## Modifying Tiles

> Every code below is supposed to be placed just after `ctx.drawImage()` within `for` loops.

### Every Second Tile (Like a Checkerboard)

```
// ...
for (let v = 1; v <= gridRows; v++) {
  ctx.drawImage(
    img,
    0, 0, img.width, img.height,
    (h-1)*tileWidth, (v-1)*tileHeight, tileWidth, tileHeight
  );

  /* ADDED CODE */

  const tileData = ctx.getImageData(
    (h-1)*tileWidth, (v-1)*tileHeight,
    img.width/gridCols, img.height/gridRows
  );
  const newTileData = ctx.createImageData(tileWidth, tileHeight);

  if (
    (h % 2 !== 0 && v % 2 === 0) ||
    (h % 2 === 0 && v % 2 !==0)
  ) continue;

  for (let i = 0; i < tileData.data.length; i+=4) {
    const pixel = tileData.data.slice(i, i + 3);
    newTileData.data[i] = 255 - pixel[0];
    newTileData.data[i+1] = 255 - pixel[1];
    newTileData.data[i+2] = 255 - pixel[2];
    newTileData.data[i+3] = 255;
  }

  ctx.putImageData(newTileData, (h-1)*tileWidth, (v-1)*tileHeight);

  /* ADDED CODE */
}
// ...
```

![Repeated Image like a Checkerboard](https://github.com/damianc/dev-notes/blob/master/canvas/_images/repeated-image-grid-checkerboard.png)

### Every Second Column

```
// ...
  if (h % 2 !== 0) continue;
// ...
```

![Repeated Image with Every Second Column Modified](https://github.com/damianc/dev-notes/blob/master/canvas/_images/repeated-image-grid-nd-column.png)

### Every Second Row

```
// ...
  if (v % 2 !== 0) continue;
// ...
```

![Repeated Image with Every Second Row Modified](https://github.com/damianc/dev-notes/blob/master/canvas/_images/repeated-image-grid-nd-row.png)

### Boundary Tiles

```
// ...
  if (h!==1 && v!==1 && h!==gridCols && v!==gridRows) continue;
// ...
```

![Repeated Image with Boundary Tiles Modified](https://github.com/damianc/dev-notes/blob/master/canvas/_images/repeated-image-grid-boundary.png)