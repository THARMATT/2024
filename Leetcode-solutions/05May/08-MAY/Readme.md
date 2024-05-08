# Recursion
- You are given an integer ‘n’.
Your task is to return an array containing integers from 1 to ‘n’ (in increasing order) without using loops.
```javascript
function printoneToN(n,result=[]){
    if(n<=0){
        return result
    }
    printoneToN(n-1,result);
    result.push(n) 
    return result 
}
```
```javascript
function printNos(x) {
    if (x <= 0) {
        return [];
    }
    const result = printNos(x - 1); // Recursively call printNos with x - 1
    result.push(x);                 // Append x to the result
    return result;
}

// Example usage:
console.log(printNos(5)); // Output: [1, 2, 3, 4, 5]


```


```python
from typing import List

def printNos(x: int) -> List[int]:
    if x <= 0:
        return []
    result = printNos(x - 1)  # Recursively call printNos with x - 1
    result.append(x)          # Append x to the result
    return result

```