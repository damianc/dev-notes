# export and import

## export

```
export function foo() {}
export function bar() {}

function baz() {}
export { baz }
```

### renaming exported stuff

```
function foo() {}
export { foo as bar };
```

### default export

```
function foo() {}
function bar() {}

export { foo as default, bar };
```

```
function foo() {}
export default foo;
// does not reflect changes

export default function foo() {}
// that's ok
```

### `export ... from`

```
export { foo, bar } from 'baz';
export { foo as FOO, bar as BAR } from 'baz';
export * from 'baz';
```

## import

```
import { foo as fooFunc, bar } from 'foobar';

fooFunc();
bar();
```

### importing default stuff

#### if module only has default export

```
import foo from 'foo';
// =
import { default as foo } from 'foo';
```

#### if module has both defult and named exports

```
// export default function foo() {}
// export function bar() {}
// export function baz() {}

import fooFn, { bar, baz as BAZ } from 'foo';
```

### importing a namespace

```
import * as foo from 'foo';

foo.foo();
foo.bar();
```

```
// export default function foo() {}
// export function bar() {}

import * as ns from 'foo';
ns.default();
ns.bar();

import fooFn, * as ns from 'foo';
fooFn();
ns.bar();
```

### hoisting of imported functions

```
foo();
import { foo } from 'foo';
```

### just import

```
import 'foo';

// no stuff is imported
// module is loaded, compiled and processed
```
