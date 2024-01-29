# 225. Implement Stack using Queues

Create a Last-In-First-Out (LIFO) stack by implementing the MyStack class using two queues. The stack should support the standard stack functions: push, pop, top, and empty.

The MyStack class should have the following methods:

- `void push(int x)`: Adds the element x to the top of the stack.
- `int pop()`: Removes the element from the top of the stack and returns it.
- `int top()`: Retrieves the element from the top of the stack without removing it.
- `boolean empty()`: Returns true if the stack is empty, false otherwise.

Ensure that you use only standard queue operations, including push to back, peek/pop from front, size, and is empty. Note that, depending on your programming language, native support for a queue may be unavailable, in which case you can simulate a queue using a list or deque (double-ended queue), as long as only standard queue operations are employed.

```javascript
var MyStack = function() {
    this.stack = [];
};

MyStack.prototype.push = function(x) {
    return this.stack.push(x);
};

MyStack.prototype.pop = function() {
    return this.stack.pop();
};

MyStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MyStack.prototype.empty = function() {
    return this.stack.length === 0;
};

var obj = new MyStack();
obj.push(x);
var param_2 = obj.pop();
var param_3 = obj.top();
var param_4 = obj.empty();
```