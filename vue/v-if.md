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

## Prevent Reusing Elements with `key`

Vue tries to render elements as efficiently as possible, often re-using them instead of rendering from scratch.  
  
For example, if you allow users to toggle between multiple login types:

```
<template v-if="loginType === 'username'">
	<label>Username</label>
	<input placeholder="Enter your username" />
</template>
<template v-else>
	<label>Email</label>
	<input placeholder="Enter your email address" />
</template>
```

Then switching the loginType in the code above will not erase what the user has already entered. Since both templates use the same elements, the `<input>` is not replaced - just its placeholder.  
  
This isn’t always desirable though, so Vue offers a way for you to say: _“These two elements are completely separate - don’t re-use them.”_. Add a `key` attribute with unique values:

```
<template v-if="loginType === 'username'">
	<label>Username</label>
	<input placeholder="Enter your username" key="username-input" />
</template>
<template v-else>
	<label>Email</label>
	<input placeholder="Enter your email address" key="email-input" />
</template>
```

Now those inputs will be rendered from scratch each time you toggle.  
Note that the `<label>` elements are still efficiently re-used, because they don’t have `key` attributes.
