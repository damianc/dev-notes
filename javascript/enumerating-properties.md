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
    <td><code>Reflect.ownKeys()</code></td>
    <td rowspan="3"><i>[[OwnPropertyKeys]]</i></td>
    <td rowspan="3">YES</td>
    <td rowspan="3">YES</td>
    <td rowspan="3">standard-compatible</td>
  </tr>
  <tr>
    <td><code>Object.getOwnPropertyNames()</code></td>
  </tr>
  <tr>
    <td><code>Object.getOwnPropertySymbols()</code></td>
  </tr>
  <tr>
    <td><code>Object.keys()</code></td>
    <td rowspan="2"><i>[[OwnPropertyKeys]]</i> <br/> + filtering <br/> + sorting</td>
    <td rowspan="2">YES</td>
    <td rowspan="2">NO</td>
    <td rowspan="2">based on an implementation</td>
  </tr>
  <tr>
    <td><code>JSON.stringify()</code></td>
  </tr>
  <tr>
    <td><code>Reflect.enumerate()</code></td>
    <td rowspan="2"><i>[[Enumerate]]</i></td>
    <td rowspan="2">NO</td>
    <td rowspan="2">NO</td>
    <td rowspan="2">based on an implementation</td>
  </tr>
  <tr>
    <td><code>for...in</code></td>
  </tr>
</table>

## _[[GetOwnPropertyKeys]]_ Algorithm

<ol>
	<li>numeric keys are fetched in the ascending order</li>
	<li>text keys are fetched in a order they were being created</li>
	<li>symbols are fetched in a order they were being created</li>
</ol>
