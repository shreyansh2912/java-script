//singleton

//object literals

const mysmbl =Symbol("symbol")

const user = {
    name: "Shreyansh",
    "Surname":"Shah",
    [mysmbl]:"symbol-1",
    Age:20,
    location:"Ahemedabad",
    email:"Shreyansh@gmail.com",
    isloggedIn:false,
    lastLoginDay:["Saturday","Monday"]
}

console.log(user.name);
console.log(user["name"]);
console.log(user["Surname"]);
console.log(user[mysmbl]);
console.log(typeof user[mysmbl]);

console.log(user.Age);

Object.freeze(user.email)
user.Age = 18

console.log(user);

user.hello = function(){
    console.log("Hello World")
}
user.greeting = function(){
    console.log(`Hello dear user, ${this.name}`)
}

console.log(user.greeting());
console.log(user.hello());
console.log(user);

