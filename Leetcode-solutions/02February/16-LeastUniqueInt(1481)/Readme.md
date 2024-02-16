# 1481. Least Number of Unique Integers after K Removals

Given an `array` of integers arr and an integer `k`. Find the least number of `unique` integers after removing exactly `k` elements.
Tip: Remove Elements with minimum frequency
```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let map = new Map();
    arr.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1);
    });

    let sortedArr = [...map.entries()].sort((a, b) => a[1] - b[1]);
    for (let [element, frequency] of sortedArr) {
        if (k >= frequency) {
            k -= frequency;
            map.delete(element);
        } else {
            break;
        }
    }
    return map.size;
};

// Example usage:
let arr = [4, 3, 1, 1, 3, 3, 2];
let k = 3;
console.log(findLeastNumOfUniqueInts(arr, k)); // Output should be 2


```