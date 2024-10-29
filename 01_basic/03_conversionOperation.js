let score1 = Number("33abc"); //NaN
let score2 = Number(null);    //0
let score3 = Number(undefined); //NaN
let score4 = Number(true);      //1
let score5 = Number(false);     //0
let score6 = Number({});        //NaN
//console.table([score1,score2,score3,score4,score5,score6])
//console.table([typeof score1, typeof score2, typeof score3, typeof score4, typeof score5,typeof score6]);

console.log("33" , 33)

/* **************************************Operations********************* */


let str1 = "Akshat";
let str2 = " Choudhary";
let finalString = str1 + str2;
console.log(finalString);

let covertNumber = +true; // 1 (Conerted to number by using +)


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

