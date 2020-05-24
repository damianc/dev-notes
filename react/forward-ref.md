# `React.forwardRef()`

```
const TabularData = React.forwardRef((props, ref) => (
	<TabularDataComponent forwardedRef={ref} {...props} />
));

const TabularDataComponent = ({ data, title, forwardedRef }) => (
	<div>
		<h1>{ title }</h1>
		<table ref={forwardedRef}>
				{data.map(d => (
					<tr key={d}>
						<td>{d}</td>
					</tr>
				))}
		</table>
	</div>
);
```

## 

```
function App() {
	const ref = React.createRef();
	
	const highlightData = React.useCallback(() => {
		ref.current.style.backgroundColor = 'red';
		// `ref` refers to the table element
	}, []);

	return (
		<div>
			<TabularData ref={ref} data={['A', 'B', 'C', 'D']} title="Single Characters" />
			<button onClick={highlightData}>Highlight Data</button>
		</div>
	);
}
```