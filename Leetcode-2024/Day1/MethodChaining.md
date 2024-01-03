# 2726. Calculator with Method Chaining
Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

Your Calculator class should have the following methods:

add - This method adds the given number value to the result and returns the updated Calculator.

subtract - This method subtracts the given number value from the result and returns the updated Calculator.

multiply - This method multiplies the result  by the given number value and returns the updated Calculator.

divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.

power - This method raises the result to the power of the given number value and returns the updated Calculator.

getResult - This method returns the result.

Solutions within 10-5 of the actual result are considered correct.
## Code
```javascript 
// Define a Calculator class
class Calculator {

    // Constructor initializes the calculator with an initial value
    constructor(value) {
        // Store the initial value in an instance variable
        this.num = value;
    }

    // Method to add a value to the current number and return the calculator instance
    add(value) {
        // Update the current number by adding the provided value
        this.num += value;
        // Return the updated calculator instance to support method chaining
        return this;
    }

    // Method to subtract a value from the current number and return the calculator instance
    subtract(value) {
        // Update the current number by subtracting the provided value
        this.num -= value;
        // Return the updated calculator instance to support method chaining
        return this;
    }

    // Method to multiply the current number by a value and return the calculator instance
    multiply(value) {
        // Update the current number by multiplying it with the provided value
        this.num *= value;
        // Return the updated calculator instance to support method chaining
        return this;
    }

    // Method to divide the current number by a value and return the calculator instance
    divide(value) {
        // Check for division by zero
        if (value === 0) {
            // Throw an error if division by zero is attempted
            throw new Error('Division by zero is not allowed');
        }
        // Update the current number by dividing it with the provided value
        this.num /= value;
        // Return the updated calculator instance to support method chaining
        return this;
    }

    // Method to raise the current number to a power and return the calculator instance
    power(value) {
        // Update the current number by raising it to the provided power
        this.num **= value;
        // Return the updated calculator instance to support method chaining
        return this;
    }

    // Method to retrieve the final result of the calculator operations
    getResult() {
        // Return the current number as the result
        return this.num;
    }
}
```