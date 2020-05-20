# Structural Directive Using `for..of` Expression

* name of a directive, and name of the main input attribute must contain `Of` postfix:

```
import {
	Directive,
	ViewContainerRef, TemplateRef,
	Input, SimpleChanges
} from '@angular/core';

@Directive({
	selector: '[doubleEachOf]'
})
export class DoubleEach {
	@Input()
	doubleEachOf: number[];

	constructor(
		private container: ViewContainerRef,
		private template: TemplateRef<any>
	) {}

	ngOnChanges(changes: SimpleChanges) {
		for (let n of this.doubleEachOf) {
			this.container.createEmbeddedView(
				this.template,
				{ $implicit: n * 2 }
			);
		}
	}
}
```

* directive name used on an element is out of `Of` postfix:

```
<ul>
	<li *doubleEach="let x of [1,2,3,4]; let doubled">{{ doubled }}</li>
</ul>
```