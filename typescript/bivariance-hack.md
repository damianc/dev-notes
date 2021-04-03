# Bivariance Hack

## Definition of Bivariance

Bivariance: in place of type **X** we can use both **supertype of X** and **subtype of X**.

## Compatibility of Function Types

By default, a _supertype of X_ cannot be passed to the function _fn(n:X)_:

```
type Foo = { foo: number; };
type FooBar = { foo: number; bar: number; };
type FooBarBaz = { foo: number; bar: number; baz: number; };

type FooBarFn = (item: FooBar) => void;

let func: FooBarFn = (item: Foo) => console.log(item);
// OK

let func: FooBarFn = (item: FooBar) => console.log(item);
// OK

let func: FooBarFn = (item: FooBarBaz) => console.log(item);
// Error
```

## Hack

When it comes to an object method, it can receive both superset and subset of a defined type - meaning it is bivariant.  
To make regular function bivariant, we must *"extract"* method type and apply it to the function.

```
type Foo = { foo: number; };
type FooBar = { foo: number; bar: number; };
type FooBarBaz = { foo: number; bar: number; baz: number; };

type FooBarHackedFn = {
    bivarianceHack(item: FooBar): void
}['bivarianceHack'];

let func: FooBarHackedFn = (item: Foo) => console.log(item);
// OK

let func: FooBarHackedFn = (item: FooBar) => console.log(item);
// OK

let func: FooBarHackedFn = (item: FooBarBaz) => console.log(item);
// OK
```

## Purpose

This solution is being used very rarely. Some of external libraries utilize it. An example of use may be event handler accepting objects of different types.

* as the following will cause error:

```
enum ScreenEventType {
  Mouse,
  Keyboard
}

type ScreenEvent {
  timestamp: number;
}

type ScreenMouseEvent {
  timestamp: number;
  x: number;
  y: number;
}

type ScreenKeyboardEvent {
  timestamp: number;
  keyCode: number;
}

function attachScreenEvent(
  eventType: ScreenEventType,
  eventHandler: (e: ScreenEvent) => void
) {}

attachScreenEvent(ScreenEventType.Mouse, (e: ScreenMouseEvent) => {
  console.log('Event position: %s x %s', e.x, e.y);
});

// Error:
// Argument of type '(e: ScreenMouseEvent) => void' is not assignable to parameter of type '(e: ScreenEvent) => void'.
// Types of parameters 'e' and 'e' are incompatible.
// Type 'ScreenEvent' is missing the following properties from type 'ScreenMouseEvent': x, y
```

* *bivariant hack* must be used:

```
type ScreenEventHandler = {
  handler(e: ScreenEvent): void;
}['handler'];

function attachScreenEvent(
  eventType: ScreenEventType,
  eventHandler: ScreenEventHandler
) {}

attachScreenEvent(ScreenEventType.Mouse, (e: ScreenMouseEvent) => {
  console.log('Event position: %s x %s', e.x, e.y);
});

// OK
```