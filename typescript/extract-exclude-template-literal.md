# `Extract` and `Exclude` with Template Literals

## Match Strings Starting/Ending with a Substring

* starting with `a`

```
type Matches = Extract<
  'cat' | 'dog' | 'giraffa' | 'animal' | 'anaconda',
  `a${string}`
>;

// 'animal' | 'anaconda'
```

* ending with `a`

```
type Matches = Extract<
	'cat' | 'dog' | 'giraffa' | 'animal' | 'anaconda',
	`${string}a`
>;

// 'giraffa' | 'anaconda'
```

* starting **and** ending with `a`

```
type Matches = Extract<
	'cat' | 'dog' | 'giraffa' | 'animal' | 'anaconda',
	`a${string}a`
>;

// 'anaconda'
```

* starting **or** ending with `a`

```
type Matches = Extract<
	'cat' | 'dog' | 'giraffa' | 'animal' | 'anaconda',
	`a${string}` | `${string}a`
>;

// 'giraffa' | 'animal' | 'anaconda'
```

## Match Strings Containing a Substring

* containing `a`

```
type Matches = Extract<
	'cat' | 'dog' | 'giraffa' | 'animal' | 'anaconda',
	`${string}a${string}`
>;

// 'cat' | 'giraffa' | 'animal' | 'anaconda'
```

* containing `a` everywhere but start and end

```
type Matches = Exclude<
	Extract<
		'cat' | 'dog' | 'giraffa' | 'animal' | 'anaconda',
		`${string}a${string}`
	>,
	`a${string}` | `${string}a`
>;

// 'cat'
```

## Negative Matches

* not starting with `a`, `b`, `c`

```
type Matches = Exclude<
	'cat' | 'dog' | 'giraffa' | 'animal' | 'anaconda',
	`${'a' | 'b' | 'c'}${string}`
>;

// 'dog' | 'giraffa'
```

* not ending with `a`, `g`

```
type Matches = Exclude<
  'cat' | 'dog' | 'giraffa' | 'animal' | 'anaconda',
  `${string}${'a' | 'g'}`
>;

// 'cat' | 'animal'
```

* not containing `i`, `d`

```
type Matches = Exclude<
  'cat' | 'dog' | 'giraffa' | 'animal' | 'anaconda',
  `${string}${'i' | 'd'}${string}`
>;

// 'cat'
```

## Occurencies

* containing at least 3 times `a`

```
type Matches = Extract<
	'cat' | 'dog' | 'giraffa' | 'animal' | 'anaconda' | 'nananana' | 'xaaxaaxx',
	`${string}a${string}a${string}a${string}`
>;

// 'anaconda' | 'nananana' | 'xaaxaaxx'
```

* containing at most 3 times `a`

```
type Matches = Extract<
  Exclude<
  	'cat' | 'dog' | 'giraffa' | 'animal' | 'anaconda' | 'nananana' | 'xaaxaaxx',
  	`${string}a${string}a${string}a${string}a${string}`
  >,
  `${string}a${string}`
>;

// 'cat' | 'giraffa' | 'animal' | 'anaconda'
```