# 76. Minimum Window Substring
Given two strings `s` and `t` of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `""`.

The testcases will be generated such that the answer is `unique`.

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (!s || !t) {
        return "";
    }

    // Initialize target character frequencies
    let targetCharFreq = new Map();
    for (let char of t) {
        targetCharFreq.set(char, (targetCharFreq.get(char) || 0) + 1);
    }

    // Initialize variables for sliding window
    let leftPtr = 0;
    let rightPtr = 0;
    let requiredChars = targetCharFreq.size;
    let formedChars = 0;

    // Variables to store the result
    let minLength = Infinity;
    let resultStart = 0;
    let resultEnd = 0;

    // Map to store current window character frequencies
    let windowCharFreq = new Map();

    // Sliding window algorithm
    while (rightPtr < s.length) {
        // Expand the window by updating the frequency map for the current character
        let currentChar = s.charAt(rightPtr);
        windowCharFreq.set(currentChar, (windowCharFreq.get(currentChar) || 0) + 1);

        // Check if the current character forms a required count in the target
        if (targetCharFreq.has(currentChar) && windowCharFreq.get(currentChar) === targetCharFreq.get(currentChar)) {
            formedChars++;
        }

        // Try to minimize the window by moving the left pointer
        while (leftPtr <= rightPtr && formedChars === requiredChars) {
            // Update the result if the current window is smaller
            if (rightPtr - leftPtr + 1 < minLength) {
                minLength = rightPtr - leftPtr + 1;
                resultStart = leftPtr;
                resultEnd = rightPtr + 1;
            }

            // Shrink the window by moving the left pointer
            let charLeft = s.charAt(leftPtr);
            windowCharFreq.set(charLeft, windowCharFreq.get(charLeft) - 1);

            // Check if the current character no longer forms a required count in the target
            if (targetCharFreq.has(charLeft) && windowCharFreq.get(charLeft) < targetCharFreq.get(charLeft)) {
                formedChars--;
            }

            leftPtr++;
        }

        // Expand the window by moving the right pointer
        rightPtr++;
    }

    // Return the result substring
    return minLength === Infinity ? "" : s.substring(resultStart, resultEnd);
};
```

### Problem Overview:

The "Minimum Window Substring" problem involves finding the smallest substring in a given string `s` that contains all characters from another string `t`. The solution must consider the order of characters in `s` and should include all characters from `t`.

### Approach:

The code uses a sliding window approach to efficiently find the minimum window substring. The algorithm involves maintaining two pointers, `leftPtr` and `rightPtr`, representing the current window. The goal is to expand and shrink this window to find the minimum valid substring.

#### Data Structures:

1. **targetCharFreq:**
   - A Map that stores the frequencies of characters in the target string `t`.

2. **windowCharFreq:**
   - A Map that dynamically maintains the frequencies of characters in the current window.

#### Initialization:

- The frequencies of characters in `t` are stored in `targetCharFreq`.

- The pointers `leftPtr` and `rightPtr` are initialized to the start of the string.

- `requiredChars` keeps track of the unique characters in the target, and `formedChars` counts the number of characters that have reached their required frequency in the current window.

#### Sliding Window Algorithm:

1. **Expanding the Window (Right Pointer):**
   - Iterate through the string `s` using the right pointer.
   - Update the frequency map for the current character in `windowCharFreq`.
   - Check if the current character contributes to reaching the required count. If yes, increment `formedChars`.

2. **Minimizing the Window (Left Pointer):**
   - While the window contains all required characters:
     - Update the result if the current window is smaller.
     - Shrink the window by moving the left pointer.
     - Update `formedChars` if the character no longer forms a required count.

3. **Repeat:**
   - Continue the process until the right pointer reaches the end of the string.

#### Result:

The result is the minimum window substring found during the iterations. The final result is the substring of `s` from `resultStart` to `resultEnd`.

### Time Complexity:

The algorithm has a time complexity of O(N), where N is the length of the input string `s`. This is because both pointers traverse the string once.

### Space Complexity:

The space complexity is O(M + N), where M is the length of the target string `t`. This is due to the storage of character frequencies in the maps.

### Conclusion:

The sliding window approach efficiently solves the "Minimum Window Substring" problem, providing a concise and effective solution. The algorithm is optimized for time complexity and utilizes data structures to keep track of character frequencies during the sliding window process.