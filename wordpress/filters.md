# WordPress Filters

## Workflow

* add filter with `add_filter()`
* apply filter with `apply_filters()` or `apply_filters_ref_array()`

## `add_filter($name, $function, $priority, $accepted_args)`

```
add_filter('prfx_email', function ($name, $provider) {
  return "$name@$provider";
}, 10, 2);
```

## `apply_filters($name, $value, ...$args)`

```
$email_address = apply_filters('prfx_email', 'john.smith', 'gmail.com');
// john.smith@gmail.com
```

## `apply_filters_ref_array($name, $args_arr)`

```
$email_address = apply_filters('prfx_email', ['john.smith', 'gmail.com']);
// john.smith@gmail.com
```

## Force a Filter to Be Fired Before Others (Regardless of Their Source)

```
$filter_name = 'prfx_my_filter';
$filter_priority = 10;

array_unshift(
  $GLOBALS['wp_filter'][$filter_name]->callbacks[$filter_priority], [
    'function' => function ($str) {
      return "$str a";
    },
    'accepted_args' => 1
  ]
);
```