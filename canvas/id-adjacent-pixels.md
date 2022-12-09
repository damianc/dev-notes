# Getting Adjacent Pixels

![Getting Adjacent Pixels](https://github.com/damianc/dev-notes/blob/master/canvas/_images/id-adjacent-pixels.png)

```
const width = imageData.width;
const height = imageData.height;

// ...

function getPixel(i) {
  return ((i >= 0) && (i < width*height*4)) ? i : false;
}

function getAverage(i) {
  const current = imageData[i];

  const north = getPixel(i - width*4) || current;
  const south = getPixel(i + width*4) || current;
  const west = getPixel(i - 4) || current;
  const east = getPixel(i + 4) || current;

  const nw = getPixel(i - width*4 - 4) || current;
  const ne = getPixel(i - width*4 + 4) || current;
  const sw = getPixel(i + width*4 - 4) || current;
  const se = getPixel(i + width*4 + 4) || current;

  const avg = Math.floor(
    (current + north + south + west + east + nw + ne + sw + se) / 9
  );

  if (isNaN(avg)) {
    throw new Error('NaN');
  }

  return avg;
}

function blur() {
  const data = [];
  let val = 0;

  for (let i = 0; i < width*height*4; i++) {
    val = getAverage(i);
    data[i] = val;
  }

  return data;
}

// ...
```