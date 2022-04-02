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

## Use #2

```
.row-sm {
  $base: 800px;
  
  &.row-3 {
    $cols: 3;
  
    .col {
      width: switch($cols, (
        1: $base,
        2: $base / 2,
        3: $base / 3,
        4: $base / 4
      ))
    }
  }
}
```

output:

```
.row-sm.row-3 .col {
  width: 266.6666666667px;
}
```