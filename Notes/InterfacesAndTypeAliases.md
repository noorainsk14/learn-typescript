# 📘 TypeScript: Interfaces vs Type Aliases

Both `interface` and `type` are used to define the shape of data (especially objects), but they have **different capabilities**.

---

## 🧩 1. What is an Interface?

An `interface` defines the structure of an **object**, including property types, method signatures, and inheritance.

### ✅ Example:
```ts
interface Person {
  name: string;
  age: number;
  greet(): void;
}

Example:

const user: Person = {
  name: "Noorain",
  age: 23,
  greet() {
    console.log("Hello!");
  }
};

# 📘 Extending Interfaces in TypeScript

In TypeScript, **interfaces can extend other interfaces**, allowing you to create new interfaces that inherit properties from one or more existing ones.

This helps you:
- Avoid repeating code
- Create scalable, modular types
- Reuse shared properties across multiple interfaces

---

## 🧩 Basic Syntax


interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

🧱 2. What is a Type Alias?

A type can alias any type — not just objects. That includes primitives, unions, tuples, etc.

✅ Object Type Example:

type Person = {
  name: string;
  age: number;
};

✅ Union Type Example:

type Status = "success" | "error" | "loading";

🧪 Similarities Between interface and type

| Feature                       | Interface | Type Alias            |
| ----------------------------- | --------- | --------------------- |
| Defines object shape          | ✅       | ✅                    |
| Supports function types       | ✅       | ✅                    |
| Supports array types          | ✅       | ✅                    |
| Can be extended (inheritance) | ✅       | ✅ (via intersections)|
