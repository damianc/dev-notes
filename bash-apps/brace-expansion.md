# Brace Expansion

## Syntax

```
{string1, ..., stringN}
{<START>..<END>[..<STEP>]}

<PREFIX>(...)
(...)<SUFFIX>
<PREFIX>(...)<SUFFIX>
```

## Lists

```
echo {a,b,c,d}
# a b c d

echo {hello,man}
# hello man

echo {1,2,3,4}
# 1 2 3 4
```

## Ranges

```
echo {a..d}
# a b c d

echo {1..4}
# 1 2 3 4

echo {a..z..5}
# a f k p u z

echo {0..10..2}
# 0 2 4 6 8 10

echo {1..z}
# {1..z}

echo {a..9}
# {a..9}
```

## Combinations

```
echo {A,B}{1..3}
# A1 A2 A3 B1 B2 B3

echo {A..C}{1..2}
# A1 A2 B1 B2 C1 C2

echo {A..C} {1..2}
# A B C 1 2

echo {{A..C},{1..2}}
# A B C 1 2
```

```
echo {A,B}{1,2}{C,D}
# A1C A1D A2C A2D B1C B1D B2C B2D
```

## Prefixes and Suffixes

```
echo -{1..4}
# -1 -2 -3 -4

echo {table,list}.component.js
# table.component.js list.component.js

echo -{10,25,30,50}%
# -10% -25% -30% -50%

echo --{a..d}--
# --a-- --b-- --c-- --d--
```

## Padding with Zeros

```
echo {01..4}
# 01 02 03 04

echo {1..04}
# 01 02 03 04

echo {01..04}
# 01 02 03 04

echo {01..10}
# 01 02 03 04 05 06 07 08 09 10
```

```
echo {00..4}
# 00 01 02 03 04

echo {0000..4}
# 0000 0001 0002 0003 0004

echo {0000..04}
# 0000 0001 0002 0003 0004

echo {00..0004}
# 0000 0001 0002 0003 0004
```

## List Must Consist of 2+ Elements

The _brace expansion_ is only performed if a list contains at least 2 elements (or: has at least one comma [`,`]).

```
echo {a}
# {a}

echo {a,}
# a

echo _{a}
# _{a}

echo _{a,}
# _a _
```

```
echo _{a,} | sed 's/_*$//'
# _a

echo _a
# _a
```

### Elements May Be Empty

```
echo "/\\/\\/\\/\\"
# /\/\/\/\

echo /\\{,,,}
# /\ /\ /\ /\

echo /\\{,,,} | tr -d ' '
# /\/\/\/\
```

## Example

```
mkdir /c/{js,css,img}
# create 3 directories (/c/js, /c/css and /c/img)
```