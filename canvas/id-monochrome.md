# Monochrome Image

## Black and White

```
const newImageData = ctx.createImageData(imageData.width, imageData.height);

for (let i = 0, p = 0; i < imageData.data.length; i+=4) {
  const [r,g,b] = imageData.data.slice(i, i + 3);
  const avg = Math.round((r + g + b) / 3);

  newImageData.data[i] = avg > 125 ? 255 : 0;
  newImageData.data[i+1] = avg > 125 ? 255 : 0;
  newImageData.data[i+2] = avg > 125 ? 255 : 0;
  newImageData.data[i+3] = 255;
}
```

![Monochrome: Black and White](https://github.com/damianc/dev-notes/blob/master/canvas/_images/id-monochrome-black-white.png)

## White and Black

as above, but `<` instead of `>`

![Monochrome: White and Black](https://github.com/damianc/dev-notes/blob/master/canvas/_images/id-monochrome-white-black.png)

## Black/White and Red

![Monochrome: Black/White and Red](https://github.com/damianc/dev-notes/blob/master/canvas/_images/id-monochrome-black-white-red.png)

* a)

```
// ...
newImageData.data[i] = avg > 125 ? 255 : 255;
newImageData.data[i+1] = avg > 125 ? 255 : 0;
newImageData.data[i+2] = avg > 125 ? 255 : 0;
newImageData.data[i+3] = 255;
```

* b)

```
// ...
newImageData.data[i] = avg < 125 ? 255 : 255;
newImageData.data[i+1] = avg < 125 ? 255 : 0;
newImageData.data[i+2] = avg < 125 ? 255 : 0;
newImageData.data[i+3] = 255;
```

* c)

```
// ...
newImageData.data[i] = avg > 125 ? 0 : 255;
newImageData.data[i+1] = avg > 125 ? 0 : 0;
newImageData.data[i+2] = avg > 125 ? 0 : 0;
newImageData.data[i+3] = 255;
```

* d)

```
// ...
newImageData.data[i] = avg < 125 ? 0 : 255;
newImageData.data[i+1] = avg < 125 ? 0 : 0;
newImageData.data[i+2] = avg < 125 ? 0 : 0;
newImageData.data[i+3] = 255;
```