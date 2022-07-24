# ObjQL / ObjDB

```
const results = ObjQL
  .from(collection)
  .select('*')
  .where({
    age: 18
  })
  .sort('name')
  .limit(2, 3);
```

## Compound Fields

```
.select('*', item => ({
  desc: `${item.name} being ${item.age}`
})
```

> If some field are empty:
> `Adam being undefined`

### Dependencies of Compound Fields

```
.select('*', item => ({
  desc: `...`
}), ['name', 'age'])
```

### `undefined` Replacement

```
.select('*', item => ({
  desc: `...`
}), [], '-')
```

require `a` and `b`; `y` and `z`, if not present, replace with `-`:

```
.select('*', item => ({
  desc: `${a} ${b} and ${y} ${z}`
}), ['a', 'b'], '-')
```

> CONFIG: `perceiveAsLack: [undefined, null]`

## `select()` Parameter

* `.select('*')`
* `.select(ObjQL.ALL)`

### Particular Fields

```
.select(['id', 'name', 'age'])
```

### Selector Function

```
.select((_, state) => {
  const fields = ['id', 'name', 'age'];
  
  if (state.get('fullInfo') === true) {
    fields.push('city');
  }

  return fields;
})
```

```
.select((record, state) => {
  const fields = ['id', 'name', record['age']];

  if (state.get('bio')) {
    fields.push(
      comp('bio')`${record.name} being ${record.age}`
      // comp('bio') ??
    );
  }

  return fields;
})
```

## `select()` Signatures

```
select(
  fields: string | string[],
  compoundFn?: (item: any) => Record<string, any>,
  compoundFnDeps?: string[],
  lackReplacement?: string
)
```

```
select(
  selectorFn: (record: any, state?: Record<string, any>) => string[]
)
```

## "State" Controller

```
function userSelector(record, state) {
  const fields = ['id', 'name', 'age'];

  if (state.get('fullInfo')) {
    fields.push(
      'city',
      comp('bio')`${record.name} being ${record.age}`
    );
  }

  return fields;
}

...

ObjQL.set('fullInfo', true);
coll.select(userSelector)...
ObjQL.unset('fullInfo');
```

## Matcher Shortcuts

> `{ name: 'John' }` -> `{ name: ObjQL.equal('John') }`

<table>
<tr>
  <td><pre>'foo'</pre></td>
  <td><pre>ObjQL.equal('foo')</pre></td>
</tr><tr>
  <td><pre>l`20`</pre></td>
  <td><pre>ObjQL.looseEqual('20')</pre></td>
</tr><tr>
  <td><pre>/^J/</pre></td>
  <td><pre>ObjQL.regExp(/^J/)</pre></td>
</tr><tr>
  <td><pre>new Set(['A', 'B'])</pre></td>
  <td><pre>ObjQL.in(['A', 'B'])</pre></td>
</tr><tr>
  <td><pre>[20, 32]</pre></td>
  <td><pre>ObjQL.range(20, 32)</pre></td>
</tr><tr>
  <td><pre>(...) => ...</pre></td>
  <td><pre>ObjQL.match((...) => ...)</pre></td>
</tr><tr>
  <td><pre>r`field`</pre></td>
  <td><pre>ObjQL.ref('field')</pre></td>
</tr><tr>
  <td><pre>p`%A_%`</pre></td>
  <td><pre>ObjQL.like('%A_%')</pre></td>
</tr>
</table>

> CONFIG: `disableShortcuts: ['range']`, `templateStringShortcuts: ['l', 'r', 'p']`

## Multiple Matchers for One Field

> `{ field: ..., field: ... }` - last overrides previous

### A: `compose()`

```
field: ObjQL.compose(
  ObjQL.minLength(4),
  ObjQL.contains(ObjQL.NUM & ObjQL.ALPHA & ObjQL.SYMBOL)
)
```

### B: Array

```
field: [
  ObjQL.minLength(4),
  ObjQL.contains(...)
]
```

### B2: Object

```
field: {
  minLength: 4,
  contains: ...
}
```

