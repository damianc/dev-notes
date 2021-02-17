# Iterators

## Standard `[Symbol.iterator]()` Method

```
const oneToFive = {
  [Symbol.iterator]() {
    const nums = [1, 2, 3, 4, 5];

    return {
      next() {
        if (nums.length) {
          return {
            done: false,
            value: nums.shift()
          };
        } else {
          return {
            done: true
          };
        }
      }
    };
  }
};

console.log([...oneToFive]);
// [1, 2, 3, 4, 5]
```

* or with `while` statement:

```
next() {
  while (nums.length) {
    return {
      done: false,
      value: nums.shift()
    };
  }

  return {
    done: true
  };
}
```

## Call of a Generator in `[Symbol.iterator]()`

```
const oneToFive = {
  [Symbol.iterator]() {
    return (function* () {
      yield* [1, 2, 3, 4, 5];
    })();
  }
}

console.log([...oneToFive]);
// [1, 2, 3, 4, 5]
```

## The `[Symbol.iterator]()` Being a Generator

```
const oneToFive = {
  [Symbol.iterator]: function* () {
    yield* [1, 2, 3, 4, 5];
  }
};

console.log([...oneToFive]);
// [1, 2, 3, 4, 5]
```

* or with a shorthand variant:

```
const oneToFive = {
  *[Symbol.iterator]() {
    yield* [1, 2, 3, 4, 5];
  }
};

console.log([...oneToFive]);
// [1, 2, 3, 4, 5]
```