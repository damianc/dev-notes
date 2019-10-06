# Modular Structure

## `users/users.router.js`

```
var express = require('express');
var router = express.Router();

router.get('/full', (req, res) => {
	res.send('John Wick, 0000 LA');
});

router.get('/name', (req, res) => {
	res.send('John Wick');
});

router.get('/address', (req, res) => {
	res.send('0000 LA');
});

module.exports = router;
```

## `users/users.app.js`

```
var express = require('express');
var usersRouter = require('./users.router');

var usersModule = express();
usersModule.use('/user', usersRouter);

module.exports = userModule;
```

## The main `app.js`

```
var express = require('express');
var usersModule = require('./users/users.app');

var app = express();

app.use(usersModule);

// ...
```
