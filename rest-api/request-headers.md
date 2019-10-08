# Request Headers

| Header | Description | Example Value |
|--------|-------------|---------------|
| `A-IM` | Acceptable instance-manipulations for the request. | `feed` |
| `Accept` | Media type(s) that is/are acceptable for the response. | `text/html` |
| `Accept-Charset` | Character sets that are acceptable. | `utf-8` |
| `Accept-Datetime` | Acceptable version in time. | `Thu, 31 May 2007 20:35:00 GMT` |
| `Accept-Encoding` | List of acceptable encodings. | `gzip, deflate` |
| `Accept-Language` | List of acceptable human languages for response. | `en-US` |
| `Access-Control-Request-Method` | Initiates a request for cross-origin resource sharing with Origin. | `GET` |
| `Access-Control-Request-Headers` | same as above | `origin, x-requested-with` |
| `Authorization` | Authentication credentials for HTTP authentication. | `Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=` |
| `Cache-Control` | Used to specify directives that must be obeyed by all caching mechanisms along the request-response chain. | `no-cache` |
| `Connection` | Control options for the current connection and list of hop-by-hop request fields. [~HTTP/2~] | `keep-alive` |
| `Content-Length` | The length of the request body in octets (8-bit bytes). | `348` |
| `Content-MD5` | A Base64-encoded binary MD5 sum of the content of the request body. | `Q2hlY2sgSW50ZWdyaXR5IQ==` |
| `Content-Type` | The Media type of the body of the request (used with POST and PUT requests). | `application/x-www-form-urlencoded` |
| `Cookie` | An HTTP cookie previously sent by the server with Set-Cookie. | `$Version=1; Skin=new;` |
| `Date` | The date and time [(RFC 7231)](https://tools.ietf.org/html/rfc7231#section-7.1.1.1) at which the message was originated. | `Tue, 15 Nov 1994 08:12:31 GMT` |
| `Expect` | Indicates that particular server behaviors are required by the client. | `100-continue` |
| `Forwarded` | Disclose original information of a client connecting to a web server through an HTTP proxy. | `for=192.0.2.60;proto=http;by=203.0.113.43` |
| `From` | The email address of the user making the request. | `user@example.com` |
| `Host` | The domain name of the server (for virtual hosting), and the TCP port number (may be omitted if the port is the standard port for the service requested) on which the server is listening. | `en.wikipedia.org:8080` |
| `HTTP2-Settings` | A request that upgrades from HTTP/1.1 to HTTP/2 MUST include exactly one `HTTP2-Setting` header field. This one is a connection-specific header field that includes parameters that govern the HTTP/2 connection, provided in anticipation of the server accepting the request to upgrade. | `token64`
| `If-Match` | Only perform the action if the client supplied entity matches the same entity on the server. This is mainly for methods like PUT to only update a resource if it has not been modified since the user last updated it. | `"737060cd8c284d8af7ad3082f209582d"` |
| `If-Modified-Since` | Allows a 304 Not Modified to be returned if content is unchanged. | `Sat, 29 Oct 1994 19:43:31 GMT` |
| `If-None-Match` | Allows a 304 Not Modified to be returned if content is unchanged. | `"737060cd8c284d8af7ad3082f209582d"` |
| `If-Range` | If the entity is unchanged, send me the part(s) that I am missing; otherwise, send me the entire new entity. | `"737060cd8c284d8af7ad3082f209582d"` |
| `If-Unmodified-Since` | Only send the response if the entity has not been modified since a specific time. | `Sat, 29 Oct 1994 19:43:31 GMT` |
| `Max-Forwards` | Limit the number of times the message can be forwarded through proxies or gateways. | `10` |
| `Origin` | Initiates a request for cross-origin resource sharing (asks server for `Access-Control-*` response fields). | `http://www.example-social-network.com` |
| `Pragma` | Implementation-specific fields that may have various effects anywhere along the request-response chain. | `no-cache` |
| `Proxy-Authorization` | Authorization credentials for connecting to a proxy. | `Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==` |
| `Range` | Request only part of an entity. Bytes are numbered from 0. | `bytes=500-999` |
| `Referer` [*sic*] | This is the address of the previous web page from which a link to the currently requested page was followed. | `http://en.wikipedia.org/wiki/Main_Page` |
| `TE` | The transfer encodings the user agent is willing to accept: the same values as for the response header field Transfer-Encoding can be used, plus the "trailers" value (related to the "chunked" transfer method) to notify the server it expects to receive additional fields in the trailer after the last, zero-sized, chunk. [HTTP/2: only `trailers` is supported] | `trailers, deflate` |
| `Trailer` | The Trailer general field value indicates that the given set of header fields is present in the trailer of a message encoded with chunked transfer coding. | `Max-Forwards` |
| `Transfer-Encoding` | The form of encoding used to safely transfer the entity to the user:  `chunked`, `compress`, `deflate`, `gzip`, or `identity`. [~HTTP/2~] | `chunked` |
| `User-Agent` | The user agent string of the user agent. | `Mozilla/5.0 (X11; Linux x86_64; rv:12.0) Gecko/20100101 Firefox/12.0` |
| `Upgrade` | Ask the server to upgrade to another protocol. [~HTTP/2~] | `h2c, HTTPS/1.3, IRC/6.9, RTA/x11, websocket` |
| `Via` | Informs the server of proxies through which the request was sent. | `1.0 fred, 1.1 example.com (Apache/1.1)` |
| `Warning` | A general warning about possible problems with the entity body. | `199 Miscellaneous warning` |

## Common non-standard Request Fields

| `Upgrade-Insecure-Requests` | Tells a server which (presumably in the middle of a HTTP -> HTTPS migration) hosts mixed content that the client would prefer redirection to HTTPS and can handle `Content-Security-Policy: upgrade-insecure-requests`. [~HTTP/2~] | `1` |
| `X-Requested-With` | Mainly used to identify Ajax requests. Most JavaScript frameworks send this field with value of `XMLHttpRequest`. | `XMLHttpRequest` |
| `DNT` | Requests a web application to disable (`1`)/enable (`0`) their tracking of a user. (This is Mozilla's version of the `X-Do-Not-Track` header field). | `1` |
| `X-Forwarded-For` | A de facto standard for identifying the originating IP address of a client connecting to a web server through an HTTP proxy or load balancer. Superseded by `Forwarded` header. | `129.78.138.66, 129.78.64.103` |
| `X-Forwarded-Host` | A de facto standard for identifying the original host requested by the client in the `Host` HTTP request header, since the host name and/or port of the reverse proxy (load balancer) may differ from the origin server handling the request. Superseded by `Forwarded` header. | `en.wikipedia.org:8080` |
| `X-Forwarded-Proto` | A de facto standard for identifying the originating protocol of an HTTP request, since a reverse proxy (or a load balancer) may communicate with a web server using HTTP even if the request to the reverse proxy is HTTPS. An alternative form of the header (`X-ProxyUser-Ip`) is used by Google clients talking to Google servers. Superseded by `Forwarded` header. | `https` |
| `Front-End-Https` | Non-standard header field used by Microsoft applications and load-balancers. | `on` |
| `X-Http-Method-Override` | Requests a web application to override the method specified in the request (typically POST) with the method given in the header field (typically PUT or DELETE). This can be used when a user agent or firewall prevents PUT or DELETE methods from being sent directly (note that this is either a bug in the software component, which ought to be fixed, or an intentional configuration, in which case bypassing it may be the wrong thing to do). | `DELETE` |
| `X-ATT-DeviceId` | Allows easier parsing of the MakeModel/Firmware that is usually found in the User-Agent String of AT&T Devices. | `GT-P7320/P7320XXLPG` |
| `X-Wap-Profile` | Links to an XML file on the Internet with a full description and details about the device currently connecting. | `http://wap.samsungmobile.com/uaprof/SGH-I777.xml` |
| `Proxy-Connection` | Implemented as a misunderstanding of the HTTP specifications. Common because of mistakes in implementations of early HTTP versions. Has exactly the same functionality as standard `Connection` field. | `keep-alive` |
| `X-UIDH` | Server-side deep packet insertion of a unique ID identifying customers of Verizon Wireless; also known as "perma-cookie" or "supercookie" | |
| `X-Csrf-Token` | Used to prevent cross-site request forgery. Alternative header names are: `X-CSRFToken` and `X-XSRF-TOKEN`. | `i8XNjC4b8KVok4uw5RftR38Wgp2BFwql` |
| `X-Request-ID`/`X-Correlation-ID` | Correlates HTTP requests between a client and server. | `f058ebd6-02f7-4d3f-942e-904344e8cde5` |
| `Save-Data` | The Save-Data client hint request header available in Chrome, Opera, and Yandex browsers lets developers deliver lighter, faster applications to users who opt-in to data saving mode in their browser. | `on` |

## Source

[https://en.wikipedia.org/wiki/List_of_HTTP_header_fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Request_fields)
