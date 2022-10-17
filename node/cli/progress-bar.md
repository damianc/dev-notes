# Progress Bar in Node CLI

* implementation (`progress-bar.js`):

```
const rdl = require('readline');

class ProgressBar {
  static BgLight = '\u2591'
  static BgDark = '\u2588';

  width;
  duration;

  constructor(width, duration = 50) {
    this.width = width;
    this.duration = duration;
  }

  run() {
    this.prePaint();
    this.paintBackground();
    this.postPaint();
    this.repaint();
  }

  paintBackground() {
    for (let i = 0; i < this.width - 1; i++) {
      process.stdout.write(ProgressBar.BgLight);
    }
  }

  repaint() {
    let cursor = 1;
    rdl.cursorTo(process.stdout, cursor, 0);
    const timer = setInterval(() => {
      process.stdout.write(ProgressBar.BgDark);
      cursor += 1;
      if (cursor >= this.width) {
        clearTimeout(timer);
        process.stdout.write('\x1B[?25h');
      }
    }, this.duration);
  }

  prePaint() {
    process.stdout.write('\x1B[?25l');
    process.stdout.write(' ');
  }

  postPaint() {
    process.stdout.write(' ');
  }
}
```

* use:

```
const pb = new ProgressBar(50, 500);
pb.run();
```

* run:

```
node progress-bar
 █████████████████████████████████████░░░░░░░░░░░░
```