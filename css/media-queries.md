# Media Queries

## Media Types

| Type | Description |
|------|-------------|
| `all` | all devices |
| `braille` | braille tactile feedback devices |
| `embossed` | paged braille printers |
| `handheld` | handheld devices (e.g., mobile cells, smartphones) |
| `print` | printers and documents viewed in print preview mode |
| `projection` | projectors |
| `screen` | color computer screens (primarily of computers) |
| `speech` | speech synthesizers |
| `tty` | media using a fixed-pitch character grid (such as teletypes, terminals, or portable devices with limited display capabilities) |
| `tv` | television-type devices |

> As for `speech`, CSS2 had a similar media type called `aural` (for the same purpose).

## Media Features

| Feature | `min`/`max` Prefixes | Value | Example Value | Standalone Version |
|---------|----------------------|-------|---------------|--------------------|
| `width` | **yes** | `<length>` | `400px` | no |
| `height` | **yes** | `<length>` | `200px` | no |
| `device-width` | **yes** | `<length>` | `1200px` | no |
| `device-height` | **yes** | `<length>` | `800px` | no |
| `orientation` | no | `portrait \| landscape` | `landscape` | no |
| `aspect-ratio` | **yes** | `<ratio>` | `16/9` | no |
| `device-aspect-ratio` | **yes** | `<ratio>` | `1280/720` | no |
| `color` | **yes** | `<integer>` | `2` | **yes** |
| `color-index` | **yes** | `<integer>` | `256` | no |
| `monochrome` | **yes** | `<integer>` | `2` | **yes** |
| `resolution` | **yes** | `<resolution>` | `300dpi` | no |
| `scan` | no | `progressive \| interlace` | `progressive` | no |
| `grid` | no | `0` for bitmap, `1` for grid | `1` | **yes** |

## Declaring Media Queries

* external sheet

```
<link rel="stylesheet" href="style.css" media="screen, projection and (color)" />
```

* imported sheet

```
@import url(style.css) screen, projection and (color);
```

* internal sheet

```
@media screen, projection and (color) {...}
```

## ANDs and ORs

| Media Query | Description |
|-------------|-------------|
| `@media (min-width: 320px) and (max-width: 640px)` | width greater than or equal to 320 px **AND** width less than or equal to 640 px |
| `@media (min-width: 480px), (orientation: landscape)` | width greater than or equal to 480 px **OR** screen in the horizontal position |
| `@media screen and (orientation: landscape), print and (orientation: portrait)` | (screen **AND** the vertical position) **OR** (print **AND** the horizontal position) |

## `not` and `only` Keywords

The keywords invert the meaning of an entire media query.

```
@media not all and (monochrome) { ... }

// EVALUATED LIKE THIS:
@media not (all and (monochrome)) { ... }

// NOT LIKE THIS:
@media (not all) and (monochrome) { ... }
```

The `only` keyword is primarly used to hide a stylesheet in older browsers that do not support _media queries_ and prevent styles from being applied.  
Modren browsers ignore the `only` keyword and do load a stylesheet if a browser supports given features.

```
@media only screen and (color), (min-width: 1200px) { ... }
```

## Meta Viewport Tag

* `width` is measured with CSS pixels
* `device-width` is measured with physical pixels

Therefore, to make the site readable and have _proper size_, both values should equal.  
To do so, the following tag must be placed in the `<head>` section:

```
<meta name="viewport" content="width=device-width" />
```
