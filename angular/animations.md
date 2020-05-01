# Animations

```
import { trigger, style, state, transition, animate } from '@angular/core';

export const HighlightTrigger = trigger('rowHighlight', [
	state('selected', style({
		backgroundColor: 'lightgreen',
		fontSize: '20px'
	})),
	state('notselected', style({
		backgroundColor: 'lightsalmon',
		fontSize: '12px'
	})),
	transition('selected => notselected', animate('200ms')),
	transition('notselected => selected', animate('400ms'))
]);
```

```
...
import { HighlightTrigger } from './table.animation';

@Component({
	...
	animations: [HighlightTrigger]
})
export class TableComponent {
	...
	highlightCategory: string = '';

	getRowState(category: string) {
		return this.highlightCategory == '' ? '' :
			this..highlightCategory == category ? 'selected' : 'notselected';
	}
}
```

```
<div>
	<label>Category</label>
	<select [(ngModel)]="highlightCategory">
		...
	</select>
</div>
<table>
	<tr>...</tr>
	<tr *ngFor="let item of getProducts()" [@rowHighlight]="getRowState(item.category)">
		...
	</tr>
</table>
```
