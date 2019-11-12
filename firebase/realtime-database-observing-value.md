# Firebase Realtime Database: Observing a Value

```
const database = firebase.database();
const dbRefVal = database.ref().child('app');

bdRefVal.on('value', snap => {
	console.log('Current version:', snap.val());
});
```

* `app` can be both a primitive and an object
* listener is fired when the value is altered in any way (like added, changed or removed)
* when initializing application, existing values are printed though they had existed before the application was run
