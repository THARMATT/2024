# 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

## Code

```javascript
// Define a function called longestCommonPrefix that takes an array of strings (strs) as input.
var longestCommonPrefix = function (strs) {
  // Check if the input array is empty.
  if (strs.length === 0) {
    // If the array is empty, return an empty string since there are no strings to find a common prefix for.
    return "";
  }

  // Initialize a variable 'ans' with the first string in the array (assuming it as the initial common prefix).
  let ans = strs[0];

  // Iterate through the remaining strings in the array.
  for (let i = 1; i < strs.length; i++) {
    // While the current string does not start with the current common prefix.
    while (strs[i].indexOf(ans) !== 0) {
      // Shorten the common prefix by removing its last character.
      ans = ans.substring(0, ans.length - 1);

      // If the common prefix becomes empty, there is no common prefix among the strings. Return an empty string.
      if (ans === "") {
        return "";
      }
    }
  }

  // Return the longest common prefix found among all the strings in the array.
  return ans;
};
```
