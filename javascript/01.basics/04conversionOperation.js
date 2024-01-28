let number = "50ss"

// console.log(typeof number);
// console.log(typeof (number));

let valueInNumber  = Number(number)
let valueInNumber1  = String(number)
let valueInNumber2  = Boolean(number)

console.log(typeof valueInNumber);
console.log(typeof valueInNumber1);
console.log(typeof valueInNumber2);

console.log(valueInNumber);
console.log(valueInNumber1);
console.log(valueInNumber2);

// "50" => 55
// "50ss" => NaN
//true => 1;
//Empty string is also 0 in boolean and 1 is 1 in boolean 

// **************************************  operations   *********************************

let num = 69
let newNum = -num
// console.log(newNum);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1 = "Hello"
let str2 = " World"

let str3 = str1 + str2
console.log(str3);

console.log("5" + 2);
console.log(5 + "2");
console.log("5" + "2");
console.log("5" + 2 + 2);
console.log(5 + 2 + "2");
console.log(5 + "2"  + 2);

console.log(true + 1);

let num1, num2,num3
num1 = num2 = num3 = 4+4

let gameCounter = 0

++gameCounter//prefix
gameCounter++//postfix

console.log(gameCounter);

