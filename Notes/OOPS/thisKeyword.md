
🔑 What is this in TypeScript?

In TypeScript (and JavaScript), this refers to the context in which a function is called. The value of this depends on how a function is invoked, not where it is defined.

📘 Notes on this in TypeScript
1. In Classes

In TypeScript classes, this refers to the current instance of the class.

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p = new Person("Alice");
p.greet(); // this refers to the instance 'p'


2. Arrow Functions and this

Arrow functions do not have their own this. Instead, they inherit this from the surrounding context.

class Counter {
  count = 0;

  start() {
    setInterval(() => {
      this.count++;
      console.log(this.count); // 'this' refers to the Counter instance
    }, 1000);
  }
}

const c = new Counter();
c.start();

✅ Use arrow functions when you want to preserve the context of this.
