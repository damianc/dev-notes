# Routing Guards

## Guard Implementation

* Guard Class

```
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, Route
} from '@angular/router';

import { Observable } from 'rxjs';
import { PermissionsService } from '@services/permissions.service';

@Injectable({
  providedIn: 'root'
})
export class ExampleModulePermsGuardService implements CanActivate {
  constructor(
    private permissions: PermissionsService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const expectedPermissionCode = route.data.expectedPermissionCode;
    return this.permissions.hasPermission(expectedPermissionCode);
  }
}
```

* Guard Use

```
...
const routes: Routes = [
  {
    path: '',
    canActivate: [ExampleModulePermsGuardService],
    data: {
      expectedPermissionCode: 'ExampleModule.ExamplePermission'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleModuleRoutingModule {}
```

## Inline Guard

```
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'example-module',
        canActivate: ['ExampleModuleGuard']
      }
      ...
    ])
  ],
  providers: [
    {
      provide: 'ExampleModuleGuard',
      useValue: (route) => (route: ActivatedRouteSnapshot) => ...
    }
  ]
})
export class AppModule {}
```

## Guard Methods

```
canLoad(
  route: Route,
  segments: UrlSegment[]
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
```

```
canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
```

```
canActivateChild(
  childRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
```

```
canDeactivate<T>(
  component: T,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
```
