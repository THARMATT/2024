# 201. Bitwise AND of Numbers Range
Given two integers `left` and `right` that represent the range `[left, right]`, `return the bitwise AND of all numbers in this range, inclusive`


**Initial Approach:**

The initial approach to solving the problem involved iterating over the range of numbers and performing a bitwise AND operation on each pair of consecutive numbers. However, this approach is inefficient as it involves unnecessary iterations and bitwise operations. Additionally, it fails to utilize the properties of bitwise operators effectively.
```js

function bitwiseInitial(left, right) {
    let bitwiseresult = left; // Initialize with the first number in the range
    for (let i = left + 1; i <= right; i++) { // Iterate over the numbers in the range
        bitwiseresult &= i; // Perform bitwise AND operation with each number
    }
    return bitwiseresult; // Return the final bitwise AND result
}
```

**Correct Approach:**

The correct approach to solving the problem involves utilizing bitwise operators efficiently to compute the bitwise AND of all numbers in the given range directly. Specifically, we can find the common prefix of the binary representations of the range's endpoints and then left shift one of the endpoints by the length of the common prefix to obtain the bitwise AND result.
```js

function bitwiseCorrect(left, right) {
    let shift = 0;
    while (left < right) {
        left >>= 1;
        right >>= 1;
        shift++;
    }
    return left << shift;
}
```
**Detailed Explanation of Bitwise Operators:**

Bitwise operators are used to perform operations on individual bits of binary representations of numbers. These operators include AND (`&`), OR (`|`), XOR (`^`), NOT (`~`), left shift (`<<`), and right shift (`>>`).

1. **AND (`&`):** Performs a bitwise AND operation between corresponding bits of two numbers. If both bits are 1, the result is 1; otherwise, it's 0.

   Example:
   ```
   5 & 3
   101 & 011
   -----
   001
   Result: 1
   ```

2. **OR (`|`):** Performs a bitwise OR operation between corresponding bits of two numbers. If at least one bit is 1, the result is 1; otherwise, it's 0.

   Example:
   ```
   5 | 3
   101 | 011
   -----
   111
   Result: 7
   ```

3. **XOR (`^`):** Performs a bitwise XOR operation between corresponding bits of two numbers. If the bits are different, the result is 1; otherwise, it's 0.

   Example:
   ```
   5 ^ 3
   101 ^ 011
   -----
   110
   Result: 6
   ```

4. **NOT (`~`):** Flips each bit of a number, changing 0s to 1s and 1s to 0s.

   Example:
   ```
   ~5
   ~101
   ---
   -110
   Result: -6
   ```

5. **Left Shift (`<<`):** Shifts the binary representation of a number to the left by a specified number of positions, effectively multiplying the number by 2 for each position shifted.

   Example:
   ```
   5 << 2
   101 << 2
   -------
   10100
   Result: 20
   ```

6. **Right Shift (`>>`):** Shifts the binary representation of a number to the right by a specified number of positions, effectively dividing the number by 2 for each position shifted.

   Example:
   ```
   20 >> 2
   10100 >> 2
   -------
   101
   Result: 5
   ```

