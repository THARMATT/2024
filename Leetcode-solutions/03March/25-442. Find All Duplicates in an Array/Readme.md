# 442. Find All Duplicates in an Array
```js
/**
 * @param {number[]} nums - An array of integers
 * @return {number[]} - An array containing the duplicates found in the input array
 */
var findDuplicates = function(nums) {
    // Initialize an empty array to store the duplicates found
    const result = [];
    // Get the length of the input array
    const n = nums.length;
    // Iterate through each element in the input array
    for (let i = 0; i < n; i++) {
        // Get the absolute value of the current number
        const num = Math.abs(nums[i]);
        // Calculate the index for the current number (subtracting 1 because array indexes are zero-based)
        const idx = num - 1;
        // Check if the number at the calculated index is negative (indicating it has been encountered before)
        if (nums[idx] < 0)
            // If it's negative, it means this number is a duplicate, so push it into the result array
            result.push(num);
        // Negate the value at the calculated index to mark it as visited
        nums[idx] *= -1;
    }
    // Return the array containing duplicates found
    return result;
};
```