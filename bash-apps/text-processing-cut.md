# Text Processing: `cut`

## Character(s)

* single n-th character

```
$ echo foobar | cut -c4
> b
```

* multiple characters

```
$ echo foobar | cut -c1,4,6
> fbr
```

## Substring

* head substring

```
$ echo foobar | cut -c-4
> foob
```

* tail substring

```
$ echo foobar | cut -c4-
> bar
```

* any substring

```
$ echo foobar | cut -c2-4
> oob
```

## Characters and Substring

```
$ echo foobar | cut -c1,4-
> fbar
```

```
$ echo foobar | cut -c-3,5
> fooa
```

## Characters, Bytes and Fields

| Option | Meaning      |
|--------|--------------|
| `-c`   | character(s) |
| `-b`   | byte(s)      |
| `-f`   | field(s)     |

## Getting Fields

```
$ cat data.txt
> John:25:New York
> Mark:58:Atlanta

$ cut -d: -f3 data.txt
> New York
> Atlanta
```

## Reading stdout and Handling Tab Separators

* problem

```
$ ls -l
> total 2944
> -rw-rw-r--	1	john	pubs	4770	10731	Apr 4	23:26	notes.txt
> -rw-rw-r--	1	john	pubs	13580	0		Sep 11	08:01	script.sh

$ ls -l | cut -f9
> total 2944
> -rw-rw-r--	1	john	pubs	4770	10731	Apr 4	23:26	notes.txt
> -rw-rw-r--	1	john	pubs	13580	0		Sep 11	08:01	script.sh
```

* solution (change multiple spaces to single space with `tr`, and use space [instead of tab] as a delimiter with `-d` option)

```
$ ls -l | tr -s '  ' ' ' | cut -f9 -d' '
> notes.txt
> script.sh
```

## Ignoring Lines without Separator (`-s` option)

```
$ cat file.txt
> data
> abc=123
> def=456

$ cat file.txt | cut  -f1 -d=
> data
> abc
> def

$ cat file.txt | cut -f1 -sd=
> abc
> def
```