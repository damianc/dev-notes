# Type Being Props Selector

## Type Definition

```
interface IMonthProps {
  startMonthId: string;
  endMonthId: string;

  startMonthName: string;
  endMonthName: string;

  startMonthSymbol: string;
  endMonthSymbol: string;
}

type IMonthRange<T = false> = T extends Array<infer F>
  ? {
    [k in (
      | (F extends 'id' ? keyof Pick<IMonthProps, 'startMonthId' | 'endMonthId'> : never)
      | (F extends 'name' ? keyof Pick<IMonthProps, 'startMonthName' | 'endMonthName'> : never)
      | (F extends 'symbol' ? keyof Pick<IMonthProps, 'startMonthSymbol' | 'endMonthSymbol'> : never)
    )]: string;
  }
  : IMonthProps;
```

## Use of the Type

| Usage | Inherited Fields |
|----|----|
| `IMonthRange` | `startMonthId`, `endMonthId`, `startMonthName`, `endMonthName`, `startMonthSymbol` and `endMonthSymbol` |
| `IMonthRange<['name']>` | `startMonthName` and `endMonthName` |
| `IMonthRange<['symbol', 'id']>` | `startMonthSymbol`, `endMonthSymbol`, `startMonthId` and `endMonthId` |

* inherit all fields of `IMonthProps`

```
interface IAcademicYear extends IMonthRange {
  year: number;
}

const academicYear: IAcademicYear = {
  year: 2020,
  startMonthId: '9',
  endMonthId: '6',
  startMonthName: 'September',
  endMonthName: 'June',
  startMonthSymbol: 'Sep',
  endMonthSymbol: 'Jun'
}
```

* inherit `*MonthName` and `*MonthSymbol` fields of `IMonthProps`

```
interface IAcademicYear extends IMonthRange<['name', 'symbol']> {
  year: number;
}

const academicYear: IAcademicYear = {
  year: 2020,
  startMonthName: 'September',
  endMonthName: 'June',
  startMonthSymbol: 'Sep',
  endMonthSymbol: 'Jun'
}
```

* inherit `*MonthId` fields of `IMonthProps`

```
const fullYear: IMonthRange<['id']> = {
  startMonthId: '1',
  endMonthId: '12'
};
```