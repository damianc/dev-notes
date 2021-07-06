# Placeholder for `<input type="date" />`

```
<input
  type="text"
  placeholder="Type date"
  onfocus="this.type = 'date'"
  onblur="this.type = this.value.length ? 'date' : 'text'"
/>
```