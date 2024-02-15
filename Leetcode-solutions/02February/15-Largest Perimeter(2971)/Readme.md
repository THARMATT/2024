# 2971. Find Polygon With the Largest Perimeter
Given an array of positive integers, the task is to find the largest possible perimeter of a polygon that can be formed using the elements of the array.

**Approach:**

1. **Sorting:** First, we sort the array in ascending order. Sorting allows us to efficiently identify the longest sides of the potential polygons.

2. **Iteration:** We then iterate through the array from the end towards the beginning. This allows us to consider the largest elements first as potential longest sides of the polygon.

3. **Validation:** For each element `nums[i]`, we check if the sum of the remaining elements (`sum`) after excluding `nums[i]` is greater than `nums[i]`. If it is, then it satisfies the condition for forming a polygon.

4. **Return:** We return the sum of the remaining elements (`sum`) plus the current element `nums[i]` as the perimeter of the largest possible polygon.

5. **Edge Case:** If no valid polygon can be formed, we return `-1`.

**Complexity:**

- **Time Complexity:** The time complexity is dominated by the sorting operation, which is typically `O(n log n)` for the quicksort algorithm. The iteration through the sorted array takes `O(n)` time. Hence, the overall time complexity is `O(n log n)`.

- **Space Complexity:** The space complexity is `O(1)` as we're not using any additional data structures that grow with the size of the input.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    let n = nums.length;
    nums.sort((a, b) => a - b); // Sorting in ascending order
    let sum = nums.reduce((acc, val) => acc + val, 0); // Calculating the sum of all elements
    for (let i = n - 1; i >= 2; i--) {
        sum -= nums[i]; // Subtracting the current element
        if (sum > nums[i]) { // Checking if the sum of remaining elements is greater than the current element
            return sum + nums[i]; // If yes, return the perimeter
        }
    }
    return -1; // Otherwise, return -1
};
```

