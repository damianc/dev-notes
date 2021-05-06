# Building Object Type from Array

* [Basic](#basic)
  - [All Keys Optional](#all-keys-optional)
  - [Both Required and Optional Keys](#both-required-and-optional-keys)
* [Different Types](#different-types)
* [Different Types + Both Required and Optional](#different-types--both-required-and-optional)
* [How TypeScript Infer Array Types](#how-typescript-infer-array-types)

## Basic

* required keys: `color` and `size`
* all of type `string`

```
const ThemeProps = ['color', 'size'] as const;

type ThemeProp = typeof ThemeProps[number];
type ThemeConfig = { [prop in ThemeProp]: string };

const style: ThemeConfig = {
  color: 'orange',
  size: 'lg'
};
```

### All Keys Optional

* optional keys: `color` and `size`
* all of type `string`

As above, the only change is the `?` char added:

```
...
type ThemeConfig = { [prop in ThemeProp]?: string };`
...
```

### Both Required and Optional Keys

* required keys: `color` and `size`
* optional keys: `backgroundColor` and `fontSize`
* all of type `string`

```
const ThemeProps = {
  required: ['color', 'size'] as const,
  optional: ['backgroundColor', 'fontSize'] as const
};

type ThemeRequiredProp = typeof ThemeProps.required[number];
type ThemeOptionalProp = typeof ThemeProps.optional[number];

type ThemeConfig =
  & { [prop in ThemeRequiredProp]: string }
  & { [prop in ThemeOptionalProp]?: string };

const style: ThemeConfig = {
  color: 'red',
  size: 'lg',
  fontSize: 'md'
};
```

## Different Types

* required keys: `color`, `backgroundColor`, `size` and `fontSize`
* `color` and `backgroundColor` of type `string`
* `size` and `fontSize` of type `number`

```
const ThemeStringProps = ['color', 'backgroundColor'] as const;
const ThemeNumberProps = ['size', 'fontSize'] as const;

type ThemeStringProp = typeof ThemeStringProps[number];
type ThemeNumberProp = typeof ThemeNumberProps[number];

type ThemeConfig =
  & { [stringProp in ThemeStringProp]: string }
  & { [numberProp in ThemeNumberProp]: number };

const style: ThemeConfig = {
  color: 'red',
  backgroundColor: 'white',
  size: 20,
  fontSize: 12
};
```

## Different Types + Both Required and Optional

* required keys: `color` and `size`
* optional keys: `backgroundColor` and `fontSize`
* `color` and `backgroundColor` of type `string`
* `size` and `fontSize` of type `number`

```
const ThemeProps = {
  required: {
    string: ['color'] as const,
    number: ['size'] as const
  },
  optional: {
    string: ['backgroundColor'] as const,
    number: ['fontSize'] as const
  }
};

type RequiredStringProp = typeof ThemeProps.required.string[number];
type RequiredNumberProp = typeof ThemeProps.required.number[number];
type OptionalStringProp = typeof ThemeProps.optional.string[number];
type OptionalNumberProp = typeof ThemeProps.optional.number[number];

type ThemeConfig =
  & { [k in RequiredStringProp]: string }
  & { [k in RequiredNumberProp]: number }
  & { [k in OptionalStringProp]?: string }
  & { [k in OptionalNumberProp]?: number };

const style: ThemeConfig = {
  color: 'red',
  size: 20,
  fontSize: 12
};
```

## How TypeScript Infer Array Types

```
const simpleArray = ['foo', 123];

type SimpleArrayType = typeof simpleArray;
// SimpleArrayType = (string | number)[]

type SimpleArrayItemType = typeof simpleArray[number];
// SimpleArrayItemType = string | number
```

```
const constArray = ['foo', 123] as const;

type ConstArrayType = typeof constArray;
// ConstArrayType = readonly ["foo", 123]

type ConstArrayItemType = typeof constArray[number];
// ConstArrayItemType = "foo" | 123
```