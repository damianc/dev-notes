# Interceptors

* create

```
class SomeInterceptor implements HttpInterceptor {
  constructor(
    private someService: SomeService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ) {
    ...
  }
}
```

* register

```
const httpInterceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: SomeInterceptor,
    multi: true,
    deps: [SomeService]
  }
];

@NgModule({
  ...
  providers: [
    ...httpInterceptors,
    ...
  ]
})
export class AppModule {}
```

## Example 1: Loading Interceptor

```
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(
    private loader: LoaderService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loader.show();

    return next.handle(request).pipe(
      finalize(() => this.loader.hide())
    );
  }
}
```

## Example 2: Language Interceptor

```
@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor(
    private translateService: TranslateService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const clonedRequest = request.clone({
      headers: request.headers.set(
        'Accept-Language',
        this.translateService.currentLang
      )
    });

    return next.handle(clonedRequest);
  }
}
```

## Specs

### `HttpRequest<T>` [class]

* `body: T | null`
* `headers: HttpHeaders`
* `context: HttpContext`
* `reportProgress: boolean`
* `withCredentials: boolean`
* `responseType: 'arraybuffer' | 'blob' | 'text' | 'json'`
* `method: string`
* `params: HttpParams`
* `urlWithParams: string`
* `url: string`
* `serializeBody(): ArrayBuffer | Blob | FormData | string | null`
* `detectContentTypeHeader(): string | null`
* `clone(update?: REQUEST_CLONE_OPTIONS<T>): HttpRequest<any>`

#### `REQUEST_CLONE_OPTIONS<T>`

* `headers?: HttpHeaders`
* `context?: HttpContext`
* `reportProgress?: boolean`
* `params?: HttpParams`
* `responseType?: 'arraybuffer' | 'blob' | 'text' | 'json'`
* `withCredentials?: boolean`
* `body?: T`
* `method?: string`
* `url?: string`
* `setHeaders?: Record<string, string | string[]>`
* `setParams?: Record<string, string>`

> `params` - overwrites, `setParams` - merges

### `HttpHandler` [abstract class]

* `handle(request: HttpRequest<any>): Observable<HttpEvent<any>>`