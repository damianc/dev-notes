# Detect Tab Change

```
document.addEventListener('visibilitychange', () => {
  const time = new Date().toTimeString().slice(0, 8);
  console.log(`[${time}]: ${document.visibilityState}`);
});
```

> `document.visibilityState = 'visible' || 'hidden'`

Fires when:
- tab is changed (including opening a new tab)
- other window __entirely__ covers a browser 

Won't fire when:
- overlaying window does not __entirely__ fill the screen
- other non-fullsize layers shows, like _Start_ menu on Windows