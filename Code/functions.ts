
//Simple functions
function greet(){
  console.log("Hello World!");
  
}

greet();


//function accept arguments

function Human(name:string, age:number, cb: (arg:string)=>void, gender:string="not to disclosed"){ //gender?:string => optional it also used
  cb("Hey");
}

Human("noorain", 23, (arg:string)=>{
  console.log("Learning TypeScript");
  console.log(arg);
  
})


//rest/spread operators

function sum(...args: number[]){ 
console.log(args);

}

sum(1,2,3,4,5,6,7,8,9,);

//function overloading

// Overload Signatures
function DoSomeWork(a:string):void;
function DoSomeWork(a:string, b:number):number;

// Implementation
function DoSomeWork(a:any, b?:any) {
  if(typeof a === "string" && b === undefined) {
    console.log("hey");
  }
   if(typeof a === "string" && typeof b === "number") {
    return 123;
  }
  else throw new Error("something went wrong");
}

DoSomeWork("Nooraoin");
 console.log(
  DoSomeWork("Noorain", 23));
