# TypeScript: Beginner to Advance👊

### Beginner Level:

1. **Introduction to TypeScript:**
   - What is TypeScript?
   - Installing TypeScript
   - Basic types: `number`, `string`, `boolean`, `array`, `object`, etc.

2. **TypeScript Variables and Functions:**
   - Declaring variables with types
   - Function declarations and parameter types
   - Optional and default parameters

3. **Interfaces:**
   - Defining and using interfaces
   - Optional properties and readonly properties
   - Function interfaces

4. **Classes:**
   - Creating classes with properties and methods
   - Inheritance and access modifiers (`public`, `private`, `protected`)
   - Abstract classes

5. **Enums:**
   - Creating and using enums
   - String enums and reverse mapping

6. **TypeScript and JavaScript Interoperability:**
   - Using JavaScript libraries in TypeScript
   - Declaration files (`*.d.ts`)

### Intermediate Level:

7. **Advanced Types:**
   - Union and intersection types
   - Type aliases
   - Type assertions

8. **Generics:**
   - Introduction to generics
   - Generic functions and classes

9. **Modules and Namespaces:**
   - Organizing code with modules
   - Understanding namespaces

10. **Decorators:**
    - Introduction to decorators
    - Creating and using decorators

### Advanced Level:

11. **Advanced OOP in TypeScript:**
    - Mixins
    - Method and accessor decorators

12. **Asynchronous Programming:**
    - Promises and async/await
    - Working with asynchronous functions and types

13. **Advanced TypeScript Configurations:**
    - tsconfig.json options and settings
    - Using project references

14. **Testing in TypeScript:**
    - Unit testing with Jest or other testing frameworks
    - Type checking in tests

15. **Tooling and Integration:**
    - Integrating with build tools (Webpack, Parcel)
    - Setting up linters and formatters (TSLint, Prettier)

16. **Advanced JavaScript and TypeScript Patterns:**
    - Design patterns (Singleton, Factory, etc.)
    - Functional programming concepts in TypeScript

17. **TypeScript in Frontend Frameworks:**
    - Angular, React, or Vue with TypeScript
    - TypeScript-specific features in each framework

18. **TypeScript in Backend Development:**
    - Using TypeScript with Node.js
    - Integrating with Express or other backend frameworks

19. **Real-world Applications:**
    - Building a full-stack application with TypeScript
    - Incorporating best practices and design patterns

20. **Contributing to TypeScript:**
    - Understanding the TypeScript compiler
    - Contributing to the TypeScript project on GitHub

 # Introduction

 ### What is TypeScript?

**TypeScript** is a statically typed superset of JavaScript that adds optional static typing and other features to the language. It is designed for large-scale JavaScript applications and aims to make it easier to write and maintain code by providing tools for catching common errors during development. TypeScript code is transpiled to JavaScript, which means it can run on any JavaScript runtime.

Key features of TypeScript include:
- **Static Typing:** TypeScript allows you to specify types for variables, function parameters, and return values, enabling early error detection and improved code quality.
- **Interfaces and Classes:** TypeScript supports interfaces and classes for structuring code in an object-oriented manner.
- **Enums:** Enums provide a way to define named constant values.
- **Generics:** Generics allow the creation of reusable components with support for multiple data types.
- **Modules and Namespaces:** TypeScript supports modular development through modules and namespaces.
- **Type Inference:** TypeScript infers types when they are not explicitly specified, reducing the need for excessive type annotations.

### Installing TypeScript:

To get started with TypeScript, you need to install it globally on your machine. Here are the steps for installation:

