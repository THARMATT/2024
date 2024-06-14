# Insertion Sort
Insertion sort is a simple and intuitive comparison-based sorting algorithm. It builds the final sorted array one item at a time. Here are the detailed steps for performing insertion sort on an array:

### Steps of Insertion Sort:

1. **Start with the second element:** Consider the first element as already sorted. Begin with the second element.

2. **Compare with the elements in the sorted part:** Compare the current element (key) with the elements in the sorted part of the array.

3. **Find the correct position:** Shift all elements in the sorted part that are greater than the key to the right by one position to make space for the key.

4. **Insert the key:** Place the key in its correct position.

5. **Repeat:** Repeat steps 2-4 for all elements in the array.

### Example Walkthrough:

Consider the array: [5, 2, 9, 1, 5, 6]

#### Initial Array:
\[5, 2, 9, 1, 5, 6\]

1. **First Pass (key = 2):**
    - Compare 2 with 5.
    - 2 is less than 5, so shift 5 to the right.
    - Insert 2 in the first position.

    \[2, 5, 9, 1, 5, 6\]

2. **Second Pass (key = 9):**
    - Compare 9 with 5 (already sorted part).
    - 9 is greater than 5, so it remains in place.

    \[2, 5, 9, 1, 5, 6\]

3. **Third Pass (key = 1):**
    - Compare 1 with 9, 5, and 2.
    - Shift 9, 5, and 2 to the right.
    - Insert 1 at the first position.

    \[1, 2, 5, 9, 5, 6\]

4. **Fourth Pass (key = 5):**
    - Compare 5 with 9.
    - 5 is less than 9, so shift 9 to the right.
    - 5 is equal to the next 5, so it remains in place.

    \[1, 2, 5, 5, 9, 6\]

5. **Fifth Pass (key = 6):**
    - Compare 6 with 9.
    - 6 is less than 9, so shift 9 to the right.
    - Insert 6 before 9.

    \[1, 2, 5, 5, 6, 9\]

### Detailed Steps in Pseudocode:

```plaintext
for i from 1 to length(array) - 1:
    key = array[i]
    j = i - 1
    while j >= 0 and array[j] > key:
        array[j + 1] = array[j]
        j = j - 1
    array[j + 1] = key
```

### Explanation of Pseudocode:

1. Loop through each element in the array starting from the second element.
2. Set the current element as the key.
3. Compare the key with the elements in the sorted part of the array.
4. Shift elements that are greater than the key to the right.
5. Insert the key into its correct position.

Insertion sort is efficient for small data sets or nearly sorted arrays but less efficient for large data sets as it has a time complexity of \(O(n^2)\).
```js
function insertionSort(arr, n) {
    for (let i = 1; i < n; i++) {  // Loop starts from the second element
        let key = arr[i];  // The element to be positioned correctly
        let j = i - 1;
        
        // Move elements of arr[0..i-1], that are greater than key, to one position ahead
        // of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;  // Place key after the element just smaller than it
    }
    return arr;  // Return the sorted array
}

// Example usage:
let arr = [5, 2, 9, 1, 5, 6];
let n = arr.length;
console.log(insertionSort(arr, n));

```