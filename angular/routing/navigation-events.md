# Navigation Events

`RouterEvent`:

* `GuardsCheckStart`
* `GuardsCheckEnd`
* `NavigationStart`
* `NavigationEnd`
* `NavigationError`
* `NavigationCancel`
* `ResolveStart`
* `ResolveEnd`
* `RoutesRecognized`

Other:

* `ActivationStart`
* `ActivationEnd`
* `ChildActivationStart`
* `ChildActivationEnd`
* `RouteConfigLoadStart`
* `RouteConfigLoadEnd`
* `Scroll`

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
