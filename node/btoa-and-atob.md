# `btoa()` and `atob()` in Node

* `btoa()` - code a plain string

```
Buffer.from('HELLO').toString('base64')
```

* `atob()` - decode a base-64 string

```
Buffer.from(b64Encoded, 'base64').toString()
```
