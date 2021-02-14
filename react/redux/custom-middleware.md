# Custom Middleware

## `stateLogger`

```
function stateLogger({ getState }) {
  return next => action => {
    console.log('action:', action.type);
    console.log('state before dispatch', getState());

    const nextState = next(action);

    console.log('state after dispatch', getState());

    return nextState;
  };
}
```

```
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(stateLogger)
);
```

## `statePropMonitor()`

```
const statePropMonitor = prop => ({ getState }) => next => action => {
  console.log(`${prop} before ${action.type}: ${getState()[prop]}`);

  const nextState = next(action);

  console.log(`${prop} after ${action.type}: ${getState()[prop]}`);

  return nextState;
};
```

```
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(statePropMonitor('counter'))
);
```