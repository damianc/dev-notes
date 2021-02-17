# Reduce Array to HTML Markup

## Siblings Elements

```
const tree = ['div', 'section', 'h1'];

const markup = tree.reduce((acc, curr) => {
	const elem = document.createElement(curr);
	acc.appendChild(elem);

	return acc;
}, document.createDocumentFragment());
```

```
#document-fragment
	<div></div>
	<section></section>
	<h1></h1>
```

## Nested Elements

```
const tree = ['div', 'section', 'h1'];
const reversed = Array.from(tree).reverse();

const markup = reversed.reduce((acc, curr) => {
	const elem = document.createElement(curr);
	elem.appendChild(acc);

	return elem;
}, document.createDocumentFragment());
```

```
<div>
	<section>
		<h1></h1>
	</section>
</div>
```