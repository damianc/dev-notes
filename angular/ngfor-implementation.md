# `ngFor` Implementation

```
import {
	Directive, ViewContainerRef, TemplateRef, Input,
	IterableDiffers, DefaultIterableDiffer
} from '@angular/core';

@Directive({
	selector: '[ngxForOf]'
})
export class NgxForDirective {
	private differ: DefaultIterableDiffer<any>;

	constructor(
		private container: ViewContainerRef,
		private template: TemplateRef<Object>,
		private differs: IterableDiffers
	) {}

	@Input('ngxForOf')
	dataSource: any;

	ngOnInit() {
		this.differ = <DefaultIterableDiffer<any>>this.differs.find(
			this.dataSource
		).create();
	}

	ngDoCheck() {
		let changes = this.differ.diff(this.dataSource);

		if (changes != null) {
			this.container.clear();

			let collection = <Array<any>>changes.collection;
			collection.forEach((item, idx, coll) => {
				this.container.createEmbeddedView(
					this.template,
					new NgxIteratorContext(item, idx, coll.length)
				);
			});
		}
	}
}

class NgxIteratorContext {
	index: number;
	odd: boolean;
	even: boolean;
	first: boolean;
	last: boolean;

	constructor(
		public $implicit: any,
		public position: number,
		total: number
	) {
		this.index = position;
		this.odd = position % 2 == 1;
		this.even = !this.odd;
		this.first = position == 0;
		this.last = position == total - 1;
	}
}
```

## Usage

```
<button (click)="addBook()">ADD BOOK</button>

<ul>
	<li *ngxFor="let book of books; let i = index; let last = last"
		[class.text-danger]="last">

		{{ i + 1 }}. {{ book }}
		<button (click)="removeBook(book)">DELETE</button>

	</li>
</ul>
```

```
books: string[] = [
	'Book 1', 'Book 2'
];

addBook() {
	this.books.push(
		'Book ' + (this.books.length + 1)
	);
}

removeBook(book) {
	let idx = this.books.indexOf(book);

	if (idx != -1) {
		this.books.splice(idx, 1);
	}
}
```
