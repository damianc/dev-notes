# NPM Script Working with Files

## Node Script (`build-reports.js`)

```
const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'dist');

const platforms = fs.readdirSync(srcDir);

platforms.forEach((platform) => {
  let json = {};
  const modules = fs.readdirSync(`${srcDir}/${platform}`);

  modules.forEach((module) => {
    let [moduleName] = module.split('.');

    let moduleFile = fs.readFileSync(`${srcDir}/${platform}/${module}`, 'utf8');
    moduleFile = JSON.parse(moduleFile);

    json = {
      ...json,
      [moduleName]: moduleFile
    };
  });

  fs.writeFileSync(`${distDir}/${platform}.json`, JSON.stringify(json, null, 2));
});
```

## Entry in `package.json`

```
{
  ...
  "scripts": {
    ...
    "build:reports": "node ./src/assets/utils/build-reports"
  }
}
```

## How this example work?

Having files:

```
src/
|---- admin/
|       |---- config.json
|       |---- todos.json
|
|---- user/
        |---- todos.json
```

New files are generated:

```
dist/
|---- admin.json
|---- user.json
```

These files contain JSON where keys are filenames and values are their content:

* `admin.json`

```
{
  "config": <CONTENT OF src/admin/config.json>,
  "todos": <CONTENT OF src/admin/todos.json>
}
```

* `user.json`

```
{
  "todos": <CONTENT OF src/user/todos.json>
}
```