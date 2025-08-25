# 📘 Data Types in TypeScript

In TypeScript (and JavaScript), data types are broadly divided into two categories:

---

## 1️⃣ Primitive Types

> **Definition:** Primitive types are passed **by value**.  
This means when you assign a primitive value to a new variable, it creates a **copy** of the original data.  
Any changes to the copied value do **not affect** the original.

### 🧪 Example:

```ts
let a = 10;
let b = a;
b = b + 2;

console.log(a); // 10
console.log(b); // 12
✅ Here, a remains unchanged because b holds a copy of its value.

🔹 Types of Primitive:
number

string

boolean

2️⃣ Reference Types
Definition: Reference types are passed by reference.
This means when you assign one variable to another, both point to the same memory location.
Changes made using any reference affect the original data.

🧪 Example (for array):
ts
Copy code
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
✅ Both arr1 and arr2 point to the same array in memory.

🔹 Types of Reference:
Arrays

Tuples

Enums



  
## 🔢 Number Data Type

```ts
let a = 20;
Stores numeric values.

TypeScript infers the type as number here.

🔤 String Data Type
let fullName = "noorain shaikh";


Represents textual data.

You can use single or double quotes.


✅ Boolean Data Type
let amIbegginer = true;


Can hold only true or false.

📚 Array
let arr = [1, 2, 3, 4, 5, 6];


Holds a list of values.

All elements are of the same type (number here).

TypeScript can also be explicit:
let arr: number[] = [1, 2, 3];


🎯 Tuple
let newArr: [string, number] = ['noorain', 23];


Fixed-length array with specific types in each position.

Index 0 → string, Index 1 → number.

🎌 Enum (Enumeration)
enum StatusCode {
  ABONDED = "abonded status code is 500",
  NOTFOUND = "not found status code is 404"
}

console.log(StatusCode.NOTFOUND);


Defines a set of named constants.

Here, StatusCode holds string values.

StatusCode.NOTFOUND outputs:
"not found status code is 404"


  
