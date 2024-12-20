// Primitive

//String, Number, null, undefined, boolean, BigInt, symbol

const userName = "Akshat"; //string
const age = 20; //number
const marks = null;  //object
let percentage;  // undefined
const isLoggedIn = "true" // boolean
let transactionValue = 734873n; // bigint
let Symbol1 = Symbol("123"); // symbol
let Symbol2 = Symbol("123"); // symbol
 
console.log(Symbol1 == Symbol2); // false, since all symbols are unique even if the same value has been passed.



// Non-Primitive/Reference

//function, array, object

const greet = function(){
    console.log("Hello World");
    
};

let superHeroes = ["batman", "superman", "hanuman"];

let userDetail = {
    username : "badshah",
    age : 30,
    email : "badshah@gmail.com"
};

// console.table([typeof(userName), typeof(age),typeof(marks), typeof(transactionValue), typeof(greet), typeof(userDetail), typeof(superHeroes),typeof(Symbol1)])

// ************************************Memory****************************

// Stack(Primitive) Heap(Non-Primitive)

let username1 = "Akshat";
let userName2 = username1;

username1 = "Shubham";
console.log(`username1 : ${username1}, userName2 ${userName2}`);

let userobj1 = { name: "Akshat"};
let userobj2 = userobj1;

userobj1.name = "Shubham";

console.log(userobj1.name, userobj2.name);


