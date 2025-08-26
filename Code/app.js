//number data type
var a = 20;
//String
var fullName = "noorain shaikh";
//Boolean
var amIbegginer = true;
//Array
var arr = [1, 2, 3, 4, 5, 6,];
//Tuples
var newArr = ['noorain', 23];
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
    isAdmin: true
});
getUserdata({
    name: "noorain",
    email: "noorain@google.com",
    password: "abcd",
    gender: "M"
});
var something;
something = "noorain";
something = 1233;
var user = {
    email: "noorain@example.com",
    username: "noorain123"
};
var app = {
    log: function (msg) { return console.log("LOG:", msg); },
    run: function () { return console.log("Service running..."); }
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
}());
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
}());
var value = new BottleMaker("Milton", "Metal", 230);
console.log(value.getDetails);
