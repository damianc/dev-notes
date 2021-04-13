# Array Sequentially Assignment

## Using a `[x:y]` Slice

### Start of list

```
arr = [1, 2, 3, 4, 5, 6]
arr[:3] = ['a', 'b', 'c']
# arr = ['a', 'b', 'c', 4, 5, 6]
```

```
arr = [1, 2, 3, 4, 5, 6]
arr[:3] = ['a']
# arr = ['a', 4, 5, 6]
```

```
arr = [1, 2, 3, 4, 5, 6]
arr[:3] = ['a', 'b', 'c', 'd']
# arr = ['a', 'b', 'c', 'd', 4, 5, 6]
```

```
arr = [1, 2, 3, 4, 5, 6]
arr[:3] = []
# arr = [4, 5, 6]
```

### End of list

```
arr = [1, 2, 3, 4, 5, 6]
arr[3:] = ['a', 'b', 'c']
# arr = [1, 2, 3, 'a', 'b', 'c']
```

```
arr = [1, 2, 3, 4, 5, 6]
arr[3:] = ['a']
# arr = [1, 2, 3, 'a']
```

```
arr = [1, 2, 3, 4, 5, 6]
arr[3:] = ['a', 'b', 'c', 'd']
# arr = [1, 2, 3, 'a', 'b', 'c', 'd']
```

```
arr = [1, 2, 3, 4, 5, 6]
arr[3:] = []
# arr = [1, 2, 3]
```

### Middle of list

```
arr = [1, 2, 3, 4, 5, 6]
arr[2:4] = ['a', 'b']
# arr = [1, 2, 'a', 'b', 5, 6]
```

```
arr = [1, 2, 3, 4, 5, 6]
arr[2:4] = ['a']
# arr = [1, 2, 'a', 5, 6]
```

```
arr = [1, 2, 3, 4, 5, 6]
arr[2:4] = ['a', 'b', 'c']
# arr = [1, 2, 'a', 'b', 'c', 5, 6]
```

```
arr = [1, 2, 3, 4, 5, 6]
arr[2:4] = []
# arr = [1, 2, 5, 6]
```

## Using a `[x:y:z]` Slice

### Assigned Sequence must be of a Proper Size

**When using third element of a slice expression**, `ValueError` will be raised if sequence being assigned is not of the same length as number of elements to affect by given slice:

```
arr = [1, 2, 3, 4, 5, 6]
arr[::2] = ['a', 'b']
# ValueError: attempt to assign sequence of size 2 to extended  slice of size 3
```

### Passing Every Second Item

```
arr = [1, 2, 3, 4, 5, 6]
arr[::2] = ['a', 'b', 'c']
# arr = ['a', 2, 'b', 4, 'c', 6]
```

```
arr = [1, 2, 3, 4, 5, 6]
arr[3::2] = ['a', 'b']
# arr = [1, 2, 3, 'a', 5, 'b']
```

```
arr = [1, 2, 3, 4, 5, 6]
arr[:3:2] = ['a', 'b']
# arr = ['a', 2, 'b', 4, 5, 6]
```

```
arr = [1, 2, 3, 4, 5, 6]
arr[2:4:2] = ['a']
# arr = [1, 2, 'a', 4, 5, 6]
```

### Going Right Back Left

```
arr = [1, 2, 3, 4, 5, 6]
arr[::-1] = ['a', 'b', 'c', 'd', 'e', 'f']
# arr = ['f', 'e', 'd', 'c', 'b', 'a']
```

```
arr = [1, 2, 3, 4, 5, 6]
arr[3::-1] = ['a', 'b', 'c', 'd']
# arr = ['d', 'c', 'b', 'a', 5, 6]
```

```
arr = [1, 2, 3, 4, 5, 6]
arr[:3:-1] = ['a', 'b']
# arr = [1, 2, 3, 4, 'b', 'a']
```

* when going right back left, _start_ must be greater than _end_:

```
arr = [1, 2, 3, 4, 5, 6]
arr[2:4:-1] = ['a', 'b']
# ValueError: attempt to assign sequence of size 2 to extended slice of size 0

arr[4:2:-1] = ['a', 'b']
# arr = [1, 2, 3, 'b', 'a', 6]
```

### Going Right Back Left Every Second Item

```
arr = [1, 2, 3, 4, 5, 6]
arr[::-2] = ['a', 'b', 'c']
# arr = [1, 'c', 3, 'b', 5, 'a']
```

```
arr = [1, 2, 3, 4, 5, 6]
arr[3::-2] = ['a', 'b']
# arr = [1, 'b', 3, 'a', 5, 6]
```

```
arr = [1, 2, 3, 4, 5, 6]
arr[:3:-2] = ['a']
# arr = [1, 2, 3, 4, 5, 'a']
```

* also here, when going right back left, _start_ must be greater than _end_:

```
arr = [1, 2, 3, 4, 5, 6]
arr[2:4:-2] = ['a']
# ValueError: attempt to assign sequence of size 1 to extended slice of size 0

arr[4:2:-2] = ['a']
# arr = [1, 2, 3, 4, 'a', 6]
```