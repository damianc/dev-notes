# Comprehensions

* simple

```
[x * 10 for x in range(1, 5)]
# [10, 20, 30, 40]
```

* multiple variables

```
[str(n) + s for n in range(1, 3) for s in ['A', 'B']]
# ['1A', '1B', '2A', '2B']
```

* filtering

```
[
  str(n) + s
  for n in range(1, 6)
  for s in ['A', 'B', 'C', 'D']
  if n <= 3
  if s in ['A', 'B']
]

# ['1A', '1B', '2A', '2B', '3A', '3B']
```

# or:

```
[
  str(n) + s
  for n in range(1, 6)
  if n <= 3
  for s in ['A', 'B', 'C', 'D']
  if s in ['A', 'B']
]

# ['1A', '1B', '2A', '2B', '3A', '3B']
```

## Index

```
[str(i) + ': ' + str(ch) for i, ch in enumerate((1, 2, 3, 4))]
# ['0: 1', '1: 2', '2: 3', '3: 4']
```

## Dictionary

* simple

```
{k: 1 for k in ['A', 'B']}
# {'A': 1, 'B': 1}
```

* multiple variables

```
keys = ['A', 'B']
vals = [1, 2]

{k: v for (k, v) in zip(keys, vals)}
# {'A': 1, 'B': 2}
```

```
entries = [['A', 1], ['B', 2]]

{k: v for k, v in entries}
# {'A': 1, 'B': 2}
```

* filtering

```
dictSeq = ('A', 1, 'B', 2)

{k: dictSeq[i + 1] for i, k in enumerate(dictSeq) if i % 2 == 0}
# {'A': 1, 'B': 2}
```

## Set

```
{n + 10 for n in [1, 2, 3, 2, 1]}
# {11, 12, 13}
```