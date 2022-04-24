# Extra Argument of Thunk

* store:

```
const mlInOneGulp = 5;
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk.withExtraArgument(mlInOneGulp))
);
```

* component:

```
const Actions = {
  takeGulpIfGlassNotEmpty() {
    return (dispatch, getState, gulpMl) => {
      if (getState().vodka >= gulpMl) {
        dispatch({
          type: 'GULP',
          ml: gulpMl
        });
      } else {
        dispatch({
          type: 'EMPTY'
        });
      }
    };
  }
};

function Vodka({ vodka, takeGulp }) {
  return (
    <div>
      Vodka: { vodka } ml
      <button onClick={ takeGulp }>Take Gulp</button>
    </div>
  );
}

export default connect(
  state => ({ vodka: state.vodka }),
  dispatch => ({
    takeGulp() {
      dispatch(Actions.takeGulpIfGlassNotEmpty());
    }
  })
)(Vodka);
```

## More Arguments

If you need more arguments (for example, glass capacity for `FILL` action), you must pass them as an object:

```
thunk.withExtraArgument({
  gulpMl: 5,
  glassCapacity: 28
});
```