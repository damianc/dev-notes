# `dgram` Socket

## `emitter.js`

```
const dgram = require('dgram');
const socket = dgram.createSocket('udp4');
const PORT = 1234;

let i = 1;
setInterval(() => {
  socket.send(i++, PORT)
}, 4000);
```

## `receiver.js`

```
cośnst dgram = require('dgram');
const socket = dgram.createSocket('udp4');
const PORT = 1234;

socket.bind(PORT);
socket.on('message', msg => console.log('' + msg));
```