1. **Install Node.js:**
   - TypeScript is typically installed and managed through Node Package Manager (npm). Install Node.js from [nodejs.org](https://nodejs.org/) if you haven't already.

2. **Install TypeScript using npm:**
   - Open your terminal or command prompt and run the following command:
     ```
     npm install -g typescript
     ```

3. **Verify Installation:**
   - Check that TypeScript is installed correctly by running:
     ```
     tsc --version
     ```
     This command should display the installed TypeScript version.

### Basic Types:

#### 1. **Number:**
   ```typescript
   let num: number = 42;
   ```

#### 2. **String:**
   ```typescript
   let message: string = "Hello, TypeScript!";
   ```

#### 3. **Boolean:**
   ```typescript
   let isDone: boolean = false;
   ```

#### 4. **Array:**
   - Arrays can be typed using the element type followed by `[]` or using the generic `Array` type.
   ```typescript
   let numbers: number[] = [1, 2, 3];
   // or
   let names: Array<string> = ["Alice", "Bob", "Charlie"];
   ```

#### 5. **Object:**
   - Object types can be specified using interfaces or inline type annotations.
   ```typescript
   interface Person {
       name: string;
       age: number;
   }

   let person: Person = {
       name: "John",
       age: 30
   };
   ```

#### 6. **Tuple:**
   - Tuples allow you to express an array where the type of a fixed number of elements is known.
   ```typescript
   let tuple: [string, number] = ["John", 30];
   ```

#### 7. **Any:**
   - The `any` type allows variables to have any data type.
   ```typescript
   let dynamic: any = "This can be anything!";
   ```

These basic types provide a foundation for understanding how TypeScript introduces static typing to JavaScript. 

# TypeScript Variables and Functions:

### Declaring Variables with Types:

In TypeScript, you can declare variables with explicit types to provide static typing information. Here's an overview:

#### Syntax:
```typescript
let variableName: type;
```

#### Example:
```typescript
let age: number;
let name: string;
let isActive: boolean;
```

This way, you explicitly specify the type of the variable, allowing TypeScript to catch type-related errors during development.

### Function Declarations and Parameter Types:

Functions in TypeScript can have explicit parameter types and return types. This helps in catching errors and providing better documentation for the function.

#### Syntax:
```typescript
function functionName(parameter1: type, parameter2: type): returnType {
    // function body
}
```

#### Example:
```typescript
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}
```

### Optional Parameters:

In TypeScript, you can make function parameters optional by appending a `?` to the parameter name. Optional parameters must come after required parameters.

#### Syntax:
```typescript
function functionName(param1: type, param2?: type): returnType {
    // function body
}
```

#### Example:
```typescript
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}
```

### Default Parameters:

You can also provide default values for function parameters, making them optional as well. Default parameters must come after required parameters.

#### Syntax:
```typescript
function functionName(param1: type, param2: type = defaultValue): returnType {
    // function body
}
```

#### Example:
```typescript
function greetWithDefault(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}
```

### Overloaded Functions:

TypeScript allows you to define multiple function signatures for the same function, known as function overloading. This is useful when a function can accept different types or numbers of parameters.

#### Syntax:
```typescript
function functionName(param1: type1): returnType;
function functionName(param1: type1, param2: type2): returnType;
// ... additional overloads ...

function functionName(param1: any, param2?: any): any {
    // implementation
}
```

#### Example:
```typescript
function displayInfo(name: string): void;
function displayInfo(age: number, gender: string): void;

function displayInfo(arg1: any, arg2?: any): void {
    if (typeof arg2 === 'undefined') {
        console.log(`Name: ${arg1}`);
    } else {
        console.log(`Name: ${arg1}, Age: ${arg2[0]}, Gender: ${arg2[1]}`);
    }
}
```

# Interfaces

### Defining and Using Interfaces:

In TypeScript, interfaces provide a way to define the shape of an object, specifying the names and types of its properties. Here's how you define and use interfaces:

#### Interface Definition:
```typescript
interface Person {
    name: string;
    age: number;
    gender?: string; // Optional property
}
```

#### Using Interfaces:
```typescript
let person: Person = {
    name: "Alice",
    age: 25,
    gender: "female"
};
```

Interfaces can be used to enforce a specific structure for objects and to provide better documentation for the expected shape of data.

### Optional Properties and Readonly Properties:

#### Optional Properties:
You can mark properties in an interface as optional by adding a `?` after the property name. This means the property may or may not be present in the implementing object.

```typescript
interface Car {
    brand: string;
    model: string;
    year?: number; // Optional property
}
```

#### Readonly Properties:
You can make properties readonly by using the `readonly` keyword. This means the property can only be assigned a value during initialization and cannot be changed afterward.

```typescript
interface Point {
    readonly x: number;
    readonly y: number;
}
```

### Function Interfaces in Detail:

Interfaces can also be used to describe the structure of functions. This helps in defining the expected shape of functions, including parameter types and return types.

#### Function Interface Definition:
```typescript
interface MathOperation {
    (a: number, b: number): number;
}
```

#### Using Function Interfaces:
```typescript
let add: MathOperation = function(x: number, y: number): number {
    return x + y;
};

let subtract: MathOperation = function(x: number, y: number): number {
    return x - y;
};
```

In this example, the `MathOperation` interface defines a function type that takes two parameters of type `number` and returns a `number`. The `add` and `subtract` variables implement this interface, ensuring that they adhere to the specified function signature.

#### Optional Parameters in Function Interfaces:
You can also use optional parameters in function interfaces similarly to how you use them in regular function declarations.

```typescript
interface GreetFunction {
    (name: string, greeting?: string): string;
}
```

### Function Interface with `this` Parameter:
Interfaces can include a `this` parameter to describe functions that are meant to be called with a particular context (i.e., using `this` inside the function).

```typescript
interface PrintFunction {
    (this: void, message: string): void;
}
```

This ensures that the function doesn't rely on a specific `this` context.

# Classses
### Creating Classes with Properties and Methods:

In TypeScript, classes provide a way to model object-oriented programming concepts. Here's how you can create classes with properties and methods:

#### Class Definition:
```typescript
class Animal {
    // Properties
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method
    makeSound(): void {
        console.log("Some generic sound");
    }
}
```

#### Creating Instances and Using Methods:
```typescript
let dog = new Animal("Buddy", 3);
console.log(dog.name);          // Output: Buddy
console.log(dog.age);           // Output: 3
dog.makeSound();                // Output: Some generic sound
```

### Inheritance and Access Modifiers:

#### Inheritance:
Inheritance allows a class (subclass/derived class) to inherit properties and methods from another class (base class/parent class). TypeScript supports single inheritance.

```typescript
class Dog extends Animal {
    // Additional properties
    breed: string;

    // Constructor for the derived class
    constructor(name: string, age: number, breed: string) {
        // Call the base class constructor
        super(name, age);
        this.breed = breed;
    }

    // Overriding the base class method
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}
```

#### Access Modifiers:
Access modifiers control the visibility of properties and methods within a class and its subclasses.

- **Public (default):** Members are accessible from outside the class.
- **Private:** Members are only accessible within the class.
- **Protected:** Members are accessible within the class and its subclasses.

```typescript
class Vehicle {
    // Public property
    public brand: string;

    // Private property
    private mileage: number;

    // Protected property
    protected fuelType: string;

    // Constructor
    constructor(brand: string, mileage: number, fuelType: string) {
        this.brand = brand;
        this.mileage = mileage;
        this.fuelType = fuelType;
    }

    // Public method
    start(): void {
        console.log("Engine started!");
    }

    // Private method
    private calculateMileage(): void {
        console.log(`Current mileage: ${this.mileage}`);
    }

    // Protected method
    protected refuel(): void {
        console.log("Refueling...");
    }
}
```

### Abstract Classes:

Abstract classes are classes that cannot be instantiated directly. They serve as a blueprint for other classes and may contain abstract methods that must be implemented by derived classes.

```typescript
abstract class Shape {
    abstract calculateArea(): number;

    // Regular method
    displayArea(): void {
        console.log(`Area: ${this.calculateArea()}`);
    }
}

class Circle extends Shape {
    // Implementing the abstract method
    calculateArea(): number {
        // Logic for calculating the area of a circle
        return Math.PI * Math.pow(this.radius, 2);
    }

    // Additional property
    radius: number;

    // Constructor
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
}
```

Abstract classes provide a way to define common behavior and enforce a structure for derived classes. They are particularly useful when you want to ensure that certain methods are implemented in all subclasses.

# Enums

### Creating and Using Enums:

Enums in TypeScript provide a way to define a set of named numeric or string constants, making it easier to work with a set of related values. Here's how you create and use enums:

#### Numeric Enums:
```typescript
enum Direction {
    North,       // 0
    East,        // 1
    South,       // 2
    West         // 3
}

let myDirection: Direction = Direction.East;
console.log(myDirection); // Output: 1
```

In this example, `Direction` is a numeric enum, and each member gets an automatically incremented numeric value starting from 0.

#### String Enums:
```typescript
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let myColor: Color = Color.Green;
console.log(myColor); // Output: "GREEN"
```

String enums allow you to use strings instead of numbers as enum values. Each member must be initialized with a string literal or another string enum member.

### String Enums and Reverse Mapping in Detail:

#### String Enums:
String enums provide more readable values and are often preferred when the enum values are meant to be consumed by humans.

```typescript
enum Weekday {
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI"
}

let today: Weekday = Weekday.Wednesday;
console.log(today); // Output: "WED"
```

#### Reverse Mapping:
Enum values in TypeScript are bidirectional. Given the value of an enum member, you can obtain its name using reverse mapping.

```typescript
enum Weekday {
    Monday = "MON",
    Tuesday = "TUE",
    Wednesday = "WED",
    Thursday = "THU",
    Friday = "FRI"
}

let today: Weekday = Weekday.Wednesday;
let dayName: string = Weekday[today]; // Reverse mapping
console.log(dayName); // Output: "WED"
```

Reverse mapping allows you to go from the value to the name of an enum member, which can be useful in certain scenarios, such as logging or user interfaces.

### Heterogeneous Enums:

Enums can also contain a mix of string and numeric values. However, it's important to note that in a heterogeneous enum, members that don't have an initializer are considered constants and do not participate in reverse mapping.

```typescript
enum Result {
    Success = 1,
    Failure = "FAILURE"
}

let success: Result = Result.Success;
let failure: Result = Result.Failure;

console.log(Result[1]);      // Output: "Success"
console.log(Result["FAILURE"]); // Output: undefined
```

While using heterogeneous enums, be aware of the limitations of reverse mapping for members without initializers.

# TypeScript and JavaScript Interoperability

### Using JavaScript Libraries in TypeScript:

TypeScript is designed to be compatible with existing JavaScript code, allowing developers to gradually migrate their projects to TypeScript. Here's how you can use JavaScript libraries in TypeScript:

#### 1. **Include the Library:**
   Include the JavaScript library in your TypeScript project. This can be done by adding a script tag to your HTML file or installing the library using a package manager like npm.

   ```html
   <script src="path/to/library.js"></script>
   ```

   or

   ```bash
   npm install library --save
   ```

#### 2. **Type Definitions:**
   If the JavaScript library doesn't come with TypeScript type definitions, you may need to install them separately. Many popular libraries have associated `@types` packages that provide TypeScript type definitions.

   ```bash
   npm install @types/library --save-dev
   ```

#### 3. **Type Assertion:**
   If you don't have type definitions, or if they are incomplete, you can use type assertion to inform TypeScript about the types.

   ```typescript
   let myVar: any = someLibrary.functionReturningUnknownType();
   let specificVar: string = myVar as string;
   ```

   However, using type assertions should be done cautiously, as it bypasses TypeScript's static type checking.

#### 4. **Declaration Merging:**
   If you want to add type information to an existing JavaScript library without type definitions, you can use declaration merging in a separate TypeScript file.

   ```typescript
   // ExternalLibrary.d.ts
   declare module 'someLibrary' {
       function someFunction(): void;
   }
   ```

### Declaration Files (*.d.ts):

Declaration files provide type information for JavaScript code, enabling TypeScript to understand the types and provide better tooling support. These files typically have a `.d.ts` extension.

#### 1. **Creating Declaration Files:**
   Create a declaration file for a JavaScript library or module by declaring the types using the `declare` keyword.

   ```typescript
   // customLibrary.d.ts
   declare module 'customLibrary' {
       function someFunction(): void;
       let someVariable: number;
   }
   ```

#### 2. **Referencing Declaration Files:**
   Reference the declaration file in your TypeScript code to provide type information.

   ```typescript
   /// <reference path="customLibrary.d.ts" />
   import * as myLib from 'customLibrary';

   myLib.someFunction();
   let x: number = myLib.someVariable;
   ```

#### 3. **Using DefinitelyTyped:**
   The DefinitelyTyped repository (`@types`) on GitHub contains a vast collection of community-contributed declaration files for popular JavaScript libraries.

   ```bash
   npm install @types/library --save-dev
   ```

   This automatically includes the types for the corresponding library in your TypeScript project.

By leveraging declaration files and other techniques, TypeScript allows you to seamlessly integrate existing JavaScript libraries into your projects while maintaining type safety and better tooling support.



