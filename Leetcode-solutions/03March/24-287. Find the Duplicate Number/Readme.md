# 287. Find the Duplicate Number
```js
var findDuplicate = function(nums) {
    let slow = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let ind = Math.abs(nums[i]);
        if (nums[ind] < 0) {
            return ind;
        }
        nums[ind] = -nums[ind];
    }
    return -1;
};
```