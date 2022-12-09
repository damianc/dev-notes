# Invert Colors

```
const img = new Image();
img.src = 'mopa.jpg';
img.onload = () => {
  canvas.width = img.width;
  canvas.height = img.height;

  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, img.width, img.height);
  processImage(imageData);
};

function processImage(data) {
  const nid = op_reverseColor(data);
  ctx.putImageData(nid, 0, 0);
}

function op_reverseColor(imageData) {
  const newImageData = ctx.createImageData(imageData.width, imageData.height);

  for (let i = 0; i < imageData.data.length; i += 4) {
    const [
      r,g,b
    ] = imageData.data.slice(i, i + 3);

    newImageData.data[i] = 255 - r;
    newImageData.data[i+1] = 255 - g;
    newImageData.data[i+2] = 255 - b;
    newImageData.data[i+3] = 255;
  }

  return newImageData;
}
```

![Image with Inverted Colors](https://github.com/damianc/dev-notes/blob/master/canvas/_images/id-invert-colors.png)