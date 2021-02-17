# RegExp: named captured groups

```
const RE_DATE = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
var dateParts = RE_DATE.exec('2019-03-22');

var year = dateParts.groups.year;
// or:
var year = dateParts[1];
// or:
var {groups: {year}} = dateParts;
```

## Syntax of stuff

| item | syntax |
|------|--------|
| named group | `(?<name>PATTERN)` |
| backreference | `\k<name>` |
| ref in replace()'s string | `$<name>` |
