# Impure Pipe

## Impure Pipe vs Pure Pipe

| Pure pipe | Impure pipe |
|-----------|-------------|
| new value is combined when the input data or any argument changes | new value is combined when any data (e.g., in model) is changed |
| does not have a state | does have an own state |

> Impure pipe the most often is used to process an array as Angular is not able to detect changes performed within it.

## Example Impure Pipe

### `app.component.html`

```
List ({{ items | length }})
<button (click)="addItem()">NEW ITEM</button>

<ul>
	<li *ngFor="let item of items; let i = index">
		{{ i + 1}}. {{ item }}
	</li>
</ul>
```

### `app.component.ts`

```
items: string[] = ['Item', 'Item'];

addItem() {
	this.items.push('Item');
}
```

### `coll-length.pipe.ts`

```
import { Pipe } from '@angular/core';

@Pipe({
	name: 'length',
	pure: false
})
export class CollLengthPipe {
	transform(coll: any[]) {
		return coll.length;
	}
}
```

> If it was the _pure pipe_, the number of list item would not update.

