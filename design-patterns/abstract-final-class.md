# Abstract and Final Classes in JavaScript

## Abstract Class

```
class AbstractClass {
    constructor() {
        if (new.target === AbstractClass) {
            throw new TypeError('Abstract class AbstractClass cannot be instantiated');
        }
    }
}

class ConcreteClass extends AbstractClass {}

const concreteInstance = new ConcreteClass();
// OK

const abstractInstance = new AbstractClass();
// TypeError: Abstract class AbstractClass cannot be instantiated
```

## Final Class

```
class FinalClass {
    constructor() {
        if (new.target !== FinalClass) {
            throw new TypeError('Final class FinalClass cannot be extended');
        }
    }
}

class ConcreteClass extends FinalClass {}

const concreteInstance = new ConcreteClass();
// TypeError: Final class FinalClass cannot be extended

const finalInstance = new FinalClass();
// OK
```

## Old Fashioned Way (Before ES6)

* Abstract Class

```
var AbstractClass = function () {
    if (this.constructor === AbstractClass) {
        throw new TypeError('Abstract class AbstractClass cannot be instantiated');
    }
    
    this.method = function () {};
};
```

* Final Class

```
var FinalClass = function () {
    if (this.constructor !== FinalClass) {
        throw new TypeError('Final class FinalClass cannot be extended');
    }
    
    this.method = function () {};
};
```