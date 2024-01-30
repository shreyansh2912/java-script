
const myArr = [0,1,2,3,4];
const myHeros = ["Spiderman","Shreyansh","Superman","Thor","Iron man"];

console.log(myHeros[1]);

//array methods

myHeros.push("Captain America")//it's add a value at last index
myHeros.unshift("Captain America")//it's add a value at zero index
myHeros.shift()//it removes value from zero index


console.log(myHeros);
console.log(myHeros.indexOf("Captain America"));
console.log(myHeros.includes("Captain America"));

const newArr = myArr.join()

console.log(myArr);//[ 0, 1, 2, 3, 4 ]
console.log(newArr);//0,1,2,3,4
console.log(typeof newArr);//string

//slice or splice

console.log("A",myArr);

const myn1 =myArr.slice(1,3);

console.log(myn1);
console.log("B",myArr);

const myn2 =myArr.splice(1,3);//splice remove data from original array and put it in variable
console.log("C",myArr);
console.log(myn2);





