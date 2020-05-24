# Named Outlets

## `app-routing.module.ts`

```
{
	path: 'tiny/a',
	component: ATinyComponent
},
{
	path: 'tiny/b',
	component: BTinyComponent,
	outlet: 'aside'
},
{
	path: 'tiny/c',
	component: CTinyComponent
},
{
	path: 'tiny/c',
	component: CTinyComponent,
	outlet: 'aside'
},
```

## `app.component.html`

```
<router-outlet></router-outlet>
<router-outlet name="aside"></router-outlet>
```

```
<!-- or: [routerLink]="['tiny', 'a']" -->
<!-- or just: routerLink="tiny/a" -->
<button [routerLink]="{outlets: {primary: ['tiny', 'a']}}">
	A @primary
</button>

<button [routerLink]="{outlets: {aside: ['tiny', 'b']}}">
	B @aside
</button>

<button [routerLink]="{outlets: {primary: ['tiny', 'c'], aside: ['tiny', 'c']}}">
	C @both
</button>

<!-- or: [routerLink]="['tiny', 'c']" -->
<!-- or just: routerLink="tiny/c" -->
<button [routerLink]="{outlets: {primary: ['tiny', 'c']}}">
	C @primary
</button>

<button [routerLink]="{outlets: {aside: ['tiny', 'c']}}">
	C @aside
</button>
```