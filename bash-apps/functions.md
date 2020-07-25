# Functions

## Syntax

```
function fn[()]
[function] fn()
```

## Example

```
function get_name() {
	echo 'Mark'
}

$ echo "You are $(get_name)"
> You are Mark
```

## Arguments

```
function trim() {
	text="$1"
	length="$2"

	echo ${text:0:length}
}

$ trim 'hello world' 5
> hello
```

| variable | value |
|--|--|
| `$1` | first argument |
| `$#` | number of arguments |
| `$*` | all arguments |
| `$@` | all arguments |

### `$*` vs. `$@`

* when not double-quoted, `$*` and `$@` are the same (expand to separate strings)
* when double-quoted, `"$*"` expands to a single string separated by space (`"$1 $2 $n"`)
* when double-quoted, `"$@"` expands to separate strings (`"$1" "$2" "$n"`)

```
function allArgsTogether() {
	for w in "$*"; do
		echo --${w}--
	done
}

$ allArgsTogether abc def
> --abc def--
```

```
function allArgsAlone() {
	for w in "$@"; do
		echo --${w}--
	done
}

$ allArgsAlone abc def
> --abc--
> --def--
```

## Scope

```
fn() {
	a=1
	local b=2

	echo $a
	echo $b
}

$ echo $a
>
$echo $b
>

$ fn
> 1
> 2

echo $a
> 1
echo $b
>
```

# Shifting Arguments

```
fn() {
	echo "$1 $2 $3"
	shift
	echo "$1 $2 $3"
	shift
	echo "$1 $2 $3"
	shift
	echo "$1 $2 $3"
}

$ fn A B C
> A B C
> B C
> C
>
```

```
sum() {
	let s=0

	until [ -z $1 ]; do
		(( s += $1 ))
		shift
	done

	echo $s
}

$ sum 1 2 3 4
> 10
```

## Returning Values

Bash functions don't allow returning a value.  

* they can give a value by `echo`-ing it:

```
getFive() {
	local five=5
	echo $five
}

$ getFive
> 5

$ result="$(getFive)"
$ echo $result
> 5
```

* or by setting a global variable:

```
getFive() {
	five=5
}

$ getFive
$ echo five
> 5
```

### The `return` keyword

The `return` keyword is not thought to return a value from function. Its task is terminating the function. A numeric value can be used along with `return` to state _"exit statis"_ of the function (something like in _exit statement_). The status can be accessed from the `$?` variable.

```
getAB() {
	echo A
	echo B
	return
	echo C
}

$ getAB
> A
> B
```

```
greet() {
	echo hello
	return 120
}

$ echo $?
> 0

$ greet
> hello

$ echo $?
> 120

$ echo $?
> 0
```

### Raising Errors

```
funktion() {
	# non-zero status
	return 1
}

if funktion; then
	echo 'success'
else
	echo 'failure'
fi

> failure
```