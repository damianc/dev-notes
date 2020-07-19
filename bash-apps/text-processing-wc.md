# Text Processing: `wc`

```
$ wc note.txt
>     5    31     146    note.txt
```

```
$ wc -lw note1.txt note2.txt note3.txt
>     10    62    note1.txt
>     12    74    note2.txt
>     12    68    note3.txt
>     43    204   total
```

* `-c` - bytes
* `-l` - lines
* `-m` - characters
* `-w` - words
* `-L` - length of longest line

```
$ ls | wc
>     4    4    20
```

```
$ ls | wc -w
> 4
```

## Longest Line

```
$ cat
> abc
> abcdef

$ cat file.txt | wc -L
> 6
```