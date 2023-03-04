# Distribute Items Equally on a Circle

- the circle is placed at $(c_x, c_y)$ and is $c_r$ in radius
- every item is $it_w$ in width and $it_h$ in height
- $s$ items are placed around the circle

$$
\sum_{i=1}^{s}
 \begin{cases}
fi = 2\pi \times \frac{i-1}{s}
\\\ \\
x = c_r \times \cos(fi) + c_x - it_w
\\
y = c_r \times \sin(fi) + c_y - it_h
\\\ \\
coords_{i-1} =  [x, y]
\end{cases}
$$

## Function

```
function getCoords(slotsNumber, circleSpec, itemSpec) {
	const coords = [];

	for (let i = 1; i <= slotsNumber; i++) {
		const fi = 2 * Math.PI * (i - 1) / slotsNumber;
		const x = circleSpec.radius * Math.cos(fi) + circleSpec.x - itemSpec.width;
		const y = circleSpec.radius * Math.sin(fi) + circleSpec.y - itemSpec.height;

		coords.push([x, y]);
	}

	return coords;
}
```

## Use Case

```
const circleSpec = {
	x: 180,
	y: 180,
	radius: 150
};

const itemSpec = {
	width: 10,
	height: 10
};

const circleElement = document.getElementById('circle');
const points = getCoords(12, circleSpec, itemSpec);

points.forEach(([x, y], idx) => {
	const div = produceItem('item', x, y);
	if (idx === 0) div.id = 'main';

	circleElement.appendChild(div);
});

function produceItem(className, leftPos, topPos) {
	const div = document.createElement('div');

	div.className = className;
	div.style.position = 'absolute';
	div.style.left = leftPos + 'px';
	div.style.top = topPos + 'px';
	div.style.width = itemSpec.width + 'px';
	div.style.height = itemSpec.height + 'px';

	return div;
}
```

![Distribution Examples](https://github.com/damianc/dev-notes/blob/master/_images/ui/circular-distribution-examples.png "Distribution Examples")