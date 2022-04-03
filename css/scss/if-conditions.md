# If Conditions

## `@if` / `@else if` / `@else`

```
@function percent($x) {

  @if $x < 0 {

    @return 0%;

  } @else if $x > 100 {

    @return 100%;

  } @else {

    @return $x * 1%;

  }

}
```

```
.full {
  width: percent(100%);
  // 100%
}

.extra-full {
  width: percent(120%);
  // 100%
}
```

## `if()` Function

```
.frame h1 {
  $priority: 3;
  color: if($priority >= 3, red, #444);
}
```

### Nested `if()` Calls

```
$device: mobile;
$orientation: landscape;
$default: 75%;

article {

  width: if(

    $device == mobile,

    if(
      $orientation == landscape,
      800px,
      if($orientation == portrait, 500px, $default)
    ),

    if(
      $orientation == landscape,
      1200px,
      if($orientation == portrait, 1000px, $default)
    )

  );

}
```