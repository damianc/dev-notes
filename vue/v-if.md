# `v-if`

```
<div v-if="success">
	Operation has been finished!
</div>
```

## `v-else`

```
<div v-if="success">
	Operation has been finished!
</div>
<div v-else>
	Operation in progress...
</div>
```

## `v-else-if`

```
<div v-if="status == 'success'">
	Operation has been finished!
</div>
<div v-else-if="status == 'progress'">
	Operation in progress...
</div>
<div v-else-if="status == 'error'">
	Operation failed!
</div>
<div v-else>
	Operation is ready to start.
</div> 
```

## Conditional Group

```
<template v-if="success">
	<h1>Success!</h1>
	<p>Operation has been finished successfully.</p>
</template>
```

## `v-show`

* `v-show` does not support the `<template>` element
* `v-show` does not work with `v-else`

```
<div v-show="success">
	Operation has been finished!
</div>
```

| `v-if` | `v-show` |
|--------|----------|
| re-creating and destroying child components and event listeners | only toggles the `display` CSS property |
| the conditional block won’t be rendered until the condition becomes true for the first time | the element is always rendered regardless of initial condition (CSS-based toggling) |
| higher toggle costs | higher initial render costs |
|  prefer `v-if` if the condition is unlikely to change at runtime | prefer `v-show` if you need to toggle something very often |
