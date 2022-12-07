# _Trusted Value Providers_ aka _Signed Objects_

## API

Protect the `delete()` method from receiving objects that don't derive from the `getOne()` method:

```
const DB = (function () {
  const signSymbol = Symbol('sign');

  function sign(obj) {
    obj.__sign = signSymbol;
    return obj;
  }

  const base = [
    { id: 1, value: 'foo' },
    { id: 2, value: 'bar' }
  ];

  return {
    list() {
      return base;
    },
    delete(obj) {
      if (obj.__sign !== signSymbol) {
        throw new Error('Invalid input object!');
      }
      console.log('removing item #' + obj.id);
      const idx = base.findIndex(r => r.id === obj.id);
      if (idx !== -1) base.splice(idx, 1);
    },
    getOne(id) {
      const item = base.find(r => r.id === id);
      if (item) return sign(item);
    }
  };
})();
```

## Use

```
DB.list()
// [{id: 1, value: 'foo'}, {id: 2, value: 'bar'}]


const foo = DB.getOne(1)
// {id: 1, value: 'foo'}
// trusted source

const fakedBar = { id: 2 };
// untrusted source


DB.delete(foo)
// removing item #1

DB.list()
[{id: 2, value: 'bar'}]


DB.delete(fakedBar);
// Uncaught Error: Invalid input object!

DB.list()
[{id: 2, value: 'bar'}]
```