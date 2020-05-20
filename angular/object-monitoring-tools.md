# Diff Monitoring: Object

```
import {
	Component,
	KeyValueDiffer, KeyValueDiffers
} from '@angular/core';

@Component({
	...
})
class ObjDiffComponent {
	private obj = {a: 1, b: 2};
	private differ: KeyValueDiffer<string, number>;

	...

	constructor(
		private differs: KeyValueDiffers
	) {}

	ngOnInit() {
		this.differ = this.differs.find(this.obj).create();
	}

	ngDoCheck() {
		let changes = this.differ.diff(this.obj);

		if (changes != null) {
			changes.forEachAddedItem(addition => ...);
			changes.forEachRemovedItem(removal => ...);
		}
	}
}
```

## Methods of `KeyValueChanges` Interface

- `forEachItem((record: KVCR)=>void)`
- `forEachPreviousItem((record: KVCR)=>void)`
- `forEachAddedItem((record: KVCR)=>void)`
- `forEachMovedItem((record: KVCR)=>void)`
- `forEachRemovedItem((record: KVCR)=>void)`

**KVCR** - `KeyValueChangeRecord<K,V>` interface with the following fields:

- `key:K`
- `currentValue: V | null`
- `previousValue: V | null`