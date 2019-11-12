# Set Environment Variable When Running App

## `app.js`

```
console.log(
	process.env.FOO
);
```

## Output

```
$ node app
undefined

$ FOO=BAR node app
BAR

$ node app
undefined

$ export FOO=BAR; node app
BAR

$ node app
BAR

# reset

$ node app
undefined
```
