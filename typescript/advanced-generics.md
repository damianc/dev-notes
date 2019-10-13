# Advanced Generics

## `extends`

The following code prevents the error _length property does not exists on T type_:

```
size<T extends Collection>(coll: T): number {
	return coll.length;
}

interface Collection {
	length: number;
}
```

```
size(['A', 'B', 'C', 'D']);
// 4
```

## `extends keyof`

The following code prevents receiving a non-exisitng property from an object:

```
var task = {priority: 'medium', status: 'in progress'};

getProperty<T, K extends keyof T>(dict: T, key: K) {
	return dict[key];
}
```

```
getProperty(task, 'status');
// "in progress"

getProperty(task, 'color');
// Error: _Argument of type '"asignee"' is not assignable to parameter of type '"priority" | "status"'_
```
