
# 7. Reverse Integer
```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
let reversed=0;
while(x!==0){
  let remainder=x%10
  reversed=reversed*10+remainder
  x=Math.trunc(x/10)
}
 if (reversed > Math.pow(2, 31) - 1 || reversed < -Math.pow(2, 31)) {
        return 0;
    }
return reversed
};
```
# 9. Palindrome Number
```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false; // Negative numbers are not palindromes
    }
    let reversed = 0;
    let original=x;
    while (x !== 0) {
        let remainder = x % 10
        reversed = reversed * 10 + remainder
        x = Math.trunc(x / 10)
    }

    if (original === reversed) {
        return true
    }
    else {
        return false
    }
};
```