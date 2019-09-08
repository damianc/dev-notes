# UNION

```
SELECT ...
UNION [<DEFAULT>DISTINCT | ALL]
SELECT ...
```

Every `SELECT` statement must fetch the same number of columns.

## Example table

<table>
	<tr>
		<th colspan="2">t1</th>
		<th colspan="2">t2</th>
		<th colspan="2">t3</th>
	</tr>
	<tr>
		<td>**i**</td> <td>**c**</td>
		<td>**j**</td> <td>**c**</td>
		<td>**d**</td> <td>**k**</td>
	</tr>
	<tr>
		<td>1</td> <td>red</td>
		<td>-1</td> <td>tan</td>
		<td>1904-01-01</td> <td>100</td>
	</tr>
	<tr>
		<td>2</td> <td>blue</td>
		<td>1</td> <td>red</td>
		<td>2004-01-01</td> <td>200</td>
	</tr>
	<tr>
		<td>3</td> <td>green</td>
		<td colspan="2"></td>
		<td>2004-01-01</td> <td>200</td>
	</tr>
</table>

## Example query

```
SELECT i FROM t1
UNION SELECT j FROM t2
UNION SELECT k FROM t3
```

| i |
|---|
| 1 |
| 2 |
| 3 |
| -1 |
| 100 |
| 200 |


## Overview

* the names of columns equal those used in the first `SELECT` query
* data type of a column is based on the values received (e.g., if a column has both numbers and strings, the column will be of string type)
* columns are matched by the order (not names)

<table>
	<tr>
		<th>query</th> <th>i</th> <th>c</th>
	</tr>
	<tr>
		<td rowspan="5">
			<code>
				SELECT i, c FROM t1<br/>
				UNION<br/>
				SELECT k, d FROM t3
			</code>
		</td>
		<td>1</td>
		<td>red</td>
	</tr>
	<tr>
		<td>2</td>
		<td>blue</td>
	</tr>
	<tr>
		<td>3</td>
		<td>green</td>
	</tr>
	<tr>
		<td>100</td>
		<td>1904-01-01</td>
	</tr>
	<tr>
		<td>200</td>
		<td>2004-01-01</td>
	</tr>
</table>

<table>
	<tr>
		<th>query</th> <th>i</th> <th>c</th>
	</tr>
	<tr>
		<td rowspan="5">
			<code>
				SELECT i, c FROM t1<br/>
				UNION<br/>
				SELECT d, k FROM t3
			</code>
		</td>
		<td>1</td>
		<td>red</td>
	</tr>
	<tr>
		<td>2</td>
		<td>blue</td>
	</tr>
	<tr>
		<td>3</td>
		<td>green</td>
	</tr>
	<tr>
		<td>1904-01-01</td>
		<td>100</td>
	</tr>
	<tr>
		<td>2004-01-01</td>
		<td>200</td>
	</tr>
</table>

### Including duplicated values

```
SELECT * FROM t1
UNION ALL
SELECT * FROM t2
UNION ALL
SELECT * FROM t3
```

If we use both `UNION [DISTINCT]` and `UNION ALL`, all queries fetching the unique values will be performed at first.

### Additional clauses

* `SELECT` queries are contained within `()`'s
* single queries may have their own clauses
* column names from the first `SELECT` query must be used
* if a sorted column is an alias, use the alias
* we can't refer to a table (`tbl.col`), we must create an alias for a column and use it instead

```
(SELECT i, c FROM t1)
UNION
(SELECT k, d FROM t3)
ORDER BY c
```
