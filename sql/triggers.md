# Triggers

```
CREATE TRIGGER <name>
	{ BEFORE | AFTER }
	{ INSERT | UPDATE | DELETE }
	ON <table>
	FOR EACH ROW <queries>
```

Queries can contain:
* `NEW.<column>` - a reference to a new value in the column (using in *INSERT* and *UPDATE* triggers)
* `OLD.<column>` - a reference to an old value in the column (using in *DELETE* and *UPDATE* triggers)

## Example

When inserting a new task, fix `progress` column's value to be **0-100**.

```
DELIMITER $
CREATE TRIGGER bi_percent BEFORE INSERT ON tasks
	FOR EACH ROW BEGIN
		IF NEW.progress < 0 THEN
			SET NEW.progress = 0;
		ELSEIF NEW.progress > 100 THEN
			SET NEW.progress = 100;
		END IF;
	END $
DELIMITER ;
```
