# File Input - Capture Photo/Video/Audio

```
<input
  type="file"
  [accept="TYPE"]
  capture[="user | environment"]
/>
```

## Capturing Media from Device

* `accept` - what kind of media to capture:
  - `image/*` - a photo
  - `video/*` - a video
  - `audio/*` - an audio
* `capture` - which camera/microphone should be used:
  - `user` - front side
  - `environment` - back side

### Capturing Photo

```
<input
  type="file"
  accept="image/*"
  capture="user"
/>
```

### Capturing Video

```
<input
  type="file"
  accept="video/*"
  capture="user"
/>
```

### Capturing Audio

```
<input
  type="file"
  accept="audio/*"
  capture="user"
/>
```

## Examples

### Photo Thumbnails

* HTML

```
<input
  id="picker"
  type="file"
  accept="image/*"
  capture
  multiple
/>

<div id="thumbs"></div>
```

* JavaScript

```
const picker = document.getElementById('picker');
const thumbs = document.getElementById('thumbs');

picker.addEventListener('change', e => {
  const { files } = e.target;
  [...files].forEach(createImageCard);
});

function createImageCard(file) {
  const fileSizeMB = file.size / (1024 * 1024);
  const fileSize = fileSizeMB.toFixed(2);
  
  const box = document.createElement('div');
  const caption = document.createElement('div');
  const image = document.createElement('img');
  
  box.appendChild(caption);
  box.appendChild(image);
  thumbs.appendChild(box);
  
  caption.textContent = `${file.name} [${fileSize} MB]`;
  
  const imgData = URL.createObjectURL(file);
  image.src = imgData;
  image.onload = () => {
    URL.revokeObjectURL(imgData);
  };
}
```

### Video Preview

* HTML

```
<input
  id="picker"
  type="file"
  accept="video/*"
  capture
/>

<div id="info"></div>
<div id="preview"></div>
```

* JavaScript

```
const picker = document.getElementById('picker');
const preview = document.getElementById('preview');
const info = document.getElementById('info');

picker.addEventListener('change', e => {
  const [file] = e.target.files;
  createPlayer(file);
});

function createPlayer(file) {
  info.textContent = `
    ${file.name}
    [${(file.size / (1024 * 1024)).toFixed(2)} MB]
    (${file.type})
  `;
  
  const video = document.createElement('video');
  preview.appendChild(video);
  video.controls = true;
  
  const data = URL.createObjectURL(file);
  video.src = data;
  video.onended = () => {
    URL.revokeObjectURL(data);
  };
}
```

### Custom Control

* HTML

```
<label class="photo-picker">
  Take a photo
  <input type="file" accept="image/*" capture />
</label>
```

* CSS

```
.photo-picker input[type="file"] {
  display: none;
}

.photo-picker {
  border: solid 1px #f50;
  color: #fff;
  background-color: #fa0;
  padding: 12px 24px;
  cursor: pointer;
}
```