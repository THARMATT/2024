

# Dynamic Programming Introduction
Dynamic programming is a problem-solving technique used for optimization problems. 

## Greedy Method vs. Dynamic Programming

- **Greedy Method and Dynamic Programming:** Both are strategies for solving optimization problems, but they differ in approach. Greedy follows a predefined procedure, while dynamic programming explores all possible solutions to find the optimal one.

## Recursive Formulas in Dynamic Programming

- **Dynamic Programming and Recursive Formulas:** Dynamic programming often involves solving problems using recursive formulas. It focuses on finding optimal solutions by making a sequence of decisions at each stage, unlike greedy methods where decisions are made only once.

## Tabulation and Memoization

- **Tabulation and Memoization:** These are techniques used in dynamic programming.
  - **Tabulation:** It uses an iterative bottom-up approach, filling up a table with values starting from smaller values and working towards the desired result.
  - **Memoization:** This approach involves storing results to avoid redundant function calls, often adopting a top-down recursive approach.

## Time Complexity Reduction with Memoization

- **Memoization and Time Complexity:** Memoization significantly reduces time complexity by storing and reusing function results. This transformation is evident in examples like the Fibonacci series, where exponential time complexity (2^n) is reduced to linear (O(n)).

## Tabulation and the Bottom-Up Approach

- **Tabulation and Bottom-Up Approach:** Tabulation, or the bottom-up approach, is often preferred in dynamic programming. It involves iterative methods that fill up a table with values, starting from smaller values and working towards the desired result. This contrasts with the top-down approach of memoization.





## Concepts

### Dynamic Programming (DP)

Dynamic programming is a problem-solving technique that breaks down complex problems into simpler, overlapping subproblems, solving each subproblem only once and storing the results for future use.

## Recursive Fibonacci Function

```javascript
function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
```

- Basic recursive implementation of the Fibonacci sequence.
- Inefficient for larger values of `n` due to redundant function calls.
### Recursive Tree (Without Memoization/Tabulation)

```scss
          fib(5)
         /      \
    fib(4)    fib(3)
   /    \     /    \
fib(3) fib(2) fib(2) fib(1)
...    ...    ...    ...
```
- **Time Complexity:** Exponential, O(2^n).
- **Space Complexity:** O(n) for the recursive call stack.

## Tabulation for Fibonacci

```javascript
function fib(n) {
  if (n <= 1) {
    return n;
  }
  let F = [];
  F[1] = 1;
  F[0] = 0;
  for (let i = 2; i <= n; i++) {
    F[i] = F[i - 1] + F[i - 2];
  }
  return F[n];
}
```

- Utilizes tabulation (bottom-up approach) to optimize the Fibonacci calculation.
- Iteratively fills an array with Fibonacci values.
### Tabulation Tree

```scss
        F[0]=0, F[1]=1
         /      \
    F[2]=1    F[3]=2
   /    \     /    \
F[3]=2 F[4]=3 F[4]=3 F[5]=5
```
- **Time Complexity:** Linear, O(n).
- **Space Complexity:** O(n) for the array storing Fibonacci values.
## Memoization for Fibonacci

```javascript
function fibWithMemo(n, memo = {}) {
  if (n <= 1) {
    return n;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = fibWithMemo(n - 1, memo) + fibWithMemo(n - 2, memo);
  return memo[n];
}
```

- Implements memoization to store and reuse previously calculated Fibonacci values.
- Recursive approach with reduced redundancy.



### Memoization Tree

```scss
              fibWithMemo(5)
              /            \
 fibWithMemo(4)              fibWithMemo(3)
   /      \                 /            \
fibWithMemo(3) fibWithMemo(2) fibWithMemo(2) fibWithMemo(1)
   ...          ...            ...            ...
```


- **Time Complexity:** Linear, O(n).
- **Space Complexity:** O(n) for the memoization table.

## Conclusion

- Memoization and tabulation are techniques in dynamic programming to optimize problem-solving.
- Memoization reduces redundancy and transforms exponential time complexity to linear.
- Tabulation follows a bottom-up approach, providing a linear time complexity solution.
- Dynamic programming encompasses both strategies, offering efficient solutions to optimization problems.

