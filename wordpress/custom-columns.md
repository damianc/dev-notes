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

add_action('manage_book_posts_custom_column', function ($column) {
	global $post;
	
	if ($column === 'prfx_pages') {
		$custom = get_post_meta($post->ID, 'prfx_book_pages', true);
		echo $custom ?: '-';
	}
});
```

## Sortable Columns

```
add_filter('manage_edit-book_sortable_columns', function ($columns) {
	$columns['prfx_pages'] = 'pages';
	return $columns;
});

add_action('pre_get_posts', function ($query) {
	$orderby = $query->get('orderby');
	
	if ($orderby === 'pages') {
		$meta_query = [
		 'relation' => OR, [
		  'key' => 'prfx_book_pages',
		  'compare' => 'NOT EXISTS'
		 ], [
		  'key' => 'prfx_book_pages'
		 ]
		];
		
		$query->set('meta_query', $meta_query);
		$query->set('orderby', 'meta_value_num');
	}
});
```
