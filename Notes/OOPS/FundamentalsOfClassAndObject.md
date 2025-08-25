# 👨‍💻 Fundamentals of OOP (Object-Oriented Programming)

**Object-Oriented Programming (OOP)** is a programming paradigm based on the concept of **"objects"**, which can contain data and behavior (methods).

TypeScript supports all the key OOP concepts.

---

## 🧱 1. Class

> A blueprint for creating objects with specific properties and methods.

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


👤 2. Object

An instance of a class created using the new keyword.

Contains data (properties) and behavior (methods).

In the example above, user is an object of class Person.

3. Inheritance

One class can inherit properties and methods from another class.

class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const d = new Dog();
d.move(); // Inherited from Animal
d.bark(); // Defined in Dog


4. Encapsulation

Hiding internal details and only exposing what’s necessary.

TypeScript Access Modifiers:

public: Accessible everywhere

private: Accessible only inside the class

protected: Accessible inside class and subclasses

class BankAccount {
  private balance: number;

  constructor(initial: number) {
    this.balance = initial;
  }

  public deposit(amount: number) {
    this.balance += amount;
  }

  public getBalance() {
    return this.balance;
  }
}
Encapsulation improves security and control.

5. Polymorphism

One interface or method behaves differently in different contexts.

Example: Method Overriding

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

const pet = new Cat();
pet.speak(); // Meow (not Animal speaks)

The same speak() method behaves differently based on the object type.

🧩 6. Abstraction

Hiding complex implementation and showing only essential features.

You can achieve abstraction using:

Abstract classes

Interfaces

Example with abstract:

abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

You can’t create an instance of an abstract class.

Classes extending it must implement abstract methods.

| OOP Concept   | Description                                          | Keyword(s)                       |
| ------------- | ---------------------------------------------------- | -------------------------------- |
| Class         | Blueprint for objects                                | `class`                          |
| Object        | Instance of a class                                  | `new`                            |
| Inheritance   | Reuse features of one class in another               | `extends`                        |
| Encapsulation | Hiding details using access modifiers                | `private`, `public`, `protected` |
| Polymorphism  | Same method behaves differently in child classes     | Method overriding                |
| Abstraction   | Hiding implementation details using abstract classes | `abstract`                       |


🛠️ Best Practices

Use access modifiers to protect class data.

Reuse code using inheritance but avoid overuse (prefer composition when possible).

Use abstraction and interfaces to define contracts between parts of your app.