# 1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
## Code
```javascript
/**
 * @param {number[]} nums - An array of numbers
 * @param {number} target - The target sum
 * @return {number[]} - An array containing the indices of two numbers whose sum equals the target
 */
var twoSum = function(nums, target) {
    // Create a new Map to store numbers and their indices
    let map = new Map();

    // Loop through the array 'nums' using variable 'i' as an index
    for (let i = 0; i < nums.length; i++) {
        // Get the current number from the array at index 'i'
        let num1 = nums[i];

        // Calculate the second number needed to achieve the target sum
        let num2 = target - num1;

        // Check if the Map already has the second number (num2) as a key
        if (map.has(num2)) {
            // If num2 is found in the Map, return the indices of the two numbers
            return [i, map.get(num2)];
        }

        // If num2 is not found in the Map, store the current number (num1) and its index (i) in the Map
        map.set(num1, i);
    }
};


```