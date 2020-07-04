# Fibonacci Generator

```
function* fib() {
    let pre = 0;
    let curr = 1;
    
    while (true) {
    	yield pre;
        pre = [curr, curr += pre][0];
    }
}
```

```
const fibGen = fib();

for (let i = 1; i <= 12; i++) {
    let { value } = fibGen.next();
    console.log(value);
}

// 0 1 1 2 3 5 8 13 21 34 55 89
```