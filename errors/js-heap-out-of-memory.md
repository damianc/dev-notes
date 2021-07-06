# [Error] JavaScript heap out of memory

* Unix:

```
export NODE_OPTIONS=--max_old_space_size=4096
```

* Windows:

```
set NODE_OPTIONS=--max-old-space-size=4096
```

## Setting in `package.json`

```
...

"scripts": {
  "start": "node --max-old-space-size=4096 app"
  ...
}

...
```