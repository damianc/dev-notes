# Firebase Realtime Database: Observing a Collection

```
const database = firebase.database();
const dbRefVal = database.ref().child('app');
const supportedLangs = dbRefVal.child('languages');

/* handle addition */
supportedLangs.on('child_added', snap => {
	let newLang = snap.val();
	console.log('New language supported:', newLang);
});

/* handle removal */
supportedLangs.on('child_removed', snap => {
	let deletedLang = snap.val();
	console.log('Language not supported any longer:', deletedLang);
});

/* handle update */
supportedLangs.on('child_changed', snap => {
	let changedLangKey = snap.key;
	let changedLangVal = snap.val();
	console.log('Language %s changed to %s', changedLangKey, changedLangVal);
});
```
