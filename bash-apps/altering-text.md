# Altering Text

| Syntax | Description |
|--|--|
| `${str/from/to}` | replace first match |
| `${str//from/to}` | replace all |
| `${str/%from/to}` | replace suffix |
| `${str/#from/to}` | replace prefix |
| `${str%suffix}` | remove suffix |
| `${str#prefix}` | remove prefix |
| `${str%%suffix}` | remove long suffix |
| `${str##prefix}` | remove long prefix |
| `${str,[,]}` | lowercase first or all |
| `${str^[^]}` | uppercase first or all |

## Replacing

```
str='foo'

echo ${str/o/u}
# fuo

echo ${str//o/u}
# fuu
```

### Removing

```
str='foo'

echo ${str/o/}
# fo

echo ${str//o/}
# f
```

### Lowercase/Uppercase

```
str='FooBar'

echo ${str,}
# fooBar

echo ${str,,}
# foobar
```

```
str='fooBar'

echo ${str^}
# FooBar

echo ${str^^}
# FOOBAR
```

## Replacing Suffix/Prefix

```
str='foo.bar.baz'

echo ${str/%.*/.quux}
# foo.quux

echo ${str/#*./quux.}
# quux.baz

echo ${str%.*}.quux
# foo.bar.quux

echo quux.${str#*.}
# quux.bar.baz
```

## Removing Suffix/Prefix

```
str='foo.bar.baz'

echo ${str%.*}
# foo.bar

echo ${str%%.*}
# foo

echo ${str#*.}
# bar.baz

echo ${str##*.}
# baz
```

## Examples

```
path='/path/to/foo.cpp'

echo "${path%.cpp}"
# /path/to/foo

echo "${path%.cpp}.o"
# /path/to/foo.o

echo "${path%/*}"
# /path/to


echo "${path##*.}"
# cpp (extension)

echo "${path##*/}"
# foo.cpp (basepath)


echo "${path#*/}"
# path/to/foo.cpp

echo "${path##*/}"
# foo.cpp


echo "${path/foo/bar}"
# /path/to/bar.cpp
```

```
src='/path/to/foo.cpp'

base=${src##*/}
echo $base
# foo.cpp (basepath)

dir=${src%$base}
echo $dir
# /path/to/ (dirpath)
```
