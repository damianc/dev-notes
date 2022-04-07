# `Symbol.match`

## Example #1

```
class DigitMatcher {
  static [Symbol.match](target) {
    return target.match(/\d/g);
  }
}

'PL12EN8XX'.match(DigitMatcher);
// ['1', '2', '8']
```

## Example #2

```
class Matcher {
  constructor(matching) {
    this.matching = matching;
  }

  [Symbol.match](target) {
    switch (this.matching) {
      case 'DIGIT':
        return target.match(/\d/g);
      case 'NUMBER':
        return target.match(/\d+/g);
      case 'LETTER':
        return target.match(/[a-z]/ig);
      case 'WORD':
        return target.match(/[a-z]+/ig);
    }
  }
}

'ID: X12N90'.match(new Matcher('DIGIT'))
// ['1', '2', '9', '0']

'ID: X12N90'.match(new Matcher('NUMBER'))
// ['12', '90']

'ID: X12N90'.match(new Matcher('LETTER'))
// ['I', 'D', 'X', 'N']

'ID: X12N90'.match(new Matcher('WORD'))
// ['ID', 'X', 'N']
```