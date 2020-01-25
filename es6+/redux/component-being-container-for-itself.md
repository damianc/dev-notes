# Component Being Container for Itself

## Original Component

```
class Counter extends React.Component {
	render() {
		let { counter } = store.getState();
		return (
			<div>
				Current: {counter}
				<button onClick={this.increase}>+</button>
			</div>
		);
	}

	increase = () => {
		store.dispatch({
			type: 'INCREASE'
		});
	}
}
```

## Component-Container

```
const mapStateToPropsCounter = (state) => ({
	counter: state.counter
});

const mapDispatchToPropsCounter = (dispatch) => ({
	increase: () => {
		dispatch('INCREASE');
	}
});

let Counter = ({ counter, increase }) => {
	return (
		<div>
			Current: {counter}
			<button onClick={increase}>+</button>
		</div>
	);
};

Counter = connect(
	mapStateToPropsCounter,
	mapDispatchToPropsCounter
)(Counter);
```