# Events

## Simple Listener

```
<div @click="clickHandler">
	Click here
</div>
```

```
methods: {
	clickHandler(e) {
		console.log('Click at %dx%d', e.clientX, e.clientY);
	}
}
```

## Passing Arguments to Listener

```
<div @click="say('Hello')">
	Hello mate!
</div>
```

```
methods: {
	say(msg) {
		console.log('>> %s', msg);
	}
}
```

## Passing Original Event to Listener

```
<div @click="getClickCoords($event, 25, 25)">
	Click here to get click coords.
</div>
```

```
methods: {
	getClickCoords({ clientX, clientY }, offsetX, offsetY) {
		console.log(
			'Coords of click: %dx%d',
			clientX - offsetX,
			clientY - offsetY
		);
	}
}
```

## Event Modifiers

| Modifier | Description | Notes |
|----------|-------------|-------|
| `.stop` | stops propagation of an event | |
| `.prevent` | prevents default behavior of browser for a particular event | |
| `.capture` | registers a listener for the capturing phase | |
| `.self` | triggers a listener when the event target is the element itself | |
| `.once` | triggers a listener at most once | **2.1.4+** |
| `.passive` | registers a listener as a passive one | **2.3.0+** |

* modifiers can be chained

```
<a @click.stop.prevent="doStuff">Start</a>
```

* Don’t use `.passive` and `.prevent` together (`.prevent` will be ignored and your browser will probably show you a warning). Remember: _`.passive` communicates to the browser that you don’t want to prevent the event’s default behavior_.

## Key Modifiers

```
<input @keyup.enter="submit" />
```

### Key Code from `keyCode`

```
<input @keyup.13="submit" />
```

#### Aliases Provided by Vue

* `.enter`
* `.tab`
* `.delete` (captures both "Delete" and "Backspace" keys)
* `.esc`
* `.space`
* `.up`
* `.down`
* `.left`
* `.right`

#### Custom Alias

```
// enable `@keyup.f1`
Vue.config.keyCodes.f1 = 112;
```

### Key Name from `KeyboardEvent.key`

Key names from [`KeyboardEvent.key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) should be converted to kebab-case:

```
<div @keyup.page-down="onPageDown">...</div>
```

## System Modifier Keys

You can use the following modifiers to trigger mouse or keyboard event listeners only when the corresponding modifier key is pressed:

* `.ctrl`
* `.alt`
* `.shift`
* `.meta` (⌘, ⊞, ◆, etc.)

```
<!-- Alt + C -->
<input @keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```

> Note that modifier keys are different from regular keys and when used with `keyup` events, they have to be pressed when the event is emitted. In other words, `keyup.ctrl` will only trigger if you release a key while holding down `ctrl`. It won’t trigger if you release the `ctrl` key alone. If you do want such behaviour, use the `keyCode` for ctrl instead: `keyup.17`.

### The `.exact` Modifier

The `.exact` modifier allows control of the exact combination of system modifiers needed to trigger an event.

| event modifier(s) | description |
|-------------------|-------------|
| `@click.ctrl` | fires a listener even if Alt or Shift is also pressed |
| `@click.ctrl.exact` | only fires a listener when Ctrl and no other keys are pressed |
| `@click.exact` | only fires a listener when no system modifiers are pressed |

## Mouse Button Modifiers

* `.left`
* `.right`
* `.middle`