# Adding thumbnail metabox to posts

```
add_action('after_setup_theme', function () {
    add_theme_support('post-thumbnails', ['post']);
});
```
