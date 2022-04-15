# Stored Function

## Function vs Procedure

| Function | Procedure |
|--|--|
| cannot alter data | can alter data (unless called by a stored function) |
| used in expressions | called with `CALL` command |
| must return value | don't return value (still can assign values to `OUT`/`INOUT` parameters) |

Both stored function and triggers can't:
* contain dynamic SQL (prepared statements)
* be recursive function

## Implementation and Use

* implementation:

```
delimiter $
create function taxed (amount float, tax float) returns float
begin
  set tax = ifnull(tax, 23);
  return amount / (1 + tax / 100);
end
delimiter ;
```

* use:

```
SELECT name, dob, salary, taxed(salary, null) as salary_net
FROM employees;
```

```
SELECT name, class, savings, taxed(savings, 5) as savings_net
FROM students;
```

## Using Variables

* custom variables must be declared with `DECLARE <name> <type> [default <value>]`

```
create function taxed (amount float, tax float) returns float
begin
  declare taxed float default 0;

  set tax = ifnull(tax, 23);
  set taxed = 1 + (tax / 100);

  return amount / taxed;
end
```

## Function Reading SQL Data

```
delimiter $
create function not_mine_cash (my_cash float)
returns float
reads sql data
begin
  return (SELECT SUM(cash) - my_cash FROM students);
  # or: return (SELECT SUM(cash) FROM students) - my_cash;
  # or even: return (SELECT (SELECT sum(cash) from students) - my_cash);
end
delimiter ;
```

```
SELECT name, cash, not_mine_cash(cash) AS others_cash FROM students;
```

### `SELECT ... INTO <variable>`

```
begin
  declare sum float default 0;

  SELECT sum(cash) FROM students into sum;
  # or: SELECT sum(cash) into sum FROM students;

  return sum;
end
```

the code above conceptually equals the following:

```
begin
  declare sum float default 0;

  set sum = (SELECT sum(cash) FROM students);

  return sum;
end
```

## Standalone Function

```
delimiter $
create function all_cash ()
returns float
reads sql data
begin
  return (SELECT SUM(cash) FROM students);
end
delimiter ;
```

```
SELECT all_cash() AS all_cash;
```

## Syntax Details

```
CREATE FUNCTION [IF NOT EXISTS]
sf_name (
  param_name type
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

### Keywords Spelling

Keywords (like `create`, `function`, `float`, `return` or `end`) can consist of both lowercase and uppercase chars in any combination: all of `set`, `SET`, `Set` and even `sET` are proper. It also applies to `ifnull()` and other functions (both built-in and custom).

```
Delimiter $
CREATE Function taxed (amount Float, tax Float) RETURNS FLOAT
Begin
  set tax = ifNull(tax, 23);
  return amount / (1 + tax / 100);
End
Delimiter ;
```

### `BEGIN...END` in Simple Functions

Simple functions can omit `begin...end` keywords:

```
create function square(n int) returns int
return n * n;
```
