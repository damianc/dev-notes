# Fragments

## Query

```
fragment coreFields on product {
  name
  price
}

query {
  lastWeekOffer: product(id: 2) {
    ...coreFields
  }
  thisWeekOffer: product(id: 3) {
    ...coreFields
    category
    id
  }
}
```

## Response

```
{
  "data": {
    "lastWeekOffer": {
      "name": "Super Item 4",
      "price": 45.00
    },
    "thisWeekOffer": {
      "name": "Super Item 5",
      "price": 75.00,
      "category": "utils",
      "id": 3
    }
  }
}
```
