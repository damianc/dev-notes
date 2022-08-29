# Iterator

Examples:
- [Symmetric Iterator](#example-1-symmetric-iterator)
- [Iterator 2D](#example-2-iterator-2d)

## Example 1: Symmetric Iterator

* use:

```
const iter = new SymmetricIterator([
    [10, 20, 50, 80],
    [10, 50, 30, 50]
], ['x', 'y']);

const firstPoint = ([iter.current(), iter.next()] as const)[0];
let lastPoint: [number, number] = [firstPoint.x, firstPoint.y];
let pathDist = 0;

do {
    const { x, y } = iter.current();

    const [x2, y2] = lastPoint;
    const dist = Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));

    console.log(
        `distance from previous point (${x2},${y2})
        to the current point (${x},${y})
        is ${dist.toFixed(2)}`
    );
    lastPoint = [x, y];
    pathDist += dist;
} while (iter.next());

console.log('path full distance: ' + pathDist.toFixed(2));

/*
distance from previous point (10,10)
    to the current point (20,50)
    is 41.23

distance from previous point (20,50)
    to the current point (50,30)
    is 36.06

distance from previous point (50,30)
    to the current point (80,50)
    is 36.06

path full distance: 113.34
*/
```

* Implementation - `SymmetricIterator`:

```
class SymmetricIterator {
    private index = 0;
    private length: number;

    constructor(
        private data: any[][],
        private labels: string[]
    ) {
        this.length = data[0].length;
    }

    get isFirst(): boolean {
        return this.index === 0;
    }

    get isLast(): boolean {
        return this.index === this.length - 1;
    }

    current(): Record<string, any> {
        return this.data.reduce((acc, curr, idx) => {
            const label = this.labels[idx];
            const value = curr[this.index];
            return {
                ...acc,
                [label]: value
            };
        }, {});
    }

    next(): boolean {
        if (this.isLast) return false;

        this.index += 1;
        return true;
    }
}
```

## Example 2: Iterator 2D

* use:

```
const iter2d = new Iterator2D([
    ['', 'Free', 'Premium'],
    ['price', '$0.00', '$25.00'],
    ['number of items', '100', 'no limit']
]);

let html = '<table>';

do {
    if (iter2d.rowStart) html += '<tr>';

    const tag = iter2d.row === 1 ? 'th' : 'td';
    html += `<${tag}>${iter2d.current()}</${tag}>`

    if (iter2d.rowEnd) html += '</tr>';
} while (iter2d.next());

html += '</table>';

console.log(html);

/*
<table>
    <tr>
        <th></th><th>Free</th><th>Premium</th>
    </tr>
    <tr>
        <td>price</td><td>$.00</td><td>$25.00</td>
    </tr>
    <tr>
        <td>number of items</td><td>100</td><td>no limit</td>
    </tr>
</table>
*/
```

* Implementation - `Iterator2D`:

```
class Iterator2D {
    private rows: number;
    private cols: number;
    private rowPointer = 0;
    private colPointer = 0;

    constructor(private data: any[][]) {
        this.rows = data.length;
        this.cols = data[0].length;
    }

    get rowStart(): boolean {
        return this.colPointer === 0;
    }

    get rowEnd(): boolean {
        return this.colPointer === this.cols - 1;
    }

    get row(): number {
        return this.rowPointer + 1;
    }

    private get endReached(): boolean {
        const isLastRow = this.rowPointer === this.rows - 1;
        const isLastCol = this.colPointer === this.cols - 1;

        return isLastRow && isLastCol ? true : false;
    }

    public next(): boolean {
        if (this.endReached) return false;

        if (this.rowEnd) {
            this.rowPointer += 1;
            this.colPointer = 0;
        } else {
            this.colPointer += 1;
        }

        return true;
    }

    public current(): any {
        return this.data[this.rowPointer][this.colPointer];
    }
}
```