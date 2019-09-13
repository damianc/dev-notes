# `ngIf` Implementation

```
import {
	Directive, Input, ViewContainerRef,
	TemplateRef, SimpleChange
} from '@angular/core';

@Directive({
	selector: '[ngxIf]'
})
export class NgxIfDirective {
	constructor(
		private container: ViewContainerRef,
		private template: TemplateRef<Object>
	) {}

	@Input('ngxIf')
	exprResult: boolean;

	ngOnChanges(changes: {[property: string]: SimpleChange}) {
		var change = changes['exprResult'];

		if (!change.isFirstChange() && !change.currentValue) {
			this.container.clear();
		} else if (change.currentValue) {
			this.container.createEmbeddedView(this.template);
		}
	}
}
```

## Usage

```
<label>
	<input type="checkbox" [(ngModel)]="showMessage" />
	Show message
</label>

<div *ngxIf="showMessage">
	This is the message.
</div>
```

```
showMessage: boolean = true;
```
