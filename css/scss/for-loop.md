# `@for` Loop

* `@for $i from 1 through 10` - from 1 to 10 (inclusive)
* `@for $i from 1 to 10` - from 1 to 9 (1-10 exclusive)

## `@for from...through`

```
@for $lv from 1 through 4 {
  .nested-#{$lv} {
    padding-left: $lv * 10px;
  }
}
```

output:

```
.nested-1 { padding-left: 10px; }
.nested-2 { padding-left: 20px; }
.nested-3 { padding-left: 30px; }
.nested-4 { padding-left: 40px; }
```

## `@for from...to`

```
@for $lv from 1 to 4 {
  .nested-#{$lv} {
    padding-left: $lv * 10px;
  }
}
```

output:

```
.nested-1 { padding-left: 10px; }
.nested-2 { padding-left: 20px; }
.nested-3 { padding-left: 30px; }
```

## Example: Color Accents

```
$accents: light lighter lightest;

.orange {
  $base-orange: #fa0;
  background-color: $base-orange;
  
  @for $i from 1 through 3 {
    $className: list.nth($accents, $i);

    &#{&-$className} {
      background-color: lighten($base-orange, $i * 15%);
    }
  }
}
```

output:

```
.orange {
  background-color: #fa0;
}
.orange.orange-light {
  background-color: #ffc44d;
}
.orange.orange-lighter {
  background-color: #ffdd99;
}
.orange.orange-lightest {
  background-color: #fff7e6;
}
```