# 2108. Find First Palindromic String in the Array

Given an array of strings `words`, return the first `palindromic` string in the array. If there is no such string, return an `empty string ""`.

A string is `palindromic` if it reads the same forward and backward.

# Approach:
A straightforward approach to solving this problem involves iterating through each string in the array and checking whether it is a palindrome. This can be achieved by comparing the string with its reversed form. If a palindrome is found, we return it; otherwise, we return an empty string if no palindromic strings are present in the array.

## Time Complexity:
The time complexity of this approach depends on the length of the strings in the array and the number of strings present. Let n be the number of strings and m be the maximum length of a string. In the worst case, we would need to iterate through all the strings and compare each character with its corresponding character in the reversed string. Therefore, the time complexity is O(n*m).

## Space Complexity:
The space complexity of this approach is primarily determined by the space required to store the reversed string for comparison. Additionally, space is needed for variables such as temporary strings during iteration. Hence, the space complexity is O(m) where m is the length of the longest string in the array.


# Code
```javascript
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    function isPalidromic(str){
        let str1=str.split("").reverse().join("")
        if(str1===str){

            return str
        }
    }
    for (let word of words){
        if(isPalidromic(word)){
            return word;
        }
       
    }
     return ""
};
```