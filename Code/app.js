var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
//number data type
var a = 20;
//String
var fullName = "noorain shaikh";
//Boolean
var amIbegginer = true;
//Array
var arr = [1, 2, 3, 4, 5, 6];
//Tuples
var newArr = ["noorain", 23];
//Enumaration called Enums
var StatusCode;
(function (StatusCode) {
  StatusCode["ABONDED"] = "abonded status code is 500";
  StatusCode["NOTFOUND"] = "not found status code is 404";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.NOTFOUND);
function getUserdata(obj) {
  // obj.name="noorain",
  // obj.email="noorain@google.com",
  // obj.password="abcd"
}
function getAdminData(obj) {
  obj.email;
  obj.name;
  obj.isAdmin;
  obj.password;
  obj.gender;
}
getAdminData({
  name: "Husnain",
  email: "husnain@google.com",
  password: "1234",
  gender: "M",
  isAdmin: true,
});
getUserdata({
  name: "noorain",
  email: "noorain@google.com",
  password: "abcd",
  gender: "M",
});
var something;
something = "noorain";
something = 1233;
var user = {
  email: "noorain@example.com",
  username: "noorain123",
};
var app = {
  log: function (msg) {
    return console.log("LOG:", msg);
  },
  run: function () {
    return console.log("Service running...");
  },
};
//OBJECT ORIENTED
//class
var Person = /** @class */ (function () {
  function Person(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  Person.prototype.greet = function () {
    console.log("Hello my name is".concat(this.name));
  };
  return Person;
})();
var P1 = new Person("Noorian", 23, "noorain@gmail.com");
P1.greet();
//this keyword
var BottleMaker = /** @class */ (function () {
  function BottleMaker(name, material, price) {
    this.name = name;
    this.material = material;
    this.price = price;
    this.name = name;
    this.material = material;
    this.price = price;
  }
  BottleMaker.prototype.getDetails = function () {
    console.log(this.name, this.material, this.price);
  };
  return BottleMaker;
})();
var value = new BottleMaker("Milton", "Metal", 230);
//console.log(value.getDetails);
//AccessModifier
var Persons = /** @class */ (function () {
  function Persons(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  Persons.prototype.greet = function () {
    console.log("Hi, I'm ".concat(this.name));
  };
  Persons.prototype.getAge = function () {
    return this.age;
  };
  Persons.prototype.getEmail = function () {
    return this.email;
  };
  return Persons;
})();
//name is public → can be accessed from outside:
var p = new Persons("Alice", 30, "alice@example.com");
console.log(p.name); // OK
//❌ age is private → cannot access from outside:
//console.log(p.age); // ❌ Error: Property 'age' is private
//console.log(p.age); // ❌ Error: Property 'age' is private
//p.getAge(); // ❌ Error
//p.getAge(); // ❌ Error
var Employee = /** @class */ (function (_super) {
  __extends(Employee, _super);
  function Employee() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Employee.prototype.getEmployeeEmail = function () {
    return this.email; // ✅ OK: protected access
  };
  return Employee;
})(Persons);
var e = new Employee("Bob", 25, "bob@example.com");
console.log(e.getEmployeeEmail()); // OK
//Getter and Setter
var CarMaker = /** @class */ (function () {
  function CarMaker(_name, _type, _price) {
    this._name = _name;
    this._type = _type;
    this._price = _price;
  }
  Object.defineProperty(CarMaker.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(CarMaker.prototype, "price", {
    // Getter for price
    get: function () {
      return this._price;
    },
    set: function (value) {
      if (value > 0) {
        this._price = value;
      } else {
        throw new Error("Price must be greater than 0");
      }
    },
    enumerable: false,
    configurable: true,
  });
  return CarMaker;
})();
var C1 = new CarMaker("Toyota", "Suv", 25000);
console.log(C1);
console.log(C1.name);
C1.price = 350000;
console.log(C1.price);
