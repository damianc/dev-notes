# Array Monitoring Tools

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

- `forEachItem()`
- `forEachOperation()`
- `forEachPreviousItem()`
- `forEachAddedItem()`
- `forEachMovedItem()`
- `forEachRemovedItem()`
- `forEachIdentityChange()`