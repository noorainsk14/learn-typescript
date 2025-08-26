📘 TypeScript Notes: Getter and Setter

📌 What Are Getters and Setters?

Getters (get): Used to read/access the value of a private or protected property.

Setters (set): Used to update/assign a value to a private or protected property.

They are used to control how class properties are accessed or modified and help with data validation, encapsulation, and read-only or write-only logic.

🧱 Syntax

class Example {
  private _value: number = 0;

  // Getter
  get value(): number {
    return this._value;
  }

  // Setter
  set value(val: number) {
    if (val >= 0) {
      this._value = val;
    } else {
      throw new Error("Value must be non-negative");
    }
  }
}


✅ Usage Example

let obj = new Example();

obj.value = 50;         // Setter is called
console.log(obj.value); // Getter is called → Output: 50


📙 Key Concepts

| Concept       | Explanation                                                  |
| ------------- | ------------------------------------------------------------ |
| Backing field | A private variable (e.g. `_value`) used to store actual data |
| `get`         | Allows reading a property's value                            |
| `set`         | Allows assigning a new value, with optional validation       |
| Encapsulation | Keeps internal data safe and controlled                      |


📊 When to Use Getters and Setters

| Scenario                         | Use Getter | Use Setter |
| -------------------------------- | ---------- | ---------- |
| Read-only value (e.g. ID)        | ✅ Yes      | ❌ No       |
| Write-only value (e.g. password) | ❌ No       | ✅ Yes      |
| Validate before assigning        | ❌ Optional | ✅ Yes      |
| Expose private value to outside  | ✅ Yes      | ✅ Optional |
