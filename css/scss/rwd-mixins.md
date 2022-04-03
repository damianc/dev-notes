# RWD Mixins

## `rwd-prop($prop, $bpValueMap, $default)`

```
$breakpoints: (
  sm: 480px,
  md: 720px,
  lg: 920px,
  xl: 1200px
);

@mixin rwd-prop($prop, $valueMap, $defaultValue) {
  #{$prop}: $defaultValue;
  
  @each $bp, $width in $breakpoints {
    $value: map-get($valueMap, $bp);

    @if ($value != null) {
      @media (min-width: $width) {
        width: $value;
      }
    }
  }
}
```

* use:

```
div {
  @include rwd-prop(width, (
    sm: 450px,
    lg: 500px,
    xl: 800px
  ), 1000px);
}
```

* output:

```
div {
  width: 1000px;
}
@media (min-width: 480px) {
  div {
    width: 450px;
  }
}
@media (min-width: 920px) {
  div {
    width: 500px;
  }
}
@media (min-width: 1200px) {
  div {
    width: 800px;
  }
}
```

##  `rwd-props($propsList, $bpValuesMap, $defaults)`

```
@mixin rwd-props($props, $valuesMap, $defaultValues) {
  @if ($defaultValues != null) {
    $i: 1;
    @each $prop in $props {
      #{$prop}: list.nth($defaultValues, $i);
      $i: $i + 1;
    }
  }
  
  @each $bp, $width in $breakpoints {
    $values: map-get($valuesMap, $bp);
    @if ($values != null) {
      @media (min-width: $width) {
        $i: 1;
        @each $prop in $props {
          #{$prop}: list.nth($values, $i);
          $i: $i + 1;
        }
      }
    }
  }
}
```

* use:

```
p {
  @include rwd-props((width, color, font-size), (
    lg: (500px, #333, 12px),
    xl: (800px, #444, 14px)
  ), (450px, #222, 16px));
}
```

* output:

```
p {
  width: 450px;
  color: #222;
  font-size: 16px;
}
@media (min-width: 920px) {
  p {
    width: 500px;
    color: #333;
    font-size: 12px;
  }
}
@media (min-width: 1200px) {
  p {
    width: 800px;
    color: #444;
    font-size: 14px;
  }
}
```