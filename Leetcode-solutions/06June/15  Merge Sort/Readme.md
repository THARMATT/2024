- Merge Sort
    
    ```js
    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
    
        let mid = Math.floor(arr.length / 2);
        let leftHalf = arr.slice(0, mid);
        let rightHalf = arr.slice(mid);
    
        return merge(mergeSort(leftHalf), mergeSort(rightHalf));
    }
    
    function merge(left, right) {
        let result = [];
    
        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                result.push(left.shift()); // Remove and return the first element from left
            } else {
                result.push(right.shift()); // Remove and return the first element from right
            }
        }
    
        return result.concat(left).concat(right);
    }
    
    // Example usage:
    let arr = [5, 2, 9, 1, 5, 6];
    let sortedArr = mergeSort(arr);
    console.log(sortedArr); // Output: [1, 2, 5, 5, 6, 9]
    
    ```
    
    ### Steps of Merge Sort
    
    1. **Divide**:
        - If the array has more than one element, split the array into two halves. This is done by finding the middle point of the array.
    2. **Conquer**:
        - Recursively apply the merge sort algorithm to both halves of the array. This step continues until the base case is reached, where the array has only one element (which is inherently sorted).
    3. **Combine**:
        - Merge the two sorted halves to produce a single sorted array. This merging process involves comparing elements from each half and arranging them in order.
    
    ### Example Walkthrough
    
    Given an array: `[38, 27, 43, 3, 9, 82, 10]`
    
    1. **Initial Array**:
        
        ```
        [38, 27, 43, 3, 9, 82, 10]
        
        ```
        
    2. **Divide**:
        - Split into two halves:
            
            ```
            [38, 27, 43, 3] and [9, 82, 10]
            
            ```
            
    3. **Conquer** (apply merge sort to each half):
        - First half `[38, 27, 43, 3]`:
            - Split into `[38, 27]` and `[43, 3]`
            - Sort `[38, 27]`:
                - Split into `[38]` and `[27]` (base case, single elements)
                - Merge `[38]` and `[27]` to get `[27, 38]`
            - Sort `[43, 3]`:
                - Split into `[43]` and `[3]` (base case, single elements)
                - Merge `[43]` and `[3]` to get `[3, 43]`
            - Merge `[27, 38]` and `[3, 43]` to get `[3, 27, 38, 43]`
        - Second half `[9, 82, 10]`:
            - Split into `[9, 82]` and `[10]`
            - Sort `[9, 82]`:
                - Split into `[9]` and `[82]` (base case, single elements)
                - Merge `[9]` and `[82]` to get `[9, 82]`
            - Merge `[9, 82]` and `[10]`:
                - Compare and arrange to get `[9, 10, 82]`
    4. **Combine**:
        - Merge `[3, 27, 38, 43]` and `[9, 10, 82]`:
            - Compare elements from both halves and merge in sorted order to get `[3, 9, 10, 27, 38, 43, 82]`