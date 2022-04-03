# `@while` Loop

```
@while expr {
	...
}
```

## Condition

* only _falsey_ values are: `false` and `null`
* every other value is considered _truthy_

> To check if a string contains a space, use `string.index($string, ' ')`: this function returns `null` if the string isn’t found, a number otherwise.

## Example

```
@function repeated($string, $x) {
  @if $x <= 0 {
    @return $string;
  }
    
  $out: '';
    
  @while $x > 0 {
    $out: '#{$out}#{$string}';
    $x: $x - 1;
  }
    
  @return $out;
}
```

* use:

```
.wrong-word {
  content: repeated('*', 8);
}
```

* output:

```
.wrong-word {
  content: "********";
}
```