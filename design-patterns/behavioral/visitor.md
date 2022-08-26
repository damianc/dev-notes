# Visitor

* use:

```
const group01 = new ShapeGroup();
group01.addShape(new Rectangle(25, 25, 50, 50));
group01.addShape(new Triangle(50, 75, 50, 0));

group01.transformShapes(new Rotate(45));
// applying transformation to Rectangle: rotate(45)
// applying transformation to Triangle: rotate(45)

group01.transformShapes(new Scale(1.2));
// applying transformation to Rectangle: scale(1.2)
// applying transformation to Triangle: scale(1.2)
```

* `ShareGroup`:

```
class ShapeGroup {
    private shapes: Shape[] = [];

    public addShape(shape: Shape): void {
        this.shapes.push(shape);
    }
    
    public transformShapes(transformation: ITransformVisitor): void {
        for (let s of this.shapes) {
            s.transform(transformation);
        }
    }
}
```

* `Shape` - `Rectangle` and `Triangle`:

```
abstract class TransformableShape {
    public abstract transform(transformation: ITransformVisitor): void;
}

class Shape extends TransformableShape {
    public transform(transformation: ITransformVisitor): void {
        transformation.apply(this);
    }
}

class Rectangle extends Shape {
    constructor(
        public x: number,
        public y: number,
        public width: number,
        height: number
    ) {
        super();
    }
}

class Triangle extends Shape {
    constructor(
        public midX: number,
        public midY: number,
        public verticalOffset: number,
        public horizontalOffset: number
    ) {
        super();
    }
}
```

* `Rotate` and `Scale`:

```
interface ITransformVisitor {
    apply(shape: Shape): void;
}

class Rotate implements ITransformVisitor {
    constructor(public deg: number) {}

    apply(shape: Shape): void {
        console.log(
            `applying transformation to ${shape.constructor.name}:`,
            `rotate(${this.deg})`
        );
    }
}
class Scale implements ITransformVisitor {
    constructor(public x: number) {}

    apply(shape: Shape): void {
        console.log(
            `applying transformation to ${shape.constructor.name}:`,
            `scale(${this.x})`
        );
    }
}
```