# Classes and Styles

```
<div :class="{active: isActive}">
	...
</div>
```

## `:class` can exist with `class`

```
<div class="group"
	:class="{active: isActive, 'text-danger': hasError}"
>...</div>
```

## Non in-line Object

An object with classes bindings can exist in `data` or `computed` property.

```
<div :class="classObject">
	...
</div>
```

### Pattern of Computed Property

```
<div :class="classObject">...</div>
```

```
data: {
	isActive: true,
	error: null
},
computed: {
	classObject: function () {
		return {
			active: this.isActive && !this.error,
			'text-danger': this.error && this.error.type === 'fatal'
		};
	}
}
```

## Array Syntax

* array of class names

```
<div :class="['static', fromDataProp]">...</div>
```

* conditional names in array

```
<div :class="[isActive ? activeClass : '', errorClass]">...</div>
```

* object syntax in array

```
<div :class="[{ active: isActive }, errorClass]">...</div>
```

## Inline Styles

* object syntax

```
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
	...
</div>
```

>  You can use either camelCase or kebab-case (use quotes with kebab-case) for the CSS property names.

```
<div :style="styleObject">...</div>
```

* array syntax

```
<div :style="[baseStyles, overridingStyles]">...</div>
```

## Property Prefixes

When using CSS property that requires vendor prefixes in `:style`, Vue will automatically detect and add appropriate prefixes to the applied styles.  
  
As for 2.3.0, array of values can be passed:

```
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
	...
</div>
```

This will only render the last value in the array which the browser supports. In this example, it will render `display: flex` for browsers that support the unprefixed version of flexbox.