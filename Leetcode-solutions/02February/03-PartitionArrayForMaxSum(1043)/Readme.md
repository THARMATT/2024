# 1043. Partition Array for Maximum Sum
Given an integer array `arr`, partition the array into (contiguous) subarrays of length at most `k`. After partitioning, each subarray has their values changed to become the `maximum` value of that subarray.

Return the largest sum of the given array after partitioning. Test cases are generated so that the answer fits in a `32-bit` integer.
### My Intutuion:

1. Identify subarrays of length at most k.
2. For each subarray, find the maximum element.
3. Replace all elements in the subarray with the maximum element.
4. Iterate over each subarray and accumulate the maximum values to get the final sum.

### Evaluation:

My approach is reasonable and follows the basic intuition of maximizing each subarray. However, there is a key optimization that can be applied to achieve a more efficient solution.

### Improved Approach:

1. Create an array `dp` of the same length as the input array `arr` to store the maximum sum ending at each index.
2. Iterate over each index `i` in the array:
   - For each valid subarray length `j` (from 1 to k):
     - Calculate the maximum value in the subarray ending at index `i` (considering the last `j` elements).
     - Update the maximum sum at index `i + j` in the `dp` array.
3. The final result is the maximum sum at the last index of the `dp` array.

### Example Code:

```javascript
const maxSumAfterPartitioning = (arr, k) => {
  // Length of the array
  const n = arr.length;

  // Initialize an array to store the maximum sum at each index
  const dp = new Array(n).fill(0);

  // Iterate over each index in the array
  for (let i = 0; i < n; i++) {
    // Initialize the maximum value within the current subarray to 0
    let maxVal = 0;

    // Iterate over valid subarray lengths up to k
    // and check if the subarray ending at index i is valid
    for (let j = 1; j <= k && i - j + 1 >= 0; j++) {
      // Calculate the maximum value in the subarray ending at index i
      maxVal = Math.max(maxVal, arr[i - j + 1]);

      // Update the maximum sum at index i + j in the dp array
      dp[i] = Math.max(dp[i], (i >= j ? dp[i - j] : 0) + maxVal * j);
    }
  }

  // Return the maximum sum for the entire array
  return dp[n - 1];
};

// Example usage:
const arr = [1, 15, 7, 9, 2, 5, 10];
const k = 3;
console.log(maxSumAfterPartitioning(arr, k)); // Output: 84


```

### Key Differences:

1. **Dynamic Programming:**
   - The improved approach uses dynamic programming (`dp` array) to store intermediate results, avoiding redundant calculations and improving efficiency.

2. **Maximizing Subarrays:**
   - Instead of iterating over subarrays to find the maximum element, the improved approach calculates the maximum sum directly by considering the maximum value in each subarray ending at the current index.

3. **Optimizing Iteration:**
   - The improved approach optimizes the iteration by considering only valid subarray lengths, avoiding unnecessary calculations.

- Time Complexity: O(n * k)
- Space Complexity: O(n)