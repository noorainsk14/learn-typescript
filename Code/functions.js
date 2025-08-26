//Simple functions
function greet() {
    console.log("Hello World!");
}
greet();
//function accept arguments
function Human(name, age, cb, gender) {
    if (gender === void 0) { gender = "not to disclosed"; }
    cb("Hey");
}
Human("noorain", 23, function (arg) {
    console.log("Learning TypeScript");
    console.log(arg);
});
//rest/spread operators
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
// Implementation
function DoSomeWork(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("hey");
    }
    else if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else
        throw new Error("something went wrong");
}
DoSomeWork("Nooraoin");
console.log(DoSomeWork("Noorain", 23));
