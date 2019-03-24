# Builder vs. Abstract Factory

## Builder

Builder is used to create a single - pretty complex - product.
It may consist of different parts, still, the process of a creation (or: an algorithm) remains not changed.

```
abstract class PizzaBuilder {
	abstract void setDough() {}
	abstract void setSauce() {}
	abstract void setTopping() {}
	abstract Pizza getPizza() {}
}
```

```
class HawaiianPizzaBuilder extends PizzaBuilder {
	// ...
}
```

## Abstract Factory (a.k.a. Kit)

Abstract Factory is used to create sets of standalone products being related to each other.
The primary example is widget factory builidng different widgets for different systems like Windows or Linux.

```
abstract class|interface WidgetFactory {
	abstract Button createButton() {}
	abstract Window createWindow() {}
}
```

```
class WindowsWidgetFactory extends|implements WidgetFactory {
	public Button createButton() {
		return new WindowsButton();
	}
	public Window createWindow() {
		return new WindowsWindow();
	}
}
```