### C: `match()` and `apply()`

```
field: ObjQL.match(record => {
  return (
    ObjQL.apply(ObjQL.minLength(4), record)
    && // ??
    ObjQL.apply(ObjQL.contains(...), record)
  );
})
```

### C2: `match()` and `apply()`  + `compose()`

```
field: ObjQL.match(record => {
  return ObjQL.apply(
    ObjQL.compose(
      ObjQL.minLength(4),
      ObjQL.contains(...)
    ),
    record
  );
})
```

### C3: `match()` and `compose()` + Array

```
field: ObjQL.match(record => {
  return ObjQL.apply([
    ObjQL.minLength(4),
    ObjQL.contains(...)
  ], record);
})
```

```
function min4Chars(record) {
  return ObjQL.apply([
    ObjQL.minLength(4),
    ObjQL.contains(...)
  ], record);
}

...

field: ObjQL.match(min4Chars)
```

```
function minLengthChainOf(minLength, contains) {
  return record => ObjQL.apply([
    ObjQL.minLength(minLength),
    ObjQL.contains(contains)
  ], record);
}

...

field: ObjQL.match(minLengthChainOf(4, ...))
```

## Instances

```
const inst1 = ObjQL.from(collection);
const inst2 = ObjQL.from(collection);
```

## Bitwise Flags

* global

```
ObjQL.addFlag('PERMS', [
  'canRead', 'canWrite', 'canEdit'
])
```

* local

```
const coll = ObjQL.from(collection);

coll.addFlags(...);
  ||
ObjQL.addFlags[To](coll, 'PERMS', [...]);
```

### Use

```
fieldA: ObjQL.isFlagOn(PERMS.canEdit),
fieldB: ObjQL.isFlagOff(PERMS.canWrite)
```

```
field: ObjQL.isFlagOn([
  PERMS.canEdit, PERMS.canWrite
])
```

```
field: ObjQL.flags(
  r => r & PERMS.canEdit
)
```

## Utilize Matchers Outside

```
ObjQL.apply(
  ObjQL.minLength(4),
  value
)
```

```
ObjQL.apply([
  ObjQL.minLength(4),
  ObjQL.contains(...)
], value)
```

> `[]` or `compose()`

## Custom Matchers

```
ObjQL.addMatcher('isTen', (value, strict = true) => {
  return strict ? value === 10 : value == 10;
});

...

field: ObjQL.isTen(false)
```

### Utilize Custom Matchers Outside

```
ObjQL.apply(
  ObjQL.isTen(), value
)
```

### Global and Local Matchers

* global

```
ObjQL.addMatcher(name, cb);
```

* local

```
const coll = ObjQL.from(collection);

coll.add[Local]Matcher(name, cb);
  ||
ObjQL.add[Local]Matcher[To](coll, name, cb);
```

## Plugins Architecture

```
ObjQL.use(
  ObjQL.plugins.transactions
);
```

> `npm i -P objql objql-transactions`

### Array of Plugins

```
ObjQL.use([
  ObjQL.plugins.transactions,
  ObjQL.plugins.joins
]);
```

### Conditional Lazy-Loading of Plugins

```
ObjQL.useIfRequired({
  transactions: ObjQL.plugins.transaction
});

...

if (ObjQL.require('transactions')) {
  // ...
}
```

### Custom Plugins

[UNDER CONSTRUCTION]

```
ObjQL.addPlugin('transactions', new TransactionsPlugin());

class TransactionsPlugin extends ObjQL.Plugin {
  onUse(ctx) {
    this.ctx = ctx;
    this.copy = [...ctx];
    ObjQL.extend(ctx, 'start', this.start);
    ObjQL.extend(ctx, 'discard', this.discard);
    ObjQL.extend(ctx, 'commit', this.commit);
  }

  onAddItem(ctx, item, idx) {
    this.copy = [...this.copy, item];
    return false;
  }

  ...

  commit() {
    this.copy = [...this.copy];
    this.replace(this.ctx, this.copy);
  }
}
```

## Pagination

> as plugin ?

