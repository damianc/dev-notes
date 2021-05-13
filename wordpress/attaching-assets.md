# Attaching Assets

* `wp_enqueue_script($name, $src, $deps, $version, $in_footer)`
* `wp_enqueue_style($name, $src, $deps, $version, $media)`

```
add_action('wp_enqueue_scripts', function () {
  $path = get_template_directory_uri();

  /* CSS */
  wp_enqueue_style('bootstrap-css', $path . '/css/bootstrap.min.css');
  wp_enqueue_style('core', $path . '/style.css');

  /* JavaScript */
  wp_enqueue_script('bootstrap-js', $path . '/js/bootstrap.min.js', ['jquery']);
});
```

> Scripts and styles are referenced here - there is not a hook like `wp_enqueue_styles`.

## Different Hooks for Different Places

| Hooks | Place of execution |
|----|----|
| `wp_enqueue_scripts` | front-end of the site |
| `login_enqueue_scripts` | login page |
| `admin_enqueue_scripts` | dashboard |

## Registering Assets

* `wp_register_script($name, $src, $deps, $version, $in_footer)`
* `wp_register_style($name, $src, $deps, $version, $media)`

```
add_action('wp_enqueue_scripts', function () {
  $path = get_template_directory_uri();

  /* CSS */
  wp_register_style('bootstrap:css', $path . '/css/bootstrap.min.css');
  wp_register_style('core', $path . '/style.css');

  /* JavaScript */
  wp_register_script('bootstrap:js', $path . '/js/bootstrap.min.js', ['jquery']);
});

add_action('wp_enqueue_scripts', function () {
  /* CSS */
  wp_enqueue_style('bootstrap:css');
  wp_enqueue_style('core');

  /* JavaScript */
  wp_enqueue_script('bootstrap:js');
});
```

* an array of assets handlers can be passed:

```
wp_enqueue_style(['bootstrap:css', 'core']);
wp_enqueue_script(['bootstrap:js', 'main']);
```

### Deregistering Assets

* `wp_deregister_script($name)`
* `wp_deregister_style($name)`

```
// replace jQuery provided by WordPress with custom one

add_action('wp_enqueue_scripts', function () {
  wp_deregister_script('jquery');
  wp_register_script('jquery', get_template_directory_uri() . '/js/jquery.min.js');
});
```