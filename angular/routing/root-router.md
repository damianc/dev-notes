# Adding a Router

## A - Const

```
import { Routes, RouterModule } from '@angular/router';
...

const routes: Routes = [
	{
		path: 'books',
		component: BooksComponent
	}
];

export const routing = RouterModule.forRoot(routes);
```

```
...
imports: [
	BrowserModule,
	routing
	...
]
...
```

## B - Module

```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
...

const routes: Routes = [
	{
		path: 'books',
		component: BooksComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class RoutingModule {}
```

```
...
imports: [
	BrowserModule,
	RoutingModule
	...
]
...
```