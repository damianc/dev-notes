# Resolvers

## Implementation

* create

```
@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<Book> {
  constructor(
    private books: BookService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.books.getRecord(route.paramMap.get('id'));
  }
}
```

* register

```
@NgModule({
  ...
  providers: [
    BookResolver
    ...
  ]
})
export class SomeModule {}
```

* use in routing

```
const routes: Routes = [{
  path: 'books/:id',
  component: BookComponent,
  resolve: {
    book: BookResolver
  }
} ...];

...
```

* use in component

```
constructor(private route: ActivatedRoute) {
  this.route.data.subscribe(({ book }) => ...);
}
```

## In-line Resolver Function

```
export const book: Book= { ... };

@NgModule({
  imports: [
    RouterModule.forRoot([{
      path: 'book/:id',
      component: BookComponent,
      resolve: {
        book: 'bookResolver'
      }
    }])
  ],
  providers: [{
    provide: 'bookResolver',
    useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => book
  }]
})
export class AppModule {}
```

## Resolvers and Guards

When both guard and resolvers are specified, the resolvers are not executed until all guards have run and succeeded. For example, consider the following route configuration:

```
{
  path: 'books',
  canActivate: [BooksListGuard],
  resolve: {
    books: BooksListResolver
  },
  children: [
    {
      path: ':id',
      guards: [BookGuard],
      component: BookComponent,
      resolve: {
        book: BookResolver
      }
    }
  ]
}
```

The order of execution is:

* `BooksListGuard`
* `BookGuard`
* `BooksListResolver`
* `BookResolver`