# `@each...in`

## Inline List

```
@each $width in (25, 50, 75, 100) {
  .w-#{$width} {
    width: $width * 1%;
  } 
}
```

output:

```
.w-25 { width: 25%; }
.w-50 { width: 50%; }
.w-75 { width: 75%; }
.w-100 { width: 100%; }
```

## Variable List

```
$width: (25, 50, 75, 100);

@each $w in $width {
  .w-#{$w} {
    width: $w * 1%;
  }
}
```

output is as above

## Map

```
$widths: (
  quarter: 25%,
  half: 50%,
  full: 100%
);

@each $id, $w in $widths {
  .#{$id} {
     width: $w;
  }
}
```

output:

```
.quarter { width: 25%; }
.half { width: 50%; }
.full { width: 100%; }
```

## Nested List

```
$sizes: (
  (10 20 30) // space-separated
  (40,50,60) // comma-separated
);

div {
  @each $s in $sizes {
    @each $siz in $s {
      .w-#{$siz} {
        width: $siz * 1%;
      }
    }
  }
}
```

output:

```
.div .w-10 { width: 10%; }
.div .w-20 { width: 20%; }
.div .w-30 { width: 30%; }
.div .w-40 { width: 40%; }
.div .w-50 { width: 50%; }
.div .w-60 { width: 60%; }
```

## Nested Map

```
$themes: (
  black: (
    light: #333,
    dark: #000
  ),
  white: (
    light: #fff,
    dark: #eee
  )
);

@each $color, $accents in $themes {
  @each $accent, $value in $accents {
    .#{$color}-#{$accent} {
      color: $value;
    }
  }
}
```

output:

```
.black-light { color: #333; }
.black-dark { color: #000; }
.white-light { color: #fff; }
.white-dark { color: #eee; }
```

### Nested Map and `map-get()`

```
$theming: (
  light: (
    fg: #333,
    bg: #fff
  ),
  dark: (
    fg: #fff,
    bg: #222
  )
);

body {
  @each $mode, $th in $theming {
    &.#{$mode} {
      color: map-get($th, 'fg'); // quoted field name
      background-color: map-get($th, bg); // bare field name
    }
  }
}
```

output:

```
body.light {
  color: #333;
  background-color: #fff;
}
body.dark {
  color: #fff;
  background-color: #222;
}
```

## Map Nested in a List

```
$theming: (
  dark (fg: #fff, bg: #444),
  light (fg: #222, bg: #fff)
);

@each $mode, $styling in $theming {
  .#{$mode} {
    color: map-get($styling, fg);
    background-color: map-get($styling, bg);
  }
}
```

output:

```
.dark {
  color: #fff;
  background-color: #444;
}
.light {
  color: #222;
  background-color: #fff;
}
```

## List Nested in a Map

```
@use "sass:list";

$space: (
  none: (0 0),
  sm: (10 12),
  md: (20 24),
  lg: (30 36)
);

@each $s,$vals in $space {
  .space-#{$s} {
    margin: list.nth($vals, 1) * 1px; // multiplication by 1px
    padding: #{list.nth($vals, 2)}px; // interpolation
  }
}
```

output:

```
.space-none {
  margin: 0px;
  padding: 0px;
}
.space-sm {
  margin: 10px;
  padding: 12px;
}
.space-md {
  margin: 20px;
  padding: 24px;
}
.space-lg {
  margin: 30px;
  padding: 36px;
}
```


## Theming Example

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

output:

```
.alert .alert-error-frame {
  background: "#f00";
  border: solid 2px "#a00";
}
.alert .alert-info-frame {
  background: "#2ae";
  border: solid 2px "#25a";
}
.alert .alert-success-frame {
  background: "#0f0";
  border: solid 2px "#0a0";
}
.alert .alert-warning-frame {
  background: "#fa0";
  border: solid 2px "#fc0";
}

.alert .alert-error-color {
  color: "#fff";
}
.alert .alert-info-color {
  color: "#000";
}
.alert .alert-success-color {
  color: "#fff";
}
.alert .alert-warning-color {
  color: "#333";
}
```