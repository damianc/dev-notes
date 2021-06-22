# Reusing Elements

* reuse rectangle to draw "stairs"

```
<svg width="200" height="400">
  <defs>
    <rect id="rect" x="100" y="10" width="40" height="40" fill="red" />
  </defs>

  <use xlink:href="#rect" />
  <use xlink:href="#rect" transform="translate(20 20)" />
  <use xlink:href="#rect" transform="translate(40 40)" />
  <use xlink:href="#rect" transform="translate(60 60)" />
</svg>
```