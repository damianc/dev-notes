# Custom Video Controls

## HTML Markup

```
<div id="video-wrapper">
  <div id="controls">
    <p id="time">00:00</p>
    <p id="duration">00:00</p>

    <button id="play">PLAY</button>
    <button id="stop">STOP</button>

    <button id="mute">MUTE</button>
    <label class="volume-control">
      VOLUME:
      <input type="range" id="volume" min="0" max="1" step="0.1" />
    </label>

    <input type="range" id="seekbar" min="0" max="1" step="0.1" />

    <button id="speedX05">0.5x</button>
    <button id="speedX1">1x</button>
    <button id="speedX2">2x</button>

    <button id="rewind" class="speed">REWIND</button>
    <button id="ff" class="speed">FF</button>
    <span id="currentSpeed">x1</span>

    <button id="fullscreen">FULL</button>
  </div>

  <video id="video" width="800" height="600">
    <source src="movie-clip.mp4" type="video/mp4" />
  </video>
</div>
```

## CSS Styling

```
#video-wrapper {
  overflow: hidden;
  position: relative;
  width: 800px;
  border: solid 4px red;
}

#controls {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 780px;
  height: 30px;
  background-color: rgba(0, 0, 0, .3);
  padding: 35px 10px 10px;
  z-index: 1;
}

button {
  background-color: rgba(255, 255, 255, .7);
  border: none;
  cursor: pointer;
  padding: 5px;
}

#time,
#duration {
  color: #fff;
  position: absolute;
  top: 0;
}

#time {
  left: 10px;
}

#duration {
  right: 10px;
  text-align: right;
}

.volume-control {
  margin-left: 20px;
  font-size: 12px;
}

#volume {
  width: 80px;
  vertical-align: middle;
}

#seekbar {
  top: 12px;
  width: 690px;
  left: 50px;
  position: absolute;
}

#currentSpeed {
  font-size: 12px;
}

.speed {
  font-size: 8px;
}
```

## JavaScript Handlers

### Init

```
const video = document.getElementById('video');
const durationControl = document.getElementById('duration');
const volumeControl = document.getElementById('volume');
const seekbarControl = document.getElementById('seekbar');

...

let lastVolume;

video.addEventListener('loadeddata', (e) => {
  durationControl.textContent = formatTime(video.duration);
  lastVolume = volumeControl.value;

  const durationRounded = Math.round(video.duration);
  seekbarControl.setAttribute('max', durationRounded);
  seekbarControl.value = 0;
});
```

### Util Function: `formatTime()`

```
function formatTime(seconds) {
  let secs = Math.round(seconds);
  let mins = Math.floor(secs / 60);

  mins = (mins >= 10) ? mins : '0' + mins;

  secs = Math.floor(secs % 60);
  secs = (secs >= 10) ? secs : '0' + secs;

  return mins + ':' + secs;
}
```

### Play/Pause

```
const playBtn = document.getElementById('play');

...

playBtn.addEventListener('click', () => {
  if (video.paused || video.ended) {
    video.play();
    playBtn.textContent = 'PAUSE';
  } else {
    video.pause();
    playBtn.textContent = 'PLAY';
  }
});
```

### Stop

```
const stopBtn = document.getElementById('stop');

...

stopBtn.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
});
```

### Change Volume

```
const volumeControl = document.getElementById('volume');

...

volumeControl.addEventListener('change', () => {
  video.volume = volumeControl.value;
  lastVolume = video.volume;
});
```

### Mute

```
const muteBtn = document.getElementById('mute');

...

muteBtn.addEventListener('click', () => {
  if (!video.muted) {
    video.muted = true;
    muteBtn.textContent = 'SOUND';
    volumeControl.value = 0;
  } else {
    video.muted = false;
    muteBtn.textContent = 'MUTE';
    volumeControl.value = lastVolume;
  }
});
```

### Seek Bar

```
const seekbarControl = document.getElementById('seekbar');

...

seekbarControl.addEventListener('change', () => {
  video.currentTime = seekbarControl.value;
});

seekbarControl.addEventListener('input', () => {
  timeControl.textContent = formatTime(seekbarControl.value);
  video.currentTime = seekbarControl.value;
});
```

### Handle Time Update

```
video.addEventListener('timeupdate', () => {
  if (video.currentTime === 0) {
    playBtn.textContent = 'PLAY';
  }

  timeControl.textContent = formatTime(video.currentTime);
  seekbarControl.value = video.currentTime;
});
```

### Speed

```
const speedX05 = document.getElementById('speedX05');
const speedX1 = document.getElementById('speedX1');
const speedX2 = document.getElementById('speedX2');

...

speedX05.addEventListener('click', () => (video.playbackRate = 0.5));
speedX1.addEventListener('click', () => (video.playbackRate = 1));
speedX2.addEventListener('click', () => (video.playbackRate = 2));

video.addEventListener('ratechange', () => {
  currentSpeed.textContent = 'x' + video.playbackRate;
});
```

#### Relative Speed: Rewind and Fast Forward

```
const rewindControl = document.getElementById('rewind');
const ffControl = document.getElementById('ff');

...

rewindControl.addEventListener('click', () => {
  if (video.playbackRate > 2) {
    video.playbackRate -= 2;
  }
});

ffControl.addEventListener('click', () => {
  if (video.playbackRate < 14) {
    video.playbackRate += 2;
  }
});
```

### Full Screen

```
const fullscreenControl = document.getElementById('fullscreen');

...

fullscreenControl.addEventListener('click', () => {
  video.webkitEnterFullscreen();
});
```

### Key Shortcuts

```
const Video = {
  // API
};

window.addEventListener('keydown', e => {
  switch (e.key) {
    case ' ':
      Video.play();
      break;
    case 'x':
      Video.stop();
      break;
    case 'ArrowLeft':
      reachFrame(-1, false);
      break;
    case 'ArrowRight':
      reachFrame(1, false);
      break;
    case ',':
      reachFrame(-1, true);
      break;
    case '.':
      reachFrame(1, true);
      break;
  }
});

function reachFrame(direction, strict) {
  video.currentTime += (strict ? .05 : 1) * direction;
}
```