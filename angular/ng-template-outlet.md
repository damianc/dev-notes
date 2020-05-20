# `[ngTemplateOutlet]` vs. `*ngTemplateOutlet`

## Template to use

```
<ng-template #bookCard let-lang="language" let-data>
	<p>Title: {{ data.title }}</p>
	<p>Author: {{ data.author }}</p>
	<p>Language: {{ lang }}</p>
</ng-template>
```

### `[ngTemplateOutlet]`

```
<ng-container
	[ngTemplateOutlet]="bookCard"
	[ngTemplateOutletContext]="{language: 'PL', $implicit: {title: 'Atlas Kretów', author: 'Marian Ćwierć-Pobożny'}}">
</ng-container>
```

### `*ngTemplateOutlet`

```
<ng-container
	*ngTemplateOutlet="bookCard; context: {language: 'PL', $implicit: {title: 'Atlas Kretów', author: 'Marian Ćwierć-Pobożny'}}">
</ng-container>
```