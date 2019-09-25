# Advanced Types

## Intersection Types

```
interface Person {
	name: string;
	surname: string;
}

interface Address {
	street: string;
	city: string;
	zip: number | string;
}

getPerson(): Person & Address {
	return {
		name: 'John',
		surname: 'Smith',
		street: 'Roosevelt St. 142',
		city: 'Los Angeles',
		zip: '93535'
	};
}
```

## Union Types

```
getZipCode(): number | string {
	return '00-000';
}
```

> If we have a value that has a union type, we can only access members that are **common to all types in the union**.

```
interface Category {
	name: string;
	addSubcategory(child: Category);
}

interface Tag {
	name: string;
	addSubtag(child: Tag);
}

getTaxonomy(taxonomy: Category | Tag) {
	return [
		taxonomy.name,
		taxonomy.addSubtag // ERROR
	];
}
```

Fix of the above:

```
getTaxonomy(taxonomy: Category | Tag) {
	var addChild;

	if ((taxonomy as Category).addSubcategory) {
		addChild = (taxonomy as Category).addSubcategory;
	} else if ((taxonomy as Tag).addSubtag) {
		addChild = (taxonomy as Tag).addSubtag;
	}

	return [
		taxonomy.name,
		addChild
	];
}
```
