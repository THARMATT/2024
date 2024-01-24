I give an interview for Kautiyalam a Surat Based Startup and got failed and these are two Basic problems which I was unable to solve.
```markdown
# Array Problems

## Problem 1: Find Elements Starting with 'a'

Given an array `arr` of strings, find and display the elements that start with the letter 'a'.

### Example

```javascript
const arr = ["abc", "bcx", "azx"];

// Output should be ["abc", "azx"]
```

### Solution

```javascript
const arr = ["abc", "bcx", "azx"];

const result = arr.filter(element => element.startsWith("a"));

console.log(result);
```

---

## Problem 2: Find Elements Whose Sum is 9

Given an array `arr` of integers and a target sum, find and display pairs of elements whose sum is equal to the target sum.

### Example

```javascript
const arr = [2, 3, 4, 5, 6, 7];
const targetSum = 9;

// Output should be [[2, 7], [4, 5]]
```

### Solution

```javascript
const arr = [2, 3, 4, 5, 6, 7];
const targetSum = 9;
const result = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === targetSum) {
            result.push([arr[i], arr[j]]);
        }
    }
}

console.log(result);
```

---

