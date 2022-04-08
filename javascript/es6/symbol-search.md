# `Symbol.search`

## Example

```
class ReSearcher {
  constructor(re) {
    this.re = re;
  }

  [Symbol.search](target) {
    const m = target.match(this.re);
    if (!m) return [-1, null];

    const { 0: sought, index } = m;
    return [index, sought];
  }
}
```

```
'PL1234XX90'.search(new ReSearcher(/\d{2}/))
// [2, '12']

'PL1234XX90'.search(new ReSearcher('X'))
// [6, 'X']

'PL1234XX90'.search(new ReSearcher(/.{4}$/))
// [6, 'XX90']

'PL1234XX90'.search(new ReSearcher(/.{2}$/))
// [8, '90']
```