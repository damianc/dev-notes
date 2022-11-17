# Check if Package Name is Free to Use

```
npm view <name>
```

* if package name is **free**, you'll get _error_:

```
> npm view foobarpub

npm ERR! code E404
npm ERR! 404 'foobarpub' is not in the npm registry.
...
```

* if package name is already **used**, you'll get details of the package:

```
> npm view shortcodejs

shortcodejs@1.1.1 | ISC | deps: none | versions: 2
A tiny library allowing to compose website components being used repeatedly.
https://github.com/damianc/ShortcodeJS#readme

keywords: wordpress, php, javascript, shortcode, blog, post, article, library, utils, helpers, directive, directives, template, html
...
```