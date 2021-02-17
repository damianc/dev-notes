# Proxy Traps

| Trap                                    | Triggers                          |
|-----------------------------------------|-----------------------------------|
| `get(target, property, receiver)`       | getting value by `.` or `[]`      |
| `set(target, property, value, receiver)`| setting value by `=` or destructuring assignment |
| `deleteProperty(target, property)`      | `delete`                          |
| `apply(target, thisArg, argumentsList)` | firing a function (`fn()`), `call()` or `apply()`  |
| `construct(target, argumentsList, newTarget)` | firing a constructor with `new` |
| `getOwnPropertyDescriptor(target, prop)`| `Object.getOwnPropertyDescriptor()` |
| `defineProperty(target, property, descriptor)` | `Object.defineProperty()`  |
| `getPrototypeOf(target)`                | `Object.getPrototypeOf()`, `Object#isPrototypeOf()`, `__proto__` or `instanceof` |
| `setPrototypeOf(target, prototype)`     | `Object.setPrototypeOf()` or `__proto__` |
| `preventExtensions(target)`             | `Object.preventExtensions()`      |
| `isExtensible(target)`                  | `Object.isExtensible()`           |
| `ownKeys(target)`                       | `Object.keys()`, `Object.getOwnPropertyNames()` or `Object.getOwnSymbolProperties()` |
| `enumerate(target)`                     | `for...in`                        |
| `has(target, prop)`                     | `Object#hasOwnProperty()` or `prop in obj` |

In addition, each trap can be triggered by a respective method of `Reflect` with the same name: e.g., `get()` trap can be triggered
by the `Reflect.get()` method.

## `Reflect` API

* `Reflect.apply(target, thisArgument, argumentsList): any`
* `Reflect.construct(target, argumentsList, newTarget = target): Object`
* `Reflect.defineProperty(target, propertyKey, propDesc): boolean`
* `Reflect.deleteProperty(target, propertyKey): boolean`
* `Reflect.get(target, propertyKey, receiver = target): any`
* `Reflect.getOwnPropertyDescriptor(target, propertyKey): PropDesc|undefined`
* `Reflect.getPrototypeOf(target): Object|null`
* `Reflect.has(target, propertyKey): boolean`
* `Reflect.isExtensible(target): boolean`
* `Reflect.ownKeys(target): Array<PropertyKey>`
* `Reflect.preventExtensions(target): boolean`
* `Reflect.set(target, propertyKey, value, receiver = target): boolean`
* `Reflect.setPrototypeOf(target, proto): boolean`

### `target` vs `receiver` (or: `context`)

```
var obj = {a: 1};

var traps = {
	get(target, key, context) {
		// target -> obj
		// key -> 'a'
		// context -> pobj

		console.log('Getting', key);
		return Reflect.get(target, key, context);
	}
};

var pobj = new Proxy(obj, traps);

obj.a;
// 1

pobj.a;
// Getting "a"
// 1
```

## Revocable Proxy

```
...
var {proxy: pobj, revoke: prevoke} = Proxy.revocable(obj, traps);

pobj.a;
// Getting "a"
// 1

prevoke();
pobj.a;
// TypeError
```

## Example: _No Such Property/Method_

```
var traps = {
	get(target, key, context) {
		if (Reflect.has(target, key)) {
			return Reflect.get(target, key, context);
		} else {
			throw new TypeError('No such property or method: ' + key);
		}
	},
	set(target, key, val, context) {
		if (Reflect.has(target, key)) {
			return Reflect.set(target, key, val, context);
		} else {
			throw new TypeError('No such property or method: ' + key);
		}
	}
};

var obj = {a: 1};
var pobj = new Proxy(obj, traps);

pobj.a;
// 1

pobj.b;
// TypeError: No such property or method: b
```

### Pattern: _Proxy at the End_

The code above, being a standard Proxy object, is of type _Proxy at the beginning_, i.e., we operate on the Proxy object and the actual object is _wrapped_ by the Proxy.

We can operate on the actual object and move the Proxy object further on to the prototype.

```
var traps = {
	get(target, key, context) {
		throw new TypeError('No such property or method: ' + key);
	},
	set(target, key, val, context) {
		throw new TypeError('No such property or method: ' + key);
	}
};

var pobj = new Proxy({}, traps);
var obj = {a: 1};

Object.setPrototypeOf(obj, pobj);

obj.a;
// 1

obj.b;
// TypeError: No such property or method: b
```

The solution above is based on the fact that if **[[Get]]** or **[[Set]]** operation advances to the Proxy, it means that a whole **[[Prototype]]** chain has been checked and a certain property/method is not found.  
So we can just feel free to throw an error unconditionally.
