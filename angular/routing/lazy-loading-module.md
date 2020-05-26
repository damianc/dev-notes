# Lazy Loading a Module

```
{
	path: 'books',
	loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
}
```

## `books.module.ts`

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';

const routing = RouterModule.forChild([
	{ path: '', component: BooksComponent }
]);

@NgModule({
	imports: [CommonModule, routing],
	declarations: [BooksComponent],
	exports: [BooksComponent, RouterModule]
})
export class CounterModule {}
```