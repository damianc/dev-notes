# ES-Like Expressions

## Concats

```
arr1 = [1, 2]
arr2 = [5, 6]

[*arr1, 3, 4, *arr2]
# [1, 2, 3, 4, 5, 6]
```

```
tuple1 = (1, 2)
tuple2 = (5, 6)

(*tuple1, 3, 4, *tuple2)
# (1, 2, 3, 4, 5, 6)
```

```
obj1 = {'a': 1, 'b': 2}
obj2 = {'d': 4}

{ **obj1, 'c': 3, **obj2 }
# {'a': 1, 'b': 2, 'c': 3, 'd': 4}
```

```
set1 = {1, 2}
set2 = {5, 6}

{ *set1, 3, 4, *set2 }
# {1, 2, 3, 4, 5, 6}
```

## Destructuring

```
arr = [1, 2, 3, 4]
one, two, *rest = arr
# one=1 two=2 rest=[3, 4]

head, *body, tail = arr
# head=1 body=[2, 3] tail=4
```

```
tuple = (1, 2, 3, 4)
one, two, *rest = tuple
# one=1 two=2 rest=[3, 4]

head, *body, tail = tuple
# head=1 body=[2, 3] tail=4
```

```
obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
a, b, **rest = obj
# a='a' b='b' rest=['c', 'd']

head, *body, tail = obj
# head='a' body=['b', 'c'] tail='d'
```

```
set = {1, 2, 3, 4}
one, two, *rest = set
# one=1 two=2 rest=[3,4]

head, *body, tail = set
# head=1 body=[2, 3] tail=4
```

### Left-side Containers

```
arr = [1,2,3,4]

one, *rest = arr
(one, *rest) = arr
[one, *rest] = arr
```

## Unpack

```
def sumFour(a, b, c, d):
  return a + b + c + d

sumFour(1, *[2, 3, 4])
# 10
```

## Pack

```
from functools import reduce

def sum(*nums):
  return reduce(lambda acc, curr: acc + curr, nums)

sum(1, 2, 3, 4) # 10

sum((1, 2, 3, 4)) # (1, 2, 3, 4)
sum(*(1, 2, 3, 4)) # 10

sum([1, 2, 3, 4]) # [1, 2, 3, 4]
sum(*[1, 2, 3, 4]) # 10

sum({1, 2, 3, 4}) # {1, 2, 3, 4}
sum(*{1, 2, 3, 4}) # 10
```