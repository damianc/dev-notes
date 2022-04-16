# Cursors in Stored Procedure

## Example 1: Collect Names into Semicolon-separated List

```
delimiter $
create procedure list_name (
  inout name_list varchar(4000)
)
reads sql data
begin
  declare is_done integer default 0;
  declare s_name varchar(100) default '';
  
  declare stud_cursor cursor for select name from men;
  declare continue handler for not found set is_done = 1;
  
  open stud_cursor;

  get_list: LOOP
    fetch stud_cursor into s_name;
    if is_done = 1 then
      leave get_list;
    end if;
    
    set name_list = concat(s_name, ';', name_list);
  end loop get_list;
  
  close stud_cursor;
 end
 delimiter ;
```

```
SET @name_list = '';
CALL list_name(@name_list);
SELECT @name_list;
```

### Notes

* characteristic `reads/modifies sql data` is optional
* try to not have variables named like columns in a table (it may lead to errors)
* label at the end of the loop is optional: both `end loop get_list` and `end loop` are proper
* finish flag can be any value: `0` -> `1`, `false` -> `true` etc.

> Syntax for `FETCH...INTO` is as follows: `FETCH [[NEXT] FROM] cursor INRO variable`; 
> `fetch stud_cursor into s_name` can be written as `fetch next from stud_cursor into s_name` or `fetch from stud_cursor into s_name` as well

## Example 2: Count and Sum Values

Count records and total amount of all savings.

```
delimiter $
create procedure stats(
  inout p_cash float,
  inout p_num int
)
reads sql data
begin
  declare done int default false;
  declare amount float default 0;
  
  declare cur cursor for select cash from men;
  declare continue handler for NOT FOUND set done = true;
  
  open cur;
  
  iter: LOOP
    fetch next from cur into amount;
    
    if done then
      leave iter;
    end if;
    
    set p_cash = p_cash + amount;
    set p_num = p_num + 1;
  end loop iter;
  
  close cur;
end
delimiter ;
```

```
SET @cash = 0;
SET @num = 0;
CALL stats(@cash, @num);
SELECT @cash, @num;
```

## Example 3: Add Age-Wise Prefix to Name

Precede name with:
* `junior` string if a person is below 30
* `senior` string if a person is 30 or more

```
delimiter $
create procedure add_age_prefix()
modifies sql data
begin
  declare done int default 0;
  declare c_id, c_age int;
  declare prefix varchar(12);
  
  declare cur cursor for select id, age from men;
  declare continue handler for not found set done = 1;
  
  open cur;
  
  iter: LOOP
    fetch cur into c_id, c_age;
    
    if done = 1 then
      leave iter;
    end if;
    
    if c_age < 30 then
      set prefix = 'junior';
    else
      set prefix = 'senior';
    end if;
    
    update men set name = concat(prefix, ' ', name) where id = c_id;
  end loop;
  
  close cur;
 end
 delimiter ;
```

```
CALL add_age_prefix();
```