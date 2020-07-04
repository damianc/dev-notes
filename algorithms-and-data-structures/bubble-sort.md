# Bubble Sort

```
function bubbleSort(arr) {
    for (let i = 0, n = arr.length - 1; i < n; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            bubbleSort(arr);
        } else continue;
    }
    
    return arr;
}

bubbleSort([1, 6, 8, 3, -7, -4, 0, 5, 7, 3]);
// [-7, -4, 0, 1, 3, 3, 5, 6, 7, 8]
```

## Mechanism

<table>
	<tr>
		<th>value</th> <th>comment</th>
	</tr>
	<tr>
		<td>[<b>1, 4</b>, 2, 3]</td> <td>ok (1 <b><=</b> 4)</td>
	</tr>
	<tr>
		<td>[1, <b>4, 2</b>, 3]</td> <td>wrong (4 <b>not <=</b> 2)</td>
	</tr>
	<tr>
		<td colspan="2">swap &rarr; [1, <b>2, 4</b>, 3] <br/> and repeat</td>
	</tr>
	<tr>
		<td>[<b>1, 2</b>, 4, 3]</td> <td>ok (1 <b><=</b> 2)</td>
	</tr>
	<tr>
		<td>[1, <b>2, 4</b>, 3]</td> <td>ok (2 <b><=</b> 4)</td>
	</tr>
	<tr>
		<td>[1, 2, <b>4, 3</b>]</td> <td>wrong (4 <b>not <=</b> 3)</td>
	</tr>
	<tr>
		<td colspan="2">swap &rarr; [1, 2, <b>3, 4</b>] <br/> and repeat</td>
	</tr>
	<tr>
		<td>[<b>1, 2</b>, 3, 4]</td> <td>ok (1 <b><=</b> 2)</td>
	</tr>
	<tr>
		<td>[1, <b>2, 3</b>, 4]</td> <td>ok (2 <b><=</b> 3)</td>
	</tr>
	<tr>
		<td>[1, 2, <b>3, 4</b>]</td> <td>ok (3 <b><=</b> 4)</td>
	</tr>
</table>