# 27. Remove Element
You are given an integer array `nums` and an integer `val`. Your task is to remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed. After removal, return the number of elements in `nums` that are not equal to `val`.

To be accepted, you need to perform the following tasks:

1. Change the array `nums` such that the first `k` elements contain the elements that are not equal to `val`.
2. Return the value `k`.

**Function Signature:**
```java
public int removeElement(int[] nums, int val) {
    // Your implementation here
}
```

**Custom Judge:**

The judge will test your solution with the following code:

```java
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.


## Code
```javascript

/**
 * @param {number[]} nums - An array of numbers
 * @param {number} val - The value to be removed from the array
 * @return {number} - The length of the modified array after removing elements equal to 'val'
 */
var removeElement = function(nums, val) {
    // Initialize an index variable to keep track of the modified array
    let index = 0;

    // Iterate through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // Check if the current element is not equal to the value to be removed
        if (nums[i] !== val) {
            // If not equal, update the array at the 'index' position with the current element
            nums[index] = nums[i];
            // Increment the 'index' to move to the next position in the modified array
            index++;
        }
    }

    // The 'index' variable now represents the length of the modified array
    // containing elements not equal to the specified 'val'
    return index;
};

```