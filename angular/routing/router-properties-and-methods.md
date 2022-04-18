# `Router` Properties and Methods

## Constructor

```
constructor(
  rootComponentType: Type<any>,
  urlSerializer: UrlSerializer,
  rootContexts: ChildrenOutletContexts,
  location: Location,
  injector: Injector,
  compiler: Compiler,
  config: Route[]
)
```

## Properties

* `events: Observable<Event>`
* `routerState: RouterState`
* `errorHandler: ErrorHandler`
* `malformedUriErrorHandler: (error: URIError, urlSerializer: UrlSerializer, url: string) => UrlTree`
* `navigated: boolean`
* `urlHandlingStrategy: UrlHandlingStrategy`
* `routeReuseStrategy: RouteReuseStrategy`
* `onSameUrlNavigation: 'reload' | 'ignore'`
* `paramsInheritanceStrategy: 'emptyOnly' | 'always'`
* `urlUpdateStrategy: 'deferred' | 'eager'`
* `relativeLinkResolution: 'legacy' | 'corrected'`
* `canceledNavigationResolution: 'replace' | 'computed'`
* `config: Route[]`
* `url: string`

## Methods

* `initialNavigation(): void`
* `setUpLocationChangeListener(): void`
* `getCurrentNavigation(): Navigation | null`
* `resetConfig(config: Route[]): void`
* `dispose(): void`
* `createUrlTree(commands: any[], navigationExtras: UrlCreationOptions = {}): UrlTree`
* `navigateByUrl(url: string | UrlTree, extras: NavigationBehaviorOptions = {skipLocationChange: false}): Promise<boolean>`
* `navigate(commands: any[], extras: NavigationExtras = {skipLocationChange: false}): Promise<boolean>`
* `serializeUrl(url: UrlTree): string`
* `parseUrl(url: string): UrlTree`
* `isActive(url: string | UrlTree, matchOptions: boolean | IsActiveMatchOptions): boolean`

 
## Related Specs

