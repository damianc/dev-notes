# `If<C, T, F>`, `Equal<Str, S>`, `Like<Str, P>` and String Matchers

* `If<C, T, F>`:

```
type If<C, T, F> = C extends true ? T : F;
```

* `Equal<Str, S>`:

```
type Equal<Str, S> = Str extends S ? true : false;
```

* `Like<Str, P>`:

```
type Like<Str extends string, S extends string, Sensitive = true> =
  If<Equal<Sensitive, true>, Str, Lowercase<Str>> extends
  Replace<If<Equal<Sensitive, true>, S, Lowercase<S>>, '%', `${string}`> ? true : false;
```

* [`Replace<Str, S, E>`](https://github.com/damianc/dev-notes/blob/master/typescript/types-from-types/replace.md)

## String Matchers

* `StartsWith<Str, S>`:

```
type StartsWith<
  Str extends string,
  S extends string,
  Sensitive = true
> = Like<Str, `${S}%`, Sensitive>;

type SW1 = StartsWith<'Bob', 'B'>;
// true
type SW2 = StartsWith<'Bob', 'b'>;
// false
type SW3 = StartsWith<'Bob', 'b', false>;
// true
```

* `EndsWith<Str, S>`:

```
type EndsWith<
  Str extends string,
  S extends string,
  Sensitive = true
> = Like<Str, `%${S}`, Sensitive>;

type LW1 = EndsWith<'Bob', 'b'>;
// true
type LW2 = EndsWith<'Bob', 'B'>;
// false
type LW3 = EndsWith<'Bob', 'B', false>;
// true
```

* `Contains<Str, S>`:

```
type Contains<
  Str extends string,
  S extends string,
  Sensitive = true
> = Like<Str, `%${S}%`, Sensitive>;

type C1 = Contains<'Bob', 'b'>;
// true
type C2 = Contains<'Bob', 'o'>;
// true
type C3 = Contains<'Bob', 'O'>;
// false
type C4 = Contains<'Bob', 'O', false>;
// true
```