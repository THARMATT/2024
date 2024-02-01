# 1143. Longest Common Subsequence

Given two strings, `text1` and `text2`, find the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".

A common subsequence of two strings is a subsequence that is common to both strings.

**Input:**
- Two strings, `text1` and `text2`, where the length of `text1` and `text2` is between 1 and 1000.

**Output:**
- An integer representing the length of the longest common subsequence.

**Example:**
```plaintext
Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace", and its length is 3.
```

**Note:**
- The characters in the common subsequence must maintain their relative order in both strings.
- If there is no common subsequence, the function should return 0.
**Problem Prerequisite:**
Understanding of dynamic programming concepts, particularly the concept of bottom-up dynamic programming.

**Approach:**
The problem is solved using a bottom-up dynamic programming approach. The key idea is to fill up a 2D array (`dp`) where `dp[i][j]` represents the length of the Longest Common Subsequence (LCS) of substrings `str1[0...i-1]` and `str2[0...j-1]`.

1. **Initialization:**
   - Initialize a 2D array `dp` with dimensions `(m+1) x (n+1)`, where `m` and `n` are the lengths of `str1` and `str2`, respectively.
   - Initialize the first row and first column of `dp` with zeros. This is because the LCS with an empty string is always zero.

2. **Bottom-Up Dynamic Programming:**
   - Use a nested loop to iterate over all possible substrings of `str1` and `str2`.
   - Compare characters at the current positions in both strings.
   - If the characters match, extend the LCS by 1 (add 1 to the length obtained from the diagonal element `dp[i-1][j-1]`).
   - If the characters don't match, take the maximum of the lengths from the top or left (`dp[i-1][j]` or `dp[i][j-1]`).

3. **Result:**
   - The final length of the LCS is stored in `dp[m][n]`, where `m` and `n` are the lengths of the input strings.

4. **Time Complexity:**
   - The nested loop iterates over all elements of the 2D array `dp`, making the time complexity O(m * n), where m and n are the lengths of the input strings.

5. **Space Complexity:**
   - The space complexity is O(m * n) as we are using a 2D array of size `(m+1) x (n+1)`.

**Code with Comments:**
```javascript
// Function to find the length of the Longest Common Subsequence (LCS)
function longestCommonSubsequence(str1, str2) {
  // Get the lengths of the input strings
  const m = str1.length;
  const n = str2.length;

  // Create a 2D array to store the lengths of LCS
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Fill the dp array using bottom-up dynamic programming
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // Compare characters at current positions in both strings
      if (str1[i - 1] === str2[j - 1]) {
        // If characters match, extend the LCS by 1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // If characters don't match, take the maximum of the lengths from the top or left
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Length of LCS is stored in dp[m][n]
  return dp[m][n];
}

// Example usage:
let result = longestCommonSubsequence("ABCBDAB", "BDCAB");
console.log(result); // Output: 4 (LCS: BCAB)
```

**Calculating Space and Time Complexity:**
- **Space Complexity:**
  - Count the additional space used by the algorithm, including any data structures or arrays.
- **Time Complexity:**
  - Count the number of basic operations executed by the algorithm as a function of the input size.

In the code above:
- Space Complexity: O(m * n) - 2D array `dp`.
- Time Complexity: O(m * n) - Nested loops iterating over the 2D array.