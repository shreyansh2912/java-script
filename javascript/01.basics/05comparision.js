// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1); //true
console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);
console.log(null <= 0);
console.log(null == 0);

// The reason is that the comparison and equality works differently
//comparison convert null as number trating as a 0,
//thats why null >= 0  is true

//===

console.log( "2" === 2 );