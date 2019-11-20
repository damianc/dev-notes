# Pure Redux

## `index.html`

```
<div id="output"></div>
<button id="inc-button">Increase</button>
<button id="dec-button">Decrease</button>

<div id="list"></div>
<button id="add-todo">Add Task</button>
<button id="del-todo">Delete Task</button>

<script src="app.js"></script>
```

## `index.js`

```
import { createStore } from 'redux';
import reducer from './reducers';

let store = createStore(reducer);
store.subscribe(render);
render();

function render() {
	let {counter, todos} = store.getState();

	console.log('op on counter');
	let output = document.getElementById('output');
	output.textContent = counter;

	console.log('op on todos');
	let list = document.getElementById('list');
	list.textContent = todos;
}

let incBtn = document.getElementById('inc-button');
let decBtn = document.getElementById('dec-button');

incBtn.addEventListener('click', e => {
	store.dispatch({
		type: 'INCREMENT'
	});
});

decBtn.addEventListener('click', e => {
	store.dispatch({
		type: 'DECREMENT'
	});
});

let addTodoBtn = document.getElementById('add-todo');
let delTodoBtn = document.getElementById('del-todo');

addTodoBtn.addEventListener('click', e => {
	store.dispatch({
		type: 'ADD_TODO',
		text: 'Use Redux'
	});
});

delTodoBtn.addEventListener('click', e => {
	store.dispatch({
		type: 'DEL_TODO'
	});
});
```

## `reducers/`

### `reducers/index.js`

```
import { combineReducers } from 'redux';
import todos from './todos';
import counter from './counter';

export default combineReducers({
	todos,
	counter
});
```

### `reducers/counter.js`

```
function counter(state = 0, action) {  
	switch (action.type) {
		case 'INCREMENT':
			return ++state;
		case 'DECREMENT':
			return --state;
	}

	return state;
}

export default counter
```

### `reducers/todos.js`

```
function todos(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat([action.text]);
		case 'DEL_TODO':
			let head = state.slice(0, -1);
			return head;
	}

	return state;
}

export default todos
```
