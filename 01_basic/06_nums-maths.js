const score = 100;

const scoreMaths = new Number(95);
console.log(scoreMaths);

const totalBill = 876.3346;
const totalBillAmount = 1000000000;

console.log(scoreMaths.toFixed(2)); // 95.00
console.log(totalBill.toPrecision(4)); //876.3
console.log(totalBillAmount.toLocaleString('en-In'));  //1,00,00,00,000

Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
Number.MAX_VALUE
Number.MIN_VALUE
Number.EPSILON



// ***************************Maths_Operations**************************


// console.log(Math);

console.log(Math.abs(-5)); //5 Return a posetive value
console.log(Math.floor(6.43737)); //6
console.log(Math.ceil(7.273)); //8
console.log(Math.round(7.67737)); //8
console.log(Math.min(8,2,3,1,7,4)); //1
console.log(Math.max(1,3,5,7,9)); //9

// console.log(Math.floor(Math.random()*10 + 1));

const min = 10;
const max = 20;

console.log((Math.floor(Math.floor(Math.random() * (max - min + 1) + min))));








