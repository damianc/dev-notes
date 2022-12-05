# Contact Picker API

## Example

```
const btn = document.getElementById('getContacts');
const list = document.getElementById('contactsList');

btn.addEventListener('click', () => {
  if (navigator.contacts) {
    navigator.contacts.select(
      ['name', 'tel'],
      { multiple: true }
    ).then(console.log).catch(console.log);
  } else {
    console.log('Contacts API not supported');
  }
});
```

## select()

```
navigator.contacts.select(properties, options?)
```

- properties: `'name'`, `'tel'`, `'email'`, `'address'`, `'icon'`
- options: `{ multiple: true }` (`false` by default)

### Return Value

Returned value is a `Promise` that resolves with an array of objects with the following properites:

```
{
  address: Array<{
    city: string
    country: string
    dependentLocality: string
    organization: string
    phone: string
    postalCode: string
    recipient: string
    region: string
    sortingCode: string
    addressLine: string[]
  }>
  email: string[]
  icon: Blob[]
  name: string[]
  tel: string[]
}
```

## `getProperties()`

```
navigator.contacts.getProperties()
```

Returns a `Promise` that resolves with an array of strings - supported properites.