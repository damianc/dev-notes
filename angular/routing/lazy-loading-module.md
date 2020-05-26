# Lazy Loading a Module

```
{
	path: 'books',
	loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
}
```

## `books.module.ts` (Variant A)

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';

const routing = RouterModule.forChild([
	{ path: '', component: BooksComponent }
]);

@NgModule({
	declarations: [BooksComponent],
	imports: [CommonModule, routing],
	exports: [BooksComponent, RouterModule]
})
export class CounterModule {}
```

## `books.module.ts` (Variant B)

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRouter } from './books-routing.module';
import { BooksComponent } from './books.component';

@NgModule({
	declarations: [BooksComponent],
	imports: [CommonModule, BooksRouter]
})
export class BooksModule {}
```

### `books-routing.module.ts`

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books.component';

const routing: Routes = [
	{ path: '', component: BooksComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routing)],
	exports: [RouterModule]
})
export class BooksRouter {}
```