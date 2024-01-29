# 232. Implement Queue using Stacks


Create a First-In-First-Out (FIFO) queue by implementing the MyQueue class using two stacks. The queue should support standard queue functions, including push, peek, pop, and empty.

The MyQueue class should have the following methods:

- `void push(int x)`: Adds the element x to the back of the queue.
- `int pop()`: Removes the element from the front of the queue and returns it.
- `int peek()`: Retrieves the element at the front of the queue without removing it.
- `boolean empty()`: Returns true if the queue is empty, false otherwise.

Ensure that you use only standard stack operations, such as push to top, peek/pop from top, size, and is empty. If native support for a stack is unavailable in your programming language, simulate a stack using a list or deque (double-ended queue), ensuring that only standard stack operations are employed.

```javascript
var MyQueue = function() {
  this.queue = [];  
};

MyQueue.prototype.push = function(x) {
    return this.queue.push(x);
};

MyQueue.prototype.pop = function() {
    return this.queue.shift();
};

MyQueue.prototype.peek = function() {
    return this.queue[0];
};

MyQueue.prototype.empty = function() {
    return this.queue.length === 0;
};


```
