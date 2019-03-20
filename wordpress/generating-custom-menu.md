# Generating a custom menu

## On back-end:

```
register_nav_menus([
	'header-menu' => 'Menu in the header'
]);

add_action('prfx_generate_header_menu', function () {
	if (
		($locations = get_nav_menu_locations()) &&
		isset($locations['header-menu'])
	) {
		$menu = wp_get_nav_menu_object($locations['header-menu']);
		$menu_items = wp_get_nav_menu_items($menu->term_id);

		foreach ((array)$menu_items as $key => $menu_item) {
			$url = $menu_item->url;
			$title = $menu_item->title;
			echo "<a href=\"$url\" class=\"header__link\">$title</a>";
		}
	}
});
```

## On front-end:

```
<?php do_action('prfx_generate_header_menu'); ?>
```
