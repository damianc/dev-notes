# Angular Modules

## Properties of `NgModule` Decorator

| Property | Description |
|----------|-------------|
| `declarations` | components, directives and pipes that belong to the module |
| `providers` | injectable objects available in the injector of the module |
| `imports` | NgModules whose exported declarables are available to templates in this module |
| `exports` | declarables that can be used in the template of any component that belongs to the module importing this module |
| `bootstrap` | components that are bootstraped when the module is bootstraped (automatically added to `entryComponents`) |
| `entryComponents` | components to compile when this NgModule is defined, so that they can be dynamically loaded into the view |
| `schemas` | schemas that declare elements to be allowed in the NgModule |
| `id` | name/path that uniquely identifies this NgModule in `getModuleFactory` |
| `jit` | whether to skip module by the AOT compiler and compile it using JIT |

* components listed in the `bootstrap` must be present in the `declarations`, too
* elements and properties that are neither Angular components nor directives must be declared in the `schemas`
* if `id` is left `undefined`, the NgModule is not registered with `getModuleFactory`

## Overview

* components, directives and pipes declared in `exports` can be used in the template of any component that is part of a NgModule that imports this NgModule
* `declarations` are private by default: if _ModuleA_ does not export `SomeComponent`, then only components within the _ModuleA_ can use `SomeComponent`
* if `ModuleA` imports `ModuleB` and also exports it, `exports` from `ModuleB` are available to an NgModule that imports `ModuleA`

## Components

### `bold.component.ts`

```
import { Component } from '@angular/core';

@Component({
	selector: 'bold',
	template: `<b><ng-content></ng-content></b>`
})
export class BoldComponent {}
```

### Other Components

| Component | `selector` | `template` |
|-----------|------------|------------|
| `ItalicComponent` | `italic` | `<i><ng-content></ng-content></i>` |
| `StrikeComponent` | `strike` | `<s><ng-content></ng-content></s>` |
| `UnderlineComponent` | `underline` | `<u><strike><ng-content></ng-content></strike></u>` |

## `HandTextFormattingModule.ts`

```
import { NgModule } from '@angular/core';

import { UnderlineComponent } from './underline.component';
import { StrikeComponent } from './strike.component';

@NgModule({
	declarations: [
		UnderlineComponent,
		StrikeComponent
	],
	exports: [
		UnderlineComponent
	]
})
export class HandTextFormattingModule {}
```

## `TextFormattingModule.ts`

```
import { NgModule } from '@angular/core';

import { BoldComponent } from './bold.component';
import { ItalicComponent } from './italic.component';

import { HandTextFormattingModule } from './handtextformatting.module';

@NgModule({
	imports: [
		HandTextFormatting
	],
	declarations: [
		BoldComponent,
		ItalicComponent
	],
	exports: [
		HandTextFormattingModule,
		BoldComponent,
		ItalicComponent
	]
})
export class TextFormattingModule {}
```

## `app.module.ts`

```
...
import { TextFormattingModule } from './textformatting.module';

@NgModule({
	...
	imports: [
		...
		TextFormattingModule
	]
})
```

## `app.component.html`

```
<div>
	Hello, <bold>Mr <italic>Smith</italic></bold>!
	<underline>you have a message</underline>
</div>
```

## Output

Hello, <b>Mr <i>Smith</i></b>!
<u><s>you have a message</s></u>
