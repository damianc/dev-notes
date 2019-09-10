# RxJS Import

```
import { fromEvent, of, zip, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

// ...

var click$ = fromEvent(document, 'click');
var intv$ = interval(1000);

zip(click$, intv$)
.pipe(
	map(
		([e, n]) => n + 1
	)
)
.subscribe(console.log);
```
