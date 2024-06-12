
## Bubble sort
1. **Start at the beginning of the array**: Begin with the first element (index 0).

2. **Compare adjacent elements**: Compare each pair of adjacent elements in the array.

3. **Swap if necessary**: If the elements are in the wrong order (e.g., the element at index `i` is greater than the element at index `i+1` in ascending order), swap them.

4. **Continue until the end of the array**: Continue this process until the end of the array is reached. At this point, the largest element will be at the last position.

5. **Repeat for remaining elements**: Repeat steps 1-4 for the remaining elements, excluding the last element which is already in its correct position after the first pass.

6. **Repeat until no swaps are needed**: Repeat the entire process until no more swaps are needed, indicating that the array is sorted.

Here's a more concise summary:

- Start from the beginning of the array.
- Compare adjacent elements and swap them if they are in the wrong order.
- Repeat this process for each element in the array until no more swaps are needed.

This process gradually "bubbles" the largest elements to the end of the array, resulting in a sorted array.

```js

/**
 * @param {number[]} arr
 * @param {number} n
 */
class Solution
{
   //Function to sort the array using bubble sort algorithm.
   
  bubbleSort(arr, n) {
        for (let i = 0; i < n - 1; i++) {
            let swapped = false;
            // Last i elements are already in place
            for (let j = 0; j < n - 1 - i; j++) {
                // Swap if the element found is greater than the next element
                if (arr[j] > arr[j + 1]) {
                    this.swap(arr, j, j + 1);
                    swapped = true;
                }
            }
            // If no elements were swapped, the array is already sorted
            if (!swapped) break;
        }
    }

    // Helper function to swap two elements in the array
    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
}
```