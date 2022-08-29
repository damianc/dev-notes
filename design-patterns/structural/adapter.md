# Adapter

Examples:
- [European/American Sockets and Plugs](#example-1-europeanamerican-sockets-and-plugs)
- [Decimal Adapter for Binary Input/Output](#example-2-decimal-adapter-for-binary-inputoutput)

## Example 1: European/American Sockets and Plugs

* use:

```
const es = new EuropeanSocket();
const ep = new EuropeanPlug();

es.receive(ep);
// charging with European plug...

const as = new AmericanSocket();
as.receive(ep);
// cannot connect European plug to American socket

const ap = new AmericanPlug();
as.receive(ap);
// charging with American plug...

es.receive(ap);
// cannot connect American plug to European socket
```

* Interface - `EuropeanSocket` with `EuropeanPlug`:

```
abstract class Socket {
    abstract plugs: string;
    abstract type: string;

    receive(plug: Plug): void {
        if (plug.plugs === this.plugs) {
            plug.plugIn();
        } else {
            console.log(
                `cannot connect ${plug.type} plug to ${this.type} socket`
            );
        }
    }
}

abstract class Plug {
    abstract plugs: string;
    abstract type: string;
    abstract plugIn(): void;
}

class EuropeanSocket extends Socket {
    plugs = '00';
    type = 'European';
}

class EuropeanPlug extends Plug {
    plugs = '00';
    type = 'European';

    plugIn(): void {
        console.log('charging with European plug...');
    }
}
```

* Adapter - `AmericanSocket` with `AmericanPlug`:

```
class AmericanSocket extends EuropeanSocket {
    plugs = '11';
    type = 'American';
}

class AmericanPlug extends EuropeanPlug {
    plugs = '11';
    type = 'American';

    plugIn(): void {
        console.log('charging with American plug...');
    }
}
```

## Example 2: Decimal Adapter for Binary Input/Output

* use:

```
const hexer = new Hexer();
const decHexer = new DecHexerAdapter(hexer);

const fifteen = {
    bin: '1111',
    dec: 15,
    hex: 'f'
};

console.log(
    hexer.convertTo(fifteen.bin) + ' = ' + fifteen.hex,
    hexer.convertFrom(fifteen.hex) + ' = ' + fifteen.bin
);
// f = f
// 1111 = 1111

console.log(
    decHexer.convertTo(fifteen.dec) + ' = ' + fifteen.hex,
    decHexer.convertFrom(fifteen.hex) + ' = ' + fifteen.dec
);
// f = f
// 15 = 15


const x = 22;
const dec2Hex = decHexer.convertTo(22);
const hex2Bin = hexer.convertFrom('16');
const bin2Dec = decHexer.convertFrom(hexer.convertTo('10110'));

console.log(`${x} -> ${dec2Hex} -> ${hex2Bin} -> ${bin2Dec}`);
// 22 -> 16 -> 10110 -> 22
```

* Interface - `Hexer`:

```
interface IConverable {
    convertTo(otherSysValue: string | number): string | number;
    convertFrom(value: string | number): string | number;
}

class Hexer implements IConverable {
    convertTo(binStr: string): string {
        return parseInt(binStr, 2).toString(16);
    }
    convertFrom(hexStr: string): string {
        return parseInt(hexStr, 16).toString(2);
    }
}
```

* Adapter - `DecHexerAdapter`:

```
class DecHexerAdapter implements IConverable {
    constructor(private adapted: Hexer) {}

    convertTo(dec: number): string {
        return this.adapted.convertTo(dec.toString(2));
    }

    convertFrom(hexStr: string): number {
        return parseInt(this.adapted.convertFrom(hexStr), 2);
    }
}
```