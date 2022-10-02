# Unicode Property Escapes

```
\p{UnicodePropertyValue}
\p{UnicodePropertyName=UnicodePropertyValue}
\p{UnicodeBinaryPropertyName}
```

property name is one of:

- [General Category](#general-category-gc) (`gc`)
- [Script](#script-sc) (`sc`)
- [Script Extensions](#script-extensions-scx) (`scx`)

> [More Complex Writings](#more-complex-writings)

## General Category (`gc`)

* `\p{General_Category=...}` - full property name
* `\p{gc=...}` - shortcut
* `\p{...}` - in case of __general category__, property name may be omitted

To match currency symbols, we should use `Currency_Symbol` property value (which has shortcut `Sc`).

* full property name:

```
'it costs €30'.match(
  /\p{General_Category=Currency_Symbol}/gu
)
// ['€']

'it costs €30'.match(
  /\p{General_Category=Sc}/gu
)
// ['€']
```

* shortcut of property name:

```
'€30'.match(
  /\p{gc=Currency_Symbol}/gu
)
// ['€']

'€30'.match(
  /\p{gc=Sc}/gu
)
// ['€']
```

* omitted property name:

```
'it costs €30'.match(
  /\p{Currency_Symbol}/gu
)
// ['€']

'it costs €30'.match(
  /\p{Sc}/gu
)
// ['€']
```

## Script (`sc`)

* `\p{Script=...}` - full property name
* `\p{sc=...}` - shortcut

```
'2π * β'.match(/\p{Script=Greek}/gu)
// ['π', 'β']
```

```
'2π * β'.match(/\p{sc=Greek}/gu)
// ['π', 'β']
```

## Script Extensions (`scx`)

* `\p{Script_Extensions=...}` - full property name
* `\p{scx=...}` - shortcut

```
"٢".match(/\p{Script_Extensions=Thaana}/gu);
// ['٢']
```

```
"٢".match(/\p{scx=Thaana}/gu);
// ['٢']
```

```
const str='〆〈-】〓-〟〰 ぁ-ゖゝ- ㆟ ゟ𛀁🈀 ㍰'

str.match(/\p{sc=Hira}+/gu)
// ['ぁ', 'ゖゝ', 'ゟ𛀁🈀']

str.match(/\p{scx=Hira}+/gu)
// ['〈', '】〓', '〟〰', 'ぁ', 'ゖゝ', 'ゟ𛀁🈀']
```

## More Complex Writings

### Multiple Properties

Match currency symbols (`Sc`) and numbers (`N`):

```
'it costs €30'.match(/\p{Sc}|\p{N}/gu)
(3) ['€', '3', '0']
```


### Negation

* single (`\P{...}`):


```
// all but currency symbols
'it costs €30'.match(
  /\P{Sc}+/gu
)
// ['it costs ', '30']
```

* multiple (`[^\p{...}\p{...}]`):

```
// all but currency symbols and numbers
'it costs €30'.match(
  /[^\p{Sc}\p{N}]+/gu
)
// ['it costs ']
```

### Excluding Values

```
// all letters but P and Q
'AB QC DP'.match(
    /[^\P{Letter}PQ]+/gu
)
// ['AB', 'C', 'D']
```

```
// all Greek letters but Beta
'2π * β'.match(
    /[^\P{Script=Greek}β]/gu
)
// ['π']
```

* with `i` flag:

```
'AP AQ ap aq'.match(
    /[^\P{L}PQ]+/gu
)
// ['A', 'A', 'ap', 'aq']

'AP AQ ap aq'.match(
    /[^\P{L}PQ]+/gui
)
// ['A', 'A', 'a', 'a']
```


#### Exclusion Exceptions

```
// exclude numbers end currency symbols
// except for $

'it costs $25 or €30'.match(
  /(?:\$|[^\p{S}\p{N}])+/gu
)
// ['it costs $', ' or ']
```

## Further Reading

* [MDN: Unicode Property Escapes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)