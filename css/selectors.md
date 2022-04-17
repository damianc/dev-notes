# CSS Selectors

## General Selectors

| Selector | Matches Elements... |
|--|--|
| `div` | by element name |
| `#id` | by element id |
| `.foo` | by element class name |
| `.foo.bar` | by element class names |
| `#id.foo` | by id and class name |
| `.foo#id` | as above |

## Relation

| Selector | Relation |
|--|--|
| `div p` | `p` elements contained in `div` on any depth level |
| `div > p` | `p` elements contained __directly__ in `div` |
| `div ~ p` | `p` elements preceded by `div` |
| `div + p` | `p` elements __directly__ preceded by `div` |

## Attribute Selectors

| Selector | Matches Elements that... |
|--|--|
| `[href]` | contain `href` attribute |
| `[type=number]` | contain `type` attribute with `number` value |
| `[src^=https]` | contain `src` attribute whose value starts with `https` |
| `[src$=pdf]` | contain `src` attribute whose value ends with `pdf` |
| `[src*=avatar]` | contain `src` attribute whose value contains `avatar` |
| `[title~=table]` | contain `title` attribute whose value contains `table` word (with spaces on both sides) |
| `[src\|=medium]` | contain `src` attribute whose value equals `medium` or starts with `medium-` |

### Examples

* match external links to PDF documents

```
a[href^=http][href$=pdf]
```

* match external links to JPG and PNG images

```
a[href^=http][link$=jpg], a[href^=http][href$=png]
```

* match external links to medium-size PNG images

```
a[href^=http][href*=medium][href$=png]
```

* match internal links to medium-size PNG images

```
a[href*=medium][href$=png]:not([href^=http])
```

## Pseudo-Elements

* `::before`
* `::after`
* `::selection`
* `::first-letter`
* `::first-line`

## UI Pseudo-Classes

| Selector | Matched Elements |
|--|--|
| `:link` | untouched link |
| `:visited` | visited link |
| `:hover` | element being pointed by cursor |
| `:active` | element being pointed by cursor when mouse button remains pressed |
| `:focus` | element with focus |
| `:target` | internal link that points currently displayed section |

### Form-Specific Pseudo-Classes

| Selector | Matched Elements |
|--|--|
| `:disabled` | disabled control |
| `:enabled` | enabled control |
| `:checked` | checked control |
| `:indeterminate` | control that remains untouched, like group of radio buttons |
| `:default` | control being in default state/having default value |
| `:in-range` | control whose value remains in defined range |
| `:out-of-range` | control whose value remains out of defined range |
| `:required` | control required to fill |
| `:optional` | control not required to fill |
| `:read-only` | control whose value can only be read |
| `:read-write` | control whose value can be updated |

## Structural Pseudo-Classes

| Selector | Matched Elements |
|--|--|
| `:root` | root of the document - `html` |
| `:empty` | element with no child |
| `:only-child` | element having no sibling |
| `:only-of-type` | element having no sibling of the same type |
| `:first-child` | element with no sibling before |
| `:first-of-type` | element with no sibling of the same type before |
| `:last-child` | element with no sibling after |
| `:last-of-type` | element with no sibling of the same type after |
| `:nth-child(n)` | element having exactly `n - 1` siblings before |
| `:nth-of-type(n)` | element having exactly `n - 1` siblings of the same type before |
| `:nth-last-child(n)` | element having exactly `n - 1` siblings after |
| `:nth-last-of-type(n)` | element having exactly `n - 1` siblings of the same type after |