* [`ChildrenOutletContexts`](#childrenoutletcontexts-class)
* [`ComponentRef<C>`](#componentrefc-abstract-class)
* [`IsActiveMatchOptions`](#isactivematchoptions-interface)
* [`Location`](#location-class)
* [`Navigation`](#navigation-interface)
* [`NavigationBehaviorOptions`](#navigationbehavioroptions-interface)
* [`NavigationExtras`](#navigationextras-interface)
* [`OutletContext`](#outletcontext-class)
* [`ParamMap`](#parammap-interface)
* [`PopStateEvent`](#popstateevent-interface)
* [`Route`](#route-interface)
* [`RouteReuseStrategy`](#routereusestrategy-abstract-class)
* [`RouterOutletContract`](#routeroutletcontract-interface)
* [`SubscriptionLike`](#subscriptionlike-interface-rxjs)
* [`UrlCreationOptions`](#urlcreationoptions-interface)
* [`UrlHandlingStrategy`](#urlhandlingstrategy-abstract-class)
* [`UrlSegment`](#urlsegment-class)
* [`UrlSegmentGroup`](#urlsegmentgroup-class)
* [`UrlSerializer`](#urlserializer-abstract-class)
* [`UrlTree`](#urltree-class)

### `ChildrenOutletContexts` [class]

* `onChildOutletCreated(childName: string, outlet: RouterOutletContract): void`
* `onChildOutletDestroyed(childName: string): void`
* `onOutletDeactivated(): Map<string, OutletContext>`
* `onOutletReAttached(contexts: Map<string, OutletContext>)`
* `getOrCreateContext(childName: string): OutletContext`
* `getContext(childName: string): OutletContext | null`

### `ComponentRef<C>` [abstract class]

* `location: ElementRef`
* `injector: Injector`
* `instance: C`
* `hostView: ViewRef`
* `changeDetectorRef: ChangeDetectorRef`
* `componentType: Type<any>`
* `destroy(): void`
* `onDestroy(callback: Function): void`

### `IsActiveMatchOptions` [interface]

* `matrixParams: 'exact' | 'subset' | 'ignored'`
* `queryParams: 'exact' | 'subset' | 'ignored'`
* `paths: 'exact' | 'subset'`
* `fragment: 'exact' | 'ignored'`

### `Location` [class]

* `static normalizeQueryParams: (params: string) => string`
* `static joinWithSlash: (start: string, end: string) => string`
* `static stripTrailingSlash: (url: string) => string`
* `path(includeHash: boolean = false): string`
* `getState(): unknown`
* `isCurrentPathEqualTo(path: string, queryString: string = ''): boolean`
* `normalize(url: string): string`
* `prepareExternalUrl(url: string): string`
* `go(path: string, query: string = '', state: any = null): void`
* `replaceState(path: string, query: string = '', state: any = null): void`
* `forward(): void`
* `back(): void`
* `historyGo(relativePosition: number = 0): void`
* `onUrlChange(fn: (url: string, state: unknown) => void)`
* `subscribe(onNext: (value: PopStateEvent) => void, onThrow?: (exception: any) => void, onReturn?: () => void): SubscriptionLike`

### `Navigation` [interface]

* `id: number`
* `initialUrl: string | UrlTree`
* `extractedUrl: UrlTree`
* `finalUrl?: UrlTree`
* `trigger: 'imperative' | 'popstate' | 'hashchange'`
* `extras: NavigationExtras`
* `previousNavigation: Navigation | null`

### `NavigationBehaviorOptions` [interface]

* `skipLocationChange?: boolean`
* `replaceUrl?: boolean`
* `state?: Record<string, any>`

### `NavigationExtras` [interface]

#### [extends `UrlCreationOptions`]

* `relativeTo?: ActivatedRoute | null`
* `queryParams?: Params | null`
* `fragment?: string`
* `queryParamsHandling?: 'merge' | 'preserve' | '' | null`
* `preserveFragment?: boolean`

#### [extends `NavigationBehaviorOptions`]

* `skipLocationChange?: boolean`
* `replaceUrl?: boolean`
* `state?: Record<string, any>`

### `OutletContext` [class]

* `outlet: RouterOutletContract | null`
* `route: ActivatedRoute | null`
* `resolver: ComponentFactoryResolver | null`
* `children: ChildrenOutletContexts`
* `attachRef: ComponentRef<any> | null`

### `ParamMap` [interface]

* `keys: string[]`
* `has(name: string): boolean`
* `get(name: string): string | null`
* `getAll(name: string): string[]`

### `PopStateEvent` [interface]

* `pop?: boolean`
* `state?: any`
* `type?: string`
* `url?: string`

### `Route` [interface]

* `path?: string`
* `pathMatch?: string`
* `matcher?: UrlMatcher`
* `component?: Type<any>`
* `redirectTo?: string`
* `outlet?: string`
* `canActivate?: any[]`
* `canActivateChild?: any[]`
* `canDeactivate?: any[]`
* `canLoad?: any[]`
* `data?: Data`
* `resolve?: ResolveData`
* `children?: Route[]`
* `loadChildren?: () => Type<any> | NgModuleFactory<any> | Observable<Type<any>> | Promise<NgModuleFactory<any> | Type<any> | any>`
* `runGuardsAndResolvers?: 'pathParamsChange' | 'pathParamsOrQueryParamsChange' | 'paramsChange' | 'paramsOrQueryParamsChange' | 'always' | ((from: ActivatedRouteSnapshot, to: ActivatedRouteSnapshot) => boolean)`

### `RouteReuseStrategy` [abstract class]

* `shouldDetach(route: ActivatedRouteSnapshot): boolean`
* `store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void`
* `shouldAttach(route: ActivatedRouteSnapshot): boolean`
* `retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null`
* `shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean`

> `DetachedRouteHandle` type represents the detached route tree (`{}`)

### `RouterOutletContract` [interface]

* `isActivated: boolean`
* `component: Object | null`
* `activatedRouteData: Data`
* `activatedRoute: ActivatedRoute | null`
* `activateEvents?: EventEmitter<unknown>`
* `deactivateEvents?: EventEmitter<unknown>`
* `attachEvents?: EventEmitter<unknown>`
* `detachEvents?: EventEmitter<unknown>`
* `activateWith(activatedRoute: ActivatedRoute, resolver: ComponentFactoryResolver): void`
* `deactivate(): void`
* `detach(): ComponentRef<unknown>`
* `attach(ref: ComponentRef<unknown>, activatedRoute: ActivatedRoute): void`

### `SubscriptionLike` [interface [RxJS]]

> implementations: `Subject` (subs: `BehaviorSubject`, `ReplaySubject`, `AsyncSubject`), `Subscription` (subs: `Subscriber`)

* `closed: boolean`
* `unsubscribe(): void`

### `UrlCreationOptions` [interface]

* `relativeTo?: ActivatedRoute | null`
* `queryParams?: Params | null`
* `fragment?: string`
* `queryParamsHandling?: 'merge' | 'preserve' | '' | null`
* `preserveFragment?: boolean`

### `UrlHandlingStrategy` [abstract class]

> used for migration AngularJS -> Angular

* `shouldProcessUrl(url: UrlTree): boolean`
* `extract(url: UrlTree): UrlTree`
* `merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree`

### `UrlSegment` [class]

* `path: string`
* `parameters: {[name: string]: string}`
* `parameterMap: ParamMap`
* `toString(): string`

### `UrlSegmentGroup` [class]

* `parent: UrlSegmentGroup | null`
* `segments: UrlSegment[]`
* `children: {[key: string]: UrlSegmentGroup}`
* `numberOfChildren: number`
* `hasChildren(): boolean`
* `toString(): string`

### `UrlSerializer` [abstract class]

* `parse(url: string): UrlTree`
* `serialize(tree: UrlTree): string`

### `UrlTree` [class]

* `root: UrlSegmentGroup`
* `queryParams: Params`
* `fragment: string | null`
* `queryParamMap: ParamMap`
* `toString(): string`