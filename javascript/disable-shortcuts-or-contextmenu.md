# Disable Shortcuts or Context Menu

* shortcuts:

```
window.addEventListener('keydown', e => {
  e.preventDefault();
});
```

* context menu:

```
window.addEventListener('contextmenu', e => {
  e.preventDefault();
});
```