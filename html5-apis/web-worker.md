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

const WorkerAPI = {
  log: console.log
};
```

* `calc.js`

```
const Calc = {
  mulBy10(x, direct = true) {
    const val = x * 10;
    if (direct) {
      WorkerAPI.log(`[calc] return n: ${x} -> ${val}`);
    }
    return val;
  },
  doMulBy10(x) {
    const val = this.mulBy10(x, false);
    WorkerAPI.log(`[calc] emit n: ${x} -> ${val}`);
    postMessage(val);
  }
};
```

* output:

```
[worker] worker received: 1
[calc] return n: 1 -> 10
[calc] emit n: 1 -> 10
[app] worker sent: 10
[app] worker sent: 10

[worker] worker received: 2
[calc] return n: 2 -> 20
[calc] emit n: 2 -> 20
[app] worker sent: 20
[app] worker sent: 20
```

## `WorkerLocation`

* `app.js`

```
const worker = new Worker('worker.js?a=1');
// ...
```

* `worker.js`

```
importScripts('extra.js?b=2');
console.log('[worker]', location.search);
// ...
```

* `extra.js`

```
console.log('[extra]', location.search);
```

* output:

```
[extra] ?a=1
[worker] ?a=1
```

## `WorkerLocation` Properties

```
hash: ""
host: "localhost"
hostname: "localhost"
href: "http://localhost/web-workers/worker.js?a=1"
origin: "http://localhost"
pathname: "/web-workers/worker.js"
port: ""
protocol: "http:"
search: "?a=1"
```