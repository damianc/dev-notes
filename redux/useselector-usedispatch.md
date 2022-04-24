# `useDispatch()` and `useSelector()`

## `useDispatch()`

```
import { useDispatch } from 'react-redux';

export function CounterNavigation {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch({ type: 'INCREMENT' }) }>
      +
    </button>
  );
}
```

## `useSelector()`

```
import { useSelector } from 'react-redux';

export function CounterOutput {
  const counter = useSelector(state => state.counter);

  return (
    <code>{ counter }</code>
  );
}
```