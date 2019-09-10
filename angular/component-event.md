# Component Event with `@Output`

## `click-counter.component.ts`

```
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'click-counter',
	template: `
		<div (click)="emitCounter()">
			<ng-content></ng-content>
		</div>
	`
})
export class ClickCounterComponent {
	private counter: number = 0;

	@Output('onCounterChange')
	counterChange: EventEmitter<number> = new EventEmitter();

	emitCounter() {
		this.counterChange.emit(++this.counter);
	}
}
```

## `app.component.html`

```
<click-counter (onCounterChange)="counterChanged($event)">
	<button>Click to increase the counter</button>
</click-counter>

Counter: {{ counterState }}
```

## `app.component.ts`

```
counterState: number = 0;

counterChanged(counter) {
	this.counterState = counter;
}
```
