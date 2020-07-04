# Inheritance

## ES6+

```
class Parent {}

class Child extends Parent {}
```

## Before ES6

```
function Parent() {}

function Child() {}

Child.prototype = new Parent();
Child.prototype.constructor = Child;
```