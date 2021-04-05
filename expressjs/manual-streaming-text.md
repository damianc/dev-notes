# Manual Streaming of Text

```
const express = require('express');
const fs = require('fs');
const app = express();
 
app.use('/static', express.static('.'));
app.use('/text', (req, res) => {
  const path = 'file.txt';
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const { range } = req.headers;

  if (range) {
    const [rangeStart, rangeEnd] = range.replace(/bytes=/, '').split('-');
    const start = parseInt(rangeStart, 10);
    const end = rangeEnd
      ? parseInt(rangeEnd, 10) - 1
      : fileSize - 1;

    if (start >= fileSize) {
      res.end();
      return;
    }

    const chunksize = (end - start) + 1;
    const file = fs.createReadStream(path, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': end > fileSize ? fileSize - start : chunksize,
      'Content-Type': 'text/plain'  
    };

    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'text/plain'
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