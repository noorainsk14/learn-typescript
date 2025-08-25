# 🏗️ Constructor in TypeScript

## 🧠 What is a Constructor?

- A `constructor` is a special method inside a class.
- It runs **automatically** when you create an instance of a class using `new`.
- It’s used to **initialize class properties**.

---

## 🧩 Basic Syntax

```ts
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const user = new Person("Noorain");
user.greet(); // Hello, my name is Noorain


✅ Key Points

constructor is optional — if not defined, TypeScript adds a default one.

You can have only one constructor in a class.

this refers to the current instance of the class.