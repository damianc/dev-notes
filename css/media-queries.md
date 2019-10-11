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
