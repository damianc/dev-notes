# CSS Counters

* HTML:

```
<div class="list">
  <div class="list__item">Item A</div>
  <div class="list__item">Item B</div>
  <div class="list__item">Item C</div>
  <div class="list__item">Item D</div>
</div>
```

* CSS:

```
.list {
  counter-reset: div-list;
}
.list__item {
  counter-increment: div-list;
}
.list__item:before {
  content: counter(div-list) '. ';
}
```

* output:

```
1. Item A
2. Item B
3. Item C
4. Item D
```

### Custom Init Value

* CSS:

```
.list {
  counter-reset: div-list 9;
}

...
```

* output:

```
10. Item A
11. Item B
12. Item C
13. Item D
```

### Custom Increment Value

* CSS:

```
...

.list__item {
  counter-increment: div-list 10;
}
```

* output:

```
10. Item A
20. Item B
30. Item C
40. Item D
```

## `counters()`

* HTML:

```
<div class="list">
  <div class="list__item">Item A</div>
  <div class="list__item">
    Item B
    <div class="list">
      <div class="list__item">Item B.1</div>
      <div class="list__item">
        Item B.2
        <div class="list">
          <div class="list__item">Item B.2.1</div>
          <div class="list__item">Item B.2.2</div>
        </div>
      </div>
      <div class="list__item">Item B.3</div>
      <div class="list__item">Item B.4</div>
    </div>
  </div>
  <div class="list__item">Item C</div>
  <div class="list__item">Item D</div>
</div>
```

* CSS:

```
.list {
  counter-reset: divList;
}

.list .list {
  padding-left: 20px;
}

.list__item {
  counter-increment: divList;
}

.list__item:before {
  content: counters(divList, '/') ': ';
}
```

* output:

```
1: Item A
2: Item B
  2/1: Item B.1
  2/2: Item B.2
    2/2/1: Item B.2.1
    2/2/2: Item B.2.2
  2/3: Item B.3
  2/4: Item B.4
3: Item C
4: Item D
```