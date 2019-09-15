# `SELECT`

```
SELECT * FROM todo
WHERE status = 'active'
```

## Getting unique values

```
SELECT DISTINCT category FROM todo
```

## Comparing to `NULL`

```
SELECT * FROM todo
WHERE end_date IS NULL
```

## Reducing a number of records

* get 5 items

```
SELECT * FROM todo LIMIT 5
```

* get 5 items having skipped the first 10

```
SELECT * FROM todo LIMIT 10, 5
```

## Matching a pattern

Special characters in `LIKE`:
* `_` - one character
* `%` - any number of characters (including 0)

```
SELECT * FROM todo
WHERE description LIKE 'A_a%'
```

## Comparing to multiple values

```
SELECT * FROM todo
WHERE status IN ('active', 'pending')
```

```
SELECT * FROM todo
WHERE category NOT IN (
	SELECT DISTINCT category_name FROM outdated_category
)
```

## Negating with `NOT`

* `SELECT ... WHERE col NOT IN (...)`
* `SELECT ... WHERE col NOT LIKE ...`
* `SELECT ... WHERE col IS NOT NULL`

## Sorting records

```
SELECT * FROM todo
ORDER BY priority DESC, end_date ASC
```

> By default, sorting uses `ASC`.

### Sorting `NULL` values

* for `ASC`: `NULL`s goes to the beginning
* for `DESC`: `NULL`s goes to the end

To change this behavior, results can be sorted using `IF()` function:

```
SELECT * FROM todo
ORDER BY IF(end_date IS NULL, 0, 1), end_date DESC, description
```

## Alias of a column

```
SELECT
CONCAT(first_name, ' ', last_name) AS Name,
CONCAT(city, ', ', state) AS 'Place of Birth'
FROM users
```

> `AS` keyword is optional

## Getting a random record

```
SELECT * FROM jokes
ORDER BY RAND()
LIMIT 1
```

## Working with date

```
SELECT * FROM todo
WHERE end_date >= '2018-01-01'
AND end_date <= '2018-12-31'
```

### Parts of date

```
SELECT * FROM todo
WHERE MONTH(start_date) = 3
AND DAYOFMONTH(start_date) = DAYOFMONTH(CURDATE())
```

### Date intervals

```
SELECT * FROM todo
WHERE (TO_DAYS(end_date) - TO_DAYS(CURDATE())) < 14
```

```
SELECT * FROM todo
WHERE TIMESTAMPDIFF(DAY, CURDATE(), end_date) < 14
```

```
SELECT * FROM todo
WHERE end_date < DATE_ADD(CURDATE(), INTERVAL 14 DAY)
```
