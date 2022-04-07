# Local Service Providers

<table>
	<tr>
		<th></th>
		<th><code>@Directive</code></th>
		<th><code>@Component</code></th>
	</tr>
	<tr>
		<td><code>providers</code></td>
		<td colspan="2">local service providers both for the view and the content</td>
	</tr>
	<tr>
		<td><code>viewProviders</code></td>
		<td><i>NOT SUPPORTED</i></td>
		<td>local service providers for the view only</td>
	</tr>
</table>

## Example Directive Using a Service

```
import { Directive, Inject, HostBinding } from '@angular/core';

@Directive({
	selector: '[displayAnimal]'
})
export class DisplayAnimalDirective {
	constructor(@Inject('ANIMAL') anml: string) {
		this.anml = anml;
	}

	@HostBinding('textContent')
	anml: string;
}
```

# Using `providers`

## `zoo.component.ts`

```
import { Component } from '@angular/core';

@Component({
	selector: 'zoo',
	template: `
		<div>
			<div displayAnimal></div>
			<ng-content></ng-content>
		</div>
	`,
	providers: [
		{provide: 'ANIMAL', useValue: 'Elephant'}
	]
})
export class ZooComponent {}
```

## `app.module.ts`

```
...
@NgModule({
	...
	providers: [
		{provide: 'ANIMAL', useValue: 'Eagle'}
	]
})
export class AppModule {}
```

## `app.component.html`

```
<zoo>
  <div displayAnimal></div>
</zoo>
```

### Output

```
Elephant
Elephant
```

The `'ANIMAL'` service has been provided both to the view (markup within `template`) and the content (markup within `<zoo>`).

# Using `viewProviders`

## `zoo.component.ts` [updated @11]

```
import { Component } from '@angular/core';

@Component({
	selector: 'zoo',
	template: `
		<div>
			<div displayAnimal></div>
			<ng-content></ng-content>
		</div>
	`,
	viewProviders: [
		{provide: 'ANIMAL', useValue: 'Elephant'}
	]
})
export class ZooComponent {}
```

## `app.module.ts`

```
...
@NgModule({
	...
	providers: [
		{provide: 'ANIMAL', useValue: 'Eagle'}
	]
})
export class AppModule {}
```

## `app.component.html`

```
<zoo>
  <div displayAnimal></div>
</zoo>
```

### Output

```
Elephant
Eagle
```

The `'ANIMAL'` service has been provided to the view only (markup within `template`) and not to the content (markup within `<zoo>`).

# Decorators

| Decorator        | Description        |
|------------------|--------------------|
| `@Optional`      | Tells Angular to return `null` when it can't find the dependency, instead of throwing error. |
| `@SkipSelf`      | Skips the local injector and looks up in the hierarchy to find a proper provider. |
| `@Self`          | Makes the injector only looks at the component's injector for its providers, no further upward. |
| `@Host`          | Stops the upward search at the host component. The host component is typically the component requesting the dependency. However, when this component is projected into a parent component, that parent component becomes the host. |

## `@Optional` Decorator

### `zoo.component.ts`

```
import { Component, Inject, Optional } from '@angular/core';

@Component({
	selector: 'zoo',
	template: `
		<div>
			<div>ANIMAL: {{ anml }}</div>
			<ng-content></ng-content>
		</div>
	`,
	providers: [
		{provide: 'ANIMAL', useValue: 'Elephant'}
	]
})
export class ZooComponent {
	constructor(@Inject('NONEXISTING') @Optional() _anml: string) {
		this.anml = _anml || 'No Animal';
	}

	anml: string;
}

```

### `app.component.html`

```
<zoo></zoo>
```

### Output

```
ANIMAL: No Animal
```

## `@SkipSelf` Decorator

