# Distribute Items Equally on a Circle

```
const itemSize = {width: 10, height: 10};
const circleCoords = {x: 180, y: 180};
const circleRadius = 150;
const circleElement = document.getElementById('circle');

function drawItems(items) {
  for (let i = 1; i <= items; i++) {
    const fi = 2 * Math.PI * (i - 1) / items;
    const x = circleRadius * Math.cos(fi) + circleCoords.x - itemSize.width;
    const y = circleRadius * Math.sin(fi) + circleCoords.y - itemSize.height;
    
    const div = produceItem('item', x, y);
    if (i == 1) div.id = 'main';
    
    circleElement.appendChild(div);
  }
}

function produceItem(className, leftPos, topPos) {
  const div = document.createElement('div');
  
  div.className = className;
  div.style.position = 'absolute';
  div.style.left = leftPos + 'px';
  div.style.top = topPos + 'px';
  div.style.width = itemSize.width + 'px';
  div.style.height = itemSize.height + 'px';
  
  return div;
}

drawItems(30);
```