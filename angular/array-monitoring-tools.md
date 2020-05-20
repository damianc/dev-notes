# Diff Monitoring: Array

```
import {
	Component,
	IterableDiffer, IterableDiffers
} from '@angular/core';

@Component({
	...
})
class ArrDiffComponent {
	private numbers: number[] = [1, 2, 3, 4];
	private differ: IterableDiffer<number>;

	...

	constructor(
		private differs: IterableDiffers
	) {}

	ngOnInit() {
		this.differ = this.differs.find(this.numbers).create();
	}

	ngDoCheck() {
		let changes = this.differ.diff(this.numbers);

		if (changes != null) {
			changes.forEachAddedItem(addition => ...);
			changes.forEachRemovedItem(removal => ...);
		}
	}
}
```

## Methods of `IterableChanges` Interface

- `forEachItem((record: ICR)=>void)`
- `forEachOperation((record: ICR, previousIndex, currentIndex)=>void)`
- `forEachPreviousItem((record: ICR)=>void)`
- `forEachAddedItem((record: ICR)=>void)`
- `forEachMovedItem((record: ICR)=>void)`
- `forEachRemovedItem((record: ICR)=>void)`
- `forEachIdentityChange((record: ICR)=>void)`

**ICR** - `IterableChangeRecord<V>` interface with the following fields:

- `currentIndex: number | null`
- `previousIndex: number | null`
- `item: V`
- `trackById: any`