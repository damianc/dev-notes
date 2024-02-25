# Linked List

## `LinkedList`

```
class LinkedList {
  #list = [];
  pointer = 0;

  constructor(...items) {
    this.#list.splice(0, 0, ...items);
  }

  *[Symbol.iterator]() {
    yield* this.#list;
  }

  expand() {
    return [...this];
  }

  validatePointer = (index, throwError=false, excludeNegative=false) => {
    const normalizedIndex = this.#normalizeIndex(index);
    if (normalizedIndex === -1 || (excludeNegative && index < 0)) {
      if (throwError) throw new Error(`Invalid index ${index} that exceeds list size`);
      return false;
    }
    return true;
  };

  #normalizeIndex = (index) => {
    let idx = 0;
    if (index > 0) {
      if (index < this.#list.length) idx = index;
      else idx = -1;
    } else if (index < 0) {
      return Math.max(-1, this.#list.length + index);
    }
    return idx;
  };

  size() {
    return this.#list.length;
  }

  reachedEnd() {
    return this.pointer === this.#list.length - 1;
  }

  seek(index) {
    if (this.validatePointer(index)) {
      this.pointer = this.#normalizeIndex(index);
      return true;
    }
    return false;
  }

  current() {
    const index = this.pointer;
    return {
      index,
      data: this.#list[index]
    };
  }

  next() {
    if (this.validatePointer(this.pointer+1)) {
      this.pointer++;
      return true;
    }
    return false;
  }

  reset(head = true) {
    if (head) this.pointer = 0;
    else this.seek(-1);
  }

  get(index) {
    if (this.validatePointer(index)) {
      const normalizedIndex = this.#normalizeIndex(index);
      return this.#list[normalizedIndex];
    } else {
      throw new Error(`Invalid index ${index} that exceeds list size`);
    }
  }

  search(data) {
    const index = this.#list.findIndex(item => item === data);
    return index;
    // return (index !== -1) ? this.#list[index] : null;
  }

  insert(data, index=-1) {
    if (this.validatePointer(index,true)) {
      // const idx = this.#normalizeIndex(index);
      const idx = index>=0 ? index : this.#normalizeIndex(index)+1;
      this.#list.splice(idx,0,data);
      return true;
    }
  }

  delete(index=-1) {
    if (this.validatePointer(index,true)) {
      const idx = this.#normalizeIndex(index);
      this.#list.splice(idx,1);
      return true;
    }
  }
}
```

## `CyclicLinkedList`

```
class CyclicLinkedList extends LinkedList {
  next() {
    if (!super.next()) this.reset();
    return true;
  }
}
```

## `BidirectionalLinkedList`

```
class BidirectionalLinkedList extends LinkedList {
  previous() {
    if (this.validatePointer(this.pointer-1,false,true)) {
      this.pointer--;
      return true;
    }
    return false;
  }
}
```

## `BidirectionalCyclicLinkedList`

```
class BidirectionalCyclicLinkedList extends BidirectionalLinkedList {
  next() {
    if (!super.next()) this.reset();
    return true;
  }
  previous() {
    if (!super.previous()) this.reset(false);
    return true;
  }
}
```
