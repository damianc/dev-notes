# Add Params to Current URL

```
@Component({ ... })
export class SthComponent {

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  private updateURL(filters: IFilters) {
    this.router.navigate([], {
      relativeTo: this.activeRoute,
      queryParams: {
        ...filters
      },
      queryParamsHandling: 'merge'
    });
  }

  ...

}
```