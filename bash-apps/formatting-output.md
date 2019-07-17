# Formatting Output

To format an output use `\e[CODESm]` where `CODES` is `CODE[;CODE]...`.
The following ones are the examples:

* red &rarr; `\e[31m`
* red and bold &rarr; `\e[31;1m` (or `\e[1;31m`)

## Example

Echo the white [_97_] `HELLO` word on the blue [_104_] background:

```
echo -e '\e[97;104m HELLO \e[0m'
```

### Resetting

At the end, all the stuff should be reset so that it does not affect further, not ours, output.
In the example above, the code `0` clears any property applied. If it was, for example, the code `21`, it only would clear _bold_ property.
For details, see the last column in the [additional properties](#additional-properties) table.

## Colors of text and background

| Color     | Code for text color | Code for background color |
|-----------|---------------------|---------------------------|
| default   | 39                  | 49                        |
| black     | 30                  | 40                        |
| red       | 31                  | 41                        |
| green     | 32                  | 42                        |
| yellow    | 33                  | 43                        |
| blue      | 34                  | 44                        |
| magenta   | 35                  | 45                        |
| cyan      | 36                  | 46                        |
| white     | 97                  | 107                       |

### Other colors

| Color              | Code for text color | Code for background color |
|--------------------|---------------------|---------------------------|
| bright gray        | 37                  | 47                        |
| dark gray          | 90                  | 100                       |
| bright red         | 91                  | 101                       |
| bright green       | 92                  | 102                       |
| bright yellow      | 93                  | 103                       |
| bright blue        | 94                  | 104                       |
| bright magenta     | 95                  | 105                       |
| bright cyan        | 96                  | 106                       |

## Additional properties

| Property      | Code   | Code to reset |
|---------------|--------|---------------|
| bold          | 1      | 21            |
| muted         | 2      | 22            |
| italic        | 3      | 23            |
| underline     | 4      | 24            |
| blinking      | 5      | 25            |
| reversed      | 7      | 27            | 
| hidden        | 8      | 28            |
| strike        | 9      | 29            |

>
> To reset all the properties, use the code `0`.
>
