# Adding a favicon in header

```
add_action('wp_head', 'prfx_favicon');
add_action('login_head', 'prfx_favicon');
add_action('admin_head', 'prfx_favicon');

function prfx_favicon() {
	echo '<link rel="icon" href="' . get_template_directory_uri() . '/img/favicon.ico" />';
}
```

## More Icons

```
<?php
add_action('wp_head', 'prfx_favicon');
add_action('login_head', 'prfx_favicon');
add_action('admin_head', 'prfx_favicon');

function prfx_favicon() {
  $path = get_template_directory_uri();
?>

  <link rel="icon" href="<?= $path; ?>/img/favicon/favicon-32.png" sizes="32x32" />
  <link rel="icon" href="<?= $path; ?>/img/favicon/favicon-192.png" sizes="192x192" />
  <link rel="apple-touch-icon" href="<?= $path; ?>/img/favicon/favicon-180.png" />

<?php
}
?>
```