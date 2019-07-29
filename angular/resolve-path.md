# Resolving path

If we have a structure like that:

```
src/
|---- app/
        |---- interfaces/
                |---- Iterable.ts
                |---- Readable.ts
        |---- app.module.ts
        |---- app.component.ts
```

To be able to import interface files like that:

```
import Iterable from '@interface/Iterable';
```

We must use `baseUrl` and `paths` within `compilerOptions` in _tsconfig.json_ file:

```
{
	"compilerOptions": {
		"baseUrl": "src",
		"paths": {
			"@interface/*": ["app/interfaces/*"]
		}
	}
}
```
