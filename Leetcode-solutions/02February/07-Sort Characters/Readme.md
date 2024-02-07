# 451. Sort Characters By Frequency
Given a string `s`, sort it in `decreasing order based` on the `frequency` of the characters. The `frequency` of a character is the number of times it appears in the string.

Return the `sorted string`. If there are multiple answers, return any of them.
### Approach Explanation:

1. **Frequency Counting**: Iterate through the input string `s` and count the frequency of each character using an object (`freq`).
   
2. **Conversion to Array of Key-Value Pairs**: Convert the frequency object `freq` into an array of key-value pairs using `Object.entries(freq)`. This step allows us to work with the frequency data more easily.
   
3. **Sorting**: Sort the array of key-value pairs based on the frequencies in descending order. This ensures that characters with higher frequencies come first.
   
4. **Constructing Sorted String**: Iterate through the sorted array and construct the sorted string by appending each character `char` to the `sortedStr` `count` times.

### Code 

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let freq = {}; // Object to store character frequencies

    // Count the frequency of each character in the string
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Convert frequency object to array of key-value pairs
    let sortedArr = Object.entries(freq);

    // Sort the array based on frequency in descending order
    sortedArr.sort((a, b) => b[1] - a[1]);

    let sortedStr = ''; // Initialize sorted string

    // Construct the sorted string
    for (let [char, count] of sortedArr) {
        sortedStr += char.repeat(count);
    }

    return sortedStr; // Return the sorted string
};
```

### Complexity:
- Time Complexity: O(n log n) - Where n is the length of the input string `s`. This complexity arises from sorting the array of key-value pairs.
- Space Complexity: O(n) - Where n is the number of unique characters in the input string `s`. This complexity arises from the `freq` object and the `sortedArr` array.