

# 907. Sum of Subarray Minimums

Given an array of integers `arr`, find the sum of min(b), where b ranges over every (contiguous) subarray of `arr`. Since the answer may be large, return the answer modulo 10^9 + 7.

## Example

```javascript
Input: arr = [3, 1, 2, 4]
Output: 17
Explanation: Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.
```

# Solution

## Approach

To solve this problem efficiently, we can use a stack to maintain the increasing order of elements in the array. We iterate through the array and for each element, we pop elements from the stack until the current element is greater than the top of the stack. For each popped element, we calculate the contribution to the result based on the subarrays ending at that element.

## Intuition

The key intuition here is to identify the pattern of how many times each element can be the minimum of a subarray. This can be efficiently calculated using a stack.

## Concepts Used

- **Monotonic Stack**: A stack in which the elements are in either increasing or decreasing order. In this problem, we use a monotonic stack to keep track of the increasing order of elements in the array.

- **Dynamic Programming**: The solution involves dynamic programming-like calculations to determine the contribution of each element to the final result.

- **Modular Arithmetic**: To avoid integer overflow, we take the result modulo 10^9 + 7.

# Implementation

```javascript
function sumOfMinimums(arr) {
    const MOD = 10**9 + 7;
    const stack = [];
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
            const j = stack.pop();
            result += arr[j] * (i - j) * (j - (stack.length ? stack[stack.length - 1] : -1));
            result %= MOD;
        }
        stack.push(i);
    }

    while (stack.length) {
        const j = stack.pop();
        result += arr[j] * (arr.length - j) * (j - (stack.length ? stack[stack.length - 1] : -1));
        result %= MOD;
    }

    return result;
}
```

# Complexity Analysis

- Time Complexity: O(N)
- Space Complexity: O(N)


