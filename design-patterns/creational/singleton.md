# Singleton

An object can have only one instance.

```
const Singleton = (function () {
    let instance;
    
    function createInstance() {
        const object = {a: 1, b: 2};
        return object;
    }
    
    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            
            return instance;
        }
    };
})();
```

```
var inst1 = Singleton.getInstance();
var inst2 = Singleton.getInstance();

inst1 === inst2
// true
```

## Handling `new`

* with _function_ approach:

```
function Singleton() {
  this.a = 1;
  this.b = 2;

  if (!Singleton.inst) {
    Singleton.inst = this;
  }

  return Singleton.inst;
}
```

```
const inst1 = new Singleton();
const inst2 = new Singleton();

inst1 === inst2
// true
```

* with _class_ approach:

```
class Singleton {
  a = 1;
  b = 2;

  constructor() {
    if (!Singleton.inst) {
      Singleton.inst = this;
    }

    return Singleton.inst;
  }
}
```

```
const inst1 = new Singleton();
const inst2 = new Singleton();

inst1 === inst2
// true
```