# Response Headers

| Header | Description | Example Value |
|--------|-------------|---------------|
| `Access-Control-Allow-Origin` | CORS | `*` |
| `Access-Control-Allow-Credentials` | CORS | `true` |
| `Access-Control-Expose-Headers` | CORS (`*` won't wildcard the `Authorization` header) | `*, Authorization` |
| `Access-Control-Max-Age` | CORS | `600` |
| `Access-Control-Allow-Methods` | CORS | `POST, GET, OPTIONS` |
| `Access-Control-Allow-Headers` | CORS | `Accept, X-Custom-Header` |
| `Accept-Patch` | Specifies which patch document formats this server supports. | `text/example;charset=utf-8` |
| `Accept-Ranges` | What partial content range types this server supports via byte serving. | `bytes` |
| `Age` | The age the object has been in a proxy cache in seconds. | `12` |
| `Allow` Valid methods for a specified resource. To be used for a 405 Method not allowed. | `GET, HEAD` |
| `Alt-Svc` | A server uses "Alt-Svc" (*Alternative Services*) header to indicate that its resources can also be accessed at a different network location (host or port) or using a different protocol. (When using HTTP/2, servers should instead send an ALTSVC frame.) | `http/1.1="http2.example.com:8001"; ma=7200` |
| `Cache-Control` | Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds. | `max-age=3600` |
| `Connection` | Control options for the current connection and list of hop-by-hop response fields. [~HTTP/2~] | `close` |
| `Content-Disposition` | An opportunity to raise a "File Download" dialogue box for a known MIME type with binary format or suggest a filename for dynamic content. Quotes are necessary with special characters. | `attachment; filename="fname.ext"` |
| `Content-Encoding` | The type of encoding used on the data. | `gzip` |
| `Content-Language` | The natural language or languages of the intended audience for the enclosed content. | `da` |
| `Content-Length` | The length of the response body in octets (8-bit bytes). | `348` |
| `Content-Location` | An alternate location for the returned data. | `/index.htm` |
| `Content-MD5` | A Base64-encoded binary MD5 sum of the content of the response. | `Q2hlY2sgSW50ZWdyaXR5IQ==` |
| `Content-Range` | Where in a full body message this partial message belongs. | `bytes 21010-47021/47022` |
| `Content-Type` | The MIME type of this content. | `text/html; charset=utf-8` |
| `Date` | The date and time [(RFC 7231)](https://tools.ietf.org/html/rfc7231) that the message was sent. | `Tue, 15 Nov 1994 08:12:31 GMT` |
| `Delta-Base` | Specifies the delta-encoding entity tag of the response. | `"abc"` |
| `ETag` | An identifier for a specific version of a resource, often a message digest. | `"737060cd8c284d8af7ad3082f209582d"` |
| `Expires` | Gives the date/time [(RFC 7231)](https://tools.ietf.org/html/rfc7231) after which the response is considered stale. | `Thu, 01 Dec 1994 16:00:00 GMT` |
| `IM` | Instance-manipulations applied to the response. | `feed` |
| `Last-Modified` | The last modified date [(RFC 7231)](https://tools.ietf.org/html/rfc7231) for the requested. | `Tue, 15 Nov 1994 12:45:26 GMT` |
| `Link` | Used to express a typed relationship with another resource [(RFC 5988)](https://tools.ietf.org/html/rfc5988). | `</feed>; rel="alternate"` |
| `Location` | Used in redirection, or when a new resource has been created. | `/pub/WWW/People.html` |
| `P3P` | This field is supposed to set P3P policy, in the form of P3P:CP="your_compact_policy". However, P3P did not take off, most browsers have never fully implemented it, a lot of websites set this field with fake policy text, that was enough to fool browsers the existence of P3P policy and grant permissions for third party cookies. | `CP="This is not a P3P policy! See https://en.wikipedia.org/wiki/Special:CentralAutoLogin/P3P for more info."` |
| `Pragma` | Implementation-specific fields that may have various effects anywhere along the request-response chain. | `no-cache` |
| `Proxy Authenticate` | Request authentication to access the proxy. | `Basic` |
| `Public-Key-Pins` | [HTTP Public Key Pinning](https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning), announces hash of website's authentic TLS certificate. | `max-age=2592000; pin-sha256="E9CZ9INDbd+2eRQozYqqbQ2yXLVKB9+xcprMF+44U1g=";` |
| `Retry-After` | If an entity is temporarily unavailable, this instructs the client to try again later. Value could be a specified period of time (in seconds) or a HTTP-date. | `Fri, 07 Nov 2014 23:59:59 GMT` |
| `Server` | A name for the server. | `Apache/2.4.1 (Unix)` |
| `Set-Cookie` | An HTTP cookie. | `UserID=JohnDoe; Max-Age=3600; Version=1` |
| `Strict-Transport-Security` | A HSTS Policy informing the HTTP client how long to cache the HTTPS only policy and whether this applies to subdomains. | `max-age=16070400; includeSubDomains` |
| `Trailer` | The Trailer general field value indicates that the given set of header fields is present in the trailer of a message encoded with chunked transfer coding. | `Max-Forwards` |
| `Transfer-Encoding` | The form of encoding used to safely transfer the entity to the user: `chunked`, `compress`, `deflate`, `gzip`, or `identity`. [~HTTP/2~] | `chunked` |
| `Tk` | Tracking Status header, value suggested to be sent in response to a DNT(do-not-track): `!` - under construction / `?` - dynamic / `G` - gateway to multiple parties / `N` = not tracking / `T` - tracking / `C` - tracking with consent / `P` - tracking only if consented / `D` - disregarding DNT / `U` - updated | `?` |
| `Upgrade` | Ask the client to upgrade to another protocol. [~HTTP/2~] | `h2c, HTTPS/1.3, IRC/6.9, RTA/x11, websocket` |
| `Vary` | Tells downstream proxies how to match future request headers to decide whether the cached response can be used rather than requesting a fresh one from the origin server. | `Accept-Language` |
| `Via` | nforms the client of proxies through which the response was sent. | `1.0 fred, 1.1 example.com (Apache/1.1)` |
| `Warning` | A general warning about possible problems with the entity body. | `199 Miscellaneous warning` |
| `WWW-Authenticate` | Indicates the authentication scheme that should be used to access the requested entity. | `Basic` |
| `X-Frame-Options` | Clickjacking protection: `deny` - no rendering within a frame / `sameorigin` - no rendering if origin mismatch / `allow-from` - allow from specified location / `allowall` - non-standard, allow from any location | `deny` |

## Common non-standard Response Fields

| Header | Description | Example Value |
|--------|-------------|---------------|
| `Content-Security-Policy`, `X-Content-Security-Policy`, `X-WebKit-CSP` | Content Security Policy definition. | `default-src 'self'` |
| `Refresh` | Used in redirection, or when a new resource has been created. This refresh redirects after 5 seconds. Header extension introduced by Netscape and supported by most web browsers. | `5; url=http://www.w3.org/pub/WWW/People.html` |
| `Status` | CGI header field specifying the status of the HTTP response. Normal HTTP responses use a separate "Status-Line" instead [(RFC 7230)](https://tools.ietf.org/html/rfc7230). | `200 OK` |
| `Timing-Allow-Origin` | Specifies origins that are allowed to see values of attributes retrieved via features of the [Resource Timing API](https://developer.mozilla.org/en-US/docs/Web/API/Resource_Timing_API), which would otherwise be reported as zero due to cross-origin restrictions. | `*` |
| `X-Content-Duration` | Provide the duration of the audio or video in seconds; only supported by Gecko browsers. | `42.666` |
| `X-Content-Type-Options` | The only defined value, `nosniff`, prevents Internet Explorer from MIME-sniffing a response away from the declared content-type. This also applies to Google Chrome, when downloading extensions. | `nosniff` |
| `X-Powered-By` | Specifies the technology (e.g. ASP.NET, PHP, JBoss) supporting the web application (version details are often in `X-Runtime`, `X-Version`, or `X-AspNet-Version`). | `PHP/5.4.0` |
| `X-Request-ID`, `X-Correlation-ID` | Correlates HTTP requests between a client and server. | `f058ebd6-02f7-4d3f-942e-904344e8cde5` |
| `X-UA-Compatible` | Recommends the preferred rendering engine (often a backward-compatibility mode) to use to display the content. Also used to activate Chrome Frame in Internet Explorer. | `IE=edge` |
| `X-XSS-Protection` | Cross-site scripting (XSS) filter. | `1; mode=block` |

## Source

[https://en.wikipedia.org/wiki/List_of_HTTP_header_fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Response_fields)
