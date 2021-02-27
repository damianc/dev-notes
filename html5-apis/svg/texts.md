# Texts

```
<svg width="300" height="300">
  <text x="40" y="100" class="header">Hello</text>
</svg>

<style>
.header {
  font-family: Arial;
  font-size: 50px;
  font-weight: bold;
  fill: yellow;
  stroke: gold;
  stroke-width: 2;
}
</style>
```

## Text Along Path

```
<svg width="300" height="300">
  <defs>
    <path id="shape" d="M 0 0 L 100 0 L 100 100 L 50 100 L 50 30" />
  </defs>

  <text class="logo" x="100" y="200">
    <textPath href="#shape">
      go some down
      just to
      go up
    </textPath>
  </text>
</svg>

<style>
.logo {
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  fill: blue;
}
</style>
```