# 📘 TypeScript Special Types

These are unique types in TypeScript that help define more precise behavior for variables and functions.

---


## 1️⃣ `any`

> ❗ Least safe type – disables type checking.

```ts
let value: any = "Hello";
value = 42;
value = true;
Use when you're not sure of the type or dealing with third-party libraries.

Avoid overusing any, as it removes TypeScript's benefits.

🔸 Use case: Quick prototyping, legacy code, dynamic input.

2️⃣ unknown
🔒 Safe version of any. You must check type before using.

ts
Copy code
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ safe
}
You can't directly use it without type checking.

Safer than any.

🔸 Use case: Working with dynamic types but want type safety.

3️⃣ void
Used for functions that do not return a value.

ts
Copy code
function logMessage(message: string): void {
  console.log(message);
}
Tells TypeScript that this function doesn't return anything.

🔸 Use case: Functions that only perform actions, like console.log.

4️⃣ never
Used for functions that never return (e.g., errors, infinite loops).

ts
Copy code
function throwError(message: string): never {
  throw new Error(message);
}
Function crashes, loops forever, or otherwise never finishes.

🔸 Use case: Error handling, exhaustiveness checks.

5️⃣ null & undefined
null
Represents a deliberate non-value.

ts
Copy code
let a: null = null;
undefined
A variable that has not been assigned a value yet.

ts
Copy code
let b: undefined = undefined;
⚠️ By default, both are subtypes of all types, but with strictNullChecks enabled, you must handle them explicitly.

ts
Copy code
let name: string | null = null;
let age: number | undefined = undefined;
🔸 Use case: Optional values, default states, clean-up logic.