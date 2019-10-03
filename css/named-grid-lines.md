# Named Grid Lines

```
#grid {
	display: grid;
	grid-template-columns:
		[page-start header-start] 1fr
		[page-end sidebar-start] 200px
		[sidebar-end header-end];
	grid-template-rows:
		[header-start] 150px
		[header-end page-start sidebar-start] 200px
		[page-end sidebar-end];
}

#header { grid-area: header; }
#page { grid-area: page; }
#sidebar { grid-area: sidebar; }
```

```
|---------------|----------|----------
|     H         |    H     | header
|---------------|----------|----------
|               |          | page
|     P         |    S     | &
|               |          | sidebar
|               |          |
|---------------|----------|----------
| page          | sidebar  |
| &             | &        |
| header        | header   |
```

## More Readable Approach: Named Grid Areas

```
#grid {
  display: grid;
  grid-template-columns: 1fr 200px;
  grid-template-rows: 150px 200px;
  grid-template-areas:
    'header header'
    'page sidebar';
}

#header { grid-area: header; }
#page { grid-area: page; }
#sidebar { grid-area: sidebar; }
```

```
|---------------|----------|
|    header     |  header  |
|---------------|----------|
|               |          |
|   page        | sidebar  |
|               |          |
|               |          |
|---------------|----------|
```
