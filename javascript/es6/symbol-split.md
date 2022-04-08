# `Symbol.split`

## Example #1

```
class Splitter {
  constructor(blockSize) {
    this.blockSize = blockSize;
  }

  [Symbol.split](target) {
    const re = new RegExp(`(.{${this.blockSize}})`);
    return target.split(re).filter(Boolean);
  }
}

'12345678'.split(new Splitter(4))
// ['1234', '5678']

'ABCDEFGH'.split(new Splitter(2))
// ['AB', 'CD', 'EF', 'GH']

'ABCDEFGH'.split(new Splitter(3))
// ['ABC', 'DEF', 'GH']
```

## Example #2

```
function Split(pattern) {
  const splitter = {
    [Symbol.split](target) {
      const rePattern = pattern.reduce((acc, curr) => {
        return `${acc}(\\d{${curr}})`;
      }, '');
      const re = new RegExp(`^${rePattern}`);

      return target.split(re).slice(1);
    }
  };

  return Object.setPrototypeOf({}, splitter);
}

01234567890123456789'.split(Split([2, 4]))
// ['01', '2345', '67890123456789']

'01234567890123456789'.split(Split([2, 4, 2]))
// ['01', '2345', '67', '890123456789']

'01234567890123456789'.split(Split([2, 4, 4]))
// ['01', '2345', '6789', '0123456789']

'01234567890123456789'.split(Split([2, 2, 2, 2]))
// ['01', '23', '45', '67', '890123456789']
```