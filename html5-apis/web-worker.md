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

## Example with Imported Scripts

```
const worker = new Worker('worker.js');

worker.addEventListener('message', ({ data }) => {
  console.log('[app] worker sent:', data);
});

worker.postMessage(1);

const t = setTimeout(() => {
  worker.postMessage(2);
  clearTimeout(t);
}, 4000);
```

* `worker.js`

```
importScripts('calc.js');

addEventListener('message', ({ data }) => {
  console.log('[worker] worker received:', data);
  
  postMessage(Calc.mulBy10(data));
  Calc.doMulBy10(data);
});
```

* `calc.js`

```
const Calc = {
  mulBy10(x) {
    return x * 10;
  },
  doMulBy10(x) {
    postMessage(this.mulBy10(x));
  }
};
```

* output:

```
[worker] worker received: 1
[app] worker sent: 10
[app] worker sent: 10

[worker] worker received: 2
[app] worker sent: 20
[app] worker sent: 20
```