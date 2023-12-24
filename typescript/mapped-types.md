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
