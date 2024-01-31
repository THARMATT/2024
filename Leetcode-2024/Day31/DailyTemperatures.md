# 739. Daily Temperatures

Given an array of integers `temperatures` represents the daily temperatures, return an array `answer` such that `answer[i]` is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep `answer[i] == 0 `instead.

## Intuition
My initial approach with nested loops might lead to a time limit exceeded error because it checks each day against the temperatures of all subsequent days, resulting in higher time complexity. The stack-based approach optimizes this by efficiently tracking relevant indices, reducing redundant comparisons and improving overall efficiency.

## Approach


### Example:
Consider the temperatures array: `[73, 74, 75, 71, 69, 72, 76, 73]`

### Approach:

1. **Initialize:**
   - Stack: `[]`
   - Answer Array: `[0, 0, 0, 0, 0, 0, 0, 0]`

2. **Iteration (i=0):**
   - Temperature: `73`
   - Stack: `[0]` (push index 0 onto the stack)

3. **Iteration (i=1):**
   - Temperature: `74`
   - Stack: `[1]` (pop index 0, update answer[0] to 1, then push index 1 onto the stack)

4. **Iteration (i=2):**
   - Temperature: `75`
   - Stack: `[2]` (pop index 1, update answer[1] to 1, then push index 2 onto the stack)

5. **Iteration (i=3):**
   - Temperature: `71`
   - Stack: `[2, 3]` (push index 3 onto the stack)

6. **Iteration (i=4):**
   - Temperature: `69`
   - Stack: `[2, 3, 4]` (push index 4 onto the stack)

7. **Iteration (i=5):**
   - Temperature: `72`
   - Stack: `[2, 3]` (pop index 4, update answer[4] to 1, then push index 5 onto the stack)

8. **Iteration (i=6):**
   - Temperature: `76`
   - Stack: `[6]` (pop index 5, update answer[5] to 1, then push index 6 onto the stack)

9. **Iteration (i=7):**
   - Temperature: `73`
   - Stack: `[6, 7]` (pop index 6, update answer[6] to 1, then push index 7 onto the stack)

10. **Final Answer Array:** `[1, 1, 4, 2, 1, 1, 0, 0]`

### Explanation:
- The stack is used to keep track of indices of temperatures for which a warmer day is yet to be found.
- Whenever a warmer day is found, the corresponding entry in the answer array is updated.
- This approach helps efficiently determine the number of days to wait for a warmer temperature for each day.

## Code
```javascript
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    // Get the length of the temperatures array
    let n = temp.length;

    // Initialize an array 'answer' of size n with all elements set to 0
    let answer = new Array(n).fill(0);

    // Initialize an empty stack to store indices of temperatures
    let stack = [];

    // Loop through the temperatures array
    for (let i = 0; i < n; i++) {
        // While the stack is not empty and the current temperature is greater than the temperature at the top of the stack
        while (stack.length !== 0 && temp[i] > temp[stack[stack.length - 1]]) {
            // Pop the index from the stack
            let poppedIndex = stack.pop();

            // Update the answer array for the poppedIndex with the number of days until a warmer temperature
            answer[poppedIndex] = i - poppedIndex;
        }

        // Push the current index onto the stack
        stack.push(i);
    }

    // Return the final 'answer' array
    return answer;
};
```