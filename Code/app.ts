//number data type
let a = 20;

//String
let fullName = "noorain shaikh";

//Boolean
let amIbegginer = true;

//Array
let arr  = [1,2,3,4,5,6,];

//Tuples
let newArr:[string, number] = ['noorain', 23];

//Enumaration called Enums
enum StatusCode {
  ABONDED = "abonded status code is 500",
  NOTFOUND = "not found status code is 404"
}

console.log(StatusCode.NOTFOUND);

//Interfaces and type Aliases

// const obj = {
//   name:"noorain",
//   email:"noorain@google.com",
//   password:"abcd"
// }

interface User{
  name:string,
  email:string,
  password:string,
  gender?:String
}

interface Admin extends User {
  isAdmin:boolean
}


function getUserdata(obj: User){
  // obj.name="noorain",
  // obj.email="noorain@google.com",
  // obj.password="abcd"
}

function getAdminData(obj: Admin){
obj.email
obj.name
obj.isAdmin
obj.password
obj.gender
}

getAdminData({
  name:"Husnain",
  email:"husnain@google.com",
  password:"1234",
  gender:"M",
  isAdmin:true
})


getUserdata({
  name:"noorain",
  email:"noorain@google.com",
  password:"abcd",
  gender:"M"
});


//Aliases

type value = string | number | null

let something:value;

something="noorain";
something=1233;

//Intersection types


interface HasEmail {
  email: string;
}

interface HasUsername {
  username: string;
}

type User2 = HasEmail & HasUsername;

const user: User2 = {
  email: "noorain@example.com",
  username: "noorain123"
};

//Example with Object & Function Types

type Logger = {
  log: (msg: string) => void;
};

type Service = {
  run: () => void;
};

type App = Logger & Service;

const app: App = {
  log: (msg) => console.log("LOG:", msg),
  run: () => console.log("Service running...")
};


//OBJECT ORIENTED 

//class

class Person {
  
   constructor( 
     public name:string,
      public age:number,
     public email:string,
    ){

    }
    greet():void{
      console.log(`Hello my name is${this.name}`);
    }
}

let P1 = new Person("Noorian", 23, "noorain@gmail.com");
P1.greet();







