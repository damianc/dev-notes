# Examining Stuff: `test`

```
read -p "Type Y or N:" user_input

if test $user_input = 'Y'; then
    echo 'You typed Y'
fi
```

* `[ ]` is a synonym for the `test` command

```
read -p "Type Y or N:" user_input

if [ $user_input = 'Y' ]; then
    echo 'You typed Y'
fi
```

> if a variable contains whitespaces, should be quoted (unless `[[ ]]` version is used)

## Expressions

| Expression | When is `true` |
|--|--|
| a string | if its length is greater than 0 |
| `-n string` | if its length is greater than 0 |
| `-z string` | if its length equals 0 |
| `string1 = string2` | if both equal |
| `string1 != string2` | if both are different |
| `file1 -ef file2` | if both files have the same number of devices and i-nodes |
| `file1 -nt file2` | if `file1` was modified later than `file2` |
| `file1 -ot file2` | if `file1` was modified before `file2` |
| `-b file` | if exists and is special file block |
| `-c file` | if exists and is special file character |
| `-d file` | if exists and is a directory |
| `-e file` | if exists |
| `-f file` | if exists and is regular file |
| `-g file` | if exists and has _setgid_ byte set |
| `-G file` | if exists and is related to a group of a user |
| `-k file` | if exists and has _sticky bit_ set |
| `-l file` | if exists and is symbolic link |
| `-o file` | if exists and a user is its owner |
| `-p file` | if exists and is a named pipe |
| `-r file` | if exists and a user can read it |
| `-s file` | if exists and is not empty (its size is greater than 0 bytes) |
| `-t file_descriptor` | if file descriptor is open and connected to screen or keyboard (0 - stdin, 1 - stdout, 2 - stderr) |
| `-u file` | if exists and has _setuid_ byte set |
| `-w file` | if exists and a user can write in it |
| -`x file` | if exists and a user can execute it (and find) |

## Number Operators

* `-eq` (`=`)
* `-ge` (`>=`)
* `-gt` (`>`)
* `-le` (`<=`)
* `-lt` (`<`)
* `-ne` (`!=`)

## Multiple Conditions

* `-a` - AND (works in `[ ]`)
* `-o` - OR (works in `[ ]`)
* `&&` - AND (works in `[[ ]]`)
* `||` - OR (works in `[[ ]]`)
* `!` - NOT