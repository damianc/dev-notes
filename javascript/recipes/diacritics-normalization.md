# Normalization of Diacritics

```
function normalize(str) {
  return str.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ł/g, 'l')
    .replace(/ø/g, 'o');
}
```
