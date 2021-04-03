# Streaming Video

## Back-End

```
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/video', function (req, res) {
  const path = 'video.mp4';
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const { range } = req.headers;

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] 
      ? parseInt(parts[1], 10)
      : fileSize - 1;

    const chunksize = (end - start) + 1;
    const file = fs.createReadStream(path, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    };

    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    };

    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server runs on http://localhost:${port}`);
});
```

## Front-End

```
<video controls>
  <source src="http://localhost:3000/video" type="video/mp4" />
</video>
```