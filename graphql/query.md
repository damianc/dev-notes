# GraphQL Query

## Receiving One Resource

* query

```
query {
  suppliers {
    id
    name
    city
    products
  }
}
```

* response

```
{
  "data": [
    {
      "id": 1,
      "name": "SUPPLIER",
      "city": "New York",
      "products": [14, 15, 20, 28]
    }
    ...
  ]
}
```

## Nested Resources

* query

```
query {
  suppliers {
    id
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
    "suppliers": [
      {
        "id": 1,
        "name": "SUPPLIER",
        "city": "New York",
        "products": [
          { "name": "Super Item" }
          ...
        ]
      }
    ]
  }
}
```

## Receiving Multiple Resources

* query

```
query {
  suppliers {
    name
    city
  }
  products {
    name
    price
  }
}
```

* response

```
{
  "data": {
    "suppliers": [
      { "name": "SUPPLIER", "city": "New York" }
      ...
    ],
    "products": [
      { "name": "Super Item", "price": 48.95 }
      ...
    ]
  }
}
```