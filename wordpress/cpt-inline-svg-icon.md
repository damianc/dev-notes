# Inline SVG Icon when Registering CPT

The `menu_icon` setting should be assigned value `'data:image/svg+xml;base64,' . base64_encode(SVG_CODE)`.  
The `<svg>` tag is as follows:

```
<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  ...
</svg>
```

## Example (Book icon)

```
add_action('init', function () {
  $args = [
    ...

    'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="round-corner"><rect x="0" y="0" width="20" height="20" rx="3" ry="3" /></clipPath></defs><rect width="9" height="20" clip-path="url(#round-corner)" fill="black"/><rect width="9" height="20" x="11" clip-path="url(#round-corner)" fill="black" fill-opacity=".75"/></svg>')

  ];

  register_post_type('book', $args);
});
```

> `fill="black"` is crucial: WordPress will handle changing colors of such elements