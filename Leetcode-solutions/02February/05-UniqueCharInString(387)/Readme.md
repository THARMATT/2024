# 387. First Unique Character in a String
Given a string `s`, find the `first non-repeating character` in it and return its index. If it does not exist, return `-1`.

## Approach

1. **Frequency Counting:** Iterate through the input string and count the frequency of each character using an object (`charCount`).

2. **Finding First Non-Repeating Character:** Iterate through the string again and check the frequency in the `charCount` object. Return the index of the first character with a frequency of 1 as it represents the first non-repeating character.

3. **Result Handling:** If no non-repeating character is found, return -1.

**Time Complexity:** O(n) - Linear time complexity due to iterating through the string twice.

**Space Complexity:** O(n) - Space complexity grows with the number of distinct characters in the input string.
```javascript
/**
 * Finds the index of the first non-repeating character in a string.
 * @param {string} s - Input string
 * @return {number} - Index of the first non-repeating character, or -1 if none
 */
var firstUniqChar = function(s) {
    // Step 1: Count the frequency of each character
    let charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Find the first non-repeating character
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }

    // If no non-repeating character is found, return -1
    return -1;
};
```

