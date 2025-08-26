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

//this keyword

class BottleMaker {
  constructor(
    public name:string,
    public material:string,
    public price:number
  ){
    this.name=name;
    this.material=material;
    this.price=price;
  }

  getDetails(){
    console.log(this.name,this.material,this.price);
    
  }
}

let value= new BottleMaker("Milton","Metal",230);

//console.log(value.getDetails);


//AccessModifier

class Persons {
  public name: string;       // can be accessed anywhere
  private age: number;       // can only be accessed inside this class
  protected email: string;   // can be accessed in this class and subclasses

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  public greet() {
    console.log(`Hi, I'm ${this.name}`);
  }

  private getAge() {
    return this.age;
  }

  protected getEmail() {
    return this.email;
  }
}

//name is public → can be accessed from outside:
const p = new Persons("Alice", 30, "alice@example.com");
console.log(p.name); // OK

//❌ age is private → cannot access from outside:
//console.log(p.age); // ❌ Error: Property 'age' is private


//console.log(p.age); // ❌ Error: Property 'age' is private
//p.getAge(); // ❌ Error


//p.getAge(); // ❌ Error
class Employee extends Persons {
  getEmployeeEmail() {
    return this.email; // ✅ OK: protected access
  }
}

const e = new Employee("Bob", 25, "bob@example.com");
console.log(e.getEmployeeEmail()); // OK


//Getter and Setter

class CarMaker {

  constructor(
    public _name:string,
    public _type:string,
    public _price:number

  ){}

  get name() {
      return this._name;
    }

    // Getter for price
  get price(): number {
    return this._price;
  }

    set price(value:number) {
       if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Price must be greater than 0");
    }
    }
}

let C1 = new CarMaker("Toyota","Suv",25000);

console.log(C1);

console.log(C1.name);

C1.price=350000;
console.log(C1.price);















