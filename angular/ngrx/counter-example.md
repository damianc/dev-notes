# Counter Example with NgRx

## Installation

```
npm i -P @ngrx/store
```

## Files

### `app.module.ts`

```
...
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx-counter/counter.reducer';

@NgModule({
	...
	imports: [
		...
		StoreModule.forRoot({ count: counterReducer })
	]
})
```

### `ngrx-counter/counter.reducer.ts`

```
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
 
export const initialState = 0;
 
const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
```

### `ngrx-counter/counter.actions.ts`

```
import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
```

### `ngrx-counter/counter.interface.ts`

```
export interface ICounterState {
	count: number;
}
```

### `ngrx-counter/counter.component.ts`

```
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './counter.actions';
import { ICounterState } from './counter.interface';

@Component({
	selector: 'ngrx-counter',
	templateUrl: './counter.component.html',
	styleUrls: ['./counter.component.scss']
})
export class NgrxCounterComponent {
  count$: Observable<number>;
 
  constructor(private store: Store<ICounterState>) {
    this.count$ = store.pipe(select('count'));
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}
```

### `ngrx-counter/counter.component.html`

```
<button id="increment" (click)="increment()">Increment</button>

<div>Current Count: {{ count$ | async }}</div>

<button id="decrement" (click)="decrement()">Decrement</button>

<button id="reset" (click)="reset()">Reset Counter</button>
```

## Adding _Increase By_ Field

* `app.module.ts`

```
...
import { FormsModule } from '@angular/forms';
// providers[]: FormsModule
```

* `ngrx-counter.component.html`

```
Increment by: <input type="number" [(ngModel)]="incrementStep" />
<button (click)="incrementBy()">Apply</button>
```

* `ngrx-counter.component.ts`

```
import { ..., incrementBy } from './counter.actions';
...
  incrementStep: number;
  ...
  incrementBy() {
    this.store.dispatch(incrementBy({
      step: this.incrementStep || 1
    }));
  }
...
```

* `ngrx-counter/counter.actions.ts`

```
import { createAction, props } from '@ngrx/store';
...
export const incrementBy = createAction(
  '[Counter Component] Increment By',
  props<{step: number}>()
);
```

* `ngrx-counter/counter.reducer.ts`

```
import { ..., incrementBy } from './counter.actions';
...
const _counterReducer = createReducer(initialState,
  ...
  on(incrementBy, (state, action) => {
    return state + action.step;
  })
);
```