```
const pg = ObjQL.pagination(coll);

pg.get()
pg.next()
pg.page // 2
pg.pageSize // 10
pg.pages // 8
pg.length // 74
pg.lastPageSize // 4

pg.previous()
pg.last()
pg.first()
pg.goTo(2)
pg.goBy(2)
pg.goBy(-2)
pg.pageWithNthItem(12) // 2
pg.pageWithItem(r => r.id == 1020) // e.g., 4

pg.isFirstPage
pg.isLastPage
pg.children
pg.getAll() // [ [x10], [x10], ... ]
pg.getAllFlat() // [1, 2, ...
```

```
let res;
while ((res = pg.next())) {
  res.page // e.g., 1
  res.parent // pagination ?
  res.items // [...]
}
```

## Validators

* global
* local

```
const db = ObjQL.from([...]);

db.defineRules({
  name: {
    required: true
  },
  age: {
    required: true,
    min: 18
  },
  nick: {
    minLength: 2,
    maxLength: 50
  }
});
```

### Validation Errors

```
results.get(1).isValid
// false

results.get(1).errors
/*
  {
    name: {
      required: [true, false]
    },
    age: {
      min: [18, 16]
    },
    nick: {
      minLength: [2, 1]
    }
  }
*/
```

### Custom Validators

```
ObjQL.addValidator('inRange', (value, req) => {
  const [min, max] = req;
  return value >= min && value <= max;
});

ObjQL.addValidator('isPercent', value => {
  return value >= 0 && value <= 100;
});
```


```
fieldA: {
  inRange: [10, 20]
},
fieldB: {
  isPercent: true
}
```

* Errors of Custom Validators

```
fieldA: {
  inRange: [[10, 20], 8]
},
fieldB: {
  isPercent: [true, false]
}
```

### Validator Using Other Validators

#### A: Callback

```
ObjQL.addValidator('isPercent', value => {
  return ObjQL.apply(
    ObjQL.validators.inRange([0, 100]),
    value
  );
});
```

#### B: Validator Call

```
ObjQL.addValidator(
  'isPercent',
  ObjQL.validators.inRange([0, 100])
);
```

## SQL String

### `toSQL()`

```
ObjQL
  .from(collection)
  .select('*')
  .where({ ... })
  .toSQL()
```

or:

```
ObjQL.toSQL(
  ObjQL.from(collection).select('*').where({ ... })
)
```

### `fromSQL()` and Executing SQL Query

```
const sqlString = ObjQL.fromSQL(
  'SELECT * FROM collection'
);

// a)
ObjQL.from(collection).apply|exec(sqlString)

// b)
ObjQL.execSQL(sqlString, coll)
```

#### Prepared Statements

```
const query = ObjQL.prepareSQL(
  'SELECT * FROM %table WHERE id = %id'
);

const res = ObjQL.execSQL(query, {
  table: coll,
  id: 1
});
```

```
const query = ObjQL.prepareSQL(
  'SELECT * FROM % WHERE id = %'
);

const res = ObjQL.execSQL(query, [coll, 1]);
```

##### Mixed Approaches

```
const query = ObjQL.prepareSQL(
  'SELECT * FROM %table WHERE id = %id'
);

// first by name
// then fill empty placeholders in order of passing them
const res = ObjQL.execSQL(query, {
  id: 1
}, [coll]);
```

```
const query = ObjQL.prepareSQL(
  'SELECT * FROM %table WHERE id = %'
);

const res = ObjQL.execSQL(query, {
  table: coll
}, [1]);
```

## Procedures

### Local

```
ObjDB.defineProcedure('updateAge', (collection, procCache) => {
  const today = (new Date()).toDateString();

  if (!procCache['ageUpdates'][today]) {
    collection.select({
      dob: ObjQL.date('DD.MM.YYYY', today)
    }).update({
      age: ObjDB.increase()
    });

    procCache.set('ageUpdates', updates => {
      return {
        ...updates,
        [today]: true
      };
    });
  }
});
```

```
const c = ObjQL.from(collection);
c.call(ObjDB.proc.updateAge);
// { itemsAffected: 10, ... }
```

