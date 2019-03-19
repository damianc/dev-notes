# Adding a favicon in header

```
add_action('wp_head', 'prfx_favicon');
add_action('login_head', 'prfx_favicon');
add_action('admin_head', 'prfx_favicon');

function prfx_favicon() {
	echo '<link rel="icon" href="' . get_template_directory_uri() . '/img/favicon.ico" />';
}
```
