# Anonymous Classes

## Class as a Variable Value

```
const Base = class {
  foo = 1;
};

const baseInst = new Base();
baseInst.foo
// 1
```

```
const Base = class {
  foo = 1;
};

const Child = class extends Base {
  bar = 2;
}

const childInst = new Child();
childInst.foo + childInst.bar
// 3
```

```
const Base = class {
  foo = 1;
};

const childInst = new class extends Base {
  bar = 2;
}

childInst.foo + childInst.bar
// 3
```

## `new class ...`

```
const inst = new class {
  foo = 1;
};

inst.foo
// 1
```

```
const inst = new class extends class {
  foo = 1;
} {
  bar = 2;
};

inst.foo + inst.bar
// 3
```

```
const inst = new class extends class extends class {
  foo = 1;
} {
  bar = 2;
} {
  baz = 3;
};

inst.foo + inst.bar + inst.baz
// 6
```

