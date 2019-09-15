# `INSERT`

```
INSERT INTO todo
VALUES('Buy run shoes', 'shopping', NULL),
VALUES('Clean windows', 'cleaning', NULL)
```

```
INSERT INTO todo (description, category)
VALUES('Buy run shoes', 'shopping'),
VALUES('Clean windows', 'cleaning')
```

```
INSERT INTO todo
SET description='Buy run shoes', category='shopping'
```

# `UPDATE`

```
UPDATE todo
SET category='sport', priority='H'
WHERE description LIKE '%run shoes%'
```

## Updating multiple tables

Assume we want to give +1 point to all students who have written the test on September 23, 2012.
Two queries below equal.

```
UPDATE score, grade_event
SET score=score+1
WHERE score.event_id = grade_event.event_id
AND grade_event.date = '2012-09-23'
AND grade_event.category = 'Q'
```

```
UPDATE score
SET score=score+1
WHERE event_id = (
	SELECT event_id FROM grade_event
	WHERE date = '2012-09-23'
	AND category = 'Q'
)
```

# `DELETE`

```
DELETE FROM todo WHERE status = 'outdated'
```

> `DELETE` without the condition will delete all records in a table.
>
> `DELETE FROM todo`

## Deleting from multiple tables

The `DELETE` query can contain _joining_ of any type.

* delete records from `t1` that have a record from `t2` matched

```
DELETE t1 FROM t1 INNER JOIN t2
ON t1.id = t2.id
```

* delete records from both tables that have a record from another table matched

```
DELETE t1, t2 FROM t1 INNER JOIN t2
ON t1.id = t2.id
```

* delete records from `t1` that don't have a record from `t2` matched

```
DELETE t1 FROM t1 LEFT JOIN t2
ON t1.id = t2.id
WHERE t2.id IS NULL
```

### `DELETE FROM...USING` version

```
DELETE FROM t1 USING t1 INNER JOIN t2
ON t1.id = t2.id
```

```
DELETE FROM t1, t2 USING t1 INNER JOIN t2
ON t1.id = t2.id
```

```
DELETE FROM t1 USING t1 LEFT JOIN t2
ON t1.id = t2.id
WHERE t2.id IS NULL
```
