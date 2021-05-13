# Attaching Assets

```
add_action('wp_enqueue_scripts', function () {
  $path = get_template_directory_uri();

  /* CSS */
  wp_enqueue_style('bootstrap', $path . '/css/bootstrap.min.css');
  wp_enqueue_style('core', $path . '/style.css');

  /* JavaScript */
  wp_enqueue_script('bootstrap', $path . '/js/bootstrap.min.js', ['jquery']);
});
```