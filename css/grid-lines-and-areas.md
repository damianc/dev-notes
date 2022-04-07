# Grid Named Lines and Areas

## Grid Named Lines

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

![Grid Named Lines](https://github.com/damianc/dev-notes/blob/master/_images/css/css-grid-lines.png "Grid Lines")

## Grid Named Areas

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

![Grid Named Areas](https://github.com/damianc/dev-notes/blob/master/_images/css/css-grid-areas.png "Grid Areas")