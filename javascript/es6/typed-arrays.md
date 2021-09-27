# Typed Arrays

## `ArrayBuffer` and `DataView`

* _buffer_ of an array represents location in memory
* _view_ is interface used to perform operations in this memory

### Buffer

Data in buffer can be changed, but size of the buffer can't be changed.
 
```
// allocation of 10 bytes
const buffer = new ArrayBuffer(10);
buffer.byteLength === 10

const buffer2 = buffer.slice(4, 6);
buffer2.byteLength === 2
```

### View

```
const buffer = new ArrayBuffer(10);
const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 5, 2); // bytes 5th and 6th

view1.buffer === buffer
view2.buffer === buffer

view1.byteOffset === 0
view2.byteOffset === 5

view1.byteLength === 10
view2.byteLength === 2
```

## Read and Write Data

* single view

```
const buffer = new ArrayBuffer(2);
const view = new DataView(buffer);

view.setInt8(0, 5);
view.setInt8(1, -1);

view.getInt8(0) === 5
view.getInt8(1) === -1

view.getInt16(0) === 1535
```

* multiple views

```
const buffer = new ArrayBuffer(2);
const view1 = new DataView(buffer);
const view2 = new DataView(buffer);

view1.setInt8(0, 10);
view2.getInt8(0) === 10

view2.setInt8(0, 20);
view1.getInt8(0) === 20
```

| Operation | Buffer |
|--------|--------|
| `new ArrayBuffer(2)` | `[0 0 0 0 0 0 0 0] [0 0 0 0 0 0 0 0]` |
| `view.setInt8(0, 5)` | `[0 0 0 0 0 1 0 1] [0 0 0 0 0 0 0 0]` |
| `view.setInt8(1, -1)` | `[0 0 0 0 0 1 0 1] [1 1 1 1 1 1 1 1]` |
| `view.getInt8(0)` | `[0 0 0 0 0 1 0 1][...] -> 101 -> 5` |
| `view.getInt8(1)` | `[...][1 1 1 1 1 1 1 1] -> 11111111 -> -1` |
| `view.getInt16(0)` | `[0 0 0 0 0 1 0 1 1 1 1 1 1 1 1 1] -> 11111111101 -> 1535` |

There are getters and setters:

- `getInt8()` and `setInt8()`
- `getUint8()` and `setUint8()`
- `getInt16()` and `setInt16()`
- `getUint16()` and `setUint16()`
- `getInt32()` and `setInt32()`
- `getUint32()` and `setUint32()`
- `getBigInt64()` and `setBigInt64()`
- `getBigUint64()` and `setBigUint64()`
- `getFloat32()` and `setFloat32()`
- `getFloat64()` and `setFloat64()`

Parameters of them:

- `get*(byteOffset, littleEndian)`
- `set*(byteOffset, value, littleEndian)`

The `little-endian` is used by default.  
[Endianness Explanation on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Endianness)

## Specialized Views

| Constructor | Size of single element in bytes |
|----|----|
| `Int8Array` | 1 |
| `Uint8Array` | 1 |
| `Uint8ClampedArray` | 1 |
| `Int16Array` | 2 |
| `Uint16Array` | 2 |
| `Int32Array` | 4 |
| `Uint32Array` | 4 |
| `BigInt64Array` | 8 |
| `BigUint64Array` | 8 |
| `Float32Array` | 4 |
| `Float64Array` | 8 |

  

> `Uint8ClampedArray` array converts values to 0 (if value < 0) or to 255 (if value > 255)

  

```
const buffer = new ArrayBuffer(2);
const dataView = new DataView(buffer);
const utf8View = new Int8Array(buffer);

dataView.buffer === utf8View.buffer
// buffer is common for each type of array
// e.g., int8View === uint32View also gives true

utf8View[0] = 40;
dataView.getInt8(0) === 40

dataView.setInt8(0, 80)
utf8View[0] === 80
```

## Constructor

- `Int8Array(buffer[, byteOffset[, length]])`
- `Int8Array(typedArray)`
- `Int8Array()`
- `Int8Array(length)`
- `Int8Array(arrayLike)`
- `Int8Array(iterable)`

```
const ints = new Int16Array(2);
const floats = new Float32Array(5);

ints.length === 2
ints.byteLength === 4 // 2 items * 2B

floats.length === 5
floats.byteLength === 20 // 5 items * 4B
```

### No Parameter, No Data

By default, if constructor parameter is omitted, it's assumed as 0, and hence it gives array that no data can be put into.

```
const view = new Int8Array();

view[0] = 10;
view[0] === undefined
```

### No Buffer In, Separate Buffer Out

```
const buffer = new ArrayBuffer(0);

const view = new DataView(buffer);
const viewFromBuffer = new Int8Array(buffer);
const viewFromTypedArray = new Int8Array(viewFromBuffer);
// the array above has own buffer

view.buffer === viewFromBuffer.buffer
// true

view.buffer === viewFromTypedArray.buffer
// false

viewFromBuffer.buffer === viewFromTypedArray.buffer
// false
```