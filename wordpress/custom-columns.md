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

## Custom Filter

```
add_action('restrict_manage_posts', function ($post_type) {
	if ($post_type !== 'book') return;
	
	echo '<select name="book-size">';
	echo '<option value="0">Book size</option>';
	
	$options = [
	 [
	  'value' => 'S',
	  'label' => 'Up to 150 pages'
	 ], [
	  'value' => 'M',
	  'label' => 'Up to 1000 pages'
	 ], [
	  'value' => 'L',
	  'label' => 'Over 1000 pages'
	 ]
	];
	
	for ($options as $option) {
		echo "<option value='{$option->value}'" .
		selected(@GET['book_size'], $option->value) .
		">{$option->label}</option>";
	}
	
	echo '</select>';
});

add_action('pre_get_posts', function ($query) {
	global $post_type;
	if ($post_type !== 'book') return;
	
	if (isset($_GET['book_size'])) {
		$size = sanitize_text_field($_GET['book_size']);
		$mq;
		
		switch ($size) {
			case 'S':
			 $mq = [
			  'value' => 150,
			  'compare' => '<='
			 ];
			 break;
			case 'M':
			 $mq = [
			  'value' => [151, 999],
			  'compare' => 'BETWEEN'
			 ];
			 break;
			case 'L':
			 $mq = [
			  'value' => 1000,
			  'compare' => '>='
			 ];
			 break;
		}
		
		if (!empty($mq)) {
			$mq_common = [
			 'key' => 'prfx-book-pages',
			 'type' => 'numeric'
			];
			
			$mq = array_merge($mq, $mq_common);
			$query->set('meta_query', [
				'meta_query' => $mq
			]);
		}
	}
});
```

## Related Hooks

| Hook name | Hook type |
|--|--|
| `manage_{POST_TYPE}_posts_columns` | filter |
| `manage_{POST_TYPE}_posts_custom_column` | action |
| `manage_{SCREEN_ID}_columns` | filter |
| `manage_{SCREEN_ID}_custom_column` | action |
| `manage_{SCREEN_ID}_custom_column_js_template` | action |
| `manage_{SCREEN_ID}_sortable_columns` | filter |
