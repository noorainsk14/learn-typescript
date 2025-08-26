🔐 Access Modifiers in TypeScript

Access modifiers control the visibility of class members (properties and methods). They help enforce encapsulation — one of the key principles of Object-Oriented Programming.

TypeScript provides three main access modifiers:

| Modifier    | Visibility Scope                               |
| ----------- | ---------------------------------------------- |
| `public`    | Accessible from anywhere                       |
| `private`   | Accessible only within the class               |
| `protected` | Accessible within the class and its subclasses |


| Modifier    | Inside Class | Subclass | Outside Class |
| ----------- | ------------ | -------- | ------------- |
| `public`    | ✅            | ✅        | ✅             |
| `protected` | ✅            | ✅        | ❌             |
| `private`   | ✅            | ❌        | ❌             |


✅ Best Practices

Use private to hide internal logic.

Use protected when designing for inheritance.

Use public for public APIs and methods.
