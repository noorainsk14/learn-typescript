🔹 What is a Function?

A function is a reusable block of code that performs a specific task.

✅ Basic Syntax
function greet(name: string): void {
  console.log("Hello, " + name);
}

📚 Function Types
function add(a: number, b: number): number {
  return a + b;
}


a and b: parameters of type number

Return type: number

You can also define a function type:

let sum: (x: number, y: number) => number;
sum = function(x, y) {
  return x + y;
};

🎯 Optional Parameters
function greet(name: string, age?: number): void {
  console.log(`Hello ${name}`);
  if (age !== undefined) console.log(`You are ${age} years old.`);
}


? means the parameter is optional.

🎯 Default Parameters
function multiply(a: number, b: number = 2): number {
  return a * b;
}


If b is not passed, it defaults to 2.

📌 Rest Parameters
function logMessages(...messages: string[]) {
  messages.forEach(msg => console.log(msg));
}
logMessages("One", "Two", "Three");


... collects multiple arguments into an array.

🚀 Arrow Functions
const greet = (name: string): void => {
  console.log(`Hello, ${name}`);
};


Shorter syntax and lexical this (doesn’t create its own this).

🔁 Function Overloading

Allows functions to behave differently based on argument types or counts.

function work(a: string): void;
function work(a: string, b: number): number;

function work(a: any, b?: any): any {
  if (typeof a === "string" && b === undefined) {
    console.log("Doing single task");
  } else if (typeof a === "string" && typeof b === "number") {
    return 100;
  } else {
    throw new Error("Invalid input");
  }
}


Only one implementation, but multiple type signatures.

📦 Anonymous & Callback Functions
let greet = function(name: string) {
  console.log("Hello " + name);
};

function processInput(input: string, callback: (s: string) => void) {
  callback(input);
}

🛑 Return Types
Type	Meaning
void	Returns nothing
number	Must return a number
string	Must return a string
any	Can return anything

🔐 Best Practices

✅ Always define parameter and return types.

✅ Use void when no return value is needed.

✅ Use arrow functions for shorter syntax or callbacks.

✅ Use overloading for flexible APIs.

❌ Avoid using any unless necessary.


