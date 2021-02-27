# Patterns and Imaged Backgrounds

## Circle Filled with Dots

```
<svg width="200" height="400">
  <defs>
    <pattern id="dots" width="10%" height="10%" viewBox="0, 0, 10, 10">
      <circle cx="5" cy="5" r="3" fill="red" />
    </pattern>
  </defs>

  <circle cx="100" cy="200" r="100" fill="url(#dots)" />
</svg>
```

## Empty Circle with Dotted Border

```
 <circle cx="150" cy="150" r="100" stroke="url(#dots)" stroke-width="30" fill="white" />
```

## Using Images

```
<svg width="300" height="300">
  <defs>

    <pattern id="wood" width="30%" height="20%" viewBox="0 0 30 20">
      <image href="wood.png" width="30"  />
    </pattern>

    <pattern id="water" width="30%" height="20%" viewBox="0 0 30 20">
      <image href="water.png" />
    </pattern>

  </defs>

  <circle cx="150" cy="150" r="100" stroke="url(#wood)" stroke-width="30" fill="url(#water)" width="30" />
</svg>
```