# Decorators

## Class Decorator

```
function Loggable(this: any, constructor: new (...args: any[]) => any) {
  return class $Loggable extends constructor {
    $log: string[] = [];
    insertLog(log: string) {
      this.$log.push(log);
    }
  }
}
```

```
@Loggable
class FooBar {}

const fb1 = <any>new FooBar();
const fb2 = <any>new FooBar();

fb1.insertLog('foo 1');
fb2.insertLog('foo 2');

fb2.insertLog('bar 2');
fb1.insertLog('bar 1');

console.log(
  fb1.$log,
  fb2.$log
);

// ["foo 1", "bar 1"],  ["foo 2", "bar 2"] 
```

## Method Decorator

```
function Deprecated(prefix: string) {
  return function (target: any, methodName: string) {
    const fn = target[methodName];

    target[methodName] = function deprecatedError() {
      throw new Error(`${methodName} is deprecated. Use ${prefix}${methodName} instead.`);
    }

    target[`${prefix}${methodName}`] = (...args: any[]) => {
      return fn(...args);
    };

    return target;
  }
}
```

```
class FooBar {
  @Deprecated('__')
  log(msg: string) {
    console.log(msg);
  }
}
```

```
const fb = <any>new FooBar();

fb.log('foo');
// Error: log is deprecated. Use __log instead.

fb.__log('bar');
// 'bar'

try {
  fb.log('foo');
} catch (e) {
  fb.__log('bar');
}
// 'bar'
```

## Field Decorator

```
function Desc(comment: string) {
  return function (target: any, property: string) {
    let trg = target;
    let label = '[static] ';

    if (typeof trg !== 'function') {
      trg = target.constructor;
      label = '';
    }

    if (!('__docs' in trg)) {
      trg.__docs = {};
    }

    trg.__docs[property] = `${label}${comment}`;
  }
}
```

```
class FooBar {
  @Desc('foo property')
  foo = 10;

  @Desc('bar property')
  bar = 20;

  @Desc('baz property')
  static baz = 30;
}

const { constructor } = <any>FooBar.prototype;
console.log(constructor.__docs);
// {
//   foo: 'foo property',
//   bar: 'bar property',
//   baz: '[static] baz property'
// }
```

## Parameter Decorator

```
function ParamDesc(comment: string) {
  return function (target: any, property: string, paramIdx: number) {
    let method = target[property];

    if (!('__docs' in method)) {
      method.__docs = {};
    }

    method.__docs[paramIdx] = comment;
  }
}
```

```
class FooBar {
  diff(
    @ParamDesc('left value') left: number,
    @ParamDesc('right value') right: number
  ) {
    return Math.abs(left - right);
  }
}

const fb = <any>new FooBar();
console.log(fb.diff.__docs);
// {
//   0: 'left value',
//   1: 'right value'
// }
```