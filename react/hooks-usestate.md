# Hooks: `useState()`

```
function Counter() {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			{counter}
			<button onClick={() => setCounter(counter + 1)}>
				+
			</button>
		</div>
	);
}
```

## Passing a Callback to a State Setter

```
setCounter(counter => counter + 1);
```

* change of a state is independent of variables
* functions may be moved away out of a file

## `useState()` Does Override State (Not Merge)

```
const [state, setState] = useState({a: 1});
setState({b: 2});

// state = {b: 2}
```

### Workaround

```
setState(state => ({
	...state,
	{b: 2}
}));
```

## Multiple States instead of One Large State Tree

```
const [counter, setCounter] = useState(0);
const [position, setPosition] = useState('top');
```

## Callback as a Initial State Value

```
const [state, setState] = useState(() => {
	return timeTakingOperation();
});
```

* the callback will only be called once (when mounting a component)
* helpful approach when a call of the function is supposed to take a longer moment (calling it in every render is pointless)

> More often than not this approach will not be necessary.
