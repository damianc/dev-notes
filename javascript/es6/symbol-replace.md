# `Symbol.replace`

```
class Replacer {
  constructor(matching) {
    this.matching = matching;
  }

  [Symbol.replace](target, replacement) {
    const map = {
      DIGIT: /(\d)/g,
      NUMBER: /(\d+)/g,
      LETTER: /([a-z])/ig,
      WORD: /([a-z]+)/ig
    };

    return target.replace(map[this.matching], replacement.replace('$#', '$1'));
  }
}
```

```
'W3FF45X'.replace(new Replacer('DIGIT'), '%')
// 'W%FF%%X'

'W3FF45X'.replace(new Replacer('NUMBER'), '%')
// 'W%FF%X'

'W3FF45X'.replace(new Replacer('NUMBER'), '.$#.')
// 'W.3.FF.45.X'

'W3FF45X'.replace(new Replacer('LETTER'), '.$#.')
// '.W.3.F..F.45.X.'

'W3FF45X'.replace(new Replacer('WORD'), '[$#]')
// '[W]3[FF]45[X]'

'W3FF45X'.replace(new Replacer('FOOBAR'), '[$#]')
// 'W3FF45X'
```