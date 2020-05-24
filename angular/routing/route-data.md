# Route Data

```
{
	path: 'data-path',
	component: FooBarComponent,
	data: {foo: 'bar'}
}
```

## Component

```
export class FooBarComponent {
	fooValue = '';

	constructor(private activeRoute: ActivatedRoute) {}

	ngOnInit() {
		this.activeRoute.data
		.subscribe(({ foo }) => this.fooValue = foo);
	}
}
```