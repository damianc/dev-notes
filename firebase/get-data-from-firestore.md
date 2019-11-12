# Get Data from Firestore

```
const firestore = firebase.firestore();

const task$ = firestore
.collection('users')
.doc(getUserIdSomehow())
.collection('tasks')
.get()
.then(snapshot => {
	if (snapshot.empty) return;

	const tasks = [];

	snapshot.forEach(task => {
		let data = task.data();

		tasks.push({
			id: task.id, // !
			title: data.title,
			category: data.category
		});
	});

	return tasks;
});
```
