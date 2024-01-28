const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(2));

const hundres = 100000
console.log(hundres.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++++++++++++ maths ++++++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.2));//4
console.log(Math.min(4,3,4,5,10,8));
console.log(Math.max(4,3,4,5,10,8));

console.log(Math.random());//0 to 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1 ))+min);

