# Pipe Using Another Pipe

* a container module

```
import { SlicePipe } from '@angular/common';
...
	providers: [SlicePipe]
...
```

* the pipe

```
import { Pipe } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Pipe({
	name: 'excerpt'
})
class ExcerptPipe {
	constructor(
		private slicePipe: SlicePipe
	) {}

	transform(value:string, length:number) {
		return this.slicePipe.transform(value, 0, length);
	}
}
```

## Formatting Functions [NG6+]

* `formatCurrency(value: number, locale: string, currency: string, currencyCode?: string, digitsInfo?: string): string`
* `formatDate(value: string | number | Date, format: string, locale: string, timezone?: string): string`
* `formatNumber(value: number, locale: string, digitsInfo?: string): string`
* `formatPercent(value: number, locale: string, digitsInfo?: string): string`

```
import { formatCurrency } from '@angular/common';
...
	formatCurrency(amount)
...
```