# Animation Details

## Transition Directions

| Symbol | Example | Description |
|--|--|--|
| `=>` | `selected => notselected` | one-direction transformation (from `selected` to `notselected`) |
| `<=>` | `selected <=> notselected` | two-direction transformation |

## Built-in States

| State | Description |
|--|--|
| `*` | an element has none of states defined by a trigger |
| `void` | an element is not contained in the template (e.g., `ngIf` is assigned `false`) |

```
trigger('rowHighlight', [
	...
	state('*', style({
		border: 'solid black 2px'
	})),
	transition('selected => notselected', animate('200ms')),
	transition('notselected => selected', animate('400ms'))
])
```

### Transition Path Aliases

| Alias | Meaning |
|--|--|
| `:enter` | `void => *` |
| `:leave` | `* => void` |

## The `*` Wildcard (Any State)

### From Any State

```
trigger('rowHighlight', [
	...
	state('*', style({
		border: 'solid black 2px'
	})),
	transition('* => notselected', animate('200ms')),
	transition('* => selected', animate('400ms'))
])
```

### To Any State

```
trigger('rowHighlight', [
	...
	state('void', style({
		opacity: 0
	})),
	...
	transition('void => *', animate('500ms'))
])
```

> `animate('500ms')` can be written as `animate('0.5s')` as well

## Timing Parameter of `animate()`

* `400ms` - duration
* `400ms 200ms` - duration + delay
* `400ms ease-in` - duration + behavior
* `400ms 200ms ease-in` - duration + delay + behavior

Animation Behavior:

* `linear` (`------------`)
* `ease-in` (`- - - - - - ------`)
* `ease-out` (`------ - - - - - -`)
* `ease-in-out` (`---- - - - - ----`)
* `cubic-bezier()`

## Extra Styles Parameter of `animate()`

```
animate('400ms 200ms ease-in', style({
	backgroundColor: 'lightblue',
	fontSize: '25px'
}))
```

> `400ms ----> X`

## Sequence of Animations

```
trigger('rowHighlight', [
	state('selected', style({
		backgroundColor: 'lightgreen',
		fontSize: '20px'
	}))
	...
	transition('* => selected', [
		animate('400ms 200ms ease-in', style({
			backgroundColor: 'lightblue',
			fontSize: '25px'
		})),
		animate('250ms', style({
			backgroundColor: 'lightcoral',
			fontSize: '30px'
		})),
		animate('200ms')
	])
	...
])
```

> `400ms ----> 250ms ----> X 200ms ---->`

## Parallel Animations with `group()`

```
trigger('rowHighlight', [
	state('selected', style({
		backgroundColor: 'lightgreen',
		fontSize: '20px'
	}))
	...
	transition('* => selected', [
		animate('400ms 200ms ease-in', style({
			backgroundColor: 'lightblue',
			fontSize: '25px'
		})),
		group([
			animate('250ms', style({
				backgroundColor: 'lightcoral'
			})),
			animate('450ms', style({
				fontSize: '30px'
			}))
		]),
		animate('200ms')
	])
	...
])
```

> `400ms ----> 450ms/250ms --*--> 200ms ---->`

## Common Styles

```
style([commonStyles, {
	backgroundColor: 'lightgreen',
	fontSize: '20px'
}])
```

## Element Transformations

```
style({
	transform: 'translateX(-50%)'
})
```

> more comma-separated functions can be passed

* `translateX(offset)`
* `translateY(offset)`
* `translate(offsetX, offsetY)`
* `scaleX(size)`
* `scaleY(size)`
* `scale(sizeX, sizeY)`
* `rotate(angle)`
* `skewX(angle)`
* `skewY(angle)`
* `skew(angleX, angleY)`

## Animation Events

`AnimationTransitionEvent`:

* `fromState`
* `toState`
* `totalTime`

```
<tr *ngFor="let item of getProducts()"
	[@rowHighlight]="getRowState(item.category)"
	(@rowHighlight.start)="writeAnimationEvent($event, item.name, true)"
	(@rowHighlight.done)="writeAnimationEvent($event, item.name, false)">
	...
</tr>
```

```
...
import { HighlightTrigger } from './table.animation';
import { AnimationTransitionEvent } from '@angular/core';

@Component({
	...
	animations: [HighlightTrigger]
})
export class TableComponent {
	...
	writeAnimationEvent(event: AnimationTransitionEvent, name: string, start: boolean) {
		console.log(
			'Animation %s %s from the state %s to the state %s, duration time: %d.',
			name,
			start ? 'started' : 'finished',
			event.fromState,
			event.toState,
			event.totalTime
		);
	}
}
```
