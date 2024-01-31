# 150. Evaluate Reverse Polish Notation
You are provided with an array of strings, `tokens`, representing an arithmetic expression in Reverse Polish Notation (RPN). Your task is to evaluate this expression and return an integer that represents its value.

Key Notes:
- The valid operators in the expression are '+', '-', '*', and '/'.
- Each operand can be either an integer or another expression.
- The division between two integers always truncates toward zero.
- There will not be any division by zero in the provided expression.
- The given array, `tokens`, ensures a valid arithmetic expression in reverse polish notation.
- The answer and all intermediate calculations must be representable within a 32-bit integer.

Please provide function, `evalRPN(tokens)`, that takes the array of tokens as input and returns the evaluated result.

---

```javascript

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];
    for (const token of tokens) {
        if (!isNaN(parseInt(token))) {
            stack.push(parseInt(token))
        }
        else {
            const operand2 = stack.pop()
            const operand1 = stack.pop()
            switch (token) {
                case '+':
                    stack.push(operand1 + operand2)
                    break;
                case '-':
                    stack.push(operand1 - operand2)
                    break;
                case '*':
                    stack.push(operand1 * operand2)
                    break;
                case '/':
                    stack.push(Math.trunc(operand1 / operand2))
                    break;
            }
        }
    }
    return stack.pop()
};
```