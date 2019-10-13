# `$` in the `replace()` Function

| Sign | Description |
|------|-------------|
| `$1` | text matched in the 1st group |
| `$2` | text matched in the 2nd group |
| `$n` | text matched in the n-th group |
| `$$` | literal `$` sign |
| `$&` | the matched text |
| `$\`` | text placed before the matched one |
| `$'` | text placed after the matched one |

## Example \#1

```
var str = '$> AB12@CD34 !';
var re = /(\w+\d+)@(\w+\d+)/g;

str.replace(re, "before($`) matched($&) after($')");
// "$> before($> ) matched(AB12@CD34) after( !) !"

// $> - the original non-replaced $>
// before($> ) - the text placed before the matched one
// matched(AB12@CD34) - the matched text
// after( !) - the text placed after the matched one
//  ! - the original non-replaced  !
```

## Example \#2

```
var str = '$> AB12@CD34 !';
var re = /(\w+\d+)/g;

str.replace(re, "before($`) matched($&) after($')");
// "$> before($> ) matched(AB12) after(@CD34 !)@before($> AB12@) matched(CD34) after( !) !"

// $> - the original non-replaced $>
// before($> ) - the text placed before the first matched text
// matched(AB12) - the first matched text
// after(@CD34 !) - the text placed after the first matched text
// @ - the original non-replaced @
// before($> AB12@) - the text placed before the second matched text
// matched(CD34) - the second matched text
// after( !) - the text placed after the second matched text
//  ! - the original non-replaced  !
```
