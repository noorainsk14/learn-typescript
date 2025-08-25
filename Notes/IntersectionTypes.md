# 🔗 Intersection Types in TypeScript

In TypeScript, **intersection types** allow you to **combine multiple types into one**.

Think of it as **merging the properties** of multiple types into a single, unified type.

---

## 🧠 What is an Intersection Type?

You use the `&` symbol to create an intersection:

```ts
type A = { name: string };
type B = { age: number };

type C = A & B;

Now, C has both name and age.

const person: C = {
  name: "Noorain",
  age: 23
};

🧱 Why Use Intersection Types?

Combine multiple types into one

Build composable, modular types

Mix behavior or shape of different objects
