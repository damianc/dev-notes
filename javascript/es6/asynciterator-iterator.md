# `Symbol.asyncIterator` and `Symbol.iterator`

```
class Iters {
  [Symbol.iterator]() {
    return (function* () {
      yield* [1, 2, 3, 4];
    })();
  }

  [Symbol.asyncIterator]() {
    return async function* () {
      yield* [
        Promise.resolve('Async 1'),
        Promise.resolve('Async 2'),
        Promise.resolve('Async 3'),
        Promise.resolve('Async 4')
      ];
    }();
  }
}
```

```
const iters = new Iters;

for (let x of iters) console.log(x);
// 1
// 2
// 3
// 4

for await (let x of iters) console.log(x);
// Async 1
// Async 2
// Async 3
// Async 4
```