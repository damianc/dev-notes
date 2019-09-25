# Lifecycle Hooks

## Hooks Order

Having the following directive:

```
@Directive({
	selector: '[hooks]'
})
export class HooksDirective {
	@Input('number')
	@HostBinding('textContent')
	number: number;
}
```

And having used it like below:

```
<input type="number" [(ngModel)]="num" />
<div *ngIf="num != 2" hooks [number]="num"></div>
```

Hooks will be being called in the following order:

```
ELEMENT IS FIRSTLY INITIALIZED

ngOnChanges()
ngOnInit()
ngDoCheck()
ngAfterContentInit()
ngAfterContentChecked()
ngAfterViewInit()
ngAfterViewChecked()

INPUT GETS FOCUS THEN BLUR

ngDoCheck()
ngAfterContentChecked()
ngAfterViewChecked()

INPUT UPDATES TO VALUE 1

ngOnChanges()
ngDoCheck()
ngAfterContentChecked()
ngAfterViewChecked()
ngDoCheck()
ngAfterContentChecked()
ngAfterViewChecked()

INPUT GETS BLUR

ngDoCheck()
ngAfterContentChecked()
ngAfterViewChecked()

INPUT UPDATES TO VALUE 2

ngOnDestroy()

INPUT GETS FOCUS/BLUR

<no hook is called>

INPUT UPDATES TO VALUE 3

<the cycle is repeated>

ngOnChanges()
ngOnInit()
ngDoCheck()
ngAfterContentInit()
ngAfterContentChecked()
ngAfterViewInit()
ngAfterViewChecked()

...
```

## Summary

| Hook | Called | Notes | Purpose |
|------|--------|-------|---------|
| `ngOnChanges(changes: SimpleChanges)` | before `ngOnInit()` and whenever any data-bound input properties change | | Respond when Angular (re)sets data-bound input properties. |
| `ngOnInit()` | after the first `ngOnChanges()` | *called once* | Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties. |
| `ngDoCheck()` | during every change detection run, after the first `ngOnInit()` then after each call of `ngOnChanges()` | | Detect and act upon changes that Angular can't or won't detect on its own. |
| `ngAfterContentInit()` | after the first `ngDoCheck()` | *called once* | Respond after Angular projects external content into the component's view / the view that a directive is in. |
| `ngAfterContentChecked()` | after the first `ngAfterContentInit()` then after each call of `ngDoCheck()` | | Respond after Angular checks the content projected into the directive/component. |
| `ngAfterViewInit()` | after the first `ngAfterContentChecked()` | *called once* | Respond after Angular initializes the component's views and child views / the view that a directive is in. |
| `ngAfterViewChecked()` | after the first `ngAfterViewInit()` then after each call of `ngAfterContentChecked()` | | Respond after Angular checks the component's views and child views / the view that a directive is in. |
| `ngOnDestroy()` | just before Angular destroys the directive/component | | Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks. |
