# Implementation of a Readable Stream

```
const { Readable } = require('stream');

class RandomString extends Readable {
  constructor(options) {
    const defaults = {
      encoding: 'utf8'
    };

    super({ ...defaults, ...options });
  }

  _read() {
    const rand = Math.random();

    let randStr = rand.toString(36);
    randStr = randStr.substr(2);

    const timer = setTimeout(() => {
      this.push(randStr, 'utf8');
      clearTimeout(timer);
    }, 1000);
  }
}
```

```
const rStream = new RandomString({
  encoding: 'hex'
});

rStream.on('data', console.log);
```