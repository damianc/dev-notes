# Structural Directive: One \*Attribute instead of [Two]

> `[fooBar]="1"` + `[fooBarBaz]="2"` &rarr; `*fooBar="1; baz: 2"`

## Implementation of directive

```
import {
	Directive,
	ViewContainerRef, TemplateRef,
	Input, SimpleChanges
} from '@angular/core';

@Directive({
	selector: '[fooBar]'
})
export class FooBarBaz {
	@Input()
	fooBar: number;

	@Input()
	fooBarBaz: number;

	constructor(
		private container: ViewContainerRef,
		private template: TemplateRef<any>
	) {}

	ngOnChanges(changes: SimpleChanges) {
		this.container.createEmbeddedView(
			this.template,
			{ $implicit: this.fooBar + this.fooBarBaz }
		);
	}
} 
```

### Two Attributes Can Be Used

```
<ng-template [fooBar]="1" [fooBarBaz]="2" let-n>
	<div>{{ n }}</div>
</ng-template>
```

### Or Just One

```
<div *fooBar="5; baz: 3; let n">
	{{ n }}
</div>
```