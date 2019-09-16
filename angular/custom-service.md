# Custom Service

## `discount.service.ts`

```
import { Injectable } from '@angular/core';

@Injectable()
export class DiscountService {
	private discountValue: number = 10;

	public get discount(): number {
		return this.discountValue;
	}

	public set discount(newValue: number) {
		this.discountValue = newValue || 0;
	}

	public applyDiscount(price: number) {
		return Math.max(price - this.discountValue, 5);
	}
}

```

## Components using the service

### `discount-display.component.ts`

```
import { Component } from '@angular/core';
import { DiscountService } from './discount.service';

@Component({
	selector: 'discountDisplay',
	template: `
		<div>
			Discount: {{ discounter.discount }}
			<div>
				Price:
				<s>{{ 45 | currency }}</s> &nbsp;&nbsp;
				<b>$ {{ discounter.applyDiscount(45) | currency }}</b>
			</div>
		</div>
	`
})
export class DiscountDisplayComponent {
	constructor(private discounter: DiscountService) {}
}
```

### `discount-editor.component.ts`

```
import { Component } from '@angular/core';
import { DiscountService } from './discount.service';

@Component({
	selector: 'discountEditor',
	template: `
		<div>
			<label>Rabat</label>
			<input type="number" [(ngModel)]="discounter.discount" />
		</div>
	`
})
export class DiscountEditorComponent {
	constructor(private discounter: DiscountService) {}
}
```

## Registering stuff

### `app.module.ts`

```
...
import { DiscountDisplayComponent } from './discount-display.component';
import { DiscountEditorComponent } from './discount-editor.component';

import { DiscountService } from './discount.service';

@NgModule({
  ...
  declarations: [
    ...
    DiscountDisplayComponent,
    DiscountEditorComponent
  ],
  providers: [
    ...
    DiscountService
  ]
})
export class AppModule {}
```

## Usage

### `app.component.html`

```
<!-- synchronized with the below -->
<discountEditor></discountEditor>
<discountDisplay></discountDisplay>

...

<!-- synchronized with the above -->
<discountEditor></discountEditor>
<discountDisplay></discountDisplay>
```

## Pipe using the service

```
import { Pipe } from '@angular/core';
import { DiscountService } from './discount.service';

@Pipe({
	name: 'discount',
	pure: false
})
export class PaDiscountPipe {
	constructor(private discount: DiscountService) {}

	transform(price: number): number {
		return this.discount.applyDiscount(price);
	}
}
```

```
<ul>
	<li *ngFor="let book of books; let i = index; let last = last" 
		[class.text-danger]="last">
		{{ i + 1 }}. {{ book.title }} - {{ book.price | discount }}
	</li>
</ul>
```

## Directive using the service

```
import {
	Directive, Input, HostBinding,
	SimpleChange, KeyValueDiffer, KeyValueDiffers,
	ChangeDetectorRef
} from '@angular/core';
import { DiscountService } from './discount.service';

@Directive({
	selector: 'td[ngx-price]',
	exportAs: 'discount'
})
export class NgxDiscountAmountDirective {
	private differ: KeyValueDiffer<any, any>;

	constructor(
		private keyValueDiffers: KeyValueDiffers,
		private changeDetector: ChangeDetectorRef,
		private discount: DiscountService
	) {}

	@Input('ngx-price')
	originalPrice: number;

	discountAmount: number;

	ngOnInit() {
		this.differ = this.keyValueDiffers.find(this.discount).create();
	}

	ngOnChanges(changes: {[property: string]: SimpleChange}) {
		if (changes['originalPrice'] != null) {
			this.updateValue();
		}
	}

	ngDoCheck() {
		if (this.differ.diff(this.discount) != null) {
			this.updateValue();
		}
	}

	private updateValue() {
		this.discountAmount =
			this.originalPrice -
			this.discount.applyDiscount(this.originalPrice);
	}
}
```

```
<table class="table">
  <thead>
    <tr>
      <th></th>
      <th>Title</th>
      <th>Price</th>
      <th>Discount</th>
      <th>Final Price</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let book of books; let i = index">
      <td>{{ i + 1}}</td>
      <td>{{ book.title }}</td>
      <td>{{ book.price | currency }}</td>
      <td [ngx-price]="book.price" #discount="discount">{{ discount.discountAmount | currency }}</td>
      <td>{{ book.price | discount | currency }}</td>
    </tr>
  </tbody>
</table>
```
