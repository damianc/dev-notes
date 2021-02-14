# Multiple Stores

## `index.js`

```
...

const incStore = createStore(
  (state = 0, action) => action.type == 'TICK' ? state + 1 : state
);

const decStore = createStore(
  (state = 0, action) => action.type == 'TICK' ? state - 1 : state
);

ReactDOM.render(
  <>
    <Provider store={incStore} context={CtxA}>
      <Provider store={decStore} context={CtxB}>
        <CounterAB foo='FOO' />
      </Provider>
    </Provider>
  </>
);
```

## `counter-ab.jsx`

```
import { connect } from 'react-redux';
import { compose } from 'redux';
...

function CounterAB({ counter, tick }) {
  return (
    <div>
      Counter: { counter }
      <button onClick={tick}>TICK</button>
    </div>
  );
}

const mapStateAToProps = state => ({
  counter: state,
  bar: 'BAR'
});

const mapStateBToProps = state => ({
  counter: state,
  baz: 'BAZ'
});

const mapDispatchToProps = dispatch => ({
  tick() {
    dispatch({ type: 'TICK' });
  }
});

const ctxAConnector = connect(
  mapStateAToProps,
  mapDispatchToProps,
  null,
  { context: CtxA }
);

const ctxBConnector = connect(
  mapStateBToProps,
  mapDispatchToProps,
  null,
  { context: CtxB }
);

export default compose(
  ctxAConnector,
  ctxBConnector
)(CounterAB);
```

## Result

In the `CounterAB` component, the `props` object looks like the one below:

```
{
  bar: 'BAR',
  baz: 'BAZ',
  counter: 0,
  foo: 'FOO',
  tick: f tick()
}
```

Props of two component are merged, yet props with the same name are overriden: here the `tick()` function decreases the `counter`. It would increase it if the connectors are passed in reversed order:

```
export default compose(
  ctxBConnector,
  ctxAConnector
)(CounterAB);
```

## Sibling Contexts instead of Nested Ones

```
ReactDOM.render(
  <>
    <Provider store={incStore} context={CtxA}>
      <CounterA />
    </Provider>
    <Provider store={decStore} context={CtxB}>
      <CounterB />
    </Provider>
  </>
);
```

## Passing Context in Props

Passing a context in third parameter of `connect()` is one way to state the context to use.  
Another way is passing context via `context` prop:

```
const ctxAConnector = connect(
  mapStateAToProps,
  mapDispatchToProps
);

const ctxBConnector = connect(
  mapStateBToProps,
  mapDispatchToProps
);
```

```
ReactDOM.render(
  <>
    <Provider store={incStore} context={CtxA}>
      <CounterA context={CtxA} />
    </Provider>
    <Provider store={decStore} context={CtxB}>
      <CounterB context={CtxB} />
    </Provider>
  </>
);
```