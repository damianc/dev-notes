# Link Passing Additional Data

## Component A

```
<Link to={{
	pathname: '/user/1234',
	state: {tabToFocus: 'list'}
}}>
	Return to the list
</Link>
```

## Component B

```
getTabToFocus() {
	const { location } = this.props;
	return location && location.state && location.state.tabToFocus;
}
```
