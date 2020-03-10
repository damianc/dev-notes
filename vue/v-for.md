# `v-for`

## Iterating through an Array

* `item in items`
* `(item, index) in items`
* `{id, name} in items`
* `({id, name}, index) in items`

```
<ul>
	<li v-for="book in books" :key="book.id">
		{{ book.title }}
	</li>
</ul>
```

### `in` can be replaced with `of`

```
<ul>
	<li v-for="book of books" :key="book.id">
		{{ book.title }}
	</li>
</ul>
```

> It applies both to arrays and objects.

### Accessing Parent Scope Properties

```
<ul>
	<li v-for="(book, index) in books" :key="book.id">
		{{ resourceType + ' #' + (index + 1) }}: {{ book.title }}
	</li>
</ul>
```

```
data: {
	resourceType: 'Book',
	books: [
		{id: 1, title: 'Fall Asleep or Die Tryin\'', price: 35},
		{id: 2, title: 'Between Fire and Water', price: 42},
	]
}
```

## Iterating through an Object

* `value in obj`
* `(value, name) in obj`
* `(value, name, index) in obj`

> The order is based on the enumeration order of `Object.keys()`, which is not guaranteed to be consistent across JavaScript engine implementations.

```
<ul>
	<li v-for="(value, name, index) in post" :key="index">
		[{{index}}] {{name}} => {{value}}
	</li>
</ul>
```

```
data: {
	post: {
		title: 'Listing Objects in Vue.js',
		author: 'John Smith',
		publishedAt: '2020-03-10'
	}
}
```

## Range

```
<ul>
	<li v-for="n in 4">
		{{n}}
	</li>
</ul>
```

## Templates

```
<table>
	<template v-for="(purchase, index) in purchases">
		<tr>
			<td>{{ purchase.product }}</td>
			<td>${{ purchase.price }}</td>
			<td>x{{ purchase.quantity }}</td>
		</tr>
		<tr>
			<td colspan="3">${{ purchase.price * purchase.quantity }}</td>
		</tr>
	</template>
</table>
```

## `v-for` with `v-if`

It's recommended to not use them together.  
When both exist on the same node, `v-for` has a higher priority than `v-if`: _the `v-if` will be run on each iteration of the loop separately_. This can be useful when you want to render nodes for only some items:

```
<ul>
	<li v-for="book in books" v-if="book.isAvailable">
	  {{ book.title }}
	</li>
</ul>
```

If instead, your intent is to conditionally skip execution of the loop, you can place the `v-if` on a wrapper element (or `<template>`):

```
<ul v-if="books.length">
	<li v-for="book in books">
		{{ book.title }}
	</li>
</ul>
<p v-else>No book has been found.</p>
```

## Filtering/Sorting without Mutating the Actual Array

* computed property:

```
<ul>
	<li v-for="book in cheapBooks">
		{{ book.title }}
	</li>
</ul>
```

```
data: {
	books: [ ... ]
},
computed: {
	cheapBooks: function () {
		return this.books.filter(book => book.price <= 30);
	}
}
```

* method:

```
<ul v-for="bookGroup in books">
	<li v-for="book in cheap(bookGroup)">
		{{ book.title }}
	</li>
</ul>
```

```
data: {
	books: [
		[
			{title: 'Book #1', price: 35},
			{title: 'Book #2', price: 45}
		], [
			{title: 'Book #3', price: 17.50},
			{title: 'Book #4', price: 47.50}
		]
	]
},
methods: {
	cheap: function (books) {
		return books.filter(book => book.price <= 30);
	}
}
```

## Overview

* use primitive values as `v-for` keys (string or numeric values)
* methods wrapped by Vue: `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`