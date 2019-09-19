# Enumerating Properties

<table>
  <tr>
    <th>METHOD</th>
    <th>ALGORITHM</th>
    <th>ONLY OWN KEYS</th>
    <th>NON-ENUMERABLE KEYS</th>
    <th>KEYS ORDER</th>
  </tr>
  <tr>
    <td>`Reflect.ownKeys()`</td>
    <td rowspan="3">__[[OwnPropertyKeys]]__</td>
    <td rowspan="3">YES</td>
    <td rowspan="3">YES</td>
    <td rowspan="3">standard-compatible</td>
  </tr>
  <tr>
    <td>`Object.getOwnPropertyNames()`</td>
  </tr>
  <tr>
    <td>`Object.getOwnPropertySymbols()`</td>
  </tr>
  <tr>
    <td>`Reflect.enumerate()`</td>
    <td rowspan="2">__[[Enumerate]]__</td>
    <td rowspan="2">NO</td>
    <td rowspan="2">NO</td>
    <td rowspan="2">based on an implementation</td>
  </tr>
  <tr>
    <td>`for...in`</td>
  </tr>
  <tr>
    <td>`Object.keys()`</td>
    <td rowspan="2">__[[OwnPropertyKeys]]__ <br/> + filtering <br/> + sorting</td>
    <td rowspan="2">YES</td>
    <td rowspan="2">NO</td>
    <td rowspan="2">based on an implementation</td>
  </tr>
  <tr>
    <td>`JSON.stringify()`</td>
  </tr>
</table>
