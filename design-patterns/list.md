# List of Design Patterns

* [Creational](#creational) - how objects are being created
* [Structural](#structural) - how objects are organized to form larger structures providing new functionality
* [Behavioral](#behavioral) - how objects communicate with each other

> \* - contained in GoF's "Design Patterns"

## Creational

| name | other names | description |
|----|----|----|
| Abstract Factory* | Kit | Provide an interface for creating families of related or dependent objects without specifying their concrete classes. |
| Builder* | | Separate the construction of a complex object from its representation, allowing the same construction process to create various representations. |
| Dependency Injection | | A class accepts the objects it requires from an injector instead of creating the objects directly. |
| Factory Method* | Virtual Constructor | Define an interface for creating a single object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses. |
| Lazy Initialization | | Tactic of delaying the creation of an object, the calculation of a value, or some other expensive process until the first time it is needed. This pattern appears in the GoF catalog as "virtual proxy", an implementation strategy for the Proxy pattern. |
| Multiton | | Ensure a class has only named instances, and provide a global point of access to them. |
| Object Pool | | Avoid expensive acquisition and release of resources by recycling objects that are no longer in use. Can be considered a generalisation of connection pool and thread pool patterns. |
| Prototype* | | Specify the kinds of objects to create using a prototypical instance, and create new objects from the 'skeleton' of an existing object, thus boosting performance and keeping memory footprints to a minimum. |
| Resource Acquisition is Initialization (RAII) | | Ensure that resources are properly released by tying them to the lifespan of suitable objects. |
| Singleton* | | Ensure a class has only one instance, and provide a global point of access to it. |

## Structural

| name | other names |
|----|----|
| Adapter | Wrapper |
| Bridge | Handle/Body |
| Composite | |
| Decorator | Wrapper |
| Facade | |
| Flyweight | |
| Proxy | Surrogate |

## Behavioral

| name | other names |
|----|----|
| Chain of Responsibility | |
| Command | Action/Transaction |
| Interpreter | |
| Iterator | Cursor |
| Mediator | |
| Memento | Token |
| Observer | Dependents/Publish-Subscribe (Pub-Sub) |
| State | Objects for State |
| Strategy | Policy |
| Template Method | |
| Visitor | |