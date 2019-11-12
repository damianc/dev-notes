# Upload File to Bucket

```
const storage = firebase.storage();

let inputFile = document.getElementById('file');
let progressBar = document.getElementById('progress-bar');
let resultOutput = document.getElementById('result-output');

inputFile.addEventListener('changed', e => {
	let file = e.target.files[0];
	let storageRef = storage.ref('avatars/');
	let task = storageRef.put(file);

	task.on(
		'state_changed',

		/* success handler */
		snap => {
			let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
			progressBar.value = percentage;
		},

		/* failure handler */
		err => {
			resultOutput.classList.add('result-error');
			resultOutput.innerText = err.message;
		},

		/* completion handler */
		() => {
			resultOutput.classList.add('result-ok');
			resultOutput.innerText = 'the file has been uploaded';
		}
	);
});
```
