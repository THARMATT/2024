# 268. Missing Number
Given an array `nums` containing `n` distinct numbers in the range` [0, n]`, return the only number in the range that is `missing from the array`.
```js
function missingNumber(nums){
    nums.sort((a,b) => a - b);
     if(nums[0] !== 0) {
        return 0;
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] + 1 !== nums[i + 1]){
            return nums[i] + 1;
        }
    }
    return nums[nums.length - 1] + 1;
}

```