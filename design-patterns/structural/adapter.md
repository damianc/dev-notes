# Adapter

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

* Adapter - `DecHexerAdapter`:

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