#### Arguments

```
ObjDB.defineProcedure(
  'updateAge',
  (collection, procCache, [ageColumn]) => { ... }
);
```

```
c.call(ObjDB.proc.updateAge, ['dob']);
```

### Global

```
ObjDB.defineProcedure('auditTables', (_, procCache) => {
  const stats = [];

  ObjDB.tables().forEach(table => {
    stats.push([
      table.name,
      table.size
    ]);
  });

  const today = (new Date()).toDateString();

  ObjDB.saveFile(
    `${today}.txt`,
    stats
      .map(([tbl, size]) => `${tbl}=${size}`)
      .join('\n')
  );
});
```

```
ObjDB.call(
  ObjDB.proc.auditTables
);
```

#### Arguments

```
ObjDB.defineProcedure(
  'auditTables',
  (_, procCache, [arg1, arg2]) => { ... }
);
```

```
ObjDB.call(
  ObjDB.proc.auditTables,
  [arg1, arg2]
);
```

#### Call Context - `callOn()`

> `callOn(proc: ObjQL.Procedure, args: any[], tbl: string | string[])`

```
ObjDB.callOn(
  ObjDB.proc.auditTables,
  [],
  'table'
);
```

```
ObjDB.callOn(
  ObjDB.proc.auditTables,
  [],
  ['table1', 'table2']
)
```

## Custom Data Formats

Custom data format (_CF_) can be used to reduce file size, for example.

* exporting to _CF_
* storing in _CF_ (beta feature)

```
ObjDB.defineFormat('CSV', recordMapper, collectionMapper);

function recordMapper(record) {
  const columns = ['name', 'age', 'city'];
  const rec = [];

  for (let column of columns) {
    if (column in record) {
      rec.push(record[column]);
    } else {
      rec.push('-');
    }
  }

  return rec.join('|');
}

function collectionMapper(collection) {
  return collection.join(ObjQL.NEW_LINE);
}
```

`collectionMapper()` receives records transformed by `recordMapper()`.
To omit this behavior, use common/combined mapper like this:

```
ObjDB.defineFormat(
  'CSV',
  null,
  null,
  (record, collection) => { ... }
)
```

> static constants: `ObjQL.NEW_LINE`
> dynamic constants: `ObjQL.NOW`

### Common Mapper Arguments Types

* `(name, null, null, (originalRecord, originalCollection) => ...)`
* `(name, r => ..., c => ..., (mappedRecord, mappedCollection) => ...)`
* `(name, r => ..., null, (mappedRecord, originalCollection) => ...)`
* `(name, null, c => ..., (originalRecord, mappedCollection) => ...)`

### Format Builder

```
ObjDB.defineFormat(
  'CSV',
  ObjDB.formatBuilder.fieldSeparator('|').recordSeparator('\n')
);
```

or:

```
ObjDB.defineFormat(
  'CSV',
  ObjDB.formatBuilder({
    fieldSeparator: '|',
    recordSeparator: '\n'
  })
);
```

----

## Match Strategy: Sequential - Order of Matching

```
ObjDB.set('matchStrategy', ObjDB.Sequential);

...

const coll = ObjQL.from(...);

ObjDB.setMatchingOrder(coll, ['name', 'age']);
  ||
coll.setMatchingOrder(['name', 'age']);
```

### Reuse

```
const matching = ObjDB.createMatchingSequence([
  'surname', 'name', 'city'
]);

ObjDB.setMatchingOrder(coll, matching);

// if collection has not items with `city` field
// or if table has not a column `city`
// it is still ok (not all passed columns are required)
```

### Manager

```
const matching = ObjDB.matchingManager();
matching.set('strategy', ObjDB.Sequential);
```

#### Variant A

```
matching.addMatching('citizen', [
  'surname', 'name', 'city'
]);
matching.setMatching('users', ObjDB.getMatching('citizen'));
```

#### Variant B

```
const citizen = matching.addMatching([
  'surname', 'name', 'city'
]);
matching.setMatching('users', citizen);
```