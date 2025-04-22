# Heap Sort

```
function heapSort(arr) {
  arr = [...arr];
  buildHeap(arr);

  let heapSize = arr.length-1;
  for (let i=heapSize; i>=0; i--) {
    swap(arr,0,heapSize);
    heapify(arr,0,--heapSize);
  }

  function buildHeap(arr) {
    const n = arr.length;
    for (let i=Math.round(n/2); i>=0; i--) {
      heapify(arr,i,n-1);
    }
  }

  function heapify(arr,i,heapSize) {
    let largest = i;
    const l = 2*i+1;
    const r = 2*i+2;
    if (l <= heapSize && arr[l] > arr[i]) {
      largest = l;
    }
    if (r <= heapSize && arr[r] > arr[largest]) {
      largest = r;
    }
    if (largest !== i) {
      swap(arr,i,largest);
      heapify(arr,largest,heapSize);
    }
  }

  function swap(arr,a,b) {
    [arr[a],arr[b]] = [arr[b],arr[a]];
  }
}
```
