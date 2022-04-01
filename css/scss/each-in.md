# `@each...in`

```
$alert-themes:
    'error' '#f00' '#a00' '#fff',
    'info' '#2ae' '#25a' '#000',
    'success' '#0f0' '#0a0' '#fff',
    'warning' '#fa0' '#fc0' '#333';


.alert {
	// can omit "columns"
  @each $name, $background, $border in $alert-themes {
    & &-#{$name}-frame {
      background: $background;
      border: solid 2px $border;
    }
  }
  
  // can skip "columns"
  @each $name, $_, $_, $color in $alert-themes {
    & &-#{$name}-color {
        color: $color;
    }
  }
}
```