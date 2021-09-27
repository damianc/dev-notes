# Aliases

* query

```
query {
  prods: products {
    name
  }
}
```

* response

```
{
  "data": {
    "prods": [
      { "name": "Super Item 4" }
      ...
    ]
  }
}
```
