# Angular Interfaces

Interfaces are optional, yet _it's good practice to add interfaces to TypeScript directive classes in order to benefit from strong typing and editor tooling_.

```
import { Component, SimpleChange, OnInit, OnChanges } from '@angular/core';

@Component({
	...
})
export class SomeComponent implements OnInit, OnChanges {
	ngOnInit() {...}

	ngOnChanges(changes: {[property: string]: SimpleChange}) {...}
}
```

## Hook Interfaces and Their Methods

| Interface | Methods |
|-----------|---------|
| `AfterContentChecked` | `ngAfterContentChecked()` |
| `AfterContentInit` | `ngAfterContentInit()` |
| `AfterViewChecked` | `ngAfterViewChecked()` |
| `AfterViewInit` | `ngAfterViewInit()` |
| `DoBootstrap` | `ngDoBootstrap(appRef: ApplicationRef)` |
| `DoCheck` | `ngDoCheck()` |
| `OnChanges` | `ngOnChanges(changes: SimpleChanges)` |
| `OnDestroy` | `ngOnDestroy` |
| `OnInit` | `ngOnInit() `

## Other Interfaces

### `PipeTransform`

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'year'
})
export class YearPipe implements PipeTransform {
	transform(date: string): number {
		var {groups: {year}} = date.match(/^\d{2}\.\d{2}\.(?<year>\d{4})$/);
		return parseInt(year);
	}
}
```

### Full List

[https://angular.io/api?query=core&type=interface](https://angular.io/api?query=core&type=interface)
