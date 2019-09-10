# RxJS Imports

```
import { fromEvent, zip, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

// ...

var click$ = fromEvent(document, 'click');
var intv$ = interval(1000).pipe(take(10));

zip(click$, intv$)
.pipe(
  map(
    ([e, n]) => n + 1
  )
)
.subscribe(console.log);
```
