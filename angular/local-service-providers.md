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
export class ZooComponent {
}
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
export class ZooComponent {
}
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
