# Hooks: `useRef()`

The `useRef()` hook can be used to:
- store mutable value
- access DOM node or React element

```
function MyComponent() {
  const reference = useRef(initialValue);

  const someHandler = () => {
    // access value
    const value = reference.current;

    // update value
    reference.current = newValue;
  };

  // ...
}
```

> Update of value should take place in a callback (e.g., one passed to `useEffect()`), not directly in the component.

## Ref vs State

- updating value does not trigger re-render (unlike state)
- value update is synchronous (unlike state being asynchronous)
- value remains the same on every render

> The only difference between `useRef()` and creating a `{current: ...}` object yourself is that `useRef` will give you the same ref object on every render.

## Example: Clicks Counter That Does Not Trigger Re-Render

```
function LogButtonClicks() {
  const countRef = useRef(0);
  
  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  return <button onClick={handle}>Click me</button>;
}
```

## Example: A Stopwatch (Storing Internal Value Meant To Not Show)

```
function Stopwatch() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }

    timerIdRef.current = setInterval(() => setCount(c => c + 1), 1000);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}
```

## Example: Access a DOM Element

* in event handler

```
function InputField() {
  const inputRef = useRef();

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Click to Focus the input
      </button>
    </div>
  );
}
```

* in the component

```
function InputFocus() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input 
      ref={inputRef} 
      type="text" 
    />
  );
}
```

> Accessing `inputRef.current` outside of a callback will give `undefined` during initial render.

## Forcing Re-Render on Value Update

```
function ClickCounter() {
  const counter = useRef(0);
  const [, forceUpdate] = useState(Date.now());

  function onClick() {
    counter.current++;
    forceUpdate(Date.now());
  }

  return (
    <div>
      { counter.current }
      <button onClick={onClick}>+</button>
    </div>
  );
}
```

## Sources

* [Hooks API Reference: `useRef()`](https://reactjs.org/docs/hooks-reference.html#useref)
* [The Complete Guide to `useRef()` and Refs in React](https://dmitripavlutin.com/react-useref-guide/#1-mutable-values)
* [React's `useEffect` and `useRef` Explained for Mortals](https://leewarrick.com/blog/react-use-effect-explained/)
* [A Thoughtful Way To Use React’s `useRef()` Hook](https://www.smashingmagazine.com/2020/11/react-useref-hook/)