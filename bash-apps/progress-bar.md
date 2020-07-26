# Progress Bar

* percentage moving with progress bar

```
function progress {
    bar=''
    for (( x=0; x <= 100; x++ )); do
        sleep 0.25
        bar="${bar}="
        echo -ne "$bar ${x}%\r"
    done
    echo -e "\n"
}
```

```
$ progress
> ========== 10%
```

* percentage fixed to the right

```
function progress {
    bar=''
    for (( x=0; x <= 100; x++ )); do
        sleep 0.25
        bar="${bar}="
        echo -ne "\r"
        printf "%-100s %s" "$bar" "${x}%"
    done
    echo -e "\n"
}
```

```
$ progress
> =============================================                                                       45%
```

* colored progress bar

```
function progress {
    bar=''
    for (( x=0; x <= 100; x++ )); do
        sleep 0.05
        bar="${bar} "

        echo -ne "\r"
        echo -ne "\e[43m$bar\e[0m"

        local left="$(( 100 - $x ))"
        printf " %${left}s"
        echo -n "${x}%"
    done
    echo -e "\n"
}
```

```
$ progress
> ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 60%
```