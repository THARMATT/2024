# 9. Palindrome Number

Given an integer x, return true if x is a 
palindrome
, and false otherwise.

```javascript /**
 * @param {number} x - The input number to check for palindrome.
 * @return {boolean} - Returns true if the input number is a palindrome, false otherwise.
 */
var isPalindrome = function(x) {
  // Convert the input number to a string
  let string = x.toString();

  // Reverse the string by splitting, reversing, and joining it
  let reverseString = string.split('').reverse().join('');

  // Convert the reversed string back to a number
  let reversedNumber = parseInt(reverseString, 10);

  // Check if the original number is equal to its reversed version
  if (x === reversedNumber) {
    // If they are equal, the number is a palindrome
    return true;
  } else {
    // If they are not equal, the number is not a palindrome
    return false;
  }
};


```