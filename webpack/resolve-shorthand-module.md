# Resolve Shorthand Module

```
import CounterReducer from '@reducers/counter';
```

## `webpack.config.js`

```
...
resolve: {
	alias: {
		'@reducers': path.resolve(__dirname, 'reducers/')
	}
}
...
```