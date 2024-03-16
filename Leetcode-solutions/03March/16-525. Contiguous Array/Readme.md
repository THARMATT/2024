# 525. Contiguous Array
```js
function findMaxLength(nums) {
    let maxLength = 0;
    let sumIndexMap = new Map();
    let count = 0;

    sumIndexMap.set(0, -1); // Initialize the map with 0 at index -1 to handle cases where the sum becomes 0 later

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count--;
        } else {
            count++;
        }

        if (sumIndexMap.has(count)) {
            maxLength = Math.max(maxLength, i - sumIndexMap.get(count));
        } else {
            sumIndexMap.set(count, i);
        }
    }

    return maxLength;
}

// Example usage:
const nums = [0, 1, 0, 1, 0, 1];
console.log(findMaxLength(nums)); // Output: 6

```