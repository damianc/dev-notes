# `@ContentChildren` vs `@ViewChildren` and Detecting Changes

## `app.component.html`

```
<div>
  <input type="checkbox" [(ngModel)]="highlightHeadings" />
  Highlight all headings
</div>
<child-test [highlight]="highlightHeadings">
  <h1 *ngFor="let ch of cHs" [id]="'c-0' + ch" class="in-content">
    Content heading #{{ ch }}
  </h1>

  <button (click)="addHeading()">NEW C-ONE</button>
</child-test>
```

## `app.component.ts`

```
cHs = [1, 2];

addHeading() {
  this.cHs.push(this.cHs.length + 1);
}
```

## `heading.directive.ts`

```
import { Input, Directive, HostBinding } from '@angular/core';

@Directive({
	selector: 'h1'
})
export class HeadingDirective {
	@Input('class')
	klazz: string;

	@Input('id')
	id: string;

	@HostBinding('class.text-danger')
	highlight: boolean = false;

	setHighlight(highlight: boolean) {
		this.highlight = highlight;
	}
}
```

## `child-test.component.ts`

```
import { Component, ViewChildren, ContentChildren, QueryList, Input, SimpleChange } from '@angular/core';
import { HeadingDirective } from './heading.directive';

@Component({
	selector: 'child-test',
	template: `
		<div>
			<h1 *ngFor="let vh of vHs" [id]="'v-0' + vh" class="in-view">
				View heading {{ vh }}
			</h1>
			<button (click)="addHeading()">NEW V-ONE</button>
			<ng-content></ng-content>
		</div>
	`
})
export class ChildTestComponent {
	vHs = [1, 2];

	addHeading() {
		this.vHs.push(this.vHs.length + 1);
	}

	@Input('highlight')
	highlight: boolean;

	@ViewChildren(HeadingDirective)
	vHeadings: QueryList<HeadingDirective>;

	@ContentChildren(HeadingDirective)
	cHeadings: QueryList<HeadingDirective>;

	ngOnChanges(changes: {[property: string]: SimpleChange}) {
		var change = changes['highlight'];

		if (!change.isFirstChange()) {
			console.log('>>', change.currentValue);
			this.updateHighlight(this.vHeadings);
			this.updateHighlight(this.cHeadings);
		}
	}

	ngAfterViewInit() {
		console.log('## VIEW INIT');
		this.updateHighlight(this.vHeadings);
		this.vHeadings.changes.subscribe(ch => {
			this.updateHighlight(this.vHeadings);
			console.log('$[V]>', ch);
		});
	}

	ngAfterContentInit() {
		console.log('## CONTENT INIT');
		this.updateHighlight(this.cHeadings);
		this.cHeadings.changes.subscribe(ch => {
			this.updateHighlight(this.cHeadings);
			console.log('$[C]>', ch);
		});
	}

	private updateHighlight(collection: QueryList<HeadingDirective>) {
		setTimeout(() => {
			collection.forEach(e => {
				e.setHighlight(this.highlight);
			});
		}, 0);
	}
}

```
