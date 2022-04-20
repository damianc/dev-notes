# `insertAdjacent*()`

- `insertAdjacentHTML(position, markupText)`
- `insertAdjacentElement(position, element)`
- `insertAdjacentText(position, text)`

## Position

```
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

## Use

```
const div = document.createElement('div');

const span = document.createElement('span');
span.textContent = 'quux';
div.insertAdjacentElement('beforeend', span);

div.insertAdjacentHTML('afterbegin', '<p>bar</p>');

div.firstElementChild.insertAdjacentText('beforebegin', 'foo');
div.firstElementChild.insertAdjacentText('afterend', 'baz');

div;
// <div>
//   foo
//   <p>bar</p>
//   baz
//   <span>quux</span>
// </div>
```