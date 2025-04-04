# Normalization of Diacritics

```
function normalize(str) {
  return str.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ł/g, 'l')
    .replace(/ø/g, 'o');
}
```

- use:

```
normalize(
  'ãåāąáàâä čćç ėêëēèęé ł ńñ ōøõòôöó šś ŭúūûüù žżź'
);
// 'aaaaaaaa ccc eeeeeee l nn ooooooo ss uuuuuu zzz'
```
