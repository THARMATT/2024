# 70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
# Pre-requiste
1. Recursion is a programming technique where a function calls itself to solve a problem, typically involving a base case to terminate the process.

2. Dynamic programming is a method for solving complex problems by breaking them down into simpler overlapping subproblems, solving each subproblem only once, and storing the solutions to avoid redundant computations.
3. Memoization is an optimization technique that involves caching and reusing previously computed results to avoid redundant computations in order to improve the performance of a function.



# Approach 

Hum dynamic programming ka use karenge is problem ko solve karne ke liye. Yahan hum 1 se lekar n tak ke har kadam ke liye store karenge ki us tak pahunchne ke kitne tareeqe hain.

1. **Base Cases:**
   - Agar steps 1 ya 2 hain toh direct return karo, kyunki uske liye ek hi tareeqa hoga.
   
2. **Dynamic Programming Array (dp):**
   - Hum ek array `dp` banaayenge, jisme har index par store hoga ki us tak pahunchne ke kitne tareeqe hain.
   
3. **Array Bharo (for loop):**
   - Loop 3 se start hota hai kyunki base cases pehle se bhar gaye hain.
   - Har step ke liye, us tak pahunchne ke tareeqe ko calculate karenge. Yeh hoga (i-1)th step se aane wale tareeqe + (i-2)th step se aane wale tareeqe.
   
4. **Antim Jawab (Return Statement):**
   - Ant mein, dp[n] mein result hoga, jo batayega ki upar tak pahunchne ke kitne tareeqe hain.

Yeh overlapping subproblems ko handle karta hai aur har ek step ke liye usse pehle wale steps ki information ka istemaal karta hai.

# Code
```javascript
/**
 * @param {number} n - Number of stairs
 * @return {number} - Number of distinct ways to climb the stairs
 */
var climbStairs = function(n) {
    // If there are 1 or 2 stairs, there is only one way to climb (1 step or 2 steps)
    if (n <= 2) {
        return n;
    }

    // Create an array dp to store the number of ways to climb each step
    // dp[i] will represent the number of ways to climb to the i-th step
    let dp = new Array(n + 1).fill(0);

    // Base cases: There is 1 way to climb the 1st step and 2 ways to climb the 2nd step
    dp[1] = 1;
    dp[2] = 2;

    // Fill in the dp array iteratively for steps from 3 to n
    for (let i = 3; i <= n; i++) {
        // The number of ways to climb to the i-th step is the sum of
        // the number of ways to climb to the (i-1)-th step and the (i-2)-th step
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // The final result is stored in dp[n], representing the number of ways to climb to the top
    return dp[n];
};

```