# Priority Queue on Max Heap

```
class MaxHeap {
  heap
  count
  
  constructor(size) {
    this.heap = new Array(size).fill(0);
    this.count = 0;
  }
  
  create(arr = []) {
    if (arr.length) {
      for (let val of arr) {
        this.insert(val);
      }
    }
  }

  display() {
    console.log(this.heap.join('  '));
  }
  
  insert(i) {
    if (this.count === 0) {
      this.heap[0] = i;
      this.count = 1;
    } else {
      this.heap[this.count++] = i;
      this.siftUp();
    }
  }
  
  siftUp() {
    let tmpPos = this.count - 1;
    let tmp = parseInt(tmpPos / 2);
    
    while (tmpPos > 0 && this.heap[tmp] < this.heap[tmpPos]) {
      this.swap(tmpPos, tmp);
      tmpPos = parseInt(tmpPos / 2);
      tmp = parseInt(tmpPos / 2);
    }
  }
  
  extractMax() {
    const min = this.heap[0];
    this.heap[0] = this.heap[this.count - 1];
    this.heap[this.count - 1] = 0;
    this.count--;
    this.siftDown(0);

    return min;
  }
  
  siftDown(k) {
    let largest = k;
    const left = 2 * k + 1;
    const right = 2 * k + 2;
    
    if (left < this.count && this.heap[largest] < this.heap[left]) {
      largest = left;
    }
    
    if (right < this.count && this.heap[largest] < this.heap[right]) {
      largest = right;
    }
    
    if (largest != k) {
      this.swap(k, largest);
      this.siftDown(largest);
    }
  }
  
  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }
}


class PriorityQ extends MaxHeap {
  constructor(size) {
    super(size);
  }
  
  enqueue(val) {
    this.insert(val);
  }
  
  dequeue() {
    return this.extractMax();
  }
}


const nums = [37, 44, 34, 65, 26, 86, 129, 83, 9];
const pq = new PriorityQ(nums.length);

for (let n of nums) {
    pq.enqueue(n);
}
```