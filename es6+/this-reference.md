# `this` reference

By priority: 

1. for a function called with `new`: `this` is an object being constructed
2. for a call of `bind()`: `this` is the first argument passed
3. for a call of `apply()`/`call()`: `this` is the first argument passed
4. for a function called in a context of an object: `this` is the object
5. by default:
	* in strict mode: `this` is `undefined`
	* otherwise: `this` is a global object (`window` in a browser)

## `new` has the highest priority

```
function Color(name) {
	this.name = name;
}

var blue = Color.bind({name: 'blue'});
var red = new blue('red');
// red = {name: red}
```

## then `bind()`
```
function logColor() {
	return this.name;
}

var blue = logColor.bind({name: 'blue'});
var red = blue.call({name: 'red'});
// red = 'blue'
```

## then `apply()`/`call()` (equally)

```
var obj = {
	a: 10,
	log: function () {
		return this.a;
	}
};

var a = obj.log();
// a = 10

var b = obj.log.call({a: 20});
// b = 20
```

## `this` is being defined when calling - no sooner

### parent object counts

```
function foo() {
	return this.a;
}

var obj = {
	a: 10,
	foo: foo
};

var x = obj.foo();
// x = 10 (this=obj -> obj.a)
```

```
var obj1 = {
	a: 10,
	foo: function () {
		return this.a;
	}
};

var obj2 = {
	a: 20,
	foo: obj1.foo
};

var x = obj2.foo();
// x = 20 (this=obj2 -> obj2.a)
```

### literlly parent (not grandparents)

```
function foo() {
	return this.a;
}

var obj2 = {
	a: 10,
	foo: foo
};

var obj1 = {
	a: 20,
	obj2: obj2
};

var x = obj1.obj2.foo();
// x = 10 (this=obj2 -> obj2.a)
```

```
function foo() {
	return this.a;
}

var obj2 = {
	foo: foo
};

var obj1 = {
	a: 20,
	obj2: obj2
};

var x = obj1.obj2.foo();
// x = undefined (this=obj2 -> obj2.a)
```

### place of a call matters (not place of definition)

```
var obj = {
	a: 10,
	foo: function () {
		return this.a;
	}
};

var funcRef = obj.foo;
var x = funcRef();
// x = undefined (this=<global> -> <global>.a)
```
