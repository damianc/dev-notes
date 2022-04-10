# Dynamic Object Destructuring Assignment

If dynamic properties are present in an object destructuring assignment, an alias must be used:

```
const obj = { a: 1, b: 2 };
const key = 'a';

const { [key]: k } = obj;
// k = 1
// key = 'a'

const { [key] } = obj;
// SyntaxError: Unexpected token '['
```

## Multiple Dynamic Properties

```
function describePerson(personInfo, nameKey, ageKey) {
  const {
    [nameKey]: name,
    [ageKey]: age
  } = personInfo;

  return `${name} is ${age}`;
}

describePerson({ name: 'John', age: 20, sex: 'M' }, 'name', 'age')
// 'John is 20'

describePerson({ firstName: 'John', currentAge: 20, sex: 'M' }, 'firstName', 'currentAge')
// 'John is 20'
```

## In Function Parameters

```
function totalAmount(items, amountField, numberField) {
  return items.reduce((acc, { [amountField]: amount, [numberField]: x }) => {
    return acc + amount * x;
  }, 0);
}

totalAmount([
  {
    name: 'Milk',
    price: 2.50,
    x: 2
  }, {
    name: 'Water',
    price: 1.50,
    x:6
  }, {
    name: 'Milk',
    price: 2.50,
    x: 1
  }, {
    name: 'Chocolate',
    price: 2.75,
    x: 2
  }
], 'price', 'x')
// 22

(2 * 2.50) + (6 * 1.50) + (1 * 2.50) + (2 * 2.75)
// 22
```