# Axios + RxJS

## `axios-subscriber.js`

```
import { Subscriber } from 'rxjs';
import axios, { CancelToken } from 'axios';

export class AxiosSubscriber extends Subscriber {
  constructor(observer, url, options) {
    super(observer);

    this.aborted = false;
    this.ct = CancelToken.source();

    axios(url, {
      ...options,
      cancelToken: this.ct.token
    })
    .then(({ data }) => {
      observer.next(data);
      observer.complete();
    })
    .catch(error => {
      observer.error(error);
    });
  }

  unsubscribe() {
    super.unsubscribe();

    if (!this.aborted) {
      this.ct.cancel();
      this.aborted = true;
    }
  }
}
```

## `http.js`

```
import { Observable } from 'rxjs';
import { AxiosSubscriber } from './axios-subscriber';

export const Http = {

  get(url, options) {
    return new Observable(observer => {
      return new AxiosSubscriber(observer, url, {
        ...options,
        method: 'get'
      });
    });
  }

  // ...

};
```