# WordPress Filters

## Workflow

* add filter with `add_filter()`
* apply filter with `apply_filters()` or `apply_filters_ref_array()`

## `add_filter($name, $function, $priority = 10, $accepted_args = 1)`

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

## `remove_filter($name, $function, $priority = 10)`

```
remove_filter('the_content', 'wpautop');
```

## `remove_all_filters($name, $priority = false)`

```
remove_all_filters('prfx_code_snippet');
```

## `has_filter($name, $function_to_check)`

```
if (!has_filter('the_content', 'sth_markdown_cutter')) {
  add_filter('the_content', 'prfx_markdown_parser');
}
```

* if `$function_to_check` is omitted, returns boolean for whether the hook has anything registered
* when checking a specific function, the priority of that hook is returned (or `false` if the function is not attached)