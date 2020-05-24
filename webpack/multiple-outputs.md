# Multiple Outputs

```
module.exports = {
	...	
	entry: {
		app: './src/app.js',
		dashboard: './src/dashboard.js'
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist'
	}
};
```