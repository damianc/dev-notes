# Multiple Resources Request

```
query {
  product(id: 1)
  supplier(id: 1)
}
```

## Requests to One Collection

If two requests apply to the same collection, they must have own aliases.

* query

```
query {
  first: product(id: 1) {
    name
  }
  second: product(id: 2) {
    name
  }
}
```

* response

```
{
  "data": {
    "first": {
      "name": "Super Item 1"
    },
    "second": {
      "name": "Super Item 2"
    }
  }
}
```
