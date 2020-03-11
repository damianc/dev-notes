# Template Syntax

## Interpolation

```
<span>Status: {{ status }}</span>
```

### One-time Interpolation

```
<span v-once>Original status: {{ status }}</span>
```

> Keep in mind this will also affect any other bindings on the same node.

## Raw HTML

```
<span v-html="htmlMarkup"></span>
```

Markup is interpreted as plain HTML - data bindings are ignored.

> Only use HTML interpolation on trusted content and **never** on user-provided content (XSS).

## Attributes

```
<div :id="dynamicId">...</div>
```

### Boolean Attributes

```
<button :disabled="isButtonDisabled">
	Button
</button>
```

If `isButtonDisabled` has the value of `null`, `undefined`, or `false`, the `disabled` attribute will not even be included in the rendered `<button>` element.

## JS Expressions

```
{{ number + 1}}

{{ ok ? 'YES' : 'NO' }}

{{ message.toUpperCase() }}

<div :id="'list' + id">...</div>
```

Template expressions are sandboxed and only have access to a whitelist of globals: `Infinity`, `undefined`, `NaN`, `isFinite`, `isNaN`, `parseFloat`, `parseInt`, `decodeURI`, `decodeURIComponent`, `encodeURI`, `encodeURIComponent`, `Math`, `Number`, `Date`, `Array`, `Object`, `Boolean`, `String`, `RegExp`, `Map`, `Set`, `JSON`, `Intl`, and `require` for Webpack/Browserify.

## Directives

```
<p v-if="seen">...</div>
```

### Arguments

```
<a v-bind:href="url">...</a>

<a v-on:click="doStuff">...</a>
```

### Dynamic Arguments

Starting on version **2.6.0**, it is also possible to use a JS expression in a directive argument by wrapping it with square brackets.

```
<a v-bind:[attrName]="url">...</a>

<a v-on:[eventName]="doStuff">...</a>
```

* dynamic arguments are expected to evaluate to a string or `null` (removing the binding)
* dynamic arguments expressions should not contain invalid characters for HTML attribute names (such as spaces and quotes)

```
<a v-bind:['foo' + bar]="value">...</a>
```

* when using in-DOM templates (written in an HTML file), you should avoid naming keys with uppercase characters - browsers will coerce them into lowercase

```
<!--
This will be converted to :[someattr] in in-DOM templates.
Unless you have a "someattr" property in your instance, your code won't work.
-->
<a :[someAttr]="value">...</a>
```

## Modifiers

```
<form @submit.prevent="onSubmit">
	...
</form>
```

## Shorthands

```
<a v-bind:href="url">...</a>

<a :href="url">...</a>

<a :[key]="url">...</a>
```

```
<a v-on:click="doStuff">...</a>

<a @click="doStuff">...</a>

<a @[event]="doStuff">...</a>
```