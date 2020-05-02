# Highlight Active Route

```
<button class="btn"
	routerLink="/"
	routerLinkActive="active">
	All categories
</button>
<button *ngFor="let category of categories"
	class="btn"
	[routerLink]="['/table', category]"
	routerLinkActive="active">
	{{ category }}
</button>
```

> `active` is a CSS class of the element

## Caveat

The *All categories* button is always highlighted, even if a particular category is selected. It's because `routerLinkActive` matches the route partially, and all the routes start with `/`.

Fix (`routerLinkActiveOptions` attribute):

```
<button class="btn"
	routerLink="/"
	routerLinkActive="active"
	routerLinkActiveOptions="{exact: true}">
	All categories
</button>
<button *ngFor="let category of categories"
	class="btn"
	[routerLink]="['/table', category]"
	routerLinkActive="active">
	{{ category }}
</button>
```
