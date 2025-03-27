# Shuffling an Array

```
arr.sort(() => {
  return Math.random() - Math.random();
});
```

```
arr.sort(() => {
  return (Math.random() * 2) - 1;
});
```

```
const shuffled = [];

while (arr.length !== 0) {
  const t = arr.length - 1;
  const ri = Math.round(Math.random() * t);
  const [item] = arr.splice(ri, 1);
  shuffled.push(item);
}

arr.splice(0, arr.length, shuffled);
```
