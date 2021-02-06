# Generating Dynamic Files with `FileReader`

```
const css = `
  body {
    background-color: #fa0;
  }
`;

const sheet = new File([css], 'style.css', {type: 'text/css'});
const reader = new FileReader();

reader.onload = function (e) {
  const link = document.createElement('link');

  link.rel = 'stylesheet';
  link.href = reader.result;

  document.head.appendChild(link);
};

reader.readAsDataURL(sheet);
```