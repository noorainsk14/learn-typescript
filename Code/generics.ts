function logger(a:any){
};

logger("hey");

logger(132);

logger(null);

//generics function

function abcd<T>(a:T, b:string, c:number){


}
abcd<string>("pani","puri",4)

//interface generics
interface learn<T>{
  lang:string;
  Days:number;
  key:T;
}

function learn(obj: learn<string>){

}

learn({lang:"java", Days:25, key:"gygfedwgf"})


