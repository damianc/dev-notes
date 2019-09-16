# Types of Join

## Inner Joins

### `INNER JOIN`

```
SELECT t.description, t.end_date, c.comment_text
FROM todo t [INNER] JOIN comments c
ON t.id = c.task_id
```

```
SELECT t.description, t.end_date, c.comment_text
FROM todo t, comments c
WHERE t.id = c.task_id
```

#### Self Join

Self Join is when the same table reside on both sides of join.

```
SELECT c1.comment_text, c2.comment_text
FROM comments c1 JOIN comments c2
USING (task_id)
WHERE c1.comment_text != c2.comment_text
```

```
SELECT c1.comment_text, c2.comment_text
FROM comments c1, comments c2
WHERE c1.task_id = c2.task_id
AND c1.comment_text != c2.comment_text
```

> The last line prevents records from matching themselves.

#### Semi-Join

Semi-Join is when we fetch columns only from one table.

```
SELECT t.description, t.end_date
FROM todo t JOIN labels l
ON p.label_id = l.id
WHERE l.label_category = 'events'
```

```
SELECT t.description, t.end_date
FROM todo t, labels l
WHERE p.label_id = l.id
AND l.label_category = 'events'
```

#### Natural Join

Natural Join is when both columns in the join condition have the same name.

```
SELECT t.description, t.end_date, c.category_name
FROM todo t JOIN categories c
ON t.id = c.id
```

```
SELECT t.description, t.end_date, c.category_name
FROM todo t JOIN categories c
USING (id)
```

```
SELECT t.description, t.end_date, c.category_name
FROM todo t NATURAL JOIN categories c
```

```
SELECT t.description, t.end_date, c.category_name
FROM todo t, categories c
WHERE t.id = c.id
```

> The most recommended version is the one with `USING`, meanwhile the least recommended is the one with `NATURAL JOIN`.

### `CROSS JOIN`

This type of join will return a cartesian product of records.

```
SELECT t.id, c.task_id
FROM todo t CROSS JOIN comments c
```

```
SELECT t.id, c.task_id
FROM todo t, comments c
```

### Other Types of Inner Join

* *Equi-Join* - any join in which the condition is based on equality (`=`)
* *Theta Join* - any join in which the condition is based on a relationship other than equality (e.g., `>`, `!=` or `BETWEEN`)
* *Anti Join* - returns rows from the first table where no matches are found in the second table (queries use `NOT EXISTS` or `NOT IN` constructs)

## Outer Joins

### `LEFT OUTER JOIN`

```
SELECT t.description, t.end_date, c.comment_text
FROM todo t LEFT [OUTER] JOIN comments c
ON t.id = c.task_id
```

### `RIGHT OUTER JOIN`

```
SELECT t.description, t.end_date, c.comment_text
FROM comments c RIGHT [OUTER] JOIN todo t
ON c.task_id = t.id
```

### `FULL OUTER JOIN`

```
SELECT t.description, t.end_date, c.comment_text
FROM todo t FULL OUTER JOIN comments c
ON (t.id = c.task_id)
```

MySQL does  not support `FULL JOIN` query.  
We must join two tables and merge them with `UNION` construct.

```
SELECT * FROM t1 LEFT JOIN t2 ON t1.id = t2.id
UNION ALL
SELECT * FROM t1 RIGHT JOIN t2 ON t1.id = t2.id
WHERE t1.id IS NULL
```
