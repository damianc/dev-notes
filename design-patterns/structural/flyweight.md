# Flyweight

Examples:
- [Binary Words](#example-1-binary-words)
- [Game Board Tiles](#example-2-game-board-tiles)

## Example 1: Binary Words

* use:

```
const binTwentyTwo = '10110';

const bf = new BinaryFactory();
const bins = bf.fromString(binTwentyTwo, true);
// number of words: 5
// number of objects in memory: 2

console.log(bins);
// [BinOne, BinZero, BinOne, BinOne, BinZero]

console.log(bins.decimalValue());
// 22
```

* Flyweights - `BinZero` and `BinOne`:

```
interface IBinWord {
    value: number;
    valueInSeq(position: number): number;
}

class BinZero implements IBinWord {
    value = 0;
    valueInSeq(position: number): number {
        return 0;
    }
}

class BinOne implements IBinWord {
    value = 1;
    valueInSeq(position: number): number {
        return 2 ** position;
    }
}
```

* Flyweight Factory - `BinaryFactory`:

```
class BinaryFactory {
    private binWords: Record<string, IBinWord> = {};

    public getWord(word: string): IBinWord {
        let binWord: IBinWord;
        if (word in this.binWords) {
            binWord = this.binWords[word];
        } else {
            switch (word) {
                case '1':
                    binWord = new BinOne();
                    break;
                case '0':
                default:
                    binWord = new BinZero();
            }
            this.binWords[word] = binWord;
        }
        return binWord;
    }

    public fromString(str: string, withAudit = false): BinarySequence {
        const bins = [...str].map(word => this.getWord(word));
        if (withAudit) this.auditFlyweights(str);

        return new BinarySequence(
            ...bins
        );
    }

    private auditFlyweights(str: string): void {
        console.log(
            'number of words: ' + str.length,
        );
        console.log(
            'number of objects in memory: ' + Object.keys(this.binWords).length
        );
    }
}
```

* Flyweight Consumer - `BinarySequence`:

```
class BinarySequence extends Array<IBinWord> {
    public decimalValue(): number {
        return this.reduce((acc: number, curr: IBinWord, idx: number) => {
            const position = this.length - (idx + 1);
            return acc + curr.valueInSeq(position);
        }, 0);
    }
}
```

## Example 2: Game Board Tiles

* use:

```
const board = generateBoard(4, 4, {
    bombs: '1x1 2x2 4x3 3x4',
    diamonds: '3x3 4x4 1x2 2x3'
});

const player = new Player();
player.setBoard(board);

player.checkIfTilesAreReused([4,3], [2,3]);
// Selected samples: BombTile DiamondTile
// Tiles of different type are not reused.

player.checkIfTilesAreReused([1,1], [2,2]);
// Selected samples: BombTile BombTile
// Tiles of same type are reused.

player.auditReuse();
// number of tiles: 16
// number of objects in memory: 3


// let's play now that we have a game

console.log(player.points);
// 50

player.pickTile(2,1);
// empty tile: -5 points

console.log(player.points);
// 45

player.pickTile(1,2);
// diamond: +10 points

console.log(player.points);
// 55

player.pickTile(3,4);
// bomb: YOU LOST

console.log(player.points);
// 0
```

* Flyweights -`EmptyTile`, `BombTile` and `DiamondTile`:

```
enum TileType {
    Empty, Bomb, Diamond
}

interface ITile {
    interact(player: Player): void;
    type: TileType;
    foo?: number;
}

class EmptyTile implements ITile {
    type = TileType.Empty;

    interact(player: Player): void {
        console.log('empty tile: -5 points');
        player.updatePoints(-5);
    }
}

class BombTile implements ITile {
    type = TileType.Bomb;

    interact(player: Player): void {
        console.log('bomb: YOU LOST');
        player.points = 0;
    }
}

class DiamondTile implements ITile {
    type = TileType.Diamond;

    interact(player: Player): void {
        console.log('diamond: +10 points');
        player.updatePoints(10);
    }
}
```

* Flyweight Factory - `FlyweightFactory`:

```
class TileFactory {
    private tiles: Map<TileType, ITile> = new Map();

    public getTile(tileType: TileType): ITile {
        if (this.tiles.has(tileType)) {
          return this.tiles.get(tileType) as ITile;
        }

        let tile: ITile;

        switch (tileType) {
            case TileType.Bomb:
                tile = new BombTile();
                break;
            case TileType.Diamond:
                tile = new DiamondTile();
                break;
            case TileType.Empty:
            default:
                tile = new EmptyTile();
        }

        this.tiles.set(tile.type, tile);
        return tile;
    }
}
```

* Flyweight Consumer - `generateBoard()` and `Player`:

```
function generateBoard(
    width: number,
    height: number,
    boardMap: Record<string, string>
) {
    const factory = new TileFactory();
    const boardTiles: ITile[][] = [];

    for (let x = 1; x <= width; x++) {
        boardTiles.push([]);

        for (let y = 1; y <= height; y++) {
            const currentRow = boardTiles[boardTiles.length - 1];
            const coords = `${x}x${y}`;

            if (boardMap.bombs.indexOf(coords) !== -1) {
                currentRow.push(factory.getTile(TileType.Bomb));
            } else if (boardMap.diamonds.indexOf(coords) !== -1) {
                currentRow.push(factory.getTile(TileType.Diamond));
            } else {
                currentRow.push(factory.getTile(TileType.Empty));
            }
        }
    }

    return boardTiles;
}
```

```
class Player {
    points = 50;
    board!: ITile[][];

    setBoard(board: ITile[][]): void {
        this.board = board;
    }

    pickTile(x: number, y: number): void {
        this.board[x-1][y-1]?.interact(this);
    }

    updatePoints(newPoints: number): void {
        this.points += newPoints;
        if (this.points <= 0) this.kill();
    }

    kill(): void {
        this.points = 0;
        console.log('YOU LOST');
    }

    checkIfTilesAreReused(
        tileCoords: [number, number],
        otherTileOfTheSameTypeCoords: [number, number]
    ): void {
        const [tile1x, tile1y] = tileCoords;
        const [tile2x, tile2y] = otherTileOfTheSameTypeCoords;
     
        const tile1 = this.board[tile1x-1][tile1y-1];
        const tile2 = this.board[tile2x-1][tile2y-1];
        
        console.log('Selected samples:', tile1, tile2);
        tile1.foo = 1234;

        const sameType = tile1.type === tile2.type;
        const areReused = tile2.foo === 1234;

        console.log(
            `Tiles of ${
                sameType ? 'same' : 'different'
            } type are ${
                areReused ? '' : 'not'
            } reused.`
        );
    }

    auditReuse(): void {
        const objectsContainer = new Set();

        const tilesNumber = this.board.reduce((acc, curr) => {
            return acc + curr.reduce((acc2, curr2) => {
                const object = curr2;
                objectsContainer.add(object);
                return acc2 + 1;
            }, 0)
        }, 0);

        console.log('number of tiles:', tilesNumber);
        console.log('number of objects in memory:', objectsContainer.size);
    }
}
```