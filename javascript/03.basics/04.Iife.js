// Immediately Invoked Function Expressions

(function chai (){
    console.log(`DB is connected`);
})();

(()=>{
    console.log(`DB is in arrow function`);
})();

console.log("HEllo");