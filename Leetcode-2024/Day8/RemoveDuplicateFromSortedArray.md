# 26. Remove Duplicates from Sorted Array

**Question:**

Given an integer array `nums` sorted in non-decreasing order, implement the `removeDuplicates` function to remove the duplicates in-place. Ensure that each unique element appears only once, and maintain the relative order of the elements. The function should return the number of unique elements in `nums`.

Your task is to modify the array `nums` such that the first `k` elements contain the unique elements in the order they were initially present in `nums`. The remaining elements of `nums` are not important, and neither is the size of `nums`. 

Use the following function signature:

```python
def removeDuplicates(nums: List[int]) -> int:
    # Your implementation here
```

**Custom Judge:**

The judge will test your solution using the following code:

```python
nums = [...]  # Input array
expectedNums = [...]  # The expected answer with correct length

k = removeDuplicates(nums)  # Calls your implementation

assert k == len(expectedNums)
for i in range(k):
    assert nums[i] == expectedNums[i]
```

If all assertions pass, your solution will be accepted. Ensure that your implementation satisfies the conditions mentioned above and produces the correct output for the provided test cases.

## Code

```javascript 
/**
 * @param {number[]} nums - An array of numbers with duplicates.
 * @return {number} - The length of the array after removing duplicates.
 */
var removeDuplicates = function(nums) {
    // Initialize index to 1 since the first element is always considered unique.
    let index = 1;
    
    // Iterate through the array starting from the first element.
    for(let i = 0; i < nums.length - 1; i++) {
        // Check if the current element is different from the next element.
        if(nums[i] !== nums[i + 1]) {
            // If different, update the array at the 'index' position with the next unique element.
            nums[index] = nums[i + 1];
            
            // Increment the 'index' to keep track of the unique elements in the array.
            index++;
        }
    }
    
    // 'index' represents the length of the array after removing duplicates.
    return index;
};


```