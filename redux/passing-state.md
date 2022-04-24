# Passing State: `Provider`, `ReactReduxContext` and `connect()`

* [In a prop](#in-a-prop)
* [`Provider` + `ReactReduxContext`](#provider--reactreduxcontext)
* [`connect()`](#connect)
  - [`connect()` Spec](#connect-spec)

## In a Prop

* definer:

```
function App() {
  return (
    <Counter store={store} />
  );
}
```

* consumer:

```
function Counter({ store }) {
  const { counter } = store.getState();
  return counter;
}
```

## `Provider` + `ReactReduxContext`

* definer:

```
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

```
function App() {
  return <Counter />;
}
```

* consumer:

```
import { ReactReduxContext } from 'react-redux';

function Counter() {
  return (
    <ReactReduxContext.Consumer>
      { ({ store }) => {
        const { counter } = store.getState();
        return counter;
      } }
    </ReactReduxContext.Consumer>
  );
}
```

## `connect()`

* definer:

```
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

```
function App() {
  return <Counter />;
}
```

* consumer:

```
import { connect } from 'react-redux';

function Counter({ counter, increment }) {
  return (
    <div>
      { counter }
      <button onClick={() => increment()}>+</button>
    </div>
  );
}

const mapStateToProps = state => ({
  conter: state.counter
});

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch({ type: 'INCREMENT' });
  }
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Counter);
```

### `connect()` Spec

```
connect(

  mapStateToProps?: (
    state: Object,
    ownProps?: Object
  ) => Object,
  
  mapDispatchToProps?: Object | (
    dispatch: Function,
    ownProps?: Object
  ) => Object,
  
  mergeProps?: (
    stateProps: Object,
    dispatchProps: Object,
    ownProps: Object
  ) => Object,
  
  options?: {
    context?: Object,
    pure?: boolean,
    areStatesEqual?: Function,
    areOwnPropsEqual?: Function,
    areStatePropsEqual?: Function,
    areMergedPropsEqual?: Function,
    forwardRef?: boolean
  }
)
```

* If `mapDispatchToProps` parameter is omitted, a component receives `dispatch` prop being dispatcher function.
* If `mergeProps` parameter is passed, only props returned from the function get to a component.

#### Object with Action Creators

```
export default connect(
  null, {
    increment: () => ({
      type: 'INCREMENT'
    })
  }
)(Counter);
```

#### Function Receiving a Dispatcher

```
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({
      type: 'INCREMENT'
    })
  };
}
```