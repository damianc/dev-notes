# `HttpContext`

* `cache.interceptor.ts`:

```
export const IS_CACHE_ENABLED = new HttpContextToken<boolean>(() => false);

export class CacheInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    delegate: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.context.get(IS_CACHE_ENABLED) === true) {
      return ...;
    }

    return delegate.handle(req);
  }
}
```

* some service:

```
this.httpClient.get('/api/weather', {
  context: new HttpContext().set(IS_CACHE_ENABLED, true);
}).subscribe(...);
```

## Methods

* `set<T>(token: HttpContextToken<T>, value: T): HttpContext`
* `get<T>(token: HttpContextToken<T>): T`
* `delete(token: HttpContextToken<unknown>): HttpContext`
* `has(token: HttpContextToken<unknown>): boolean`
* `keys(): IterableIterator<HttpContextToken<unknown>>`