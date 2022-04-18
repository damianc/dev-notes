# Router Events

```
import { Event, RouterEvent, Router } from '@angular/router';

class MyService {
  constructor(public router: Router) {
    router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
    ).subscribe((e: RouterEvent) => {
      ...
    });
  }
}
```

> `Event` from `@angular/router` = `RouterEvent | RouteConfigLoadStart | RouteConfigLoadEnd | ChildActivationStart | ChildActivationEnd | ActivationStart | ActivationEnd | Scroll`

## Events

<table>
  <thead>
    <tr>
      <th>Event</th>
      <th>Triggered when...</th>
      <th>Constructor</th>
      <th>Spec</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4">
        * - extends <code>RouterEvent</code>
      </td>
    </tr>
    <tr>
      <td><code>NavigationStart</code>*</td>
      <td>navigation starts</td>
      <td><code>(id, url, navigationTrigger = 'imperative', restoredState = null)</code></td>
      <td>
           <ul>
             <li>
               <code>navigationTrigger?: 'imperative' | 'popstate' | 'hashchange'</code>
             </li>
             <li>
             <code>restoredState?: { [k: string]: any; navigationId: number; } | null</code>
             </li>
           </ul>
      </td>
   </tr>
   <tr>
      <td><code>RouteConfigLoadStart</code></td>
      <td>before the <code>Router</code> lazy loads a route configuration</td>
      <td><code>(route: Route)</code></td>
      <td>
           <ul>
             <li>
               <code>route: Route</code>
             </li>
           </ul>
      </td>
   </tr>
   <tr>
      <td><code>RouteConfigLoadEnd</code></td>
      <td>after a route has been lazy loaded</td>
      <td><code>(route: Route)</code></td>
      <td>
           <ul>
             <li>
               <code>route: Route</code>
             </li>
           </ul>
      </td>
   </tr>
   <tr>
      <td><code>RoutesRecognized</code>*</td>
      <td>the <code>Router</code> parses the URL and the routes are recognized</td>
      <td rowspan="2"><code>(id, url, urlAfterRedirects, state)</code></td>
      <td rowspan="2">
           <ul>
             <li>
               <code>urlAfterRedirects: string</code>
             </li>
             <li>
               <code>state: RouterStateSnapshot</code>
             </li>
           </ul>
      </td>
   </tr>
   <tr>
      <td><code>GuardsCheckStart</code>*</td>
      <td>the <code>Router</code> begins the <em>Guards phase</em> of routing</td>
   </tr>
   <tr>
      <td><code>ChildActivationStart</code></td>
      <td>the <code>Router</code> begins activating a route's children</td>
      <td rowspan="2"><code>(snapshot: ActivatedRouteSnapshot)</code></td>
      <td rowspan="2">
           <ul>
             <li>
               <code>snapshot: ActivatedRouteSnapshot</code>
             </li>
           </ul>
      </td>
   </tr>
   <tr>
      <td><code>ActivationStart</code></td>
      <td>the <code>Router</code> begins activating a route</td>
   </tr>
   <tr>
      <td><code>GuardsCheckEnd</code>*</td>
      <td>the <code>Router</code> finishes the <em>Guards phase</em> of routing successfully</td>
      <td><code>(id, url, urlAfterRedirects, state, shouldActivate)</code></td>
      <td>
           <ul>
             <li>
               <code>urlAfterRedirects: string</code>
             </li>
             <li>
               <code>state: RouterStateSnapshot</code>
             </li>
             <li>
               <code>shouldActivate: boolean</code>
             </li>
           </ul>
      </td>
   </tr>
   <tr>
      <td><code>ResolveStart</code>*</td>
      <td>the <code>Router</code> begins the <em>Resolve phase</em> of routing</td>
      <td rowspan="2"><code>(id, url, urlAfterRedirects, state)</code></td>
      <td rowspan="2">
           <ul>
             <li>
               <code>urlAfterRedirects: string</code>
             </li>
             <li>
               <code>state: RouterStateSnapshot</code>
             </li>
           </ul>
      </td>
   </tr>
   <tr>
      <td><code>ResolveEnd</code>*</td>
      <td>the <code>Router</code> finishes the <em>Resolve phase</em> of routing successfully</td>
   </tr>
   <tr>
      <td><code>ChildActivationEnd</code></td>
      <td>the <code>Router</code> finishes activating a route's children</td>
      <td rowspan="2"><code>(snapshot: ActivatedRouteSnapshot)</code></td>
      <td rowspan="2">
           <ul>
             <li>
               <code>snapshot: ActivatedRouteSnapshot</code>
             </li>
           </ul>
      </td>
   </tr>
   <tr>
      <td><code>ActivationEnd</code></td>
      <td>the <code>Router</code> finishes activating a route</td>
   </tr>
   <tr>
      <td><code>NavigationEnd</code>*</td>
      <td>navigation ends successfully</td>
      <td><code>(id, url, urlAfterRedirects)</code></td>
      <td>
           <ul>
             <li>
               <code>urlAfterRedirects: string</code>
             </li>
           </ul>
      </td>
   </tr>
   <tr>
      <td><code>NavigationCancel</code>*</td>
      <td>navigation is canceled (this can happen when a <em>Route Guard</em> returns <code>false</code> during navigation, or redirects by returning a <code>UrlTree</code></td>
      <td><code>(id, url, reason)</code></td>
      <td>
           <ul>
             <li>
               <code>reason: string</code>
             </li>
           </ul>
      </td>
   </tr>
   <tr>
      <td><code>NavigationError</code>*</td>
      <td>navigation fails due to an unexpected error</td>
      <td><code>(id, url, error)</code></td>
      <td>
           <ul>
             <li>
               <code>error: any</code>
             </li>
           </ul>
      </td>
   </tr>
   <tr>
      <td><code>Scroll</code></td>
      <td>represents a scrolling event</td>
      <td><code>(routerEvent, position, anchor)</code></td>
      <td>
           <ul>
             <li>
               <code>routerEvent: NavigationEnd</code>
             </li>
             <li>
               <code>position: [number, number] | null</code>
             </li>
             <li>
               <code>anchor: string | null</code>
             </li>
           </ul>
      </td>
   </tr>
  </tbody>
</table>

## Specs

### `RouterEvent` [class]

* `constructor(id: number, url: string)`
* `id: number`
* `url: string`

### `RouterState` [class]

* `snapshot: RouterStateSnapshot`

### `RouterStateSnapshot` [class]

* `url: string`

### `ActivatedRouteSnapshot` [class]

* `routeConfig: Route | null`
* `url: UrlSegment[]`
* `params: Params`
* `queryParams: Params`
* `fragment: string | null`
* `data: Data`
* `outlet: string`
* `component: Type<any> | string | null`
* `root: ActivatedRouteSnapshot`
* `parent: ActivatedRouteSnapshot | null`
* `firstChild: ActivatedRouteSnapshot | null`
* `children: ActivatedRouteSnapshot[]`
* `pathFromRoot: ActivatedRouteSnapshot[]`
* `paramMap: ParamMap`
* `queryParamMap: ParamMap`

### `ActivatedRoute` [class]

* `snapshot: ActivatedRouteSnapshot`
* `url: Observable<UrlSegment[]>`
* `params: Observable<Params>`
* `queryParams: Observable<Params>`
* `fragment: Observable<string | null>`
* `data: Observable<Data>`
* `outlet: string`
* `component: Type<any> | string | null`
* `routeConfig: Route | null`
* `root: ActivatedRoute`
* `parent: ActivatedRoute | null`
* `firstChild: ActivatedRoute | null`
* `children: ActivatedRoute[]`
* `pathFromRoot: ActivatedRoute[]`
* `paramMap: Observable<ParamMap>`
* `queryParamMap: Observable<ParamMap>`

```
export class SomeComponent {
  constructor (route: ActivatedRoute) {
    const id: Observable<string> = route.params.pipe(
      map(p => p.id)
    );
    const url: Observable<string> = route.url.pipe(
      map(segments => segments.join(''))
    );
    
    // route.data includes both `data` and `resolve`
    const user = route.data.pipe(
      map(d => d.user)
    );
  }
}
```