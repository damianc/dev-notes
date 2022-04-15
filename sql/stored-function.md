# Stored Function

* implementation

```
delimiter $
create function taxed (amount float, tax float) returns float
begin
  set tax = ifnull(tax, 23);
  return amount / (1 + tax / 100);
end
delimiter ;
```

* use

```
SELECT name, dob, salary, taxed(salary, null) as salary_net
FROM employees;
```

```
SELECT name, class, savings, taxed(savings, 5) as savings_net
FROM students;
```

## Keywords Spelling

Keywords (like `create`, `function`, `float`, `return` or `end`) can consist of both lowercase and uppercase chars in any combination: all of `set`, `SET`, `Set` and even `sET` are proper. It also applies to `ifnull()` and other built-in functions.

```
Delimiter $
CREATE Function taxed (amount Float, tax Float) RETURNS FLOAT
Begin
  set tax = ifNull(tax, 23);
  return amount / (1 + tax / 100);
End
Delimiter ;
```

## Simple Functions

Simple functions can omit `begin...end` keywords:

```
create function number_of_hundreds(n float) returns int
return floor(n / 100);
```