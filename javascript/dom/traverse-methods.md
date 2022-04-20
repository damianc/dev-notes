# DOM Traversing Methods

![DOM Methods](https://github.com/damianc/dev-notes/blob/master/_images/javascript/dom-traversing.png "DOM Methods")

## Examples

```
<div>
  foo
  <p>bar</p>
  <span>baz</span>
  quux
</div>
```

### Getting Children

* `children` omits text nodes
* `childNodes` takes text nodes into account

```
div.childElementCount;
// 2

div.children;
// HTMLCollection( [p, span] )

div.childNodes;
// NodeList( ["\n  foo\n  ", p, "\n  ", span, "\n  quux\n"] )

div.children[0].childNodes;
// NodeList( ["bar"] )

div.childNodes[1].children;
// HTMLCollection( [] )

div.childNodes[1].childNodes;
// NodeList( ["bar"] )
```

### Getting Sibling

```
const [p, span] = div.children;

span.nextSibling;
// " quux "

p.nextElementSibling;
// <span>​baz​</span>​

p.previousSibling;
// " foo "

span.previousElementSibling;
// <p>​bar​</p>​
```

### Getting Parents

```
const baz = div.children[1].childNodes[0];

baz.parentElement;
// <span>​baz​</span>​

baz.parentNode;
// <span>​baz​</span>​

baz.parentElement.parentNode;
// <div>​…​</div>​

baz.parentNode.parentElement;
// <div>​…​</div>​
```

### Getting "Uncle"

```
const baz = div.children[1].childNodes[0];

baz.parentElement.nextSibling;
// " quux "

baz.parentElement.previousElementSibling;
// <p>​bar​</p>​
```