# 231. Power of Two

Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.

An integer `n` is a power of two, if there exists an integer `x` such that `n` == `2x`.
```js
var isPowerOfTwo = function(n) {
    if (n <= 0) {
        return false; // Negative numbers and 0 are not powers of 2
    }
    return (n & (n - 1)) === 0;//need understand of AND operator
};
```