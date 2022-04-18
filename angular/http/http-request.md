# `HttpRequest`

## Constructor #1

```
(
  method: 'DELETE' | 'GET' | 'HEAD' | 'JSONP' | 'OPTIONS',
  url: string,
  init?: {
    headers?: HttpHeaders,
    context?: HttpContext,
    reportProgress?: boolean,
    params?: HttpParams,
    responseType?: 'arraybuffer' | 'blob' | 'text' | 'json',
    withCredentials?: boolean
  }
)
```

## Constructor #2

```
(
  method: 'POST' | 'PUT' | 'PATCH',
  url: string,
  body: T,
  init?: <AS ABOVE>
)
```

## Constructor #3

```
(
  method: string,
  url: string,
  body: T,
  init?: <AS ABOVE>
)
```