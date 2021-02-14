# `URL`

```
const url = new URL('https://user:pass@dashboard.system.com:5000/login.html?a=1&b=2#top');
```

The `url` constant is an object with the following values:

```
{
  hash: "#top"
  host: "dashboard.system.com:5000"
  hostname: "dashboard.system.com"
  href: "https://user:pass@dashboard.system.com:5000/login.html?a=1&b=2#xd"
  origin: "https://dashboard.system.com:5000"
  password: "pass"
  pathname: "/login.html"
  port: "5000"
  protocol: "https:"
  search: "?a=1&b=2"
  searchParams: URLSearchParams {}
  username: "user"
}
```

## Relative URL

```
const url = new URL('login.html?a=1&b=2#top', 'https://user:pass@dashboard.system.com:2500');
```

```
{
  hash: "#top"
  host: "dashboard.system.com:2500"
  hostname: "dashboard.system.com"
  href: "https://user:pass@dashboard.system.com:2500/login.html?a=1&b=2#top"
  origin: "https://dashboard.system.com:2500"
  password: "pass"
  pathname: "/login.html"
  port: "2500"
  protocol: "https:"
  search: "?a=1&b=2"
  searchParams: URLSearchParams {}
  username: "user"
}
```