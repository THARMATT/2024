# 2485. Find the Pivot Integer
Given a positive integer `n`, find the pivot integer `x` such that:

- The sum of all elements between `1` and `x` inclusively equals the sum of all elements between `x` and `n` inclusively.
Return the pivot integer `x`. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

```javascript
var pivotInteger = function (n) {
    let x = Math.sqrt(n * (n + 1) / 2);

    if (x % 1 !== 0) {
        return -1;
    } else {
        return Math.floor(x);
    }
};
```
- Initial Approach
apply a loop to check wheter if there is any no. x exists such that 
1+...+x=x+...n
```javascript
function checkPivot(num) {
    for (let i = 1; i <= num; i++) {
        let x;
        if (x(x + 1) / 2 === n(n + x) / 2) {
            return x
        }
    }
        return -1
    }
```