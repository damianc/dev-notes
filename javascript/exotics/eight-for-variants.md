# 8 Variants of the `for` Loop

## `for (init; cond; op)`

```
let sum = 0;
for (let i = 1; i <= 5; i++) sum += i;
```

## `for ( ;; )`

```
let sum = 0;
let i = 1;
for ( ;; ) {
  if (i > 5) break;
  sum += i++;
}
```


## `for (init ;;)`

```
let sum = 0;
for (let i = 1 ;;) {
  if (i > 5) break;
  sum += i++;
}
```

## `for ( ; cond ; )`

```
let sum = 0;
let i = 1;
for ( ; i<=5 ; ) {
sum += i++;
}
```

## `for (;; op)`

```
let sum = 0;
let i = 1;
for (;; i++) {
  if (i > 5) break;
  sum += i;
}

```

## `for ( ; cond; op)`

```
let sum = 0;
let i = 1;
for ( ; i <= 5; i++) sum += i;
```

## `for (init; ; op)`

```
let sum = 0;
for (let i = 1; ; i++) {
  if (i > 5) break;
  sum += i;
}
```

## `for (init; cond; )`

```
let sum = 0;
for (let i = 1; i <= 5; ) sum += i++;
```