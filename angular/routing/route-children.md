# Route Children

```
{
	path: 'parent-one',
	component: ParentComponent,
	children: [
		{
			path: 'child-one',
			component: ChildComponent,
			children: [
				{
					path: 'grandchild-one',
					component: GrandChildComponent
				}
			]
		}
	]
}
```

## `parent.component.ts`

```
@Component({
	selector: 'parentOne',
	template: `
		[PARENT]
			<button routerLink="child-one">Go to child</button>
			<router-outlet></router-outlet>
		[/PARENT]
	`
})
export class ParentComponent {}
```

## `child.component.ts`

```
@Component({
	selector: 'childOne',
	template: `
		[CHILD]
			<button routerLink="grandchild-one">Go to grandchild</button>
			<router-outlet></router-outlet>
		[/CHILD]
	`
})
export class ChildComponent {}
```

## `grandchild.component.ts`

```
@Component({
	selector: 'grandchildOne',
	template: `
		[GRANDCHILD]
			Hello grandchild!
		[/GRANDCHILD]
	`
})
export class GrandChildComponent {}
```