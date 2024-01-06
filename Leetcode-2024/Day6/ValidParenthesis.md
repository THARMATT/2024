# 20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

```javascript 
/**
 * @param {string} s - The input string containing parentheses, brackets, and curly braces.
 * @return {boolean} - Returns true if the input string is valid, false otherwise.
 */
var isValid = function (s) {
    // Create an empty stack to keep track of opening brackets
    let stack = [];

    // Iterate through each character in the input string
    for (c of s) {
        // If the character is an opening bracket, push it onto the stack
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        } else {
            // If the character is a closing bracket
            // Check if the stack is empty or the corresponding opening bracket is at the top of the stack
            if (
                !stack.length ||
                (c === ')' && stack[stack.length - 1] !== '(') ||
                (c === ']' && stack[stack.length - 1] !== '[') ||
                (c === '}' && stack[stack.length - 1] !== '{')
            ) {
                // If not, the string is not valid
                return false;
            }

            // If the closing bracket matches the corresponding opening bracket, pop it from the stack
            stack.pop();
        }
    }

    // After iterating through the entire string, check if the stack is empty
    // If it is, all brackets were properly matched and closed, so the string is valid
    return !stack.length;
}
```