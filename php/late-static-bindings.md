# Late Static Bindings

The `self` keyword is an alias for the class name of the enclosing class.  
This means that the keyword refers to its enclosing class even when it is called from the context of a child class.

```
class Parent {
	protected static $value = 'parent';

	public static function getValue() {
		return self::$value;
	}
}

class Child extends Parent {
	protected static $value = 'child';
}

echo Child::getValue();
// "parent"
```

In order to refer to the actual calling class, the `static` keyword needs to be used instead of the `self` keyword.

```
class Parent {
	protected static $value = 'parent';

	public static function getValue() {
		return static::$value;
	}
}

class Child extends Parent {
	protected static $value = 'child';
}

echo Child::getValue();
// "child"
```
