# `CREATE TABLE`

```
CREATE TABLE todo (
	task_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (task_id),
	description VARCHAR(50) NOT NULL,
	start_date DATE NULL,
	end_date DATE NOT NULL
)
```
