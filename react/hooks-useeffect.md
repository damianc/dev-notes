# Hooks: `useEffect()`

```
useEffect(callbackWithSideEffects);
```

Examples of side effects:
* API requests
* subscriptions (RxJS, EventEmitter)
* timers (`setTimeout()`, `setInterval()`)
* update of the external stuff (like `document.title`)
* event listeners (like `onresize`)

> None of the above things should be placed **directly** within a component.

## Example: Dynamic Title of the Page

```
function usersList() {
	const [filteredUsers, setUsers] = useState(allUsers);
	...
	useEffect(() => {
		document.title = `Showing ${filteredUsers.length} users`;
	});
}
```

## Effect Dependencies

By default, a callback passed to the `useEffect()` is called in every render.  
More often than not it's expected behavior.

To only call the callback if particular values change, we can pass the values as a second parameter of the `useEffect()`:

```
useEffect(() => {
	document.title = `Showing ${filteredUsers.length} users`;
}, [filteredUsers]);
```

To run an effect and clean it up only once (on mount and unmount), we can pass an empty array (`[]`) as a second argument.

## Cleaning Up

```
useEffect(() => {
	const subscription = props.status$.subscribe(
		handleStatusChange
	);

	return () => {
		subscription.unsubscribe();
	};
});
```
