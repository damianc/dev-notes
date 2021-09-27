# `Lowercase<T>`, `Uppercase<T>`, `Capitalize<T>` and `Uncapitalize<T>`

## `Lowercase<T>`

```
type ALL = 'GET_ALL';
type LC_ALL = Lowercase<ALL>;
// LC_ALL = 'get_all'
```

```
const ALL = 'GET_ALL';
type LC_ALL = Lowercase<typeof ALL>;
// LC_ALL = 'get_all'
```

```
type Role = 'ADMIN' | 'USER';
type LcRole = Lowercase<role>;
// LcRole = 'admin' | 'user'
```

```
const roles = ['ADMIN', 'USER'] as const;
type Role = Lowercase<typeof roles[number]>;
// Role = 'admin | 'user'
```

## `Uppercase<T>`

```
type ALL = 'get_all';
type UC_ALL = Uppercase<ALL>;
// UC_ALL = 'GET_ALL'
```

```
type Role = 'admin' | 'user';
type UcRole = Uppercase<Role>;
// UcRole = 'ADMIN' | 'USER'
```

## `Capitalize<T>`

```
type ALL = 'getAll';
type CAP_ALL = Capitalize<ALL>;
// CAP_ALL = 'GetAll'
```

```
type Role = 'admin' | 'user';
type CapRole = Capitalize<Role>;
// CapRole = 'Admin' | 'User'
```

## `Uncapitalize<T>`

```
type ALL = 'GetAll';
type UNCAP_ALL = Uncapitalize<ALL>;
// UNCAP_ALL = 'getAll'
```

```
type Role = 'ADMIN' | 'USER';
type UncapRole = Uncapitalize<Role>;
// UncapRole = 'aDMIN' | 'uSER'
```

## Comparison

```
type Values = 'foo' | 'BAR' | 'Baz' | 'QUux' | 'quUY' | 'qUUZ';

type LcValues = Lowercase<Values>;
// 'foo' | 'bar' | 'baz' | 'quux' | 'quuy' | 'quuz'

type UcValues = Uppercase<Values>;
// 'FOO' | 'BAR' | 'BAZ' | 'QUUX' | 'QUUY' | 'QUUZ'

type CpValues = Capitalize<Values>;
// 'Foo' | 'BAR' | 'Baz' | 'QUux' | 'QuUY' | 'QUUZ'

type UnValues = Uncapitalize<Values>;
// 'foo' | 'bAR' | 'baz' | 'qUux' | 'quUY' | 'qUUZ'
```

## What do `Capitalize<T>` and `Uncapitalize<T>` do?

* `Capitalize<T>` only converts first char to uppercase
* `Uncapitalize<T>` only converts first char to lowercase

To affect whole string, we must mix types:

```
type FooBar = 'fooBAR';

type CapFooBar1 = Capitalize<FooBar>;
// 'FooBAR'

type CapFooBar2 = Capitalize<Lowercase<FooBar>>;
// 'Foobar'
```

## Union Words Can Be Lost

```
type FOOS = 'Foo' | 'foo' | 'FOO';

type UC_FOOS = Uppercase<FOOS>;
// UC_FOOS = 'FOO'
// 'FOO' | 'FOO' | 'FOO' = 'FOO'

type CAP_FOOS = Capitalize<FOOS>;
// CAP_FOOS = 'Foo' | 'FOO'
// 'Foo' | 'Foo' | 'FOO' = 'Foo' | 'FOO'
```