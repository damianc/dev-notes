# Styling `console.log()`

```
console.log(' %c ...', 'color:red' )
```

![Passing styles to console.log()](https://github.com/damianc/dev-notes/blob/master/_images/javascript/styled-console-log-1.png "Passing styles to console.log()")

* `console.log(message, styles)`
* `console.log(message1, styles1, message2, styles2 ...)`
* `console.log(message, styles, additionalUnformattedMessage)`

## Advanced Messages

![Message with a complex styling applied](https://github.com/damianc/dev-notes/blob/master/_images/javascript/styled-console-log-2.png "Message with a complex styling applied")

* Brain-Fucking Approach:

```
console.log(
  '%cError%c\n%cfooBarBaz(%cleft, %cright%c)%c:\n%cright%c must be of type %cnumber%c',
  'color:#fff;background-color:red;padding:2px 8px;margin-bottom:4px', '',
  'font-weight:bold', '',
  'color:red', 'font-weight:bold', '',
  'color:red;text-decoration:underline', '',
  'color:#2af', ''
);
```

* Less-Brain-Fucking Approach:

```
const [message, css] = [
  [ '%cError%c\n', 'color:#fff;background-color:red;padding:2px 8px;margin-bottom:4px' ],
  [ '%cfooBarBaz(%c', 'font-weight:bold' ],
  [ 'left, ' ],
  [ '%cright%c', 'color:red' ],
  [ '%c)%c:\n', 'font-weight:bold' ],
  [ '%cright%c ', 'color:red;text-decoration:underline' ],
  [ 'must be of type ' ],
  [ '%cnumber%c', 'color:#2af' ]
].reduce((acc, curr, idx, arr) => {
  let [message, css] = acc;
  let [msg, style] = curr;

  return [
    message + msg,
    [...css, ...(style ? [style, ''] : [])]
  ];
}, ['', []]);

console.log(message, ...css);
```

* Elegant Approach - Print Factory:

```
function styledLog(msg, cssMap) {
  const cssCollection = [];
  const formattedMessage = msg.replace(/\%css\:(\w+?)\{([^}]+?)\}/g, (_, cssKey, content) => {
    cssCollection.push(cssMap[cssKey], '');
    return '%c' + content + '%c';
  });

  console.log(formattedMessage, ...cssCollection);
}

styledLog(
    '%css:label{Error}\n' +
    '%css:bold{fooBarBaz(}left, %css:red{right}%css:bold{)}:\n' +
    '%css:redUnderline{right} must be of type %css:type{number}'
, {
    label: 'color:#fff;background-color:red;padding:2px 8px;margin-bottom:4px',
    bold: 'font-weight:bold',
    red: 'color:red',
    redUnderline: 'color:red;text-decoration:underline',
    type: 'color:#2af'
  }
);
```

