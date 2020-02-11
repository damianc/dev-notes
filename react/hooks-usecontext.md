# Hooks: `useContext()`

```
const value = useContext(context);
```

The argument must be the context object itself:
* **OK**: `useContext(MyContext)`
* **Incorrect**: `useContext(MyContext.Consumer)`
* **Incorrect**: `useContext(MyContext.Provider)`

## Example: Themed Button

```
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton({ children }) {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      {children}
    </button>
  );
}
```

> When the nearest `<MyContext.Provider>` above the component updates, this hook will trigger a rerender with the latest context value passed to that `MyContext` provider.
>
> *Even if* an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.

