# Text Processing: `tr`

## Replacing

* single character

```
$ echo foobar | tr o u
> fuubar
```

* sequence of characters

```
$ echo foobar | tr bar baz
> foobaz

$ echo foobarbaz | tr ba ke
> fookerkez
```

> `echo foobar | tr ab x` &rarr; `fooxxr` (last character on the right remains in use if not enough)  
> `echo foobar | tr a xy` &rarr; `foobxr` (extra characters on the right are ignored)


* ranges of characters

```
$ echo foobar | tr oa g-i
> fggbhr

$ echo foobar | tr a-c wx
> fooxwr

$ echo foobar | tr a-c s-v
> footsr
```

* mixed

```
$ echo abcdef | tr a-e m-ox
> mnoxxf

$ echo abcdef | tr a-e hm-o
> hmnoof

$ echo abcdef | tr a-e m-oq-r
> mnoqrf

$ echo abcdef | tr a-ce-f x
> xxxdxx

$ echo abcdef | tr a-ce-f x-z
> xyzdzz

$ echo foobar | tr a-z hea
> aaaeha

$ echo foobar | tr a-z he
> eeeehe
```

## Complement (`-c`)

```
$ echo foobar | tr -c abc x
> xxxbaxx

$ echo foobar | tr -c abc xv
> vvvbavv
```

> output contains one more character because everything except for `abc` was replaced, including special characters like _line break_ (that can be deleted with `-d` option)

```
$ echo foobar | tr -d '\n' | tr -c abc x
> xxxbax
```

## Delete (`-d`)

```
$ echo foobar | tr -d a-c
> foor

$ echo foobar | tr -d o
> fbar
```

## Squeeze Repeats (`-s`)

```
$ echo foobar | tr -s o
> fobar

$ echo fooobaaar | tr -s oa
> fobar

$ echo fooobaaar | tr -s a-c
> fooobar
```

### Squeeze and Replace

```
$ echo foobar | tr -s o u
> fubar

$ echo foobar | tr -s oa ey
> febyr

$ echo foobar | tr -s ao ey
> fyber
```

* Details of Working

```
$ echo foobar | tr -s ob
> fobar

$ echo foobar | tr -s ob x
> fxar
```

```
$ echo "abc|ab|ac" | tr -s abc x
> x|x|x
# [abc]+ -> x

$ echo "abc|ab|ac" | tr -s abc xy
> xy|xy|xy
# a+ -> x    [bc]+ -> y

$ echo "abc|ab|ac" | tr -s abc xyz
> xyz|xy|xz
# a+ -> x    b+ -> y    c+ -> z
```

```
$ echo "abc|ab|bcca" | tr -s abc x
> x|x|x
# [abc]+ -> x

$ echo "abc|ab|bcca" | tr -s abc xy
> xy|xy|yx
# a+ -> x    [bc]+ -> y

$ echo "abc|ab|bcca" | tr -s abc xyz
> xyz|xy|yzx
# a+ -> x    b+ -> y    c+ -> z
```

### Complement and Squeeze

```
$ echo foobaar | tr -cs abc x
> xbaax
# foobaar -> xxxbaax
# [^abc]+ -> x
```