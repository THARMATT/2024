# 198. House Robber



You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, and the constraint is that adjacent houses have security systems connected. If two adjacent houses are broken into on the same night, it will automatically alert the police. 

Given an array `nums` representing the amount of money in each house, you need to return the maximum amount of money you can rob tonight without alerting the police.


### Approach and Intuition:

#### 1. Understand the Constraints:
The main constraint is that you cannot rob two adjacent houses on the same night. This means you need to carefully choose which houses to rob to maximize the total amount.

#### 2. Identify Subproblems:
The key insight here is to recognize that the problem can be broken down into smaller subproblems. To maximize the amount of money you can rob from the current house, you need to consider the options of robbing the previous house or skipping it.

#### 3. Dynamic Programming:
Dynamic programming is a suitable technique for solving this kind of problem. It involves breaking down a problem into smaller overlapping subproblems and solving each subproblem only once, storing the solutions to subproblems in a table to avoid redundant calculations.

#### 4. Define State:
Define a state that represents the information needed to solve a subproblem. In this case, a possible state could be the amount of money that can be robbed up to the current house without alerting the police.

#### 5. Recurrence Relation:
Define a recurrence relation that expresses the solution to a subproblem in terms of solutions to smaller subproblems. In this case, the maximum amount of money that can be robbed at the current house depends on whether the previous house was robbed or not.

#### 6. Build DP Table:
Use dynamic programming to build a table that stores the solutions to subproblems. The table is filled iteratively, and each entry in the table represents the maximum amount of money that can be robbed up to that house.

#### 7. Final Result:
The final result is the maximum amount of money that can be robbed without alerting the police, which is found in the last entry of the DP table.

### Solution in Detail:

1. **Base Cases:**
   - If there are no houses, the result is 0.
   - If there is only one house, the result is the money in that house.

2. **Initialization:**
   - Initialize an array `dp` to store the maximum amount of money that can be robbed up to each house.
   - `dp[0]` is the money in the first house.
   - `dp[1]` is the maximum of the money in the first and second houses.

3. **Dynamic Programming Loop:**
   - Iterate from the third house to the last house.
   - For each house, consider the two options: either rob the current house or skip it.
   - Update `dp[i]` with the maximum of either robbing the current house + the money two houses ago or skipping the current house.

4. **Final Result:**
   - The last entry in the `dp` array (`dp[n-1]`) represents the maximum amount of money that can be robbed without alerting the police.

5. **Return Result:**
   - Return the final result as the answer.



### Time Complexity:
The time complexity of this solution is O(n), where n is the number of houses. This is because we iterate through the houses only once.

### Space Complexity:
The space complexity is O(n) as well. We use an array of size n to store the solutions to subproblems.

```javascript

// Function definition
function rob(nums) {
    // Get the length of the 'nums' array
    const n = nums.length;

    // Base Cases
    // If there are no houses, return 0 (no money can be robbed)
    if (n === 0) {
        return 0;
    }

    // If there is only one house, return the money in that house
    if (n === 1) {
        return nums[0];
    }

    // Initialization
    // Create an array 'dp' to store the maximum amount of money that can be robbed up to each house
    const dp = new Array(n);
    // Initialize the first two entries of 'dp'
    dp[0] = nums[0];  // The maximum amount if there's only one house is the money in that house
    dp[1] = Math.max(nums[0], nums[1]);  // The maximum amount if there are two houses is the maximum of the money in the first two houses

    // Dynamic Programming Loop
    // Iterate from the third house to the last house
    for (let i = 2; i < n; i++) {
        // Choose the maximum of either robbing the current house + the money two houses ago,
        // or skipping the current house and keeping the money from the previous house
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    // Final Result
    // The last entry in 'dp' represents the maximum amount of money that can be robbed without alerting the police
    return dp[n - 1];
}

// Example usage:
const houseMoney = [2, 7, 9, 3, 1];
const maxAmount = rob(houseMoney);
console.log(maxAmount);  // Output: 12
```

