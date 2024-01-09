# Camera Preview on Canvas

```
<canvas id="preview" width="640" height="480"></canvas>
```

```
const canvas = document.querySelector('#preview');
playCamera(canvas, canvas.width, canvas.height);

function playCamera(canvas, preferedWidth, preferedHeight) {
  const devices = navigator.mediaDevices;

  if (devices && 'getUserMedia' in devices) {
    const constraints = {
      video: {
        width: preferedWidth,
        height: preferedHeight,
        facingMode: 'environment'
      }
    };
    const promise = devices.getUserMedia(constraints);

    promise
      .then(function (stream) {
        playStream(canvas, stream);
      })
      .catch(function (error) {
        console.error(error.name + ': ' + error.message);
      });
  } else {
    console.error('Camera API is not supported.');
  }
}

function playStream(canvas, stream) {
  const video = document.createElement('video');
  const context = canvas.getContext('2d');

  video.addEventListener('loadedmetadata', function () {
    function drawFrame() {
      context.drawImage(video, 0, 0);
      window.requestAnimationFrame(drawFrame);
    }
    drawFrame();
  });

  video.autoplay = true;
  video.srcObject = stream;
}
```

## `drawImage()`

- `drawImage(image, dx, dy, [dWidth, dHeight])`
- `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`

> `image` is one of the following: `HTMLImageElement`, `SVGImageElement`, `HTMLVideoElement`, `HTMLCanvasElement`, `ImageBitmap`, `OffscreenCanvas`, `VideoFrame`

![Getting Adjacent Pixels](https://github.com/damianc/dev-notes/blob/master/canvas/_images/draw-image.png)
(source: https://html.spec.whatwg.org/images/drawImage.png)
