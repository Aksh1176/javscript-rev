let score1 = Number("33abc"); //NaN
let score2 = Number(null);    //0
let score3 = Number(undefined); //NaN
let score4 = Number(true);      //1
let score5 = Number(false);     //0
let score6 = Number({});        //NaN
console.table([score1,score2,score3,score4,score5,score6])
//console.table([typeof score1, typeof score2, typeof score3, typeof score4, typeof score5,typeof score6]);

console.log("33" , 33)

