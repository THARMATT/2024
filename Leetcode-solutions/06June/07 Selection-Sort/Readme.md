## Selection Sort

```js
class Solution {
  select(arr, i) {
    // This method finds the index of the minimum element in the subarray starting from index i
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    return minIndex;
  }

  selectionSort(arr, n) {
    // This method sorts the array using selection sort algorithm
    for (let i = 0; i < n - 1; i++) {
      // Find the index of the minimum element in the unsorted subarray
      let minIndex = this.select(arr, i);
      // Swap the found minimum element with the first element of the unsorted subarray
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
}

/
```