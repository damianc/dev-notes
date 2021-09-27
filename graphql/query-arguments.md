# Query Arguments

* query

```
query {
  supplier(id: 1) {
    name
    city
    products {
      name
    }
  }
}
```

* response

```
{
  "data": {
    "supplier": {
      "name": "SUPPLIER",
      "city": "New York",
      "products": [
        { "name": "Super Item }
        ...
      ]
    }
  }
}
```

## Query Argument in Nested Resources

* query

```
query {
  supplier(id: 1) {
    name
    city
    products(nameFilter: "it") {
      name
      price
    }
  }
}
```

* response

```
{
  "data": {
    "supplier": {
      "name": "SUPPLIER",
      "city": "New York",
      "products": [
        { "name": "Super Item", "price": 48.95 }
        ...
      ]
    }
  }
}
```
