# Gradients

## Linear Gradient

```
<svg width="300" height="300">
  <defs>
    <linearGradient id="grad" gradientTransform="rotate(90)">
      <stop offset="10%" stop-color="red" />
      <stop offset="90%" stop-color="yellow" />
    </linearGradient>
  </defs>

  <circle cx="150" cy="150" r="100" fill="url(#grad)"/>
</svg>
```

### Transparent Stops

```
<linearGradient id="grad" gradientTransform="rotate(90)">
  <stop offset="10%" stop-color="red" stop-opacity=".5" />
  <stop offset="90%" stop-color="rgba(255, 255, 0, .5)" />
</linearGradient>
```

## Radial Gradient

* the yellow ball with top-left light 

```
<svg width="300" height="300">
  <defs>
    <radialGradient id="grad" cx="20%" cy="20%">
      <stop offset="5%" stop-color="yellow" />
      <stop offset="95%" stop-color="orange" />
    </radialGradient>
  </defs>

  <circle cx="150" cy="150" r="100" fill="url(#grad)"/>
</svg>
```

<svg width="300" height="300">
  <defs>
    <radialGradient id="grad" cx="20%" cy="20%">
      <stop offset="5%" stop-color="yellow" />
      <stop offset="95%" stop-color="orange" />
    </radialGradient>
  </defs>

  <circle cx="150" cy="150" r="100" fill="url(#grad)"/>
</svg>