# Object Descriptors

| Common Keys | Data Descriptor | Accessor Descriptor |
|--|--|--|
| `configurable (=false)` | `value (=undefined)` | `get (=undefined)` |
| `enumerable (=false)` | `writable (=false)` | `set (=undefined)` |

- if a descriptor has neither of `value`, `writable`, `get` and `set` keys, it is treated as a _data descriptor_
- if a descriptor has both [`value` or `writable`] and [`get` or `set`] keys, `TypeError` is thrown

## Data Descriptor Example

```
const obj = {};

Object.defineProperties(obj, {
  a: {
    enumerable: true,
    value: 1
  },
  b: {
    enumerable: false,
    value: 2
  },
  c: {
    value: 3
  }
});

{ ...obj }
// {a: 1}

for (let k in obj) console.log(k);
// a

Object.keys(obj);
// ['a']
```

## Accessor Descriptor Example

```
function LoggedValue(obj) {
  const logs = [];
  let _value;

  Object.defineProperty(this, 'value', {
    get() {
      return _value;
    },
    set(value) {
      _value = value;
      logs.push(_value);
    }
  });

  this.logs = () => logs;
}

const record = new LoggedValue();

record.value = 10;
record.value = 20;

record.logs();
// [10, 20]
```

## Getting Descriptors

### `Object.getOwnPropertyDescriptor()`

```
const obj = { a: 1 };
Object.seal(obj);

Object.getOwnPropertyDescriptor(obj, 'a');
// {value: 1, writable: true, enumerable: true, configurable: false}
```

### `Object.getOwnPropertyDescriptors()`

```
const obj = { a: 1 };
Object.seal(obj);

Object.getOwnPropertyDescriptors(obj);
// {a: {
//   configurable: false,
//   enumerable: true,
//   value: 1,
//   writable: true
// }}
```

### Getting Property Getter

```
const foo = {
  bar: 1,
  get baz() {
    return 2;
  }
};

const { get: getter } = Object.getOwnPropertyDescriptor(foo, 'baz');
getter
// function baz() { return 2; }
```

> Deprecated and non-standard way of getting a getter:  
> `foo.__lookupGetter__('baz')`