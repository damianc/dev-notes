# Route Data

```
{
	path: 'data-path',
	component: FooBarComponent,
	data: {foo: 'bar'}
}
```

## `foo-bar.component.ts`

```
class FooBarComponent {
	fooValue = '';

	constructor(private activeRoute: ActivatedRoute) {}

	ngOnInit() {
		this.activeRoute.data
		.subscribe(({ foo }) => this.fooValue = foo);
	}
}
```