# List of Design Patterns

* [Creational](#creational) - how objects are being created
* [Structural](#structural) - how objects are organized to form larger structures providing new functionality
* [Behavioral](#behavioral) - how objects communicate with each other
* [Concurrency](#concurrency) - how to deal with the multi-threaded code

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

| name | other names | description |
|----|----|----|
| Adapter* | Wrapper/Translator | Convert the interface of a class into another interface clients expect. An adapter lets classes work together that could not otherwise because of incompatible interfaces. The enterprise integration pattern equivalent is the translator. |
| Bridge* | Handle/Body | Decouple an abstraction from its implementation allowing the two to vary independently. |
| Composite* | | Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly. |
| Decorator* | Wrapper | Attach additional responsibilities to an object dynamically keeping the same interface. Decorators provide a flexible alternative to subclassing for extending functionality. |
| Extension Object | | Adding functionality to a hierarchy without changing the hierarchy. |
| Facade* | | Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use. |
| Flyweight* | | Use sharing to support large numbers of similar objects efficiently. |
| Front Controller | | The pattern relates to the design of Web applications. It provides a centralized entry point for handling requests. |
| Marker | | Empty interface to associate metadata with a class. |
| Module | | Group several related elements, such as classes, singletons, methods, globally used, into a single conceptual entity. |
| Proxy* | Surrogate | Provide a surrogate or placeholder for another object to control access to it. |
| Twin | | Twin allows modeling of multiple inheritance in programming languages that do not support this feature. |

## Behavioral

| name | other names | description |
|----|----|----|
| Blackboard | | Artificial intelligence pattern for combining disparate sources of data. |
| Chain of Responsibility* | | Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it. |
| Command* | Action/Transaction | Encapsulate a request as an object, thereby allowing for the parameterization of clients with different requests, and the queuing or logging of requests. It also allows for the support of undoable operations. |
| Interpreter* | | Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language. |
| Iterator* | Cursor | Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation. |
| Mediator* | | Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it allows their interaction to vary independently. |
| Memento* | Token | Without violating encapsulation, capture and externalize an object's internal state allowing the object to be restored to this state later. |
| Null Object | | Avoid null references by providing a default object. |
| Observer* | Dependents/Publish-Subscribe (Pub-Sub) | Define a one-to-many dependency between objects where a state change in one object results in all its dependents being notified and updated automatically. |
| Servant | | Define common functionality for a group of classes. The servant pattern is also frequently called helper class or utility class implementation for a given set of classes. The helper classes generally have no objects hence they have all static methods that act upon different kinds of class objects. |
| Specification | | Recombinable business logic in a Boolean fashion. |
| State* | Objects for State | Allow an object to alter its behavior when its internal state changes. The object will appear to change its class. |
| Strategy* | Policy | Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it. |
| Template Method* | | Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.
| Visitor* | | Represent an operation to be performed on the elements of an object structure. Visitor lets a new operation be defined without changing the classes of the elements on which it operates.

## Concurrency

| name | other names | description |
|----|----|----|
| Active Object | | Decouples method execution from method invocation that reside in their own thread of control. The goal is to introduce concurrency, by using asynchronous method invocation and a scheduler for handling requests. |
| Balking | | Only execute an action on an object when the object is in a particular state. |
| Barrier | | A barrier for a group of threads or processes in the source code means any thread/process must stop at this point and cannot proceed until all other threads/processes reach this barrier. |
| Binding Properties | | Combining multiple observers to force properties in different objects to be synchronized or coordinated in some way. |
| Compute Kernel | | The same calculation many times in parallel, differing by integer parameters used with non-branching pointer math into shared arrays, such as GPU-optimized Matrix multiplication or Convolutional neural network. |
| Double-checked Locking | | Reduce the overhead of acquiring a lock by first testing the locking criterion (the 'lock hint') in an unsafe manner; only if that succeeds does the actual locking logic proceed. (Can be unsafe when implemented in some language/hardware combinations. It can therefore sometimes be considered an anti-pattern.) |
| Event-based Asynchronous | | Addresses problems with the asynchronous pattern that occur in multithreaded programs. |
| Guarded Suspension | | Manages operations that require both a lock to be acquired and a precondition to be satisfied before the operation can be executed. |
| Join | | Join-pattern provides a way to write concurrent, parallel and distributed programs by message passing. Compared to the use of threads and locks, this is a high-level programming model. |
| Leaders/Followers | | Leader (having line of followers behind) awaits a request and then handle it, having passed leadership to another follower that becomes leader. The pattern consists of 4 components: ThreadPool, HandleSet, Handle, ConcreteEventHandler (implements the EventHandler interface). |
| Lock | | One thread puts a "lock" on a resource, preventing other threads from accessing or modifying it. |
| Messaging Design Pattern (MDP) | | Allows the interchange of information (i.e. messages) between components and applications. |
| Monitor Object | | An object whose methods are subject to mutual exclusion, thus preventing multiple objects from erroneously trying to use it at the same time. |
| Nuclear Reaction | Nuclear Computation | Nuclear computation is a type of computation which allows threads to either spawn new threads or converge many threads to one. |
| Reactor | | A reactor object provides an asynchronous interface to resources that must be handled synchronously. |
| Read-write Lock | | Allows concurrent read access to an object, but requires exclusive access for write operations. |
| Scheduler | | Explicitly control when threads may execute single-threaded code. |
| Thread Pool | | A number of threads are created to perform a number of tasks, which are usually organized in a queue. Typically, there are many more tasks than threads. Can be considered a special case of the object pool pattern. |
| Thread-local Storage (TLS) | Thread-specific Storage | Static or "global" memory local to a thread. |