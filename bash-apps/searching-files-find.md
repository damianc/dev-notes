# Searching Files: `find`

> `find [dirs][options][spec=-print]`

```
$ find . -name 'a*'
$ find -name 'a*'
```

### files whose name starts with _pre_ or _post_

```
$ find -name 'pre*' -o -name 'post*'
```

### regular files modified one day ago

```
$ find -type f -mtime -1
```

### files without _.txt_ extension

```
$ find ! -name '*.txt'
```

### files whose name starts with _pre_ and hasn't _.sample_ extension

```
$ find -name 'pre*' ! -name '*.sample'
```

## Boolean Relations

| Syntax | Meaning |
|--|--|
| `A B` | `A` and `B` |
| `A -o B`, `A -or B` | `A` or `B` |
| `! A` | not `A` |

## Specs

| Spec | When file is matched | Example |
|--|--|--|
| `-name pattern` | if its name matches a pattern (`*`, `?` and `[]` can be used, yet quoted) | `-name '*.pdf'` |
| `-type type` | if is of given type: `b` (specific file block), `c` (specific file character), `d` (directory), `f` (regular file), `l` (symbolic link), `p` (FIFO, i.e., named pipe) or `s` (socket) | `-type f` |
| `-size [+-]n[c\|k\|M\|G]` | if has given size (measured in 512b blocks, characters (`c`), kb (`k`), MB (`M`) or GB (`G`)) | `-size +5M` |
|  |  |  |
| `-anewer file` | if accessed later than _file_ | `-anewer log.txt` |
| `-newer file` | if modified later than _file_ | `-newer README.md` |
| `-atime [+-]n` | if accessed n days ago (affects files time of latest access) | `-atime -14` |
| `-mtime [+-]n` | if modified n days ago | `-mtime 1` |
|  |  |  |
| `-links [+-]n` | has n links | `-links +1` |
| `-inum n` | if number of its i-nodes equals n |
|  |  |  |
| `-group nameOrId` | if is related to a group | `-group pub` |
| `-nogroup` | if doesn't belong to any local group | `-nogroup` |
| `-user nameOrId` | if belongs to a user | `-user john` |
| `-nouser` | if doesn't belong to any local user | `-nouser` |
| `-perm [+-]mode` | if is given permissions of _mode_ | `-perm 644` |
|  |  |  |
| `-exec command \;` | if _command_ will exit with status code `0` (file placeholder is `{}`) | `-exec rm {} \;` |
| `-ok command \;` | like `exec`, but must be confirmed (`y` or `Y`) | `-ok rm {} \;` |
|  |  |  |
| `-depth` | always; makes `find` operates on files at first | `-depth` |
| `-print` | always; makes `find` displays files names | `-print` |
| `-xdev` | always; prevent `find` from searching directories in file systems other than of given directiories | `-xdev` |

### `[+-]n`

* `n` - `n`
* `+n` - more than `n`
* `-n` - less than `n`

## Options

| Option | Works with | Affects |
|--|--|--|
| `-H` | file pointed by a link | given files |
| `-L` | file pointed by a link | all files |
| `-P` | symbolic link | all files |

## Exec Command on Files

* delete all files with _.log_ or _.debug_ extension

```
$ find . \( -name '*.log' -o -name '*.debug' \) -print -exec rm {} \;
```