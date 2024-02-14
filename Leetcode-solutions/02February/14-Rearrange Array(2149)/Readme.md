# 2149. Rearrange Array Elements by Sign

You are given a `0-indexed `integer array nums of `even` length consisting of an `equal` number of positive and negative integers.

You should rearrange the elements of nums such that the modified array follows the given conditions:

- Every consecutive pair of integers have opposite signs.

- For all integers with the same sign, the order in which they were present in nums is preserved.

- The rearranged array begins with a positive integer.

``Return the modified array after rearranging the elements to satisfy the aforementioned conditions.``

```javascript
function rearrangeArray(nums) {
    // Separate positive and negative numbers
    let positive = [];
    let negative = [];
    for (let num of nums) {
        if (num > 0) {
            positive.push(num);
        } else {
            negative.push(num);
        }
    }

    // Rearrange the array to satisfy conditions
    let result = [];
    let i = 0, j = 0;
    while (i < positive.length && j < negative.length) {
        result.push(positive[i++]);
        result.push(negative[j++]);
    }

    // Append remaining elements if any
    // result = result.concat(positive.slice(i)).concat(negative.slice(j));

    return result;
}

// Example usage:
let nums = [1, -3, 2, -4, 5, -6];
console.log(rearrangeArray(nums)); // Output will be [1, -3, 2, -4, 5, -6] or similar valid arrangement
```