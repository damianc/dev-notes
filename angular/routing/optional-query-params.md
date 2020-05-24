# Optional Params vs. Query Params

```
<button [routerLink]="['path', {a: 1, b: 2}]" [queryParams]="{c: 3, d: 4}">
	Process
</button>
```

Final link: `hostname/path;a=1;b=2?c=3&d=4`