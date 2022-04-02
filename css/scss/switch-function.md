# `switch` Function

## Implementation

```
@function switch($value, $cases, $default: 0) {
  @each $case, $newValue in $cases {
    @if $value == $case {
      @return $newValue;
    }
  }
  @return $default;
}
```

## Use

```
.list {
  $view: mobile;
  
  &-item {
    padding-left: switch($view, (
      mobile: 20px,
      tablet: 30px,
      desktop: 50px,
      tv: 80px
    ), 15px);
  }
}
```

output:

```
.list-item {
	padding-left: 20px;
}
```