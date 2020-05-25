# Assignment vs. `as` in Structural Directive

* assignment

```
*ngFor="let item of items; let i = index"
```

* `as`

```
*ngFor="let item of items; index as i"
```

> `*someStructDir="$implicit as item"`
