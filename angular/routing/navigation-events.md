# Navigation Events

* `NavigationStart`
* `NavigationEnd`
* `NavigationError`
* `NavigationCancel`
* `RoutesRecognized`

```
import { Router, NavigationEnd, NavigationCancel } from '@angular/router';
import { filter } from 'rxjs/operators';

class ... {
	constructor(router: Router) {
		router.events.pipe(
			filter(e => e instanceof NavigationEnd || e instanceof NavigationCancel)
		).subscribe(...);
	}
}
```
