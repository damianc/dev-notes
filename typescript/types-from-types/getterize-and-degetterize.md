# `Getterize<T>` and `Degetterize<T>`

## Simplified Variant: `SimpleGetterize<T>`

```
type SimpleGetterize<T> = {
  [K in keyof T as `get${Capitalize<K&string>}`]: T[K];
};


type Obj = {
  foo: string;
  getBar: number;
  baz: boolean;
  propToGet: number;
  propToGetStuff: string;
};

type SG_Obj = SimpleGetterize<Obj>;
// {
//   getFoo: string;
//   getGetBar: number;
//   getBaz: boolean;
//   getPropToGet: number;
//   getPropToGetStuff: string;   
// }
```

## Full Variant: Implementation

```
type Getterize<T, OmitGets = true> = {
 [K in keyof T as (
    K extends `get${infer Q}`
      ? (OmitGets extends true ? K : `get${Capitalize<K>}`)
      : `get${Capitalize<K & string>}`
  )]: T[K];
};
```

## Full Variant: Use

```
type Obj = {
  foo: string;
  getBar: number;
  baz: boolean;
  propToGet: number;
  propToGetStuff: string;
};


type GetterizedObj = Getterize<Obj>;
// {
  getFoo: string;
  getBar: number; // not 'getGetBar'
  getBaz: boolean;
  getPropToGet: number;
  getPropToGetStuff: string;
// }

type GetterizedObj2 = Getterize<Obj, true>;
// as above

type GetterizedObj3 = Getterize<Obj, false>;
// {
  getFoo: string;
  getGetBar: number; // not just `getBar`
  getBaz: boolean;
  getPropToGet: number;
  getPropToGetStuff: string;
// }
```

> caveat to fix:

```
type Obj = {
  foo: string;
  bar: number;
  getBar: boolean;
};

type GetterizedObj = Getterize<Obj>;
// {
//   getFoo: string;
//   getBar: number | boolean;
// }
```

## `Degetterize<T>`

```
type Degetterize<T> = {
    [K in keyof T as (K extends `get${infer R}` ? Uncapitalize<R> : K)]: T[K];
}


type Obj = {
    getFoo: string;
    getGetBar: number;
    baz: boolean;
    getSomeProp: number;
    somePropToRead: string;
}

type DG_Obj = Degetterize<Obj>;
// {
//   foo: string;
//   getBar: number;
//   baz: boolean;
//   someProp: number;
//   somePropToRead: string;
// }
```

> caveat to fix:

```
type Obj = {
  foo: string;
  someProp: number;
  getSomeProp: boolean;
};

type DG_Obj = Degetterize<Obj>;
// {
//   foo: string;
//   someProp: number | boolean;
// }
```