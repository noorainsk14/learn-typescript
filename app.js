"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//number data type
let a = 20;
//String
let fullName = "noorain shaikh";
//Boolean
let amIbegginer = true;
//Array
let arr = [1, 2, 3, 4, 5, 6,];
//Tuples
let newArr = ['noorain', 23];
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
let something;
something = "noorain";
something = 1233;
const user = {
    email: "noorain@example.com",
    username: "noorain123"
};
const app = {
    log: (msg) => console.log("LOG:", msg),
    run: () => console.log("Service running...")
};
//# sourceMappingURL=app.js.map