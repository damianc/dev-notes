# `this` in Static Methods

* [Reading Static Member](#reading-static-member)
* [Updating Static Member](#updating-static-member)

## Reading Static Member

```
class A {
  static x = 1;
}
class B extends A {}

console.log(A.x, B.x);
console.log(A.z, B.z);
// 1 1
// undefined undefined
```

## Reading Static Member with `this`

### Case 1: Child Class without Doubled Names

```
class A {
  static x = 1;
  static showX() {
    console.log(this.x);
  }
}
class B extends A {}

A.showX(); // 1
B.showX(); // 1
```

### Case 2: Child Class only with Doubled Property Name

```
class A {
  static x = 1;
  static showX() {
    console.log(this.x);
  }
}
class B extends A {
  static x = 100;
}

A.showX(); // 1
B.showX(); // 100
```

### Case 3: Child Class only with Doubled Method Name

```
class A {
  static x = 1;
  static showX() {
    console.log(this.x);
  }
}
class B extends A {
  static showX() {
    console.log(this.x);
  }
}

A.showX(); // 1
B.showX(); // 1
```

### Case 4: Child Class with Both Names Doubled

```
class A {
  static x = 1;
  static showX() {
    console.log(this.x);
  }
}
class B extends A {
  static x = 100;
  static showX() {
    console.log(this.x);
  }
}

A.showX(); // 1
B.showX(); // 100
```

### Conclusion

As in case of instances, at first `this` points to object being a context of call.

#### Extra: Static and Instance Fields with the Same Names

```
class A {
  static x = 2;
  x = 2;
  
  up() {
    this.x += 1;
  }
  
  static up() {
    this.x *= 2;
  }
}

const a = new A;

console.log(a.x, A.x)
// 2 2

a.up(); // instance affected (inst.x = 2 -> 3)
a.up(); // instance affected (inst.x = 3 -> 4)

A.up(); // function affected (func.x = 2 -> 4)
A.up(); // function affected (func.x = 4 -> 8)

console.log(a.x, A.x)
// 4 8
```

## Updating Static Member

* Case 1:

```
class A {
  static x = 1;
  static up() {
    this.x += 1;
  }
}

class B extends A {}

A.up();
// this = A
// A.x += 1 -> 1 + 1 = 2

B.up();
// this = B
// as B lacks x, gets it from parent so that B.x = A.x = 2
// B.x += 1 -> 2 + 1 = 3

console.log(A.x, B.x);
// 2 3
```

* Case 2:

```
class A {
  static x = 1;
  static up() {
    this.x += 1;
  }
}

class B extends A {
  static x = 100;
}

A.up();
// this = A
// A.x += 1 -> 1 + 1 = 2

B.up();
// this = B
// B.x += 1 -> 100 + 1 = 101

console.log(A.x, B.x);
// 2 101
```

* Case 3:

```
class A {
  static x = 1;
  static up() {
    this.x += 1;
  }
}

class B extends A {
  static up() {
    this.x += 2;
  }
}

A.up();
// this = A
// A.x += 1 -> 1 + 1 = 2

B.up();
// this = B
// as B lacks x, gets it from parent so that B.x = A.x = 2
// B.x += 2 -> 2 + 2 = 4

console.log(A.x, B.x);
// 2 4
```

* Case 4:

```
class A {
  static x = 1;
  static up() {
    this.x += 1;
  }
}

class B extends A {
  static x = 100;
  static up() {
    this.x += 2;
  }
}

A.up();
// this = A
// A.x += 1 -> 1 + 1 = 2

B.up();
// this = B
// B.x += 2 -> 100 + 2 = 102

console.log(A.x, B.x);
// 2 102
```

To understand cases 1 and 3 see:
[Implicit shadowing](https://github.com/charliegerard/dev-notes/blob/master/javascript/implicitShadowing.md)