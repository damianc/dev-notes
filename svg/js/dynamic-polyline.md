# Dynamic Polyline

## SVG

```
<svg width="400" height="400" id="canvas">
  <polyline id="polyline" stroke-width="4" stroke="red" points="0 0" />
  <line id="next-line" stroke="rgba(255, 200, 0, .5)" stroke-width="4" />
</svg>
```

## JavaScript

```
const canvas = document.getElementById('canvas');
const polyline = document.getElementById('polyline');
const nextLine = document.getElementById('next-line');

const lastPoint = {
  x: 0,
  y: 0
};

canvas.addEventListener('mousemove', nextLinePreview);
canvas.addEventListener('click', insertLine);

function nextLinePreview(e) {
  nextLine.setAttribute('x1', lastPoint.x);
  nextLine.setAttribute('y1', lastPoint.y);

  nextLine.setAttribute('x2', e.pageX);
  nextLine.setAttribute('y2', e.pageY);
}

function insertLine(e) {
  const p = getPoint(e.pageX, e.pageY);

  polyline.points.appendItem(p);
  lastPoint.x = e.pageX;
  lastPoint.y = e.pageY;
}

function getPoint(x, y) {
  const point = canvas.createSVGPoint();
  point.x = x;
  point.y = y;
  
  return point;
}
```