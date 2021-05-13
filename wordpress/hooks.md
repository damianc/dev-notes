# WordPress Hooks

* [Workflow](#workflow)
* [`add_action()`](#add_actionname-function-priority-accepted_args)
* [`do_action()`](#do_actionname-args)
* [`do_action_ref_array()`](#do_action_ref_arrayname-args_arr)
* [`remove_action()`](#remove_actionname-function-priority)
* [Hook Being Class Static Method](#hook-being-class-static-method)
* [Hook Being Class Instance Method](#hook-being-class-instance-method)
* [Hook Being Method of a Singleton](#hook-being-method-of-a-singleton)
* [Hook Being Class Instance Method and Added within Another Instance Method](#hook-being-class-instance-method-and-added-within-another-instance-method)
* [Hook Being Class Static Method and Added within Another Static Method](#hook-being-class-static-method-and-added-within-another-static-method)
* [Hook Being Class Static Method and Added within Class Instance Method](#hook-being-class-static-method-and-added-within-class-instance-method)

## Workflow

* add action with `add_action()`
* invoke action with `do_action()` or `do_action_ref_array()`

> Hooks are not meant to return any value, they should only execute some code.

## `add_action($name, $function, $priority, $accepted_args)`

* `$function` as a string

```
add_action('prfx_plugin_pre_setup', 'pre_setup_fn', 10, 2);

function pre_setup_fn($a, $b) {
  echo $a + $b;
}
```

* `$function` as a function

```
add_action('prfx_plugin_pre_setup', function ($a, $b) {
  echo $a + $b;
}, 10, 2);
```

```
$pre_setup_fn = function ($a, $b) {
  echo $a + $b;
};

add_action('prfx_plugin_pre_setup', $pre_setup_fn, 10, 2);
```

## `do_action($name, ...$args)`

```
do_action('prfx_plugin_pre_setup', 1, 2);
```

## `do_action_ref_array($name, $args_arr)`

This function is identical to `add_action()`, but arguments are passed an an array.

 ```
 do_action_ref_array('prfx_plugin_pre_setup', [1, 2]);
 ```

## `remove_action($name, $function, $priority)`

> Priority can be omitted, but if it's passed and differs from original one passed to the `add_action()`, an action will not be removed.

* action with `$function` passed as a string

```
add_action('prfx_plugin_pre_setup', 'pre_setup_fn', 10, 2);

...

remove_action('prfx_plugin_pre_setup', 'pre_setup_fn');
```

* action with `$function` passed as a function

```
add_action('prfx_plugin_pre_setup', $pre_setup_fn, 10, 2);

...

remove_action('prfx_plugin_pre_setup', $pre_setup_fn);
```

> Note that `remove_action()` must be called inside a function and cannot be called directly:

```
add_action('wp_head', function () {
  remove_action('wp_footer', 'no_longer_needed_action');
});
```

## Hook Being Class Static Method

```
class Hook {
  public static function calc_hook($a, $b) {
    echo $a + $b;
  }
}

add_action('prfx_plugin_pre_setup', ['Hook', 'calc_hook'], 10, 2);
...
remove_action('prfx_plugin_pre_setup', ['Hook', 'calc_hook']);
```

## Hook Being Class Instance Method

```
class Hook {
  public function calc_hook($a, $b) {
    echo $a + $b;
  }
}

$hook = new Hook();

add_action('prfx_plugin_pre_setup', [$hook, 'calc_hook'], 10, 2);
...
remove_action('prfx_plugin_pre_setup', [$hook, 'calc_hook']);
```

## Hook Being Method of a Singleton

```
class Hook {
  private static $_instance = null;

  private function __construct() {}

  public static function getInstance() {
    if (is_null(self::$_instance)) {
      self::$_instance = new self();
    }

    return self::$_instance;
  }

  public function calc_hook($a, $b) {
    echo $a + $b;
  }
}

add_action('prfx_plugin_pre_setup', [Hook::getInstance(), 'calc_hook'], 10, 2);
...
remove_action('prfx_plugin_pre_setup', [Hook::getInstance(), 'calc_hook']);
```

## Hook Being Class Instance Method and Added within Another Instance Method

```
class Hook {
  public function addHooks() {
    add_action('prfx_plugin_pre_setup', [$this, 'calc_hook'], 10, 2);
  }

  public function removeHooks() {
    remove_action('prfx_plugin_pre_setup', [$this, 'calc_hook']);
  }

  public function calc_hook($a, $b) {
    echo $a + $b;
  }
}

$hook = new Hook();

$hook->addHooks();
...
$hook->removeHooks();
```

## Hook Being Class Static Method and Added within Another Static Method

```
class Hook {
  public static function addHooks() {
    add_action('prfx_plugin_pre_setup', [get_called_class(), 'calc_hook'], 10, 2);
  }

  public static function removeHooks() {
    remove_action('prfx_plugin_pre_setup', [get_called_class(), 'calc_hook']);
  }

  public static function calc_hook($a, $b) {
    echo $a + $b;
  }
}

Hook::addHooks();
...
Hook::removeHooks();
```

## Hook Being Class Static Method and Added within Class Instance Method

```
class Hook {
  public function addHooks() {
    add_action('prfx_plugin_pre_setup', [get_called_class(), 'calc_hook'], 10, 2);
  }

  public function removeHooks() {
    remove_action('prfx_plugin_pre_setup', [get_called_class(), 'calc_hook']);
  }

  public static function calc_hook($a, $b) {
    echo $a + $b;
  }
}

$hook = new Hook();

$hook->addHooks();
...
$hook->removeHooks();
```