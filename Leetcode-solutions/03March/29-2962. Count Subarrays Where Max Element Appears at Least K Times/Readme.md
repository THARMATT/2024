# 2962. Count Subarrays Where Max Element Appears at Least K Times
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
        const freq = new Map();
        const maxi = Math.max(...nums);
        let i = 0, j = 0;
        let ans = 0;
        const n = nums.length;
        while (j < n) {
            freq.set(nums[j], (freq.get(nums[j]) || 0) + 1);
            while (freq.get(maxi) >= k) {
                ans += n - j;
                freq.set(nums[i], freq.get(nums[i]) - 1);
                i++;
            }
            j++;
        }
        return ans;
};
```