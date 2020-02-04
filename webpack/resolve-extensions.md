# Resolve Extensions (Other Than `.js`)

* ~`import Counter from 'components/counter.jsx'`~
* `import Counter from 'components/counter'`

## `webpack.config.js`

```
...
resolve: {
	extensions: [
		'.js',
		'.jsx'
	]
}
...
```