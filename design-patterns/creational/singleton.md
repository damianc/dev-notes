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