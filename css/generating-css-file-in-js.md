# Generating CSS stylesheet with JavaScript's `FileReader`

```
var css = `
	body {
		background-color: #fa0;
	}
`;

var sheet = new File([css], 'style.css', {type: 'text/css'});
var styleReader = new FileReader();

styleReader.onload = function (e) {
    var link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = styleReader.result;

    document.head.appendChild(link);
};

styleReader.readAsDataURL(sheet);
```
