# Diff Monitoring: Map

```
import {
	Component,
	KeyValueDiffer, KeyValueDiffers
} from '@angular/core';

@Component({
	...
})
class MapDiffComponent {
  private objA = {ref: 'A'};
  private objB = {ref: 'B'};
  private objC = {ref: 'C'};

  map = new Map([
    [this.objA, 1],
    [this.objB, 2]
  ]);

  public addC() {
  	this.map.set(this.objC, 3);
  }

  public deleteA() {
    this.map.delete(this.objA);
  }

  private differ: KeyValueDiffer<object,number>;

  constructor(
    private differs: KeyValueDiffers
  ) {}

  ngOnInit() {
    this.differ = this.differs.find(this.map).create();
  }

  ngDoCheck() {
    let changes = this.differ.diff(this.map);
  	if (changes != null) {
  		changes.forEachAddedItem(addition => {
  			console.log('ADDED: ', addition);
  		});

  		changes.forEachRemovedItem(deletion => {
  			console.log('REMOVED: ', deletion);
  		});
  	}
  }
}
```

More details &rarr; [Diff Monitoring: Object](object-monitoring-tools.md)