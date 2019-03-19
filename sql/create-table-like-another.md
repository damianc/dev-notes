# Create table with a struct of another - `CREATE TABLE...LIKE`

```
CREATE TABLE packages LIKE products
```

A temporary table as named as an existing one can be useful to check out what a query would do without affecting the original one.

```
CREATE TEMPORARY TABLE users LIKE users
```
