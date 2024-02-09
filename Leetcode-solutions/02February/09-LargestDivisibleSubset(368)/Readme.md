# 368. Largest Divisible Subset
Given a set of distinct positive integers, find the largest divisible subset where every pair (nums[i], nums[j]) of numbers in the subset satisfies either nums[i] % nums[j] = 0 or nums[j] % nums[i] = 0.

**Detailed Approach:**
1. Sort the given array of numbers in ascending order.
2. Initialize two arrays, `dp` to store the length of the largest divisible subset ending at each index, and `prev` to store the index of the previous element in the subset.
3. Iterate through the sorted array:
   - For each element `nums[i]`, compare it with all previous elements `nums[j]` (where `j < i`).
   - If `nums[i]` is divisible by `nums[j]`, update `dp[i]` to be one more than `dp[j]`, and store `j` as the previous index in `prev[i]`.
4. Track the index `maxIndex` of the maximum value in the `dp` array, representing the end of the largest divisible subset.
5. Backtrack from `maxIndex` using the `prev` array to construct the largest divisible subset.
6. Return the subset.

**Time Complexity:**  
The time complexity of the algorithm is O(n^2) due to the nested loops.

**Space Complexity:**  
The space complexity of the algorithm is O(n) for the `dp` and `prev` arrays.

**Code with Comments:**
```javascript
function largestDivisibleSubset(nums) {
    if (nums.length === 0) return []; // If the input array is empty, return an empty array
    
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let dp = new Array(nums.length).fill(1); // Initialize an array to store the length of largest divisible subset ending at each index
    let prev = []; // Initialize an array to store the index of the previous element in the largest divisible subset
    let maxIndex = 0; // Initialize the index of the maximum value in the dp array
    
    // Iterate through the sorted array
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            // If nums[i] is divisible by nums[j], update dp[i] and prev[i]
            if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
        // Update maxIndex to the index of the maximum value in dp array
        if (dp[i] > dp[maxIndex]) {
            maxIndex = i;
        }
    }
    
    const result = []; // Initialize an array to store the largest divisible subset
    let currentIndex = maxIndex; // Start from maxIndex to backtrack the subset
    
    // Backtrack from maxIndex using prev array to construct the largest divisible subset
    while (currentIndex !== undefined) {
        result.unshift(nums[currentIndex]); // Add nums[currentIndex] to the front of the result array
        currentIndex = prev[currentIndex]; // Move to the previous index in the subset
    }
    
    return result; // Return the largest divisible subset
}

// Example usage:
const nums = [1, 2, 4, 8, 16, 3, 5, 7, 11];
const result = largestDivisibleSubset(nums);
console.log(result); // Output: [1, 2, 4, 8, 16]
```

