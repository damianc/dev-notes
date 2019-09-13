# Custom Pipe

## `fraction.pipe.ts`

```
import { Pipe } from '@angular/core';

@Pipe({
	name: 'fr'
})
export class FractionPipe {
	defaultPrecision: number = 2;

	transform(value: number, precision?: number): number {
		var prec = precision == undefined ? this.defaultPrecision : precision;
		var res = value.toFixed(prec);
		return parseFloat(res);
	}
}
```

## Usage

```
{{ 1.23456789 | fr }}
{{ 1.23456789 | fr:4}}

<div [title]="'Final result: ' + (1.23456789 | fr:4)">
  ...
</div>
```

> Pipes are registered in `NgModule.declarations[]`.

## Multiple Pipes

```
{{ item.result | fr:4 | otherPipe:10:20 }}
```