![Effect of the @SkipSelf() Decorator](https://github.com/damianc/dev-notes/blob/master/_images/angular/ng-providers-skip-self.png "@SkipSelf() Decorator")

### `zoo.component.ts`

```
import { Component, Inject } from '@angular/core';

@Component({
	selector: 'zoo',
	template: `
		<div>
			<div>ANIMAL: {{ anml }}</div>
			<ng-content></ng-content>
		</div>
	`,
	providers: [
		{provide: 'ANIMAL', useValue: 'Elephant'}
	]
})
export class ZooComponent {
	constructor(@Inject('ANIMAL') public anml: string) {}
}
```

### `park.component.ts`

```
import { Component, Inject, SkipSelf } from '@angular/core';

@Component({
	selector: 'park',
	template: `
		<div>
			<div>ANIMAL: {{ anml }}</div>
			<ng-content></ng-content>
		</div>
	`,
	providers: [
		{provide: 'ANIMAL', useValue: 'Squirrel'}
	]
})
export class ParkComponent {
	constructor(@Inject('ANIMAL') @SkipSelf() public anml: string) {}
}
```

### `lake.component.ts`

```
import { Component, Inject } from '@angular/core';

@Component({
	selector: 'lake',
	template: `
		<div>
			<div>ANIMAL: {{ anml }}</div>
			<ng-content></ng-content>
		</div>
	`
})
export class LakeComponent {
	constructor(@Inject('ANIMAL') public anml: string) {}
}
```

### `app.component.html`

```
<zoo>
  <park>
    <lake></lake>
  </park>
</zoo>
```

### Output

```
ANIMAL: Elephant
ANIMAL: Elephant
ANIMAL: Squirrel
```

The `@SkipSelf` makes a component skips its injector, but the child components can access the injector of the component with this decorator.

In other words, `@SkipSelf` makes the service providers accessible to the child components, but not to the component itself.

## `@Self` Decorator

![Effect of the @Self() Decorator](https://github.com/damianc/dev-notes/blob/master/_images/angular/ng-providers-self.png "@Self() Decorator")

### `zoo.component.ts`

```
import { Component, Inject } from '@angular/core';

@Component({
	selector: 'zoo',
	template: `
		<div>
			<div>ANIMAL: {{ anml }}</div>
			<ng-content></ng-content>
		</div>
	`,
	providers: [
		{provide: 'ANIMAL', useValue: 'Elephant'}
	]
})
export class ZooComponent {
	constructor(@Inject('ANIMAL') public anml: string) {}
}
```

### `park.component.ts`

```
import { Component, Inject, Self, Optional } from '@angular/core';

@Component({
	selector: 'park',
	template: `
		<div>
			<div>ANIMAL: {{ anml }}</div>
			<ng-content></ng-content>
		</div>
	`
})
export class ParkComponent {
	constructor(@Inject('ANIMAL') @Self() @Optional() _anml: string) {
		this.anml = _anml || 'No Animal';
	}

	anml: string;
}
```

### `lake.component.ts`

```
import { Component, Inject } from '@angular/core';

@Component({
	selector: 'lake',
	template: `
		<div>
			<div>ANIMAL: {{ anml }}</div>
			<ng-content></ng-content>
		</div>
	`
})
export class LakeComponent {
	constructor(@Inject('ANIMAL') public anml: string) {}
}
```

### `app.component.html`

```
<zoo>
  <park>
    <lake></lake>
  </park>
</zoo>
```

### Output

```
ANIMAL: Elephant
ANIMAL: No Animal
ANIMAL: Elephant
```

The `Park` component does not have the service provider for `ANIMAL` and `@Self` stops further searching upward.  
The child component `Lake` is not affected by this behavior and uses the service provider from the `Zoo` component.

## `Host` Decorator

![Effect of the @Host() Decorator](https://github.com/damianc/dev-notes/blob/master/_images/angular/ng-providers-host.png "@Host() Decorator")

### `zoo.component.ts`

```
import { Component, Inject } from '@angular/core';

@Component({
	selector: 'zoo',
	template: `
		<div>
			<div>ANIMAL: {{ anml }}</div>
			<ng-content></ng-content>
		</div>
	`,
	providers: [
		{provide: 'ANIMAL', useValue: 'Elephant'}
	]
})
export class ZooComponent {
	constructor(@Inject('ANIMAL') public anml: string) {}
}
```

### `park.component.ts`

```
import { Component, Inject } from '@angular/core';

@Component({
	selector: 'park',
	template: `
		<div>
			<div>ANIMAL: {{ anml }}</div>
			<ng-content></ng-content>
		</div>
	`,
	providers: [
		{provide: 'ANIMAL', useValue: 'Squirrel'}
	]
})
export class ParkComponent {
	constructor(@Inject('ANIMAL') public anml: string) {}
}
```

### `lake.component.ts`

```
import { Component, Inject, Host, Optional } from '@angular/core';

@Component({
	selector: 'lake',
	template: `
		<div>
			<div>ANIMAL: {{ anml }}</div>
			<ng-content></ng-content>
		</div>
	`
})
export class LakeComponent {
	constructor(@Inject('ANIMAL') @Host() @Optional() _anml: string) {
		this.anml = _anml || 'No Animal';
	}

	anml: string;
}
```

### `app.component.html`

```
<zoo>
  <park>
    <lake></lake>
  </park>
</zoo>
```

### Output

```
ANIMAL: Elephant
ANIMAL: Squirrel
ANIMAL: Squirrel
```

The `Lake` component does not have the service provider and `@Host` keeps searching until the host is reached.  
Here the `Park` component is the host as the `Lake` is projected into a `Park` component. Therefore, the `Squirrel` value defined in the `Park` is used in the `Lake` component.
