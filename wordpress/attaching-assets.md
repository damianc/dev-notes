# Attaching Assets

* [Overview](#overview)
* [Different Hooks for Different Places](#different-hooks-for-different-places)
* [Registering Assets](#registering-assets)
  * [Deregistering Assets](#deregistering-assets)
* [Adding Inline Scripts and Styles](#adding-inline-scripts-and-styles)
* [Altering Script and Link Tags](#altering-script-and-link-tags)
* [Conditional Loading of Assets](#conditional-loading-of-assets)

## Overview

* `wp_enqueue_script($name, $src, $deps, $version = false, $in_footer = false)`
* `wp_enqueue_style($name, $src, $deps, $version = false, $media = 'all')`

**Notes**:

- if `$deps` contains dependency that does not exist, loading asset fails
- if `$version` is set to `null`, no version is added to the URL
- if `$version` is set to `false`, added version equals current WordPress version


> Scripts and styles are referenced here - there is not a hook like `wp_enqueue_styles`.

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

* prevent caching:

```
add_action('wp_enqueue_scripts', function () {
  $tempUri = get_template_directory_uri();
  $tempPath = get_template_directory();

  wp_register_style(
    'core',
    $tempUri . '/style.css',
    [],
    filemtime($tempPath . '/style.css')
  );
});
```

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

```
// replace jQuery provided by WordPress with custom one

add_action('wp_enqueue_scripts', function () {
  wp_deregister_script('jquery');
  wp_register_script('jquery', get_template_directory_uri() . '/js/jquery.min.js');
});
```

* `wp_deregister_style($name)`

```
add_action('wp_enqueue_scripts', function () {
  wp_dequeue_style('old-style');
  wp_deregister_style('old-style');

  wp_register_style('new-style', get_stylesheet_directory_uri() . '/new.css', false, '1.0.0'); 
  wp_enqueue_style('new-style');
}, 20);
```

## Adding Inline Scripts and Styles

* `wp_add_inline_script($sibling_ref, $data, $position = 'after')`

```
add_action('wp_enqueue_scripts', function () {
  wp_dequeue_script('utils');

  // add inline script BEFORE <script> loading the utils script
  wp_add_inline_script('utils', 'const KEY = \'12345678\';', 'before');
}, 20);
```

* `wp_add_inline_style($sibling_ref, $data)`

```
add_action('wp_enqueue_scripts', function () {
  wp_enqueue_style('theme');

  // add inline style (always before <link /> loading the theme stylesheet)
  // pass value for properties using var(--bg) as a value
  wp_add_inline_style('theme', 'body { --bg: royalblue; }');
}, 20);
```

## Altering Script and Link Tags

* `apply_filters('script_loader_tag', $html, $name, $src)`

```
add_action('wp_enqueue_scripts', function () {
  // defer loading of the painter.js script

  add_filter('script_loader_tag', function ($html, $name) {
    if ($name === 'painter') {
      return str_replace('src', 'defer src', $html);
    }

    return $html;
  }, 10, 2);
});
```

* `apply_filters('style_loader_tag', $html, $name, $href, $media)`

```
add_action('wp_enqueue_scripts', function () {
  // force loading core.css and theme.css with https protocol

  add_filter('style_loader_tag', function ($html, $name) {
    $styles = ['core', 'theme'];

    if (in_array($name, $styles)) {
      $html = str_replace('http:', 'https:', $html);   
    }

    return $html;
  }, 10, 2);
});
```

## Conditional Loading of Assets

* `wp_script_add_data($name, $key, $value)`

```
add_action('wp_enqueue_scripts', function wpdemo_enqueue_scripts() {
    wp_enqueue_script('respond', get_template_directory_uri() . '/js/respond.min.js' );
    wp_script_add_data('respond', 'conditional', 'lt IE 9');
 
    wp_enqueue_script('html5shiv', get_template_directory_uri() . '/js/html5shiv.js');
    wp_script_add_data('html5shiv', 'conditional', 'lt IE 9');
});
```

output:

```
<!--[if lt IE 9]>
<script type='text/javascript' src='.../js/respond.min.js' id='respond-js'></script>
<![endif]-->

<!--[if lt IE 9]>
<script type='text/javascript' src='.../js/html5shiv.js' id='html5shiv-js'></script>
<![endif]-->
```

* `wp_style_add_data($name, $key, $value)`

```
add_action('wp_enqueue_scripts', function wpdocs_enqueue_scripts() {
    wp_enqueue_style('theme');
    wp_style_add_data('theme', 'conditional', 'lt IE 9');
 
    wp_enqueue_style('theme-ie7');
    wp_style_add_data('theme-ie7', 'conditional', 'lt IE 8');
});
```

output:

```
<!--[if lt IE 9]>
<link rel='stylesheet' id='theme-css'  href='.../css/theme.css' type='text/css' media='all' />
<![endif]-->

<!--[if lt IE 8]>
<link rel='stylesheet' id='theme-ie7-css'  href='.../css/theme-ie7.css' type='text/css' media='all' />
<![endif]-->
```
