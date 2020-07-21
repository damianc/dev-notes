# Flow Control

* [`if`](#if)
	* [`if/else`](#ifelse)
	* [`if/elif`](#ifelif)
* [`for..in`](#forin)
	* [`for..in` + Sequence](#forin--sequence)
* [`for`](#for)
* [`while`](#while)
* [`until`](#until)
* [`break` and `continue`](#break-and-continue)
* [`case`](#case)

## `if`

```
if [ $# -eq 0 ]; then
    echo 'Pass at least 1 argument'
    exit 1
fi
```

### `if/else`

```
if [ "$1" = "-s" ]; then
    cat file | cut -c-50
else
    cat file
fi
```

### `if/elif`

```
if [ "$1" = "$2" -a "$2" = "$3" ]; then
    echo "equal words: 1, 2 and 3"
elif [ "$1" = "$2" ]; then
    echo "equal words: 1 and 2"
elif [ "$1" = "$3" ]; then
    echo "equal words: 1 and 3"
elif [ "$2" = "$3" ]; then
    echo "equal words: 2 and 3"
else
    echo "no equal words"
fi
```

## `for..in`

```
for ch in a b c d
do
    echo $ch | tr a-d A-D
done
```

```
for file in *
do
    if [ -d "$file" ]; then
        echo $file
    fi
done
```

### `for..in` + Sequence

* `{start..end[..step]}`

```
for n in {0..10..2}; do
    echo -n "$n "
done
```

* `seq start [step] end` - for older versions of Bash

```
for n in $(seq 0 2 10); do
    echo -n "$n "
done
```

## `for`

```
for (( x=0; x<=10; x+=2 )); do
    echo -n "$x "
done
```

```
for (( x=1; x<=4; x++ )); do
    echo -n "$x "
done
```

## `while`

```
number=0

while [ "$number" -lt 10 ]; do
    echo -n "$number "
    (( number += 1 ))
done
```

## `until`

```
n=0

until [ $n = 10 ]; do
    echo $n
    (( n += 2 ))
done
```

```
secret=werewolf
pass=nothing

echo 'Guess the password:'
until [ "$pass" = "$secret" ]; do
    read -p "Type password: " pass
done
echo 'You guessed the password!'
```

## `break` and `continue`

All the loops can use `break` and `continue` keywords.

```
for index in 1 2 3 4 5 6 7 8 9 10; do
    if [ $index -le 3 ]; then
        echo 'skip'
        continue
    fi

    echo $index

    if [ $index -gt 8 ]; then
        echo 'stop'
        break
    fi
done
```

output:

```
skip
skip
skip
4
5
6
7
8
stop
```

## `case`

```
read -p "Type a letter:" ch

case "$ch" in
    a)
        echo 'lowercase A'
        ;;
    A)
        echo 'uppercase A'
        ;;
    b|B)
        echo 'just B'
        ;;
    *)
        echo 'different letter'
        ;;
esac
```

Special characters in a pattern:

* `*` - any string (typically used as default case)
* `?` - any single character
* `[...]` - characters class (e.g., `[a-z]`)
* `|` - separator of patterns