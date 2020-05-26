# Parent Router Params

```
this.parentId = this.activeRoute.parent.snapshot.params.id;
```

## Example

```
@Component({
	selector: 'book-details',
	templateUrl: './book-details.component.html'
})
export class BookDetailsComponent {
	id: number;
	parentId: number;

	constructor(
		private activeRoute: ActivatedRoute
	) {}

	ngOnInit() {
		this.activeRoute.params.subscribe(({ id }) => {
			this.id = id;
		});

		this.parentId = this.activeRoute.parent.snapshot.params.id;
	}
}
```