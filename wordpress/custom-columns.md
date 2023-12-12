# Custom Columns

## Regular Columns

```
add_filter('manage_book_posts_columns', function ($columns) {
	// delete column
	unset($columns['date']);
	
	// rename column
	$columns['title'] = __('Book title', 'prfx');
	
	// add new column
	$columns['prfx_pages'] = __('Pages', 'prfx');
	
	return $columns;
});

add_action('manage_book_posts_custom_column'', function ($column) {
	global $post;
	
	if ($column === 'prfx_pages') {
		$custom = get_post_meta($post->ID, 'prfx_book_pages', true);
		echo $custom ?: '-';
	}
});
```
