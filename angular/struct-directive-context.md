# Structural Directive with Context

* in HTML:

```
<div *book="bookInfo; let book; let author=author">
	<h4>{{ book.title }}</h4>
	<em>{{ author.fullname }}, {{ book.year }}</em>
</div>
```

* implementation:

```
import {
	Directive,
	ViewContainerRef, TemplateRef,
	Input, SimpleChange
} from '@angular/core';

Directive({
	selector: '[book]'
})
class BookDirective {
	constructor(
		private container: ViewContainer,
		private template: TemplateRef<any>
	) {}

	@Input()
	book: Book;

	ngOnChanges(changes: {[k: string]: SimpleChange}) {
		let change = changes['book'];

		if (!change.isFirstChange() && change.currentValue != null) {
			this.container.clear();
		} else {
			this.container.createEmbeddedView(
				this.template,
				new BookContext(this.book)
			);
		}
	}
}

class BookContext {
	constructor(bookInfo) {
		return {
			$implicit: bookInfo.bookDetails,
			author: bookInfo.authorDetails
		};
	}
}
```