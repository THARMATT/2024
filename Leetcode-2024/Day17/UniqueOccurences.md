# 1207. Unique Number of Occurrences

Given an array of integers `arr`, return `true` if the number of occurrences of each value in the array is unique or `false` otherwise.

## Code
```javascript
/**
 * @param {number[]} arr - An array of integers
 * @return {boolean} - Returns true if the number of occurrences of each value in the array is unique, false otherwise.
 */
var uniqueOccurrences = function(arr) {
    // Step 1: Initialize an empty object to store the frequency of each element
    const freq = {};

    // Step 2: Count occurrences using the object
    for (const num of arr) {
        // If num is not in the object, set its count to 1; otherwise, increment the count
        freq[num] = (freq[num] || 0) + 1;
    }

    // Step 3: Initialize an empty Set to keep track of unique counts
    const occurrenceSet = new Set();

    // Step 4: Check if the count of occurrences is unique
    for (const count of Object.values(freq)) {
        // If the Set already has the count, it means there is a duplicate count
        if (occurrenceSet.has(count)) {
            return false; // Duplicate count found
        }
        // Otherwise, add the count to the Set
        occurrenceSet.add(count);
    }

    // Step 5: If the loop completes without returning false, all counts are unique, and the function returns true
    return true;
};

```