# Change Title Placeholder

```
function change_title_text($title){
  return 'Type title here, please';
}
   
add_filter('enter_title_here', 'change_title_text');
```

This affects addition form for posts, pages and posts of custom type.

## Limiting to Post Type(s)

```
function change_title_text($title){
  $screen = get_current_screen();

  if  ($screen->post_type === 'book') {
    $title = __('Enter book title', 'prfx');
  }

  return $title;
}
   
add_filter('enter_title_here', 'change_title_text');
```

> Built-in post types can be used: `post` for standard posts and `page` for pages.