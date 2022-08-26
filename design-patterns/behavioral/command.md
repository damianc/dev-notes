# Command

* use:

```
const player = new Player();
const moveToCmd = new AbsoluteMove(player);
const moveByCmd = new RelativeMove(player);
const controller = new PlayerMoveController();

// move to (100,100)
controller.setCommand(moveToCmd);
controller.perform(100, 100);

console.log(`${player}`);
// at (100,100)

// move by 20 to the right; (120,100)
controller.setCommand(moveByCmd);
controller.perform(20, 0);

console.log(`${player}`);
// at (120,100)
```

* `AbsoluteMove` and `RelativeMove` Commands:

```
abstract class MoveCommand {
    constructor(protected player: Player) {}
    abstract move(...coords: [number, number]): void;
}

class AbsoluteMove extends MoveCommand {
    move(x: number, y: number): void {
        this.player.setPosition(x, y);
    }
}

class RelativeMove extends MoveCommand {
    move(x: number, y: number): void {
        this.player.setPosition(
            this.player.x + x, this.player.y + y
        );
    }
}
```

* Command Invoker - `PlayerMoveController`:

```
class PlayerMoveController {
    private command!: MoveCommand;

    setCommand(cmd: MoveCommand): void {
        this.command = cmd;
    }

    perform(x: number, y: number): void {
        this.command.move(x, y);
    }
}
```

* Command Receiver - `Player`:

```
class Player {
    x = 0;
    y = 0;

    setPosition(...[x,y]: [number,number]): void {
        this.x = x;
        this.y = y;
    }

    toString(): string {
        return `at (${this.x},${this.y})`;
    }
}
```