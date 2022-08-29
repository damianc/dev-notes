# Iterator

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