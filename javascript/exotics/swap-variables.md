# Swap Variables

## Before ES6

* two variables

```
var a = 1, b = 2;
a = [b, b = a][0];
```

* three variables

```
var a = 'A', b = 'B', c = 'C';

// a -> b, b -> c, c -> a
c = [b, b = [a, a = c][0]][0];

// a = 'C', b = 'A', c = 'B'
```

## ES6

* two variables

```
let a = 1, b = 2;
[a, b] = [b, a];
```

* three variables

```
let a = 'A', b = 'B', c = 'C';

// a -> b, b -> c, c -> a
[a, b, c] = [c, a, b];

// a = 'C', b = 'A', c = 'B'
```