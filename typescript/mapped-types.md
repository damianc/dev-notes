# Mapped Types

```
type User {
  login: string;
  avatarUrl: string;
}
```

## `keyof`

```
type UserInfo = keyof User;

// =
// type UserInfo = 'login' | 'avatarUrl';
```

## `in keyof`

```
type UserPremium = {
  [K in keyof User]: User[K];
} & { exp: Date };

// =
// type UserPremium = User & { exp: Date }
```

## Modifiers

| Modifier | Meaning |
|--|--|
| `?` or `+?` | set optional |
| `-?` | set required |
| `readonly` or `+readonly` | set readonly |
| `-readonly` | set writable |

```
type Partial<T> = {
  [K in keyof T]?: T[K];
}
```

```
type Required<T> = {
  [K in keyof T]-?: T[K];
}
```

```
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
}
```

```
type Writable<T> = {
  -readonly [K in keyof T]: T[K];
}
```
