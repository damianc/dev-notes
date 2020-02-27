# Features Preview with Counter Example

```
<div id="counter">
	<span :title="counterStatus">
		{{ counter }}
	</span>
	<button @click="increase()">+</button>
	<b>|</b>
	increase by:
	<input v-model="increaseStep" />
	<button @click="increase(increaseStep)">APPLY</button>
</div>
```

```
const Counter = new Vue({
	el: '#counter',
	data: {
		counter: 0,
		increaseStep: 0
	},
	methods: {
		increase(step = 1) {
			this.counter += parseInt(step);
		}
	},
	computed: {
		counterStatus() {
			return 'Current value is ' + this.counter;
		}
	}
});
```