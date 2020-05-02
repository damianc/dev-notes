# Params of Route

```
...
import { ActivatedRoute } from '@angular/router';

class ... {
	constructor(activeRoute: ActivatedRoute) {
		this.editing = activeRoute.snapshot.params['mode'] == 'edit';
	}

	editing: boolean;
}
```

`snapshot`:

* `url: UrlSegment {path, parameters}`
* `params: Params`
* `queryParams: Params`
* `fragment: string`

## Optional Params

```
<button [routerLink]="[
	'/form', 'edit', item.id, {
		name: item.name,
		price: item.price
	}
]">Edit</button>
```

>> `http://localhost:3000/form/edit/6;name=Shoes;price=120`

```
const { id, name, price } = this.activeRoute.snapshot.params;
```

## Observable of Parameters

* `url`
* `params`
* `queryParams`
* `fragment`

```
constructor(activeRoute: ActivatedRoute) {
	activeRoute.params.subscribe(params => {
		this.editing = params['mode'] == 'edit';
		...
	});
}
```
