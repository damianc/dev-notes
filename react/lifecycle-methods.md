# Lifecycle Methods

<table>
  <thead>
    <tr>
      <th>Method</th>
      <th>Purpose</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>render()</code></td>
      <td>
        The only required method in component. Should return one of the following: JSX element (HTML or component), fragments, array, portal, string, number and boolean or <code>null</code> for conditional render. Won't be called if <code>shouldComponentUpdate()</code> returns <code>false</code>.
      </td>
      <td>
        Should be pure, i.e., does not affect state, always returns the same results, does not interact with browser and does not perform any side effects.
      </td>
    </tr>
    <tr>
      <td><code>constructor(props)</code></td>
      <td>
        Mainly used for two things: init state and bind event handlers.
      </td>
      <td>
        Initial state must be set with <code>this.state</code> assignment rather than with <code>setState()</code> method (unlike other methods).
      </td>
    </tr>
    <tr>
      <td><code>componentDidMount()</code></td>
      <td>
        A place for side effects (like fetching data from API) and subscriptions.
      </td>
      <td>
        If some state prop depends on DOM (e.g., modal, tooltip), <code>setState()</code> can be used here.
      </td>
    </tr>
    <tr>
      <td><code>componentDidUpdate(prevProps, prevState, snapshot)</code></td>
      <td>
        Fired after an update (not after the first render). It is a place for manipulating DOM or fetching data when props changed (won't be called if <code>shouldComponentUpdate()</code> returns <code>false</code>).
      </td>
      <td>
        Call of <code>setState()</code> without a condition will result in the infinite loop.
      </td>
    </tr>
    <tr>
      <td><code>componentWillUnmount()</code></td>
      <td>
        A place for clean-ups: timers, subscritions, requests.
      </td>
      <td>
        You shouldn't call <code>setState()</code> here as component will not be re-rendered.
      </td>
    </tr>
    <tr>
      <td colspan="3">LESS COMMON METHODS</td>
    </tr>
    <tr>
      <td><code>shouldComponentUpdate(nextProps, nextState)</code></td>
      <td>
        Called before a render, when new props and state are being received (not called for the initial render and when <code>forceUpdate()</code> is fired).
      </td>
      <td>
        It's not recommended to perform deep comparisons or use <code>JSON.stringify()</code> as it may cause performance issues.
      </td>
    </tr>
    <tr>
      <td><code>static getDerivedStateFromProps(props, state)</code></td>
      <td>
        Called just before <code>render()</code>, should return an object updating state or <code>null</code> to update nothing. In React 16.3, called after constructor and addition of new props, as of React 16.4, additionally it's caled after <code>setState()</code> and <code>forceUpdate()</code> methods.
      </td>
      <td>
        This method is unable to access an instance of a component.
      </td>
    </tr>
    <tr>
      <td><code>getSnapshotBeforeUpdate(prevProps, prevState)</code></td>
      <td>
        Called just before the newest results are to impact DOM. Can get information from DOM, like position of a scrollbar, before it gets changed.
      </td>
      <td>
        Returned value is passed as a third argument of <code>componentDidUpdate()</code> method (<code>undefined</code> if this method returns <code>null</code>).
      </td>
    </tr>
    <tr>
      <td><code>static getDerivedStateFromError(error)</code></td>
      <td>
        Called when exception is thrown in a child component. Returns value that will update state (e.g., alternative UI can be rendered in case of error).
      </td>
      <td>
        Side effects are not allowed here, do it in <code>componentDidCatch()</code> instead.
      </td>
    </tr>
    <tr>
      <td><code>componentDidCatch(error, info)</code></td>
      <td>
        Called when exception is thrown in a child component.
      </td>
      <td>
        In development environment, errors do reach <code>window</code> (<code>window.onerror</code> will handle them along with this method). In production environment, upper error boundaries will only receive errors if their children don't catch them with this method.
      </td>
    </tr>
  </tbody>
</table>

## Deprecated Methods

* `UNSAFE_componentWillMount()` - use constructor for defining state or `componentDidMount` for side effects and subscriptions
* `UNSAFE_componentWillReceiveProps(nextProps)` - use `getDerivedStateFromProps` with `componentDidUpdate` if needed
* `UNSAFE__componentWillUpdate(nextProps, nextState)` - use `getSnapshotBeforeUpdate` with `componentDidUpdate` if needed

## Phases

| Phase | Description | Methods |
|----|----|----|
| Render | Pure and without side effects. Can be held, canceled or restarted by React. | `constructor()`, `getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()` |
| Pre-commit | Can read DOM. | `getSnapshotBeforeUpdate()` |
| Commit | Can operate on DOM, create side effects and queue updates. | `componentDidMount()`, `componentDidUpdate()`, `componentWillUnmount()` |