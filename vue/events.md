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