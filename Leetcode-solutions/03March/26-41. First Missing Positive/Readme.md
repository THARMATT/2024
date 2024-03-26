# 41. First Missing Positive
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const mp = new Map();
    let maxi = Math.max(...nums, 0);
    for (let num of nums) {
        mp.set(num, true);
    }
    for (let i = 1; i < maxi; i++) {
        if (!mp.has(i)) {
            return i;
        }
    }
    return maxi < 0 ? 1 : maxi + 1;
};

```