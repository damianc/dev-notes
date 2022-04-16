# Stored Procedure

## Function vs Procedure

| Function | Procedure |
|--|--|
| cannot alter data | can alter data (unless called by a stored function) |
| used in expressions | called with `CALL` command |
| must return value | don't return value (still can assign values to `OUT`/`INOUT` parameters) |
| can't contain prepared statements | can contain prepared statements |
| can't be recursive function | can be recursive function |

## Implementation and Use

* implementation:

```
delimiter $
create procedure apply_interest(
  IN interest FLOAT
)
MODIFIES SQL DATA
begin
  UPDATE men SET cash = cash * (1 + interest / 100);
end
delimiter ;
```

* use:

```
CALL apply_interest(5);
```

## Example #2

```
DELIMITER $
CREATE PROCEDURE update_expiration (
  IN user_id int unsigned,
  IN plan enum ('silver', 'gold', 'platinum'),
  OUT date date
)
MODIFIES SQL DATA
BEGIN
  CASE plan
    WHEN 'silver' THEN
      SET date = CURDATE() + INTERVAL 1 MONTH;
    WHEN 'gold' THEN
      SET date = CURDATE() + INTERVAL 6 MONTH;
    WHEN 'platinum' THEN
        SET date = CURDATE() + INTERVAL 1 YEAR;
  END CASE;

  UPDATE men SET exp = date WHERE id = user_id;
END
DELIMITER ;
```

```
CALL update_expiration(2, 'platinum', @new_exp);
SELECT @new_exp AS new_exp;

CALL update_expiration(1, 'Platinum', @new_exp);
SELECT @new_exp AS new_exp;
```

## Prepared Statements

```
delimiter $
create procedure apply_interest(
  IN interest FLOAT,
  IN person_id INT UNSIGNED
)
MODIFIES SQL DATA
begin
  declare s float;
  declare q text;

  set @s = 1 + interest / 100;
  set @q = concat(
    'update men set cash = cash * ? ',
    if(person_id is null, '', concat('where id = ', person_id))
  );

  PREPARE stmt1 FROM @q;
  EXECUTE stmt1 using @s;
  DEALLOCATE PREPARE stmt1;
end
delimiter ;
```

```
# apply interest 5% to person 1
CALL apply_interest(5, 1);

# apply interest 8% to all people
CALL apply_interest(8, null);
```

## Paramteres Type

* `IN` (default) - caller passes value to a procedure (that can change it)
* `OUT` - procedure assigns a value to parameter that is accessible for caller after procedure is finished
* `INOUT` - caller can both pass and receive a value

> `IN` is the default parameter type hence the `IN` keyword can be omitted

### `OUT` Parameter Example

```
delimiter $
create procedure all_cash(out amount float)
reads sql data
begin
  SELECT sum(cash) INTO amount FROM students;
end
delimiter ;
```

```
CALL all_cash(@amnt);
SELECT @amnt AS all_cash;
```

### `INOUT` Parameter Example

```
create procedure increase (inout value int, inc int)
set value = value + ifnull(inc, 1);
```

```
SET @x = 4;
CALL increase(@x, null);
SELECT @x AS x;
# x -> 5

SET @x = 4;
CALL increase(@x, 10);
SELECT @x AS x;
# x -> 14
```

## Syntax Details

```
CREATE PROCEDURE [IF NOT EXISTS]
sp_name (
  [ IN | OUT | INOUT ] param_name type
  ...
)
RETURNS type
[ COMMENT 'string' ]
[ LANGUAGE SQL ]
[ [NOT] DETERMINISTIC ]
[ (CONTAINS|NO) SQL | (READS|MODIFIES) SQL DATA ]
[ SQL SECURITY (DEFINER | INVOKER) ]
routine_body
```