# Streaming

```
app.get('/stream', (req, res) => {
	var stream = fs.createReadStream('img/large-image.png');
	stream.pipe(res);
});
```

## Handling Events

```
app.get('/stream', (req, res) => {
	var stream = fs.createReadStream('img/large-image.png');

	stream.on('data', (data) => {
		res.write(data);
	});

	stream.on('end', () => {
		res.end();
	});
});
```
