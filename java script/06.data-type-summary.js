// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

let num = 5
let number = 5.00
let adult = true
let data = null
let Keys;

const id = Symbol('123')
const anotherid = Symbol('123')//false

console.log(id == anotherid);

const bigInt = 9316544n

console.log(typeof bigInt);

//Reference type (Non primitive)

//Array, Object, Functions

const heros = ["iron man", "Shreyansh", "Thor"]

let myobj ={
    name: "Shreyansh",
    age: 20
}

const Myfunction = function(){
    console.log("Hello World");
}

console.log(typeof data);

// https://262.ecma-international.org/5.1/#sec-11.4.3     {datatype list}



//**********************************************************************************

//Stack (primitive), Heap (Non-primitive)

let name = "Shreyansh";

let anothername = name;

console.log(anothername);

let user = {
    email: "Shreyansh@google.com",
    upi: "user1195"
}

let user1 = user

user1.email = "hello@google.com"

console.log(user.email);//hello@google.com
console.log(user1.email);//hello@google.com