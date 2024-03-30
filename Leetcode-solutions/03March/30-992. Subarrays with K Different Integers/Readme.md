# 992. Subarrays with K Different Integers
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    const slidingWindow = (nums, k) => {
        let i = 0, j = 0, count = 0;
        const map = new Map();
        
        while (j < nums.length) {
            map.set(nums[j], (map.get(nums[j]) || 0) + 1);
            
            while (map.size > k) {
                map.set(nums[i], map.get(nums[i]) - 1);
                if (map.get(nums[i]) === 0) map.delete(nums[i]);
                i++;
            }
            
            count += j - i + 1;
            j++;
        }
        
        return count;
    };
    
    return slidingWindow(nums, k) - slidingWindow(nums, k - 1);
};
```