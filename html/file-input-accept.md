# File Input: `accept` Attribute

* one value:

```
<input type="file" accept=".doc" />
```

* multiple values:

```
<input type="file" accept=".doc,.docx" />
```

```
<input type="file" accept="image/*,.pdf" />
```

## Formats

* extension, e.g., `accept=".pdf"`
* MIME type, e.g., `accept="image/png"`
* _partial_ MIME type, e.g., `accept="image/*"`

## Common MIME Types

> [Full list of MIME types](https://www.iana.org/assignments/media-types/media-types.xhtml)

### Primary Types

* `text/plain` - default type for _textual files_, i.e., meant to be read by human
* `application/octet-stream` - default type for _binary files_, i.e., meant to be processed by computer

### Media

* images
  * `image/jpeg` [`jpg`, `jpeg`]
  * `image/png` [`png`]
  * `image/gif` [`gif`]
  * `image/webp` [`webp`]
  * `image/bmp` [`bmp`]
  * `image/svg+xml` [`svg`]
* videos
  * `video/mp4` [`mp4`]
  * `video/mpeg` [`mpeg`]
  * `video/x-msvideo` [`avi`]
  * `video/webm` [`webm`]
  * `video/ogg` [`ogv`]
  * `video/3gpp` [`3gp`]
  * `video/x-ms-wmv` [`wmv`]
* audio
  * `audio/mpeg` [`mp3`]
  * `audio/wav` [`wav`]
  * `audio/webm` [`weba`]
  * `audio/ogg` [`oga`, `ogg`]
  * `audio/3gpp` [`3gp`]
  * `audio/x-ms-wma` [`wma`]
  * `audio/x-aac` [`aac`]

### Documents

* text
  * `text/plain` [`txt`]
  * `text/markdown` [`md`]
  * `application/rtf` [`rtf`]
  * `application/msword` [`doc`]
  * `application/vnd.oasis.opendocument.text` [`odt`]
* publications
  * `application/pdf` [`pdf`]
  * `application/pub+zip` [`epub`]
  * `application/vnd.amazon.ebook` [`azw`]
* data sets
  * `text/csv` [`csv`]
  * `application/json` [`json`]
  * `application/xml` or `text/xml` [`xml`]

#### Word Documents

To handle Word documents whose type may vary, use:

```
<input
  type="file"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
/>
```

### Other

* dev
  * `text/html` [`htm`, `html`]
  * `text/css` [`css`]
  * `text/javascript` [`js`, `mjs`]
  * `application/x-sh` [`sh`]
* fonts
  * `font/otf` [`otf`]
  * `font/ttf` [`ttf`]
  * `font/woff` [`woff`]
  * `font/woff2` [`woff2`]
  * `application/vnd.ms-fontobject` [`eot`]
* archives
  * `application/zip` [`zip`]
  * `application/gzip` [`gz`]
  * `application/x-bzip` [`bz`]
  * `application/x-bzip2` [`bz2`]
  * `application/x-tar` [`tar`]
  * `application/vnd.rar` [`rar`]
  * `application/x-7z-compressed` [`7z`]
  * `application/java-archive` [`jar`]

### `multipart/*`

* `multipart/byteranges`
* `multipart/encrypted`
* `multipart/form-data`
* `multipart/signed`

> [all `multipart/*` types](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)