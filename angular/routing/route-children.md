# Route Children

```
{
	path: 'parent-one',
	component: Parent,
	children: [
		{
			path: 'child-one',
			component: Child,
			children: [
				{
					path: 'grandchild-one',
					component: GrandChild
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
export class Parent {}
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
export class Child {}
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
export class GrandChild {}
```