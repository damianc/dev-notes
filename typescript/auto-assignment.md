# Property Auto-Asignment within Constructor

```
class Klazz {
  constructor(
    public pubField: string,
    protected prtField: string,
    private prvField: string,
    localVar: string
  ) {
    console.log('Other operations...');

    // all variables are accessible here
  }

  someMethod() {
    console.log(
      this.pubField,
      this.prtField,
      this.prvField
    );

    // localVar is only accessible within the constructor()
  }
}
```

* `pubField` is accessible from any place
* `prtField` is only accessible from the class itself and classes that extends the class
* `prvField` is only accessible from the class itself
* `localVar` is only accessible within `constructor()` in the class
