# RegExp Related Symbols

* [`Symbol.replace`](#symbolreplace)
* [`Symbol.search`](#symbolsearch)
* [`Symbol.split`](#symbolsplit)
* [`Symbol.match`](#symbolmatch)
* [`Symbol.matchAll`](#symbolmatchall)

## `Symbol.replace`

```
class ReplaceOperation {
    constructor(change) {
        this.change = change;
    }
    
    [Symbol.replace](input) {
        return `[-]${input} [+]${this.change}`;
    }
}

console.log(
    'var'.replace(new ReplaceOperation('let'))
)

// [-]var [+]let
```

## `Symbol.search`

```
class CaseInsensitiveSearch {
    constructor(value) {
        this.value = value.toLowerCase();
    }
    
    [Symbol.search](input) {
        return input.toLowerCase().indexOf(this.value);
    }
}

console.log(
    'FooBar'.search(new CaseInsensitiveSearch('BaR'))
);

// 3
```

## `Symbol.split`

```
class CharsWrapper {
    constructor(sign) {
        this.sign = sign;
    }
    
    [Symbol.split](input) {
        const chars = input.split('');
        return chars.join(this.sign);
    }
}

console.log(
    'ABC'.split(new CharsWrapper('*'))
);

// "A*B*C"
```

```
class ReverseSplit {
    [Symbol.split](input) {
        const words = input.split(' ');
        return words.reverse();
    }
}

console.log(
    'foo bar baz'.split(new ReverseSplit())
);

// ["baz", "bar", "foo"]
```

## `Symbol.match`

```
const re = /foo/;

console.log(
    '/foo/'.startsWith(re)
);
// TypeError
```

By default, the methods `String#startsWith()`, `String#endsWith()` and `String#includes()`, check if their first argument is a regular expression and will throw a `TypeError` if they are.

```
const re = /foo/;

re[Symbol.match] = false;

console.log(
    '/foo/'.startsWith(re)
);
// true
```

### RegExp with Special Characters (`\x`)

```
const reDigit = /\d/;
reDigit[Symbol.match] = false;

const textA = 'The /\d/ matches a digit'; // contains \d
const textB = 'The /\\d/ matches a digit'; // contains \\d

textA.includes(reDigit)
false

textB.includes(reDigit)
true
```

## `Symbol.matchAll`

### Normal Behavior

```
const str = 'a cat';

str.match('a');
// ["a", index: 0, input: "a cat", groups: undefined]
str.match('a');
// ["a", index: 0, input: "a cat", groups: undefined]
str.match('A');
// null

const reStrIterator = str.matchAll('a');

reStrIterator.next();
// {value: ["a", index: 0, input: "a cat", groups: undefined], done: false}

reStrIterator.next();
// {value: ["a", index: 3, input: "a cat", groups: undefined], done: false}

reStrIterator.next();
// {value: undefined, done: true}

const reStrEmptyIterator = str.matchAll('A');

reStrEmptyIterator.next();
// {value: undefined, done: true}
```

### Using Symbol

```
class Matcher {
    constructor(spec) {
        if (spec == 'DIGITS') this.re = /\d/g;
        else if (spec == 'CHARS') this.re = /[a-z]/gi;
    }
    
    *[Symbol.matchAll](input) {
        yield* Array.from(
            input.matchAll(this.re),
            m => m[0]
        );
    }
}

const str = 'A 1 B 2';

[...str.matchAll(new Matcher('DIGITS'))]
// ["1", "2"]

[...str.matchAll(new Matcher('CHARS'))]
// ["A", "B"]
```