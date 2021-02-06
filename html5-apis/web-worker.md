# Web Worker

## Client

```
const worker = new Worker('worker.js');

worker.addEventListener('message', ({ data }) => {
  console.log('>>', data);
});

setTimeout(() => {
  console.log('Send 2');
  worker.postMessage(2);
}, 2000);

setTimeout(() => {
  console.log('Send 5');
  worker.postMessage(5);
}, 5000);
```

## Worker

```
addEventListener('message', ({ data }) => {
  postMessage(data * 10);
});
```

## Closing connection

* client:

```
worker.terminate();
```

* worker:

```
close();
```

## Importing scripts in Worker

```
importScripts('lib.js');
importScripts('utils.js');
```

or:

```
importScripts('lib.js', 'utils.js');
```

### Other Origin

```
importScripts('//example.com/hello.js');
```