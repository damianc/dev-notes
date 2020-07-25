# Date: `date`

```
$ date
> Sat, 25 Jul 18:06:33 2020
```

## Custom Format

```
$ date +'%d.%m.%Y'
> 25.07.2020
```

```
$ date +'%d.%m.%Y %H:%M:%S'
> 25.07.2020 18:10:25
```

```
$ date +%T
> 18:10:25
```

### Time Parts

| Date part | Format option |
|----|----|
| hour (24h, like 05) | `%H` |
| hour (24h, like  5) | `%k` |
| hour (12h, like 08) | `%I` |
| hour (12h, like  8) | `%l` |
| am or pm | `%P` |
| AM or PM | `%p` |
| minutes | `%M` |
| seconds | `%S` |
| seconds since 1970-01-01 00:00:00 UTC | `%s` |
| nanoseconds | `%N` |
| timezone abbreviation (like `GMT`) | `%Z` |
| timezone offset (like `+0200`) | `%z` |
| timezone offset (like `+02:00`) | `%:z` |
| timezone offset (like `+02:00:00`) | `%::z` |
| time zone offset with optional precision (e.g., `-04`, `+05:30`) | `%:::z` |


### Date Parts

| Date part | Format option |
|----|----|
| day (01 etc.) | `%d` |
| day ( 1 etc.) | `%e` |
| month | `%m` |
| year | `%Y` |
| last two digits of year | `%y` |
| year (by ISO week number; normally useful only with `%V`) | `%G` |
| last two digits of year (by ISO week number) | `%g` |
| day of week (1=Monday) | `%u` |
| day of week (0=Sunday) | `%w` |
| day of year | `%j` |
| week of year (Monday as 1st day of week) | `%V`, `%W` |
| week of year (Sunday as 1st day of week) | `%U` |
| full weekday name | `%A` |
| short weekday name | `%a` |
| full month name | `%B` |
| short month name | `%b`, `%h` |
| quarter of year | `%q` |
| century | `%C` |

### Shortcuts

| Format | Shortcut option |
|----|----|
| YYYY-MM-DD | `%F` |
| MM/DD/YY | `%D` |
| DD/MM/YY | `%x` |
| 24h time (HH:MM) | `%R` |
| 24h time (HH:MM:SS) | `%T`, `%X` |
| 12h time like 11:00:50 PM | `%r` |
| locale's time like `Sat Jul 25 18:35:50 2020`| `%c` |

* `%%` - a literal `%`
* `%n` - a newline
* `%t` - a tab

* `%^N` - use uppercase (if possible)
* `%#N` - use opposite case (if possible)

```
$ date +%a
> Sat

$ date +%^a
> SAT
```