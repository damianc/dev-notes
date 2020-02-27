# Form Inputs and `v-model`

## Input Text

```
<input v-model="name" />
<p>Name is: {{ name }}</p>
```

* `data`:

```
name: ''
```

## Textarea

```
<textarea v-model="bio"></textarea>
<p style="white-space: pre-line">Bio is: {{ bio }}</p>
```

* `data`:

```
bio: ''
```

> Interpolation on textareas (`<textarea>{{text}}</textarea>`) won't work.
> Use `v-model` instead.

## Checkbox

```
<label>
	<input type="checkbox" v-model="accept" />
	{{ accept ? 'I accept' : 'I do not accept' }}
</label>
```

* `data`:

```
accept: false
```

### Non-Boolean Checkbox Values

```
<label>
	<input type="checkbox"
		v-model="subscription"
		value="SUB"
		true-value="YES"
		false-value="NO"
	/>
	Subscription: {{ subscription }}
</label>
```

* `data`:

```
subscription: 'NO'
```

> The `true-value` and `false-value` attributes don’t affect the input’s value attribute, because browsers don’t include unchecked boxes in form submissions. To guarantee that one of two values is submitted in a form (i.e. “yes” or “no”), use radio inputs instead.

### Checkbox with Array Value

```
<label>
	<input type="checkbox" value="Angular" v-model="stack" />
	Angular
</label>
<label>
	<input type="checkbox" value="React" v-model="stack" />
	React
</label>
<label>
	<input type="checkbox" value="Vue" v-model="stack" />
	Vue
</label>
<p>Stack: {{ stack }}</p>
```

* `data`:

```
stack: ['Vue']
```

## Radio

```
<label>
	<input type="radio" value="Free" v-model="plan" />
	Free
</label>
<label>
	<input type="radio" value="Premium" v-model="plan" />
	Premium
</label>
Selected plan: <span v-html="plan || '<i>none</i>'"></span>
```

* `data`:

```
plan: undefined
```

## Select

```
<select v-model="color">
	<option disabled value="">select color</option>
	<option>red</option>
	<option>green</option>
	<option value="BLUE">blue</option>
</select>
<p>Color: {{ color }}</p>
```

* `data`:

```
color: ''
```

## Select of Multiple

```
<select v-model="fruits" multiple>
	<option value="APPLE">apple</option>
	<option>pear</option>
	<option>banana</option>
</select>
<p>Fruits: {{ fruits }}</p>
```

* `data`:

```
fruits: ['APPLE', 'banana']
```

## Dynamic Select

```
<select v-model="directionChosen">
	<option disabled value="">select direction</option>
	<option v-for="direction in directionCollection" :value="direction.value">
		{{ direction.text }}
	</option>
</select>
<p>Chosen: {{ directionChosen }}</p>
```

* `data`:

```
directionChosen: '',
directionCollection: [
	{text: 'North', value: 'N'},
	{text: 'South', value: 'S'},
	{text: 'West', value: 'W'},
	{text: 'East', value: 'E'}
]
```